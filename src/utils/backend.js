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
  aggregationWindow: "5s",
  eventsRateMs: 100,
  startTime: new Date(),
  initialEventsCount: 100,
  incrementMs: 60 * 1000 * 2
};

export class Backend {
  constructor(params) {
    const {
      listener,
      aggregationWindow = tweakMe.aggregationWindow,
      eventsRateMs = tweakMe.eventsRateMs,
      startTime = tweakMe.startTime
    } = params;

    const stream = new Stream();

    let lastTime = startTime;

    const tick = () => {
      const eventTime = new Date(lastTime.getTime() + tweakMe.incrementMs);
      const event = getNewEvent(eventTime);
      stream.addEvent(event);
      lastTime = eventTime;
    };

    //something is broken here — we don't generate data for initial 100 requests
    //for (let i = 0; i < tweakMe.initialEventsCount; i++) {
    //  tick();
    //}

    this.interval = setInterval(tick, eventsRateMs);

    pipeline()
      .from(stream)
      .windowBy(aggregationWindow)
      .emitOn("discard")
      .aggregate({
        value: { value: percentile(90) }
      })
      .to(EventOut, listener);
  }

  cleanup() {
    window.clearInterval(this.interval);
  }
}
