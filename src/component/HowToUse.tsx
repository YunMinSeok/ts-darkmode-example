import * as React from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

export default function HowToUse() {
  interface SettingInterface {
    bottom: string;
    right: string;
    left: string;
    transitionTime: string;
    backgroundColor: string;
    buttonDarkColor: string;
    buttonLightColor: string;
    content: string;
    saveInCookies: boolean;
    buttonWidth: string;
    buttonHeight: string;
  }
  const settingOptions: SettingInterface = {
    // it's all default value
    bottom: "30px", // Button's bottom position
    right: "30px", // You can choose between right and left
    left: "unset",
    transitionTime: "0.3s", // Transition Time
    backgroundColor: "#fff", // Light mode background color setting
    buttonDarkColor: "#141414", // Dark mode button color
    buttonLightColor: "#fff", // Light mode button color
    content: "🌓", // Content in button
    saveInCookies: true, // If you want to remember whether it's dark mode or not, write this section true or false
    buttonWidth: "3rem", // Button size
    buttonHeight: "3rem", // Button size
  };
  return (
    <ComponentWrap>
      <IntroTitle>#HowToUse</IntroTitle>
      <ContentsWrap>
        <IntroSubTitle>
          <span className="darkmode-ignore">👉🏻 </span>
          Add This Code
        </IntroSubTitle>
        <CodeSection></CodeSection>
      </ContentsWrap>
      <ContentsWrap>
        <IntroSubTitle>
          <span className="darkmode-ignore">👉🏻 </span>
          Setting Options
        </IntroSubTitle>
        <CodeInfo>// Button's bottom position</CodeInfo>
        <CodeSection className="language-html">bottom: "30px", </CodeSection>
        <CodeInfo>// You can choose between right and left</CodeInfo>
        <CodeSection>right: "30px",</CodeSection>
        <CodeSection>left: "unset", </CodeSection>
        <CodeSection>transitionTime: "0.3s", // Transition Time </CodeSection>
        <CodeSection>
          backgroundColor: "#fff", // Light mode background color setting
        </CodeSection>
        <CodeSection>
          buttonDarkColor: "#141414", // Dark mode button color
        </CodeSection>
        <CodeSection>
          buttonLightColor: "#fff", // Light mode button color
        </CodeSection>
        <CodeSection>content: "⭐️", // Content in button </CodeSection>
        <CodeSection>
          saveInCookies: true, // If you want to remember whether it's dark mode
          or not, write this section true or false
        </CodeSection>
        <CodeSection>buttonWidth: "3rem", // Button size</CodeSection>
        <CodeSection>buttonHeight: "3rem", // Button size</CodeSection>
      </ContentsWrap>
    </ComponentWrap>
  );
}
const ComponentWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  padding-bottom: 80px;
  text-align: left;
`;
const IntroSubTitle: StyledComponent<"h2", DefaultTheme> = styled.h2``;
const CodeSection: StyledComponent<"pre", DefaultTheme> = styled.pre`
  padding: 0.5vw;
  /* background-color: #d4d4d4ca; */
`;
const CodeInfo: StyledComponent<"span", DefaultTheme> = styled.span`
  font-size: 80%;
  font-weight: 600;
`;
const IntroTitle: StyledComponent<"h1", DefaultTheme> = styled.h1``;
const ContentsWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  margin: 2vw;
`;
