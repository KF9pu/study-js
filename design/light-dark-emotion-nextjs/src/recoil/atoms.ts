import { ETheme } from "@/types";
import { atom } from "recoil";

export const _theme = atom<ETheme>({
  key: "_theme",
  default: undefined,
});
