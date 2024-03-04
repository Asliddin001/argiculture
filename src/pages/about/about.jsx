import { AboutContent, ChooseUs, Experts, WhatOffer } from "../../components";
import { Hero } from "../../components/common";

export const About = () => {
  return (
    <div>
      <Hero content="About us" backgroundImg="/imges/about-hero.png" />

      <AboutContent />
      <ChooseUs />
      <Experts />
      <WhatOffer />
    </div>
  );
};
