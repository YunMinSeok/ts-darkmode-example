import * as React from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";
import M from "../imgs/m.svg";
import Y from "../imgs/y.svg";

export default function Contributors() {
  return (
    <ComponentWrap>
      <IntroTitle>#Contributors</IntroTitle>
      <ContributorsWrap>
        <ContributorBox>
          <Img src={M} alt="contributors"></Img>
          <Text>
            <a href="https://github.com/YunMinSeok">@YoonMinSeok</a>
          </Text>
          <Text>윤민석</Text>
        </ContributorBox>
        <ContributorBox>
          <Img src={Y} alt="contributors"></Img>
          <Text>
            <a href="https://github.com/ChoYeSeul">@ChoYeSeul</a>
          </Text>
          <Text>조예슬</Text>
        </ContributorBox>
      </ContributorsWrap>
    </ComponentWrap>
  );
}
const ComponentWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  padding-bottom: 80px;
  text-align: left;
`;
const IntroTitle: StyledComponent<"h1", DefaultTheme> = styled.h1``;
const ContributorsWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  display: flex;
`;
const ContributorBox: StyledComponent<"div", DefaultTheme> = styled.div`
  width: 200px;
`;
const Img: StyledComponent<"img", DefaultTheme> = styled.img`
  width: 100%;
  transition: all 0.5s ease;
`;
const Text: StyledComponent<"p", DefaultTheme> = styled.p`
  text-align: center;
  > a:link {
    color: #1d1d1d;
  }
  > a:active {
    color: #1d1d1d;
  }
  > a:visited {
    color: #1d1d1d;
  }
`;
