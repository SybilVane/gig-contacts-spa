import React from "react";
import "./DefaultButton.css";

interface DefaultButtonProps {
  children: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
  children,
  type,
  onClick,
}) => {
  return (
    <button className="default-button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default DefaultButton;
