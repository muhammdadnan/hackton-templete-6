"use client";

import React from "react";
import Image from "next/image";
import OurProductImg from "./../Assets/OurProducts.png";
import { Icon } from "@iconify/react";

const products = [
  {
    id: 1,
    name: "Syltherine",
    fullname: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    image: "/Images/image-1.png",
    discount: "-30%",
  },
  {
    id: 2,
    name: "Leviosa",
    fullname: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "",
    image: "/Images/image-2.png",
  },
  {
    id: 3,
    name: "Lolito",
    fullname: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/Images/image-3.png",
    discount: "-50%",
  },
  {
    id: 4,
    name: "Respira",
    fullname: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/Images/image-4.png",
  },
  {
    id: 5,
    name: "Grifo",
    fullname: "Night lamp",
    price: "Rp 1.500.000",
    originalPrice: "",
    image: "/Images/image-5.png",
  },
  {
    id: 6,
    name: "Muggo",
    fullname: "Small mug",
    price: "Rp 150.000",
    originalPrice: "",
    image: "/Images/image-6.png",
  },
  {
    id: 7,
    name: "Pingky",
    fullname: "Cute bed set",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/Images/image-7.png",
    discount: "-50%",
  },
  {
    id: 8,
    name: "Potty",
    fullname: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/Images/image-8.png",
  },
];
const OurProduct = () => {
  return (
    <div>
      <div className="w-full border-b-2 py-16 flex flex-col justify-center bg-[#F4F5F7] px-4">
        <div className="flex flex-col gap-[32px] w-fit mx-auto">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#3a3a3a]">
              Our Products
            </h1>
          </div>

          {/* Cards */}
          <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-6 overflow-x-auto no-scrollbar flex-wrap justify-center w-full">
            {/* Cards for Products */}
            {products.map((product, index) => (
              <div
                className="bg-white group relative overflow-hidden w-72 md:w-[285px] lg:w-[285px]"
                key={index}
              >
                {/* Image Container */}
                <div className="w-full h-[301px]">
                  <div
                    className="flex h-full w-full bg-no-repeat bg-center relative group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url(${product.image})`,
                    }}
                  >
                    {/* NEW Badge */}
                    {(index === 3 || index === 5 || index === 7) && (
                      <div className="bg-[#2EC1AC] h-[48px] w-[48px] bg-GreenAccents rounded-full flex items-center justify-center absolute top-6 right-6">
                        <p className="text-[16px] font-medium text-white">
                          NEW
                        </p>
                      </div>
                    )}
                    {/* Discount Badge */}
                    {(index === 0 || index === 2 || index === 6) && (
                      <div className="bg-[#E97171] h-[48px] w-[48px] bg-RedAccents rounded-full flex items-center justify-center absolute top-6 right-6">
                        <p className="text-[16px] font-medium text-white">
                          {product.discount}
                        </p>
                      </div>
                    )}
                  </div>
                  {/* Add to Cart Button */}
                  <div className="h-full absolute bottom-0 w-full flex flex-col gap-[24px] items-center justify-center bg-opacity-0 opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 bg-[#3a3a3a] transition-opacity duration-300">
                    <button className="text-[16px] font-medium text-primary bg-white px-[52px] py-[12px]">
                      Add to Cart
                    </button>
                    <div className="flex gap-4 text-white text-sm mt-2">
                      <button className="flex items-center gap-1 text-[16px] font-semibold">
                        <Icon icon="gridicons:share" className="" /> Share
                      </button>
                      <button className="flex items-center gap-1 text-[16px] font-semibold">
                        <Icon
                          icon="fluent:arrow-swap-28-regular"
                          className=""
                        />
                        Compare
                      </button>
                      <button className="flex items-center gap-1 text-[16px] font-semibold">
                        <Icon icon="mingcute:heart-line" className="" /> Like
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="w-fit pt-[16px] pb-[30px] pr-[20px] pl-[16px]">
                  <h2 className="text-[24px] font-semibold text-Gray1">
                    {product.name}
                  </h2>
                  <h4 className="text-[16px] font-medium text-Gray2">
                    {product.fullname}
                  </h4>
                  <div className="w-fit flex gap-[16px] items-center">
                    <p className="text-[20px] font-semibold text-Gray1">
                      {product.price}
                    </p>
                    {product.originalPrice && (
                      <p className="text-[16px] font-normal text-Gray4 line-through">
                        {product.originalPrice}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="w-full text-center mt-5">
            <button className="text-[16px] font-semibold bg-white py-[12px] px-[72px] text-primary border border-primary">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
