import { _theme } from "@/recoil/atoms";
import { ETheme } from "@/types";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const useTheme = () => {
  const setTheme = useSetRecoilState<ETheme>(_theme);

  const changeTheme = () => {
    const userTheme = localStorage.getItem("theme");
    setTheme(prev => (prev === ETheme.dark ? ETheme.light : ETheme.dark));
    localStorage.setItem("theme", userTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    console.log("?????????");

    const userTheme = localStorage.getItem("theme");
    const systemDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (userTheme === "dark") {
      setTheme(ETheme.dark);
    } else if (userTheme === "light") {
      setTheme(ETheme.light);
    } else {
      setTheme(systemDarkTheme ? ETheme.dark : ETheme.light);
    }
  }, []);

  return {
    changeTheme,
  };
};

export default useTheme;
