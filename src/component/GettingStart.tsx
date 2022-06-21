import * as React from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

export default function GettingStarted() {
  return (
    <ComponentWrap>
      <IntroTitle>#GettingStarted</IntroTitle>
      <ContentsWrap>
        <IntroSubTitle>
          <span className="darkmode-ignore">👉🏻 </span>
          Install
        </IntroSubTitle>
        <CodeSection>
          <FontColor2>npm</FontColor2> install{" "}
          <FontColor3>@ysms/ts-darkmode</FontColor3>
        </CodeSection>
      </ContentsWrap>
      <ContentsWrap>
        <IntroSubTitle>
          <span className="darkmode-ignore">👉🏻 </span>Import
        </IntroSubTitle>
        <CodeSection>
          <FontColor2>import</FontColor2> Darkmode <FontColor2>from</FontColor2>{" "}
          <FontColor3>"@ysms/ts-darkmode"</FontColor3>
        </CodeSection>
      </ContentsWrap>
    </ComponentWrap>
  );
}
const ComponentWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  padding-bottom: 80px;
  text-align: left;
`;
const IntroTitle: StyledComponent<"h1", DefaultTheme> = styled.h1``;
const IntroSubTitle: StyledComponent<"h2", DefaultTheme> = styled.h2``;
const CodeSection: StyledComponent<"div", DefaultTheme> = styled.div`
  padding: 20px;
  font-weight: 300;
  background-color: #f5f2f0;
`;
const ContentsWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  margin: 20px;
`;
// font color
const FontColor1: StyledComponent<"span", DefaultTheme> = styled.span`
  font-size: 80%;
  color: #07a;
`;
const FontColor2: StyledComponent<"span", DefaultTheme> = styled.span`
  color: #690;
`;
const FontColor3: StyledComponent<"span", DefaultTheme> = styled.span`
  color: #dd4a68;
`;
const FontColor4: StyledComponent<"span", DefaultTheme> = styled.span`
  color: #708090;
`;
