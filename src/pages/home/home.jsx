import React from "react";
import {
  AboutUs,
  Categories,
  Eco,
  Hero,
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
    </div>
  );
};
