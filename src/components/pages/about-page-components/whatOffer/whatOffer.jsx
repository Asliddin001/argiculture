import React from "react";
import spicy from "/imges/spicy.png";
import feeds from "/imges/feeds.png";
import fruits from "/imges/fruits.png";
import vegetables from "/imges/vegetables.png";

const offerItems = [
  { id: 1, image: spicy, text: "Spicy" },
  { id: 2, image: feeds, text: "Nuts & Feeds" },
  { id: 3, image: fruits, text: "Fruits" },
  { id: 4, image: vegetables, text: "Vegetables" },
];

export const WhatOffer = () => {
  return (
    <>
      <div className="bg-Arapawa py-[188px] text-white mt-[202px]">
        <div className="container">
          <div className="flex flex-col gap-2 text-center mb-[35px]">
            <span className="font-yellowtail text-Padua text-[36px] leading-[49px] italic">
              About Us
            </span>
            <h2 className="font-roboto text-[50px] font-[800] leading-[59px]">
              What We Offer for You
            </h2>
          </div>
          <div className="flex justify-between text-center">
            {offerItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-[25px]">
                <div className="bg-white rounded-[30px]">
                  <img src={item.image} alt={item.text} />
                </div>
                <span className="font-roboto text-[25px] font-[500]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
