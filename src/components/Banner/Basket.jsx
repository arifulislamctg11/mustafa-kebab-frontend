import React, { useState } from 'react';
import { ShoppingBasket, Truck, MapPin } from 'lucide-react';

const Basket = () => {
  const [selectedOption, setSelectedOption] = useState('delivery'); // Default to 'delivery'

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-[350px] p-4 bg-white rounded-lg">
      {/* Heading for small and medium devices */}
      <h2 className="hidden lg:flex justify-center text-xl font-bold mb-4">Basket</h2>

      {/* Delivery and Pickup Options */}
      <div className="flex justify-around mb-4">
        {/* Delivery Option */}
        <div
          className={`flex items-center gap-2 rounded-full px-6 py-1 cursor-pointer ${selectedOption === 'delivery' ? 'bg-[#ea7232]' : 'bg-gray-100'}`}
          onClick={() => handleOptionChange('delivery')}
        >
          <Truck className="h-4 w-4 text-gray-700" />
          <div>
            <h1 className={`text-sm font-bold ${selectedOption === 'delivery' ? 'text-white' : 'text-gray-500'}`}>Delivery</h1>
            <span className="text-sm text-gray-500">from 13:45</span>
          </div>
        </div>

        {/* Pickup Option */}
        <div
          className={`flex items-center gap-2 rounded-full px-6 py-1 cursor-pointer ${selectedOption === 'pickup' ? 'bg-[#ea7232]' : 'bg-gray-100'}`}
          onClick={() => handleOptionChange('pickup')}
        >
          <MapPin className="h-4 w-4 text-gray-700" />
          <div>
            <h1 className={`text-sm font-bold ${selectedOption === 'pickup' ? 'text-white' : 'text-gray-500'}`}>Pickup</h1>
            <span className="text-sm text-gray-400">from 13:15</span>
          </div>
        </div>
      </div>

      {/* Full Basket Content for Medium and Larger Devices */}
      <div className="hidden md:flex flex-col items-center justify-center h-[calc(100vh-180px)]">
        <ShoppingBasket className="h-16 w-16 text-gray-300 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Fill your basket</h3>
        <p className="text-gray-400">Your basket is empty</p>
      </div>

      {/* Toggle between Delivery and Pickup content (only visible on larger devices) */}
      <div className="hidden sm:block flex flex-col items-center justify-center mt-4">
        {selectedOption === 'delivery' ? (
          <>
            <h3 className="text-xl font-semibold mb-2">Delivery Option Selected</h3>
            <p className="text-gray-500">Your delivery will arrive at 13:45</p>
          </>
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-2">Pickup Option Selected</h3>
            <p className="text-gray-500">Pickup available from 13:15</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;
