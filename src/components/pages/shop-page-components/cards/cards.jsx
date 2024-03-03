import React from "react";
import { Card } from "../../../common/card/card";
import { cardsData } from "../../../../data/data";

export const Cards = () => {
  return (
    <>
      <div className="container">
        <div className="cards grid grid-cols-4 mt-[90px] gap-[40px]">
          <Card products={cardsData} />
        </div>
      </div>
    </>
  );
};
