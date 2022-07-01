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
  darkmode.activeDark();
  return (
    <ContentsWrap>
      <IconWarp>
        <ToggleButton>
          <ImageCircle></ImageCircle>
        </ToggleButton>
      </IconWarp>
      <ContentsTextWrap>
        <ContentsTitle>@ysms/ts-darkmode</ContentsTitle>
        <ContentsDesc>
          <span className="darkmode-ignore">👀</span> How about change your web
          to darkmode?
        </ContentsDesc>
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
  padding-bottom: 120px;
`;
const ToggleButton = styled.div`
  margin: 0 auto;
  width: 120px;
  position: relative;
  height: 120px;
  border-radius: 80%;
  background-color: #fff;
  border: #fff;
`;
const ContentsWrap = styled.div`
  text-align: center;
  padding-top: 150px;
  padding-bottom: 120px;
`;
const ContentsTitle = styled.p`
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  font-size: 80px;
  font-weight: bold;
`;
const ContentsDesc = styled.p`
  display: inline-block;
  margin: 0;
  font-size: 20px;
  padding-top: 10px;
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
  padding-top: 15px;
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
    border-top-left-radius: 200px;
  }
  
  25% {
    border-top-left-radius: 180px;
  }
  
  50% {
    border-top-left-radius: 140px;
  }
  
  75% {
    border-top-left-radius: 160px;
  }
`;

const border2 = keyframes`
 0%, 100% {
    border-top-right-radius: 140px;
  }
  
  25% {
    border-top-right-radius: 200px;
  }
  
  50% {
    border-top-right-radius: 160px;
  }
  
  75% {
    border-top-right-radius: 180px;
  }
`;

const border3 = keyframes`
  0%, 100% {
    border-bottom-right-radius: 140px;
  }
  
  25% {
    border-bottom-right-radius: 120px;
  }
  
  50% {
    border-bottom-right-radius: 200px;
  }
  
  75% {
    border-bottom-right-radius: 160px;
  }
`;

const borderbl = keyframes`
 0%, 100% {
    border-bottom-left-radius: 120px;
  }
  
  25% {
    border-bottom-left-radius: 160px;
  }
  
  50% {
    border-bottom-left-radius: 200px;
  }
  
  75% {
    border-bottom-left-radius: 180px;
  }
`;

const ImageCircle = styled.div`
  position: absolute;
  pointer-events: none;
  background-color: #1d1d1d;
  top: -30px;
  left: -30px;
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 80%;
  box-shadow: inset 0 0 0 2px #1d1d1d;
  z-index: -1;
  filter: blur(1rem);

  animation: 3s ${borderbl} linear infinite, 7s ${border1} linear infinite,
    5s ${border2} linear infinite, 3s ${border3} linear infinite,
    3s ${rotate} linear infinite, 2s hover ease-in-out infinite;
`;
