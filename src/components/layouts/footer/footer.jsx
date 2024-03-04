import React from "react";
import logo from "/imges/logo.png";
import footerBg from "/imges/footer-bg.png";
import {
  Button,
  Input,
  Facebook,
  Insta,
  Pinterset,
  Twitter,
} from "../../common";

export const Footer = () => {
  return (
    <div className="container">
      <div className="mt-[140px] flex flex-col items-center justify-center py-12">
        <div className="w-full mb-12 h-[323px] relative flex justify-center items-center border- ">
          <img
            src={footerBg}
            alt="img"
            className="w-full h-[323px] -z-10 absolute"
          />
          <div className="w-[1400px] flex items-center gap-6 py-[110px] px-[71px]  justify-between">
            <h2 className="text-white text-[50px] w-[357px] text-left font-extrabold">
              Subscribe to our Newsletter
            </h2>
            <form className="flex items-center gap-2">
              <Input large={true} placeholder="Your Email Address" />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[120px]">
          <div className="flex flex-col left text-Arapawa">
            <h2 className="text-kok font-extrabold text-3xl mb-8 ">
              Contact Us
            </h2>
            <ContactInfo title="Email" value="needhelp@Organia.com" />
            <ContactInfo title="Phone" value="666 888 888" />
            <ContactInfo title="Address" value="88 road, borklyn street, USA" />
          </div>

          <div className="w-1 h-[336px] bg-kulrang mx-8"></div>

          <div className="flex flex-col items-center">
            <img src={logo} alt="img" className="mb-6 w-48 h-12" />

            <p className=" text-lg w-[24rem] text-center mb-8">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing.
            </p>

            <div className="flex items-center gap-6 justify-center">
              <SocialMediaIcon icon={<Insta />} />
              <SocialMediaIcon icon={<Facebook />} />
              <SocialMediaIcon icon={<Twitter />} />
              <SocialMediaIcon icon={<Pinterset />} />
            </div>
          </div>

          <div className="w-1 h-[336px] bg-kulrang mx-8"></div>

          <div className="flex flex-col text-left text-Arapawa ">
            <h2 className="text-kok text-3xl font-bold mb-6">Utility Pages</h2>
            <UtilityLink title="Style Guide" />
            <UtilityLink title="404 Not Found" />
            <UtilityLink title="Password Protected" />
            <UtilityLink title="Licences" />
            <UtilityLink title="Changelog" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ title, value }) => (
  <div className="flex flex-col text-right mb-4">
    <h3 className="font-normal text-gray-500 mb-1 text-lg">{title}</h3>
    <p className="text-black/50 text-base">{value}</p>
  </div>
);

const SocialMediaIcon = ({ icon }) => (
  <div className="w-12 h-12 bg-kulrang rounded-full flex justify-center items-center">
    {icon}
  </div>
);

const UtilityLink = ({ title }) => (
  <li className="text-base text-black/50 font-normal mb-2">{title}</li>
);
