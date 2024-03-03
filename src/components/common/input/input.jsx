import React from "react";

export const Input = ({ type, placeholder, onChange, large = false, icon }) => {
  const commonClasses =
    "block w-full bg-drwhite rounded-full focus:outline-none outline-none px-[6px] py-[20px]";
  const largeClasses = "w-[349px] rounded-[18px] py-[28px] px-[23px]"; 

  const inputClasses = large
    ? `${commonClasses} ${largeClasses}`
    : commonClasses;

  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={inputClasses}
      />
      {icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          {icon}
        </div>
      )}
    </div>
  );
};
