import { BackendSubscription } from "./backend";

const sleep = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay);
  });

it("should initiate with 500 events", async () => {
  const listener = jest.fn();
  new BackendSubscription({
    aggregationWindow: "1min",
    listener
  });
  expect(listener.mock.calls.length).toEqual(500);
});

it("should incrementally add more events", async () => {
  const listener = jest.fn();
  new BackendSubscription({
    aggregationWindow: "1min",
    listener
  });
  expect(listener.mock.calls.length).toEqual(500);
  await sleep(1000);
  expect(listener.mock.calls.length).toEqual(501);
  await sleep(1000);
  expect(listener.mock.calls.length).toEqual(502);
});
