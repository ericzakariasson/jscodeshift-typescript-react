import * as React from "react";
import { CommonButtonProps, ButtonAppearance } from "../types";

interface ButtonProps extends CommonButtonProps {
  color?: ButtonAppearance;
}

export const Button: React.FC<ButtonProps> = ({
  color = "secondary",
  disabled,
  onClick,
  children,
}) => {
  const backgroundColor = color === "primary" ? "black" : "gray";
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor, color: "white", fontSize: 16 }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
