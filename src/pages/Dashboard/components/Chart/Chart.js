import React from "react";
import "./Chart.module.css";

import { TimeSeries } from "pondjs";
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
  Resizable,
  ScatterChart
} from "react-timeseries-charts";

const scatterStyle = {
  value: {
    normal: {
      fill: "steelblue",
      opacity: 0.5
    }
  }
};

export const Chart = ({ events }) => {
  if (!events || !events.length) {
    return null;
  }
  const eventSeries = new TimeSeries({ name: "Metric A", events });

  const charts = (
    <Charts>
      <ScatterChart axis="y" series={eventSeries} style={scatterStyle} />
      <LineChart axis="y" series={eventSeries} />
    </Charts>
  );

  const timeRange = eventSeries.range();

  return (
    <>
      <Resizable>
        <ChartContainer timeRange={timeRange}>
          <ChartRow height="150">
            <YAxis
              id="y"
              label="Value"
              min={0}
              max={2000}
              width="70"
              type="linear"
            />
            {charts}
          </ChartRow>
        </ChartContainer>
      </Resizable>
    </>
  );
};
