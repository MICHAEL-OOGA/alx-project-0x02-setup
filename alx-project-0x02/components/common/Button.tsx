import React from "react";
import { ButtonProps } from "@/interfaces";
const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
};

const Button = ({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white ${sizeClasses[size]} ${shape} hover:bg-gray-800 transition-colors duration-300`}
    >
      {label}
    </button>
  );
};

export default Button;
