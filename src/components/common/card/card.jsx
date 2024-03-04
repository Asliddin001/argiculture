import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ products }) => {
  const navigate = useNavigate();

  const handleCardClick = (productId, imageName) => {
    navigate(`/shop-single/${productId}`, { state: { image: imageName } });
  };

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="w-[335px] bg-Doctor rounded-[30px] cursor-pointer overflow-hidden"
          onClick={() => handleCardClick(product.id, product.image)}
        >
          <div className="py-[30px] px-[17px]">
            {product.category && (
              <span className="px-[12px] py-[5px] bg-Arapawa text-white text-[15px] font-semibold leading-[20px] rounded-[8px]">
                {product.category}
              </span>
            )}

            <div className="w-full flex justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain mt-[13px]"
              />
            </div>
            <div className="content">
              <p className="text-20px font-semibold text-Arapawa">
                {product.name}
              </p>
              <div className="w-full h-[1px] border-[1px] mt-[5px] mb-[7px] border-solid border-[#ddddd] "></div>
              <div className="flex items-center justify-between">
                <div className="flex gap-[7px]">
                  <span className="text-[15px] font-semibold text-drwhite-2 line-through">
                    ${product.originalPrice}.00
                  </span>
                  <span className="text-[18px] font-bold leading-[25px] text-Arapawa">
                    ${product.discountedPrice}.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
