import React from "react";
import { Arrow, Button } from "../../../common";
import { Card } from "../../../common/card/card";
import { organicData } from "../../../../data/data";

export const Organic = () => {
  return (
    <div className="bg-Arapawa w-full pt-[200px]">
      <div className="container">
        <div className="organic flex justify-between">
          <div className="">
            <span className="text-SeaLettuce font-yellowtail italic">
              Offer
            </span>
            <h2 className="text-white font-extrabold text-[50px]">
              We Offer Organic For You
            </h2>
          </div>
          <Button variant="primary" icon={<Arrow />}>
            View All Product
          </Button>
        </div>
        <div className="cards grid grid-cols-4 mt-[50px]">
          <Card products={organicData} />
        </div>
      </div>
    </div>
  );
};
