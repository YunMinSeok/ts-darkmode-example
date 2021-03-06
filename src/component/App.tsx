import "./App.css";
import * as React from "react";
import GlobalStyles from "../css/GlobalStyles";

import Main from "./Main";
import Introduction from "./Introduction";
import GettingStarted from "./GettingStart";
import HowToUse from "./HowToUse";
import Contributors from "./Contributors";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Main />
      <Introduction />
      <GettingStarted />
      <HowToUse />
      <Contributors />
    </div>
  );
}

export default App;
