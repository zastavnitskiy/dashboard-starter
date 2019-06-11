import React, { useState } from "react";
import { Divider, PageHeader } from "antd";
import { withLayout } from "../../components";
import { Chart } from "./components/Chart";
import { AggregationWindow } from "./components/AggregationWindow";
import { useBackendSubscription } from "./hooks/useBackendSubscription";

export const Dashboard = withLayout(() => {
  const [aggregationWindow, setAggregationWindow] = useState("1min");
  const events = useBackendSubscription({ aggregationWindow });
  return (
    <>
      <AggregationWindow
        aggregationWindow={aggregationWindow}
        setAggregationWindow={setAggregationWindow}
      />
      <Divider />
      <Chart events={events} />
      <h4>Notes:</h4>
      <p>
        For the simplicity of this exercise, backend doesn't persist any events
        — because of that, every time we render there is a new set of events.
      </p>
      <p>Events are generated at increated page for the demo.</p>
    </>
  );
});
