import React, { useRef } from 'react';
import { RiMenuFold2Fill } from 'react-icons/ri';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';

// Menu Component
const CategorySlide = () => {
  const scrollRef = useRef(null);

  const menuItems = [
    'Kebab rollowany',
    'Kebab w bułce',
    'Talerz Kebab zestaw',
    'Kebab Box',
    'Kapsalon',
    'Chicken nuggets',
    'Chicken nuggets',
    'Chicken nuggets',
  ];

  // Function to handle scrolling to the left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -150,
        behavior: 'smooth',
      });
    }
  };

  // Function to handle scrolling to the right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 150,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex items-center justify-between space-x-4 p-4  lg:px-0 md:px-0 px-0  bg-white  w-full">
      {/* Left Arrow Icon - Hidden on small devices */}
      <button
        onClick={scrollLeft}
        className="hidden md:block p-2 text-black rounded-full hover:bg-gray-300 bg-gray-200"
      >
        <TiChevronLeft className="h-6 w-6 " />
      </button>

      {/* Menu Items */}
      <div
        ref={scrollRef}
        className="flex-1 flex space-x-3 lg:font-normal  md:font-normal font-semibold overflow-x-auto whitespace-nowrap custom-scrollbar-hide scroll-smooth"
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="px-4 py-2 text-gray-800 text-base lg:text-md xl:text-md    rounded-md hover:bg-gray-100 transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Right Arrow Icon - Hidden on small devices */}
      <button
        onClick={scrollRight}
        className="hidden md:block p-2 text-black rounded-full hover:bg-gray-300 bg-gray-200"
      >
        <TiChevronRight className="h-6 w-6 " />
      </button>

      {/* Menu Icon */}
      <button className="p-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
        <RiMenuFold2Fill className="lg:h-6  lg:w-6 md:h-6  md:w-6 h-4 w-4 " />
      </button>
    </div>
  );
};

export default CategorySlide;
