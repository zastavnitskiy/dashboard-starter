import React from "react";
import { Home, Dashboard, DefaultPage } from "./pages";
import { Router } from "@reach/router";

const App = () => {
  return (
    <Router>
      <Home title="Home" path="/"></Home>
      <Dashboard path="/dashboard" title="Dashboard"></Dashboard>
      <DefaultPage default title="Not found" />
    </Router>
  );
};

export default App;
