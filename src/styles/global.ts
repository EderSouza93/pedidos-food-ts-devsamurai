import { createGlobalStyle } from "styled-components";
import { GlobalStyleProps } from "../types/globalStyles";
import { DefaultTheme } from "styled-components";

type GlobalStyle = {
  theme: DefaultTheme;
};

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background: ${(props) => props.theme.colors.gray900};
    color: ${(props) => props.theme.colors.gray600};
    font-family: ${(props) => props.theme.fontFamily.sans};
  }
  html, body, #root {
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }
`;
