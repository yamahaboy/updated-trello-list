import { ReactNode } from "react";
import "./Button.css";

export interface IButton {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({ children, type = "button", onClick }: IButton) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};
