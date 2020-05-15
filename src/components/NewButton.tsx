import * as React from "react";
import { CommonButtonProps, ButtonAppearance } from "../types";

interface NewButtonProps extends CommonButtonProps {
  appearance?: ButtonAppearance;
}

export const NewButton: React.FC<NewButtonProps> = ({
  appearance = "primary",
  disabled,
  onClick,
  children,
}) => {
  const backgroundColor =
    appearance === "primary" ? "dodgerblue" : "lightsteelblue";
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
