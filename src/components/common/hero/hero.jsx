import React from "react";

export const Hero = ({ content, backgroundImg, className }) => {
  return (
    <div className={`hero ${className} ${backgroundImg}`}>
      <h1 className="text-4xl font-bold">{content}</h1>
    </div>
  );
};
