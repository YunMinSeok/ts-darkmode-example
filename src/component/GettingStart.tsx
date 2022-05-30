import * as React from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

export default function GettingStarted() {
  return (
    <ComponentWrap>
      <IntroTitle>#GettingStarted</IntroTitle>
      <IntroSubTitle>Install</IntroSubTitle>
      <CodeSection>npm install @ysms/ts-darkmode</CodeSection>
      <IntroSubTitle>Import</IntroSubTitle>
      <CodeSection>import Darkmode from "@ysms/ts-darkmode"</CodeSection>
    </ComponentWrap>
  );
}
const ComponentWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  padding: 0 6vw 3vw;
  text-align: left;
`;
const IntroTitle: StyledComponent<"h1", DefaultTheme> = styled.h1``;
const IntroSubTitle: StyledComponent<"h2", DefaultTheme> = styled.h2``;
const CodeSection: StyledComponent<"code", DefaultTheme> = styled.code`
  padding: 0.5vw;
  background-color: #d4d4d4ca;
`;
