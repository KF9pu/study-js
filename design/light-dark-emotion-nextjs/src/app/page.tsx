"use client";
import useTheme from "@/hooks/useTheme";
import { _theme } from "@/recoil/atoms";
import styled from "@emotion/styled";
export default function Home() {
  const { changeTheme } = useTheme();

  return (
    <Main>
      <p>aa</p>
      <p>bbbbbbbbbbbbbb</p>
      <Button onClick={() => changeTheme()}>button</Button>
    </Main>
  );
}

const Main = styled.main({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Button = styled.button({});
