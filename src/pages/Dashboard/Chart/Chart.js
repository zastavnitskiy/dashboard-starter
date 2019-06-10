import React, { useReducer, useEffect } from "react";
import "./Chart.module.css";
import { Backend } from "../../../utils/backend";
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

export const Chart = props => {
  const [events, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case "add":
        return [...state, action.event];
      default:
        return state;
    }
  });

  useEffect(() => {
    const backend = new Backend({
      listener: event => {
        dispatch({
          type: "add",
          event
        });
      }
    });

    return () => backend.cleanup();
  }, []);

  const eventSeries = new TimeSeries({ name: "Metric A", events });
  if (eventSeries.size() <= 0) {
    return null;
  }

  const charts = (
    <Charts>
      <ScatterChart axis="y" series={eventSeries} style={scatterStyle} />
      <LineChart axis="y" series={eventSeries} />
    </Charts>
  );

  const timeRange = eventSeries.range();

  return (
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
  );
};
