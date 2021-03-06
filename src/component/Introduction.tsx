import * as React from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

export default function Introduction() {
  return (
    <ComponentWrap>
      <IntroTitle>#Introduction</IntroTitle>
      <ContentsWrap>
        <IntroDesc>
          <span className="darkmode-ignore">๐ก </span> Hello, This library helps
          you apply the Dark Mode feature to your web more easily.
        </IntroDesc>
        <IntroDesc>
          ์ ํฌ๋ ํด๋ผ์ด์ธํธ์ ์๊ตฌ์ ๋ง์ถฐ ๋น ๋ฅด๊ฒ ๋ค์ํ ๊ธฐ๋ฅ์ ๊ตฌํํด์ผํ๋ Si
          ํ์ฌ์ ๊ทผ๋ฌดํ๊ณ ์์ต๋๋ค. ํจ๊ป ๋ค์ํ ๊ธฐ๋ฅ๋ค์ ์์ํ๋ ์ค โ์ด๋ฐ
          ๊ธฐ๋ฅ๋ค์ ์ฌ์ฉ์ฑ ์ข์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก ๊ตฌ์ถํด ๋์ผ๋ฉด ๋ง์ ์ฌ๋๋ค์ด ํธํ๊ณ 
          ๋น ๋ฅด๊ฒ ์์ํ  ์ ์์ง ์์๊น?โ๋ผ๋ ์๊ฐ์ ํ๊ฒ ๋์๊ณ , โDarkMode Open
          Sourceโ ๋ฅผ ์ฒซ ํ๋ก์ ํธ๋ก ์์ํ๊ฒ ๋์์ต๋๋ค!
        </IntroDesc>
        <IntroDesc>
          ์ด ํ๋ก์ ํธ๋ TypeScript๋ฅผ ์ฌ์ฉํ์์ผ๋ฉฐ, ํ์ฌ ์ด ์น์ TypeScript,
          React๋ฅผ ํจ๊ป ์ฌ์ฉํ์์ต๋๋ค.
        </IntroDesc>
      </ContentsWrap>
    </ComponentWrap>
  );
}
const ComponentWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  padding-bottom: 80px;
  text-align: left;
`;
const IntroTitle: StyledComponent<"h1", DefaultTheme> = styled.h1``;
const IntroDesc: StyledComponent<"p", DefaultTheme> = styled.p``;
const ContentsWrap: StyledComponent<"div", DefaultTheme> = styled.div`
  margin: 20px;
`;
