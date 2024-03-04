import React from "react";
import successThing from "/imges/success-thing.png";
import { Button, Arrow, Tractor, Factory } from "../../../common";
export const AboutContent = () => {
  return (
    <div className="container mb-[180px] mt-[200px]">
      <div className="flex">
        <div className="img">
          <img src={successThing} alt="" />
        </div>
        <div className="content">
          <div>
            <span className="font-yellowtail text-[36px] text-Padua italic">
              About Us
            </span>
            <h2 className="mt-[8px] mb-[14px] font-roboto text-[50px] font-[800] leading-[59px] text-Arapawa">
              We do Creative Things for Success
            </h2>
            <p className="mb-[50px] text-[18px] text-CityRain leading-[165%]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <p className=" text-[18px] text-CityRain leading-[165%]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="flex gap-[65px] mt-[50px] mb-[58px]">
            <div className="flex">
              <Tractor />
              <span className="font-roboto text-[25px] text-Arapawa leading-[29px] font-[500]">
                Modern Agriculture <br /> Equipment
              </span>
            </div>
            <div className="flex">
              <Factory />
              <span className="font-roboto text-[25px] text-Arapawa leading-[29px] font-[500]">
                No growth <br /> hormones are used
              </span>
            </div>
          </div>
          <Button icon={<Arrow />}>Explore now</Button>
        </div>
      </div>
    </div>
  );
};
