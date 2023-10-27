"use client";

import "./globals.css";
import { _theme } from "@/recoil/atoms";
import BodyMain from "@/components/BodyMain";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="en">
        <BodyMain>{children}</BodyMain>
      </html>
    </RecoilRoot>
  );
}
