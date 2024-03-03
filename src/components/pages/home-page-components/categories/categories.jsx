import React from "react";
import { Card } from "../../../common/card/card";
import { categriesData } from "../../../../data/data";
import { Arrow, Button } from "../../../common";

export const Categories = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col items-center mt-[150px] mb-[40px]">
          <span className="font-yellowtail text-[36px] text-SeaLettuce">
            Categories
          </span>
          <h2 className="text-[50px] text-Arapawa font-bold">Our Products</h2>
        </div>
        <div className="grid grid-cols-4 gap-[20px]">
          <Card products={categriesData} />
        </div>
        <div className="flex items-center justify-center mt-[122px]">
          <Button icon={<Arrow />}>Load more</Button>
        </div>
      </div>
    </>
  );
};
