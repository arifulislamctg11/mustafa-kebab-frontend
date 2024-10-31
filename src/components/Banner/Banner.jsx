import { useState } from "react";
import banner from "../../assets/banner.jpg";
import { Star, Info, Heart, Clock, ShoppingBasket } from "lucide-react";

const DeliveryOption = ({ icon: Icon, title, time, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 py-2 px-4 rounded-full transition-colors ${
      isActive ? "bg-white shadow-sm" : ""
    }`}
  >
    <Icon className="w-5 h-5 text-gray-600" />
    <div className="text-left">
      <div className="text-sm font-medium">{title}</div>
      <div className="text-[11px] text-gray-500">from {time}</div>
    </div>
  </button>
);

const RestaurantPage = () => {
  const [deliveryType, setDeliveryType] = useState("delivery");
  
  return (
    <div className="flex min-h-screen bg-white mt-4 rounded-md">
      {/* Main Content */}
      <div className="flex-1 lg:mr-[320px]">
        {/* Hero Image */}
        <div className="relative h-[200px] md:h-[300px] lg:h-[400px] w-full">
          <img
            src={banner}
            alt="Kebab meat on wooden board"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6">
            <div className="border-white border-2 rounded-lg shadow-md w-20 h-20 flex items-center justify-center">
              <img
                src={banner}
                alt="Mustafa Kebab logo"
                className="w-14 h-14"
              />
            </div>
          </div>
        </div>

        {/* Restaurant Info */}
        <div className="max-w-[1000px] mx-auto px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-[32px] font-bold mb-3">Mustafa Kebab</h1>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                  <span className="ml-1 font-medium">4 (52)</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">Mościckiego 40B</span>
              </div>
              <p className="text-gray-600 text-[15px]">
                Do cen dań doliczono koszt opakowania w wysokości 1 zł.
              </p>
              <p className="text-gray-600 text-[15px] mt-3">
                Professional trader.{" "}
                <span className="text-blue-600 cursor-pointer">Learn</span> how
                responsibilities for orders are split with Pyszne.pl
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2.5 rounded-full border border-gray-200 hover:bg-gray-50">
                <Info className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2.5 rounded-full border border-gray-200 hover:bg-gray-50">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Basket Section - Moved Below Image */}
        <div className="lg:hidden w-full bg-white border-t border-gray-200 p-6">
          <h2 className="text-xl text-center font-bold mb-4">Basket</h2>

          {/* Delivery Toggle - Updated Design */}
          <div className="bg-gray-100 p-1 rounded-full mb-4">
            <div className="flex justify-between">
              <DeliveryOption
                icon={Clock}
                title="Delivery"
                time="13:45"
                isActive={deliveryType === "delivery"}
                onClick={() => setDeliveryType("delivery")}
              />
              <DeliveryOption
                icon={ShoppingBasket}
                title="Pickup"
                time="13:15"
                isActive={deliveryType === "pickup"}
                onClick={() => setDeliveryType("pickup")}
              />
            </div>
          </div>

          {/* Empty Basket State */}
          <div className="flex flex-col items-center justify-center mt-32">
            <div className="mb-6">
              <ShoppingBasket className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fill your basket</h3>
            <p className="text-gray-500">Your basket is empty</p>
          </div>
        </div>
      </div>

      {/* Fixed Basket for larger screens */}
      <div className="hidden lg:block w-[320px] bg-white border-l border-gray-200 h-screen absolute right-0">
        <div className="p-6">
          <h2 className="text-xl text-center font-bold mb-4">Basket</h2>

          {/* Delivery Toggle - Updated Design */}
          <div className="bg-gray-100 p-1 rounded-full mb-4">
            <div className="flex justify-between">
              <DeliveryOption
                icon={Clock}
                title="Delivery"
                time="13:45"
                isActive={deliveryType === "delivery"}
                onClick={() => setDeliveryType("delivery")}
              />
              <DeliveryOption
                icon={ShoppingBasket}
                title="Pickup"
                time="13:15"
                isActive={deliveryType === "pickup"}
                onClick={() => setDeliveryType("pickup")}
              />
            </div>
          </div>

          {/* Empty Basket State */}
          <div className="flex flex-col items-center justify-center mt-32">
            <div className="mb-6">
              <ShoppingBasket className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fill your basket</h3>
            <p className="text-gray-500">Your basket is empty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
