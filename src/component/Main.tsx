import * as React from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

// import icon
import darkmode_icon from "../imgs/darkmode_icon.png";

export default function Main() {
  return (
    <div>
      <ContentsWrap>
        <ImgWarp>
          <img src={darkmode_icon} alt="icon" />
        </ImgWarp>
        <ContentsTextWarp>
          <ContentsTitle>@ysms/ts-darkmode</ContentsTitle>
          <ContentsDesc>👀How about change your web to darkmode?</ContentsDesc>
        </ContentsTextWarp>
      </ContentsWrap>
    </div>
  );
}
const ImgWarp: StyledComponent<"div", DefaultTheme> = styled.div`
  width: 10.7vw;
  height: 10.7vw;
  text-align: center;
  margin: 0 auto;
  & img {
    width: 100%;
    height: 100%;
  }
`;
const ContentsWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  text-align: center;
  margin-top: 11.7vw;
  padding-bottom: 4vw;
`;
const ContentsTitle: StyledComponent<"p", DefaultTheme> = styled.p`
  margin-bottom: 1.19vw;
  font-size: 2.7vw;
  font-weight: bold;
`;
const ContentsDesc: StyledComponent<"p", DefaultTheme> = styled.p`
  margin: 0;
  font-size: 1.19vw;
  color: #707070;
`;
const ContentsTextWarp: StyledComponent<"div", DefaultTheme> = styled.div``;
