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
        <ToggleButton></ToggleButton>
        {/* <imageCircle></imageCircle> */}
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
`;
const ToggleButton: StyledComponent<"button", DefaultTheme> = styled.button`
  width: 10.7vw;
  height: 10.7vw;
  border-radius: 80%;
  background-color: black;
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
// const imageCircle: StyledComponent<"div", DefaultTheme> = styled.div`
//   position: absolute;
//   top: 26%;
//   left: 36.5%;
//   width: 30rem;
//   animation: spinCircle 30s linear infinite;
//   opacity: 0.1;
// `;
// const spinCircle = keyframes`
//   @keyframes spinCircle {
//     from {
//       transform: rotate(0);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }
// `;
