import React from "react";
import { Home, Dashboard, DefaultPage } from "./pages";
import { Router } from "@reach/router";

const App = () => {
  return (
    <Router>
      <Home path="/"></Home>
      <Dashboard path="/dashboard"></Dashboard>
      <DefaultPage default />
    </Router>
  );
};

export default App;
