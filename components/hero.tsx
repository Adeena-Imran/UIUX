import React from "react";
import {Poppins} from "next/font/google"
import Image from "next/image";

const poppins= Poppins({subsets:["latin"], weight:['700']})


const Products=[
    { name: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        originalPrice: "Rp 3.500.000",
        discount: "-30%",
        image: "/images/first.png" },
    { name: "Leviosa",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        image: "/images/second.png" },
    { name: "Lolito",
        description: "Luxury big sofa", 
        price: "Rp 7.000.000",
        originalPrice: "Rp 14.000.000",
        discount: "-50%", 
        image: "/images/third.png" },
    { name: "Respira",
        description: "Outdoor bar table and stool", 
        price: "Rp 500.000", 
        badge: "New", 
        image: "/images/fourth.png" },
    { name: "Grifo", 
        description: "Night lamp", 
        price: "Rp 1.500.000", 
        image: "/images/fifth.png" },
    { name: "Muggo", 
        description: "Small mug", 
        price: "Rp 150.000", 
        badge: "New", 
        image: "/images/sixth.png" },
    { name: "Pingky", 
        description: "Cute bed set", 
        price: "Rp 7.000.000", 
        originalPrice: "Rp 14.000.000", 
        discount: "-50%", 
        image: "/images/seventh.png" },
    { name: "Potty", 
        description: "Minimalist flower pot", 
        price: "Rp 500.000", 
        badge: "New", 
        image: "/images/eighth.png" },
  
]

const ProductGrid = () => (
    <div className="py-10 px-5">
     
      <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Products.map(({ image, name, description, price, originalPrice, discount, badge }, index) => (
          <div key={index} className="relative group border rounded-lg overflow-hidden">
            <Image className="w-full h-64 object-cover"
            src={image} 
            alt={name} 
            width={285}
            height={446} />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <button className="bg-white text-black px-4 py-2 rounded-md shadow">Add to cart</button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm text-gray-600">{description}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-lg font-bold">{price}</span>
                {originalPrice && (
                  <span className="text-sm line-through text-gray-400">{originalPrice}</span>
                )}
              </div>
              {discount && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {discount}
                </span>
              )}
              {badge && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  {badge}
                </span>
                )}

            </div>
          </div>
        ))}
       

      </div>
      <div className="flex flex-col lg:flex-row w-auto h-auto bg-[#FCF8F3] pt-[100px] mt-[45px] mx-10">
        {/* Left Section: Text and Explore More Button */}
        <div className="flex flex-col pl-6 lg:pl-[100px] w-full lg:w-1/2 gap-4">
          <h1 className={`${poppins.className} text-[24px] sm:text-[30px] font-bold`}>
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-[16px] sm:text-[20px] w-full sm:w-[400px]">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you
          </p>
          <h2 className="mt-4 sm:mt-[20px]">
            <button className="w-[150px] sm:w-[176px] h-[48px] bg-[#B88E2F] text-white">
              Explore More
            </button>
          </h2>
        </div>

        {/* Right Section: Images */}
        <div className="lg:w-1/2 lg:pl-8 flex flex-col items-center space-y-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
            {/* Image 1 */}
            <div className="relative w-full sm:w-[372px] h-[486px]">
              <Image
                className="object-cover w-full h-full"
                src={"/images/image.png"}
                alt="image"
                width={404}
                height={585}
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-full sm:w-[372px] h-[486px]">
              <Image
                className="object-cover w-full h-full"
                src={"/images/Rectangle 25.png"}
                alt="image"
                width={372}
                height={486}
              />
              <Image
                className="absolute top-4 left-4"
                src={"/images/Indicator.png"}
                alt="image"
                width={120}
                height={27}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Share Image */}
      <div className="w-full">
        <Image
          className="w-full object-cover"
          src={"/images/Share.png"}
          alt="image"
          width={1799}
          height={780}
        />
      </div>
              </div>
);
  
  export default ProductGrid