import React from "react";
import { Arrow, Button } from "../../../common";
import { NewsBox } from "./newsBox";

const newsData = [
  {
    id: 1,
    name: "By Rachi Card",
    title: "The Benefits of Vitamin D & How to Get It",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    imageUrl: "/imges/news-1.png",
  },
  {
    id: 2,
    name: "By Rachi Card",
    title: "Our Favourite Summertime Tommeto",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    imageUrl: "/imges/news-2.png",
  },
];

export const News = () => {
  return (
    <>
      <div className="container h-[945px] overflow-hidden">
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
        <div className="flex gap-[45px]">
          {newsData.map((newsItem) => (
            <NewsBox key={newsItem.id} {...newsItem} />
          ))}
        </div>
      </div>
    </>
  );
};
