import type { ButtonHTMLAttributes, FC } from "react";
import React from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // 여기에 추가적인 속성들을 정의할 수 있습니다.
}

const Button: FC<ButtonProps> = props => {
  return <button {...props}>aaa</button>;
};
export default Button;
