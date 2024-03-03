import React from "react";
import profile from "/mock-imges/tetominal-profile.png";
import { Star } from "../../../common";
import { testimonialData } from "../../../../data/data";

export const Testominal = () => {
  return (
    <>
      <div className="mt-[200px] bg-[url('/mock-imges/bakcground-testominal.png')] bg-cover bg-center w-full h-screen px-[165px]">
        <div className="container">
          <div className="flex flex-col justify-center items-center mt-[165px]">
            <span className="font-yellowtail text-[36px] text-SeaLettuce">
              Testimonial
            </span>
            <h2 className="text-[50px] text-Arapawa font-extrabold">
              What Our Customer Saying?
            </h2>
            <div className="flex flex-col items-center mt-[51px] mb-[25px] gap-[25px]">
              <img src={profile} alt="profile" />
              <div className="flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
            <p className="w-[780px] text-center text-[18px] font-normal text-CityRain leading-[165%]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <h6 className="mt-[20px] text-[25px] font-semibold leading-[29px] text-Arapawa">
              Sara Taylor
            </h6>
            <p className="text-[15px] font-normal text-CityRain">Consumer</p>
          </div>
          <div className="circles flex items-center justify-center gap-[62px]">
            {testimonialData.map((data) => (
              <div
                key={data.id}
                className=" w-[211px] h-[211px] bg-drwhite-3 flex flex-col items-center justify-center rounded-full border-[5px] border-Padua p-[15px] "
              >
                <h2 className="text-Arapawa  text-[50px] font-extrabold leading-[59px]">
                  {data.workPercentage}
                </h2>
                <p className="text-Arapawa text-[18px] font-semibold leading-[165%]">
                  {data.workType}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
