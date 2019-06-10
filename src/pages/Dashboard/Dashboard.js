import React from "react";
import styles from "./Dashboard.module.css";
import { withLayout } from "../../components";
import { Chart } from "./Chart";
export const Dashboard = withLayout(() => {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <Chart />
    </div>
  );
});
