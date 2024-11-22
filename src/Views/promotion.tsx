import React from 'react';
import Img from 'next/image';

function Promotion() {
  return (
    <div>
      <div>
        <span className="flex justify-center mt-16 font-semibold text-blue-600">Promotion</span>
        <span className="font-bold text-2xl sm:text-3xl lg:text-4xl mt-3 flex justify-center">
          Our Promotions Events
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 min-h-screen">
        
        {/* First Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-gray-500 p-4 flex md-flex-col justify-between h-full">
            <div className="flex flex-col justify-betwen ml-2">
              <h1 className="text-l sm:text-l lg:text-l font-extrabold mt-6">
                GET UP TO 60%
              </h1>
              <p className="text-sm sm:text-base lg:text-l">For the summer season</p>
            </div>
            <img
              src="/event1.webp" // Corrected the image extension
              alt="Photo 1"
              className="w-full ml-14 object-cover mt-4"
            />
          </div>
          <div className="bg-black p-4 flex flex-col justify-center h-full">
            <h1 className="text-white text-l sm:text-l lg:text-l font-extrabold mt-6 flex justify-center">
              GET 30% Off
            </h1>
            <p className="flex justify-center text-white leading-7 mt-6 text-sm sm:text-base lg:text-l">USE PROMO CODE</p>
            <h1 className="border rounded-sm bg-gray-500 text-white text-l sm:text-l lg:text-l font-extrabold mt-6 flex justify-center">
              DINEWEEKENDSALE
            </h1>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-4 bg-orange-200 p-4 h-full ">
          <div className="flex flex-col mt-4">
            <p className="text-sm sm:text-base lg:text-lg">Flex sweatshirt</p>
            <span className="line-through text-sm sm:text-base lg:text-lg">$100.00</span>
            <span className="text-sm sm:text-base lg:text-lg">$75</span>
          </div>
          <img
            src="/event2.webp" // Corrected the image extension
            alt="Photo 2"
            className="w-full  object-cover "
          />
        </div>

        {/* Third Column */}
        <div className="flex flex-col gap-4 bg-gray-400 p-4 h-full">
          <div className="flex flex-col">
            <p className="text-sm sm:text-base lg:text-lg">Flex Push button Bomber</p>
            <span className="line-through text-sm sm:text-base lg:text-lg">$225.00</span>
            <span className="text-sm sm:text-base lg:text-lg">$190</span>
          </div>
          <img
            src="/event3.webp" // Corrected the image extension
            alt="Photo 3"
            className="w-full  object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Promotion;
