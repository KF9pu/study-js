import { ETheme } from "@/types";
import { css } from "@emotion/react";

export const getGlobalStyles = (theme: ETheme) => css`
  body {
    background-color: ${theme === ETheme.dark ? "black" : "white"};
    transition: all 1s;
    color: ${theme === ETheme.dark ? "white" : "black"};
  }
  button {
    background-color: ${theme === ETheme.dark ? "blue" : "green"};
    transition: all 1s;
  }
`;
