import React from "react";
import "./App.css";

import TimeDisplay from "./components/TimeDisplay";
import MetricsDisplay from "./components/MetricsDisplay";

function App() {
  return (
    <div className="App">
      <div className="Column">
        <TimeDisplay />
      </div>
      <div className="Column">
        <MetricsDisplay />
      </div>
    </div>
  );
}

export default App;
