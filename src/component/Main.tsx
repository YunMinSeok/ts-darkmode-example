import * as React from "react";
import styled, { keyframes } from "styled-components";

// add darkmode
import Darkmode from "@ysms/ts-darkmode";

export default function Main() {
  const contentsMouseHoverHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const contents: HTMLDivElement = event.currentTarget;
    contents.style.fontWeight = "bold";
  };
  const contentsMouseleaveHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const contents: HTMLDivElement = event.currentTarget;
    contents.style.fontWeight = "500";
  };

  const darkmode = new Darkmode({ content: "🌓" });
  darkmode.showWidget();
  return (
    <ContentsWrap>
      <IconWarp>
        <ToggleButton>
          <ImageCircle></ImageCircle>
        </ToggleButton>
      </IconWarp>
      <ContentsTextWrap>
        <ContentsTitle>@ysms/ts-darkmode</ContentsTitle>
        <ContentsDesc>👀 How about change your web to darkmode?</ContentsDesc>
      </ContentsTextWrap>
      <ContentsUrlWrap>
        <ContentsDesc
          onMouseOver={contentsMouseHoverHandler}
          onMouseLeave={contentsMouseleaveHandler}
        >
          <a href="https://github.com/YunMinSeok/darkmodejs">
            Go to Repositories
          </a>
        </ContentsDesc>
      </ContentsUrlWrap>
    </ContentsWrap>
  );
}
const IconWarp = styled.div`
  text-align: center;
  padding-bottom: 3vw;
`;
const ToggleButton = styled.div`
  margin: 0 auto;
  width: 7vw;
  position: relative;
  height: 7vw;
  border-radius: 80%;
  background-color: #fff;
  border: #fff;
`;
const ContentsWrap = styled.div`
  text-align: center;
  padding-top: 11.7vw;
  padding-bottom: 4vw;
`;
const ContentsTitle = styled.p`
  margin-bottom: 1.19vw;
  font-size: 2.7vw;
  font-weight: bold;
`;
const ContentsDesc = styled.p`
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
const ContentsTextWrap = styled.div``;
const ContentsUrlWrap = styled.div`
  padding-top: 4vw;
`;

// button animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const border1 = keyframes`
 0%, 100% {
    border-top-left-radius: 7vw;
  }
  
  25% {
    border-top-left-radius: 6vw;
  }
  
  50% {
    border-top-left-radius: 6vw;
  }
  
  75% {
    border-top-left-radius: 8vw;
  }
`;

const border2 = keyframes`
 0%, 100% {
    border-top-right-radius: 7vw;
  }
  
  25% {
    border-top-right-radius: 6vw;
  }
  
  50% {
    border-top-right-radius: 7vw;
  }
  
  75% {
    border-top-right-radius: 8vw;
  }
`;

const border3 = keyframes`
  0%, 100% {
    border-bottom-right-radius: 7vw;
  }
  
  25% {
    border-bottom-right-radius: 8vw;
  }
  
  50% {
    border-bottom-right-radius: 6vw;
  }
  
  75% {
    border-bottom-right-radius: 10vw;
  }
`;

const borderbl = keyframes`
 0%, 100% {
    border-bottom-left-radius: 7vw;
  }
  
  25% {
    border-bottom-left-radius: 10vw;
  }
  
  50% {
    border-bottom-left-radius: 6vw;
  }
  
  75% {
    border-bottom-left-radius: 8vw;
  }
`;

const ImageCircle = styled.div`
  position: absolute;
  pointer-events: none;
  background-color: #1d1d1d;
  top: -15%;
  left: -15%;
  display: inline-block;
  width: 10vw;
  height: 10vw;
  border-radius: 80%;
  box-shadow: inset 0 0 0 2px #1d1d1d;
  z-index: -1;
  filter: blur(1rem);

  animation: 3s ${borderbl} linear infinite, 7s ${border1} linear infinite,
    5s ${border2} linear infinite, 3s ${border3} linear infinite,
    3s ${rotate} linear infinite, 2s hover ease-in-out infinite;
`;
