import * as React from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

export default function Introduction() {
  return (
    <ComponentWrap>
      <IntroTitle>#Introduction</IntroTitle>
      <IntroDesc>
        <span className="darkmode-ignore">💡 </span> Hello, This library helps
        you apply the Dark Mode feature to your web more easily.
      </IntroDesc>
      <IntroDesc>
        저희는 클라이언트의 요구에 맞춰 빠르게 다양한 기능을 구현해야하는 Si
        회사에 근무하고있습니다. 함께 다양한 기능들을 작업하던 중 ‘이런 기능들을
        사용성 좋은 라이브러리로 구축해 놓으면 많은 사람들이 편하고 빠르게
        작업할 수 있지 않을까?’라는 생각을 하게 되었고, ‘DarkMode Open Source’
        를 첫 프로젝트로 작업하게 되었습니다!
      </IntroDesc>
      <IntroDesc>
        이 프로젝트는 TypeScript를 사용하였으며, 현재 이 웹은 TypeScript,
        React를 함께 사용하였습니다.
      </IntroDesc>
    </ComponentWrap>
  );
}
const ComponentWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  padding-bottom: 80px;
  text-align: left;
`;
const IntroTitle: StyledComponent<"h1", DefaultTheme> = styled.h1``;
const IntroDesc: StyledComponent<"p", DefaultTheme> = styled.p``;
