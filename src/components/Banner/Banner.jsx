import { Info, Heart } from 'lucide-react';
import Basket from './Basket';
import banner from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <div className="bg-white">
      {/* Mobile View (default) */}
      <div className="block md:hidden">
        <div className="relative h-[200px] w-full">
          <img
            src={banner}
            alt="Kebab on wooden board"
            className=" h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white rounded-lg p-2">
            <img
              src={banner}
              alt="Mustafa Kebab logo"
              className="w-12 h-12"
            />
          </div>
        </div>
        
        <div className="px-4 py-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">Mustafa Kebab</h1>
              <div className="flex items-center mt-1">
                <span className="text-orange-500">★</span>
                <span className="font-semibold ml-1">4.1</span>
                <span className="text-gray-500 ml-1">(53)</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Do cen dań doliczono koszt opakowania w wysokości 1 zł.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-full border border-gray-300">
                <Info className="h-6 w-6 text-gray-500" />
              </button>
              <button className="p-2 rounded-full border border-gray-300">
                <Heart className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Basket section below content on mobile */}
        <div className="flex items-center justify-center mx-auto">
          <Basket />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex">
        <div className="flex-grow mr-[350px]">
          <div className="relative h-[450px] w-full">
            <img
              src={banner}
              alt="Kebab on wooden board"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-2">
              <img
                src={banner}
                alt="Mustafa Kebab logo"
                className="w-12 h-12"
              />
            </div>
          </div>
          
          <div className="px-4 py-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">Mustafa Kebab</h1>
                <div className="flex items-center mt-1">
                  <span className="text-orange-500">★</span>
                  <span className="font-semibold ml-1">4.1</span>
                  <span className="text-gray-500 ml-1">(53)</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Do cen dań doliczono koszt opakowania w wysokości 1 zł.
                </p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border border-gray-300">
                  <Info className="h-6 w-6 text-gray-500" />
                </button>
                <button className="p-2 rounded-full border border-gray-300">
                  <Heart className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Basket Section for Desktop */}
        {/* <div className="fixed top-20 right-0 w-[350px] border-l border-gray-200">
          <Basket />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
