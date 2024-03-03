import React from "react";
import meal_1 from "/imges/meal-1.png";
import meal_2 from "/imges/meal-2.png";
import meal_3 from "/imges/meal-3.png";
export const Meals = () => {
  return (
    <div className="bg-drwhite-4 py-[187px]">
      <div className="container">
        <div className="flex gap-[42px]">
          <img src={meal_2} alt="meal 2 img" className="w-[500px]" />
          <img src={meal_3} alt="meal 3 img" className="w-[500px]" />
          <img src={meal_1} alt="meal 1 img" className="w-[500px]" />
        </div>
      </div>
    </div>
  );
};
