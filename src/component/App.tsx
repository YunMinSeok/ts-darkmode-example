import "./App.css";
import * as React from "react";

import Main from "./Main";
import Introduction from "./Introduction";
import GettingStart from "./GettingStart";
import HowToUse from "./HowToUse";
import Contributors from "./Contributors";

function App() {
  return (
    <div className="App">
      <Main />
      <Introduction />
      <GettingStart />
      <HowToUse />
      <Contributors />
    </div>
  );
}

export default App;
