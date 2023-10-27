import { getGlobalStyles } from "@/libs";
import { _theme } from "@/recoil/atoms";
import { ETheme } from "@/types";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import { useState, type FC, useEffect } from "react";
import { useRecoilValue } from "recoil";

interface BodyMainProps {
  children: React.ReactNode;
}

const BodyMain: FC<BodyMainProps> = ({ children }) => {
  const theme = useRecoilValue(_theme);
  const [isReady, setIsReady] = useState(false);
  console.log("🚀 ~ file: BodyMain.tsx:15 ~ theme:", theme);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(theme !== undefined);
    }, 200);
  }, [theme]);
  return (
    <Body>
      <Loading isReady={isReady}>Loading</Loading>
      <Global styles={getGlobalStyles(theme)} />
      {children}
    </Body>
  );
};
export default BodyMain;

type LoadingProps = {
  isReady: boolean;
};
const Loading = styled.div<LoadingProps>(({ isReady }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  width: "100vw",
  height: "100vh",
  backgroundColor: "black",
  color: "white",
  transition: "all 1s ease-in-out",
  translate: isReady === false ? "0px 0px" : "0 -100vh",
}));
const Body = styled.body({
  margin: 0,
});
