import { DefaultTheme } from 'styled-components';

declare module 'style-componets' {
  export interface DefaultTheme {
  colors: {
    gray900: string;
    gray600: string;
    white: string;
    },
  fontFamily: {
    sans: string;
    heading: string;
    },
  };
}