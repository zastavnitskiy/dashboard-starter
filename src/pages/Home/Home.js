import React from "react";
import "./Home.module.css";
import { withLayout } from "../../components/Layout";

export const Home = withLayout(() => {
  return <p>Hello, world!</p>;
});
