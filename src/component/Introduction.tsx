import * as React from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

export default function Introduction() {
  return (
    <IntroWrap>
      <IntroTitle>#Introduction</IntroTitle>
    </IntroWrap>
  );
}
const IntroWrap: StyledComponent<"div", DefaultTheme> = styled.div``;
const IntroTitle: StyledComponent<"h1", DefaultTheme> = styled.h1`
  text-align: left;
`;
