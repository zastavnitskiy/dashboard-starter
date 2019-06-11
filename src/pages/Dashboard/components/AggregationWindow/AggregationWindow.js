import React from "react";
import "./AggregationWindow.module.css";
import { Form, Select } from "antd";

const aggregations = [
  {
    label: "5 seconds",
    value: "5s"
  },
  {
    label: "30 seconds",
    value: "30s"
  },
  {
    label: "1 minute",
    value: "1min"
  },
  {
    label: "5 minutes",
    value: "5min"
  },
  {
    label: "10 minutes",
    value: "10min"
  },
  {
    label: "30 minutes",
    value: "30min"
  }
];
export const AggregationWindow = ({
  aggregationWindow,
  setAggregationWindow
}) => {
  return (
    <Form layout="inline">
      <Form.Item label="Aggregation Window">
        <Select
          onChange={value => {
            setAggregationWindow(value);
          }}
          value={aggregationWindow}
        >
          {aggregations.map(({ label, value }) => (
            <Select.Option key={value} value={value}>
              {label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
