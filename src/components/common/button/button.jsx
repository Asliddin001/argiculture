import React from "react";

export const Button = ({ onClick, variant, children, icon }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return "bg-FunkyYellow text-Arapawa ";
      case "secondary":
        return "box-border border-solid border-2 border-gray-700 rounded-lg bg-white";
      default:
        return "bg-Arapawa text-white";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center px-[39px] py-[28px] rounded-[16px] text-[20px] font-bold ${getButtonStyle()}`}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};