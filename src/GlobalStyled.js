import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "crimson",
};

export const spacing = {
  size: "100px",
  moSize: "20px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    body{
        font-family: "Noto Sans KR", sans-serif;
        background-color: #1d1d1d;
        color: white;
        letter-spacing: -1px;
        word-break: keep-all; // 알아서 본문 단어 안끊기게 계산해서 보여줌
    }
    /* body 에는 기본값 */

    a{
        text-decoration: none;
        color: white;
    }

    li{
        list-style: none;
    }

    img{
        width: 100%;
        display: block;   
    }
`;
