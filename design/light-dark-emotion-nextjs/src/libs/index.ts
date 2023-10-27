import { ETheme } from "@/types";
import { css } from "@emotion/react";

export const getGlobalStyles = (theme: ETheme) => css`
  body {
    background-color: ${theme === ETheme.dark ? "black" : "white"};
    transition: all 1s;
    color: ${theme === ETheme.dark ? "white" : "black"};
  }
`;
