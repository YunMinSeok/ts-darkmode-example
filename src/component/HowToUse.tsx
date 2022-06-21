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
        <CodeSectionWrap>
          <FontColor4>
            // This creates a dark mode toggle button on your web.
          </FontColor4>
          <CodeSection>
            <FontColor2>const</FontColor2> darkmode ={" "}
            <FontColor2>new</FontColor2> Darkmode(
            {
              <div>
                content:{" "}
                <FontColor2>
                  "<span className="darkmode-ignore">🌓</span>"
                </FontColor2>
              </div>
            }
            );
          </CodeSection>
          <CodeSection>
            <FontColor3>darkmode</FontColor3>.
            <FontColor2>activeDark();</FontColor2>
          </CodeSection>
        </CodeSectionWrap>
      </ContentsWrap>
      <ContentsWrap>
        <IntroSubTitle>
          <span className="darkmode-ignore">👉🏻 </span>
          Setting Options
        </IntroSubTitle>
        <CodeSectionWrap>
          <CodeSection className="language-html">
            bottom: <FontColor2>"30px"</FontColor2>,{" "}
            <FontColor4>// Button's bottom position</FontColor4>
          </CodeSection>

          <CodeSection>
            right: <FontColor2>"30px"</FontColor2>,{" "}
            <FontColor4>// You can choose between right and left</FontColor4>
          </CodeSection>
          <CodeSection>
            left: <FontColor2>"unset"</FontColor2>,{" "}
            <FontColor4>// You can choose between right and left</FontColor4>{" "}
          </CodeSection>
          <CodeSection>
            transitionTime: <FontColor2>"0.3s"</FontColor2>,{" "}
            <FontColor4>// Transition Time</FontColor4>
          </CodeSection>

          <CodeSection>
            backgroundColor: <FontColor2>"#fff"</FontColor2>,{" "}
            <FontColor4>// Light mode background color setting</FontColor4>
          </CodeSection>
          <CodeSection>
            buttonDarkColor: <FontColor2>"#141414"</FontColor2>,{" "}
            <FontColor4>// Dark mode button color</FontColor4>
          </CodeSection>
          <CodeSection>
            buttonLightColor: <FontColor2>"#fff"</FontColor2>,{" "}
            <FontColor4>// Light mode button color</FontColor4>
          </CodeSection>
          <CodeSection>
            content: "<span className="darkmode-ignore">⭐️</span>",{" "}
            <FontColor4>// Content in button</FontColor4>
          </CodeSection>
          <CodeSection>
            saveInCookies: <FontColor2>true</FontColor2>,{" "}
            <FontColor4>
              // If you want to remember whether it's dark mode or not, write
              this section true or false
            </FontColor4>
          </CodeSection>
          <CodeSection>
            buttonWidth: <FontColor2>"3rem"</FontColor2>,{" "}
            <FontColor4>// Button size</FontColor4>
          </CodeSection>
          <CodeSection>
            buttonHeight: <FontColor2>"3rem"</FontColor2>,{" "}
            <FontColor4>// Button size</FontColor4>
          </CodeSection>
        </CodeSectionWrap>
      </ContentsWrap>
    </ComponentWrap>
  );
}

const ComponentWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  padding-bottom: 80px;
  text-align: left;
`;
const IntroSubTitle: StyledComponent<"h2", DefaultTheme> = styled.h2``;
const CodeSectionWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  padding: 20px;
  font-weight: 300;
  background-color: #f5f2f0;
`;
const CodeSection: StyledComponent<"div", DefaultTheme> = styled.div``;

const IntroTitle: StyledComponent<"h1", DefaultTheme> = styled.h1``;
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
