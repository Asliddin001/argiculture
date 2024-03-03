import React from "react";
import offer_1 from "/imges/offer-1.png";
import offer_2 from "/imges/offer-2.png";
export const Offer = () => {
  return (
    <>
      <div className="container">
        <div className="flex gap-[20px] my-[155px] justify-center">
          <img src={offer_1} alt="offer-1 img" className="w-[500px]" />
          <img src={offer_2} alt="offer-2 img" className="w-[500px]" />
        </div>
      </div>
    </>
  );
};
