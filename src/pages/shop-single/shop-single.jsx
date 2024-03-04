import React from "react";
import { useParams } from "react-router-dom";
import { Arrow, Button, Card, Hero, Star } from "../../components/common";
import { cardsData, shopSingleData } from "../../data/data";

export const ShopSingle = () => {
  const { productId } = useParams();
  const productDetails = cardsData.find(
    (product) => product.id === parseInt(productId)
  );

  if (!productDetails) {
    return <div>Error loading product details</div>;
  }

  return (
    <div>
      <Hero backgroundImg={"/imges/shop-single-bg.jpg"} content="Shop Single" />
      <div className="container">
        <div className="flex  items-center gap-[88px] mt-[133px]">
          <div className="w-[600px] p-[35px] bg-Doctor rounded-[30px]">
            <span className="px-[12px] py-[5px]   bg-Arapawa text-white text-[15px] font-semibold leading-[20px] rounded-[8px]">
              {productDetails.category}
            </span>
            <img
              src={productDetails.image}
              alt={productDetails.name}
              className="w-full fill-none "
            />
          </div>
          <div className="flex flex-col gap-[10px] w-[659px]">
            <h3 className="text-Arapawa text-[40px] font-bold">
              {productDetails.name}
            </h3>
            <div className="flex">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="flex gap-[7px]">
              <span className="text-[15px] font-semibold text-drwhite-2 line-through">
                ${productDetails.originalPrice}.00
              </span>
              <span className="text-[18px] font-bold leading-[25px] text-Arapawa">
                ${productDetails.discountedPrice}.00
              </span>
            </div>
            <p className="text-[18px] text-CityRain leading-[29px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="flex items-center gap-[22px]">
              <p>Quantity :</p>
              <Button variant="secondary">1</Button>
              <Button icon={<Arrow />}>Add To Cart</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[90px] gap-[27px]">
          <div className="flex items-center gap-[20px]">
            <Button>Product Description</Button>
            <Button variant="thirdy">Additional Info</Button>
          </div>
          <p className="text-[18px] text-CityRain text-center">
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health,
            ecology, and care. We aim to give our customers a healthy
            chemical-free meal for perfect nutrition. It offers about 8–10%
            carbs. Simple sugars — such as glucose and fructose — make up 70%
            and 80% of the carbs in raw.
          </p>
        </div>
        <div className="">
          <h2 className="text-Arapawa text-[50px] font-bold text-center mt-[140px] mb-[40px]">
            Related Products
          </h2>
          <div className="flex gap-[20px]">
            <Card products={shopSingleData} />
          </div>
        </div>
      </div>
    </div>
  );
};
