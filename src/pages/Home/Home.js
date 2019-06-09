import React from "react";
import "./Home.module.css";
import { withLayout } from "../../components/Layout";

export const Home = withLayout(() => {
  console.log("Home");
  return <div>Home</div>;
});
