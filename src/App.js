import "./App.css";
import * as React from "react";

import Main from "../src/component/Main";
import Introduction from "../src/component/Introduction";
import GettingStart from "../src/component/GettingStart";
import HowToUse from "../src/component/HowToUse";
import Contributors from "../src/component/Contributors";

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
