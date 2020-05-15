import React from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const log = () => console.log("click");

  const buttonDisabled = 1 + 1 === 2;

  return (
    <div className="App">
      <Button onClick={log} color="primary">
        Old primary button
      </Button>
      <Button onClick={log} disabled={buttonDisabled}>
        Old secondary button
      </Button>
    </div>
  );
}

export default App;
