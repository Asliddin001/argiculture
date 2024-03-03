import React from "react";
import { Arrow, Button, Data, Profile } from "../../../common";

export const News = () => {
  return (
    <>
      <div className="container">
        <div className="news flex items-end justify-between mb-[45px]">
          <div className="">
            <span className="font-yellowtail text-[36px] leading-[49px] text-SeaLettuce italic">
              News
            </span>
            <h2 className="text-[50px] font-extrabold text-Arapawa">
              Discover weekly content about <br /> organic food, & more
            </h2>
          </div>
          <Button variant="secondary" icon={<Arrow />}>
            More News
          </Button>
        </div>
        <div className="boxs flex justify-between ">
          <div className="box bg-[url('/mock-imges/news-1.png')] w-[791px] h-[530px] bg-contain bg-no-repeat p-[45px]">
            <Data />
            <div className="bg-white w-[613px] px-[47px] py-[46px] rounded-[30px] mt-[255px] rounded-tl-[31px] rounded-tr-[34px] rounded-bl-[30px] rounded-br-[30px] shadow-md ">
              <div className="flex gap-[3px] items-center border-[1px] border-red-500">
                <Profile />
                <p className="text-[18px] leading-[21px]">By Rachi Card</p>
              </div>
              <div>
                <h6 className="text-[25px] text-Arapawa font-extrabold leading-[29px] mt-[15px]">
                  The Benefits of Vitamin D & How to Get It
                </h6>
                <p className="text-[18px] text-CityRain">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
              <Button variant="primary" icon={<Arrow />}>
                Read More
              </Button>
            </div>
          </div>
          {/* <div className="box bg-[url('/mock-imges/news-2.png')] w-[791px] h-[530px] bg-contain bg-no-repeat p-[45px]">
            <Data />
          </div> */}
        </div>
      </div>
    </>
  );
};
