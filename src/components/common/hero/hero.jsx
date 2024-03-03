import React from "react";

export const Hero = ({ content, backgroundImg, className = "", children }) => {
  const heroStyles = {
    backgroundImage: `url('${backgroundImg}')`,
  };

  return (
    <div
      className={`w-full h-[450px] relative ${className} bg-no-repeat flex items-center justify-center bg-center`}
      style={heroStyles}
    >
      <div className="flex items-center justify-center ">
        <div className="text-center text-Arapawa text-[50px] font-extrabold absolute top-52">
          {content}
        </div>
      </div>
      {children && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
          {children}
        </div>
      )}
    </div>
  );
};
