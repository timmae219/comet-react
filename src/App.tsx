import React from "react";
import "./App.css";
import CometHeader from "./components/header/CometHeader/CometHeader";
import CometBody from "./components/body/CometBody";

function App(): JSX.Element {
  return (
    <div className="App">
      <CometHeader />
      <CometBody />
    </div>
  );
}

export default App;
