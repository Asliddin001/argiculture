import React from "react";
import aboutUsImg from "/imges/aboutUs.png";
import { Arrow, Button, OrganicIcon1, OrganicIcon2 } from "../../../common";

const data = [
  {
    id: 1,
    icon: <OrganicIcon1 />,
    title: "Organic Foods Only",
    content:
      " Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    id: 1,
    icon: <OrganicIcon2 />,
    title: "Quality Standards",
    content:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
];

export const AboutUs = () => {
  return (
    <div className="w-full bg-Doctor py-[186px]">
      <div className="container">
        <div className="flex">
          <div className="img">
            <img src={aboutUsImg} alt="" />
          </div>
          <div className="content">
            <div>
              <span>About Us</span>
              <h2>We Believe in Working Accredited Farmers</h2>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to be the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>
        <div className="flex flex-col gap-[30px] my-[46px]">
              {data.map((item) => (
                <div key={item.id} className="w-[564px] box flex gap-[20px]">
                  {item.icon}
                  <div className="flex flex-col gap-[7px] text-Arapawa">
                    <h6 className="text-[25px] font-extrabold leading-[29px]">
                      {item.title}
                    </h6>
                    <p className="text-[18px] font-normal leading-[165%]">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button icon={<Arrow />}>Shop now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
