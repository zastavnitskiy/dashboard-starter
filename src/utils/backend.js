import {
  TimeEvent,
  Pipeline as pipeline,
  Stream,
  EventOut,
  percentile
} from "pondjs";

const getNewEvent = t => {
  const base = Math.sin(t.getTime() / 10000000) * 350 + 500;
  return new TimeEvent(t, parseInt(base + Math.random() * 1000, 10));
};

const tweakMe = {
  aggregationWindow: "60min",
  eventsRateMs: 1000,
  startTime: new Date(),
  initialEventsCount: 500,
  incrementMs: 2 * 60 * 1000
};

export class BackendSubscription {
  constructor(params) {
    const {
      listener,
      aggregationWindow = params.aggregationWindow || tweakMe.aggregationWindow,
      eventsRateMs = tweakMe.eventsRateMs,
      startTime = tweakMe.startTime
    } = params;

    const stream = new Stream();

    let lastTime = startTime;

    const emitEvent = () => {
      const eventTime = new Date(lastTime.getTime() + tweakMe.incrementMs);
      const event = getNewEvent(eventTime);
      stream.addEvent(event);
      lastTime = eventTime;
    };

    pipeline()
      .from(stream)
      .windowBy(aggregationWindow)
      .emitOn("discard")
      .aggregate({
        value: { value: percentile(90) }
      })
      .to(EventOut, event => {
        listener(event);
      });

    for (let i = 0; i <= tweakMe.initialEventsCount; i++) {
      emitEvent();
    }

    this.interval = setInterval(emitEvent, eventsRateMs);
  }

  cleanup() {
    window.clearInterval(this.interval);
  }
}
