import React from "react";
import profile_1 from "/imges/experts-profile-1.png";
import profile_2 from "/imges/experts-profile-2.png";
import profile_3 from "/imges/experts-profile-3.png";
import { Facebook, Insta, Twitter } from "../../../common";

const expertsData = [
  {
    id: 1,
    image: profile_1,
    name: "Giovani Bacardo",
    workType: "Farmer",
    socialMedia: [<Facebook key="fb" />, <Twitter key="tw" />],
  },
  {
    id: 2,
    image: profile_2,
    name: "Marianne Loreno",
    workType: "Designer",
    socialMedia: [
      <Insta key="ig" />,
      <Facebook key="fb" />,
      <Twitter key="tw" />,
    ],
  },
  {
    id: 3,
    image: profile_3,
    name: "Riga Pelore",
    workType: "Farmer",
    socialMedia: [
      <Insta key="ig" />,
      <Facebook key="fb" />,
      <Twitter key="tw" />,
    ],
  },
];

export const Experts = () => {
  return (
    <div className="container">
      <div className="w-[850px] flex flex-col items-center gap-4 text-center mx-auto">
        <span className="text-[36px] font-yellowtail italic text-SeaLettuce">
          Team
        </span>
        <h2 className="text-[50px] text-Arapawa font-bold">
          Our Organic Experts
        </h2>
        <p className="text-[18px] text-CityRain">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
      </div>
      <div className="boxs mt-[41px] flex gap-[27px]">
        {expertsData.map((expert) => (
          <div
            key={expert.id}
            className="box bg-Doctor w-[449px] rounded-[30px] transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="box_img">
              <img src={expert.image} alt={`profile ${expert.id}`} />
            </div>
            <div className="py-[35px] px-[28px] flex justify-between">
              <div className="flex flex-col">
                <h6 className="text-Arapawa text-[25px] font-bold">
                  {expert.name}
                </h6>
                <span className="text-SeaLettuce font-yellowtail italic text-[22px]">
                  {expert.workType}
                </span>
              </div>
              <div className="flex items-end gap-[17px]">
                {expert.socialMedia}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
