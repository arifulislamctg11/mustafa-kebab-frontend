// CategorySlide.js
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
    'Chicken nuggets'
  ];

  // Function to handle scrolling to the left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -150,
        behavior: 'smooth'
      });
    }
  };

  // Function to handle scrolling to the right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 150,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex items-center space-x-4  p-4 bg-white rounded-lg ">
      {/* Left Arrow Icon */}
      <button
        onClick={scrollLeft}
        className="p-2 text-black rounded-full hover:bg-gray-300 bg-gray-200"
      >
        <TiChevronLeft className="h-5 w-5" />
      </button>

      {/* Menu Items */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto whitespace-nowrap custom-scrollbar-hide"
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="px-4 py-2 text-gray-800 rounded-md hover:bg-gray-100 transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Right Arrow Icon */}
      <button
        onClick={scrollRight}
        className="p-2 text-black rounded-full hover:bg-gray-300 bg-gray-200"
      >
        <TiChevronRight className="h-5 w-5" />
      </button>

      {/* Menu Icon */}
      <button className="p-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
        <RiMenuFold2Fill className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CategorySlide;
