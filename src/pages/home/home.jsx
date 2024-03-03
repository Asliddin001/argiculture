import React from "react";
import {
  AboutUs,
  Categories,
  Eco,
  Hero,
  Meals,
  News,
  Offer,
  Organic,
  Testominal,
} from "../../components";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Offer />
      <AboutUs />
      <Categories />
      <Testominal />
      <Organic />
      <Eco />
      <Meals />
      <News />
    </div>
  );
};
