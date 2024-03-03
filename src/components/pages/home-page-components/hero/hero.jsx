import React from "react";
import { Arrow, Button } from "../../../common";

export const Hero = () => {
  return (
    <>
      <header className="w-full h-screen flex flex-col bg-[url('/mock-imges/hero.jpeg')] bg-cover bg-center">
        <div className="container">
          <div className="my-[246px] mx-[120px]">
            <h4 className="font-yellowtail italic text-SeaLettuce">
              100% Natural Food
            </h4>
            <h1 className="text-[70px] font-semibold text-Arapawa leading-[90px]">
              Choose the best <br /> healthier way <br /> of life
            </h1>
            <Button variant="primary" icon={<Arrow />}>
              Explore Now
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
