import * as React from "react";
import styled, {
  DefaultTheme,
  keyframes,
  StyledComponent,
} from "styled-components";

export default function Main() {
  const contentsMousehoverHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const contents: HTMLDivElement = event.currentTarget;
    contents.style.fontWeight = "bold";
  };
  const contentsMousehleaveHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const contents: HTMLDivElement = event.currentTarget;
    contents.style.fontWeight = "500";
  };
  return (
    <ContentsWrap>
      <IconWarp>
        <ToggleButton
          onClick={() => {
            console.log("button click");
          }}
        >
          <ImageCircle></ImageCircle>
        </ToggleButton>
      </IconWarp>
      <ContentsTextWrap>
        <ContentsTitle>@ysms/ts-darkmode</ContentsTitle>
        <ContentsDesc>👀 How about change your web to darkmode?</ContentsDesc>
      </ContentsTextWrap>
      <ConstentsUrlWrap>
        <ContentsDesc
          onMouseOver={contentsMousehoverHandler}
          onMouseLeave={contentsMousehleaveHandler}
        >
          <a href="https://github.com/YunMinSeok/darkmodejs">
            Go to Repositories
          </a>
        </ContentsDesc>
      </ConstentsUrlWrap>
    </ContentsWrap>
  );
}
const IconWarp: StyledComponent<"div", DefaultTheme> = styled.div`
  text-align: center;
  margin: 0 auto;
  padding-bottom: 3vw;
`;
const ToggleButton: StyledComponent<"button", DefaultTheme> = styled.button`
  width: 7vw;
  position: relative;
  height: 7vw;
  border-radius: 80%;
  background-color: #fff;
  border: #fff;
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
  color: #1d1d1d;
  > a {
    color: #1d1d1d;
    text-decoration-line: none;
  }
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
const ContentsTextWrap: StyledComponent<"div", DefaultTheme> = styled.div``;
const ConstentsUrlWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  padding-top: 4vw;
`;
const ImageCircle: StyledComponent<"div", DefaultTheme> = styled.div`
  position: absolute;
  pointer-events: none;
  background-color: #868686;
  top: -15%;
  left: -15%;
  display: inline-block;
  width: 8vw;
  height: 8vw;
  border-radius: 80%;
  box-shadow: inset 0 0 0 2px #1d1d1d;
  z-index: -1;
  filter: blur(1rem);

  animation: 3s bordertl linear infinite, 4s border1 linear infinite,
    6s border2 linear infinite, 3s border3 linear infinite,
    3s rotate linear infinite, 2s hover ease-in-out infinite;
`;
