import React from "react";
import chooseUsImg from "/imges/chooseUs-1.png";
import { Circle, ShopIcon, LeafIcon, Support, Panment } from "../../../common";

const chooseUsData = [
  {
    id: 1,
    img: <ShopIcon />,
    title: "Return Policy",
  },
  {
    id: 2,
    img: <LeafIcon />,
    title: "100% Fresh",
  },
  {
    id: 3,
    img: <Support />,
    title: "Support 24/7",
  },
  {
    id: 4,
    img: <Panment />,
    title: "Secured Payment",
  },
];
export const ChooseUs = () => {
  return (
    <div className="bg-Doctor pt-[200px] pb-[190px]">
      <div className="container">
        <div className="chooseUs flex flex-col items-center">
          <div className="flex gap-[50px] ">
            <div className="">
              <div className="">
                <span className="font-yellowtail italic text-[36px] text-SeaLettuce">
                  Why Choose us?
                </span>
                <h2 className="text-[50px] text-Arapawa leading-[59px] font-extrabold">
                  We do not buy from the open market & traders.
                </h2>
                <p className="text-CityRain text-[18px] font-semibold my-[25px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had karso tashlang ceased to been the industry's
                  standard the 1500s, when an unknown
                </p>
              </div>
              <div className="flex flex-col gap-[12px] w-[504px] mb-[24px]">
                <div className="w-[339px] pl-[27px] pr-[80px] py-[29px] text-Arapawa  bg-drwhite-5 rounded-[49px] flex gap-[7px]">
                  <Circle />
                  <p className="text-[20px] font-medium leading-[23px]">
                    100% Natural Product
                  </p>
                </div>
                <p className="ml-[60px] text-[18px] font-normal text-CityRain leading-[165%]">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </p>
              </div>
              <div className="flex flex-col gap-[12px] w-[504px]">
                <div className="w-[339px] pl-[27px] pr-[80px] py-[29px] text-Arapawa  bg-drwhite-5 rounded-[49px] flex gap-[7px]">
                  <Circle />
                  <p className="text-[20px] font-medium leading-[23px]">
                    Increases resistance
                  </p>
                </div>
                <p className="ml-[60px] text-[18px] font-normal text-CityRain leading-[165%]">
                  Filling, and temptingly healthy, our Biona Organic Granola
                  with Wild Berries is just the thing
                </p>
              </div>
            </div>
            <div className="w-full">
              <img src={chooseUsImg} alt="chooseUs img 1" className="w-full" />
            </div>
          </div>
          <div className="mt-[90px]  flex justify-around gap-[30px] text-center  ">
            {chooseUsData.map((item) => (
              <div
                key={item.id}
                className="box bg-white flex flex-col items-center text-center gap-[12px]  w-[257px] rounded-[30px] py-[50px] px-[36px] "
              >
                {item.img}
                <h6 className="text-[25px] leading-[29px] font-bold text-Arapawa">
                  {item.title}
                </h6>
                <p className="text-CityRain text-[18px] ">
                  Simply dummy text of the printintypesetting industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
