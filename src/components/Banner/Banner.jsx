import { useState } from "react";
import banner from "../../assets/banner.jpg"
import { Star, Info, Heart, Clock, ShoppingBasket, X } from "lucide-react";

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
  const [isMobileBasketOpen, setIsMobileBasketOpen] = useState(false);

  const BasketContent = () => (
    <>
      <h2 className="text-xl flex justify-center font-bold mb-4">Basket</h2>
      <div className="bg-gray-100 p-1 rounded-full mb-6">
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
      <div className="flex flex-col items-center justify-center mt-8">
        <ShoppingBasket className="w-12 h-12 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Fill your basket</h3>
        <p className="text-gray-500">Your basket is empty</p>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Main Content */}
        <main className="flex-1 lg:mr-[320px]">
          {/* Hero Image */}
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-[500px] w-full">
            <img
              src={banner}
              alt="Kebab meat on wooden board"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <div className="border-white border-2 rounded-lg shadow-md w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <img
                  src={banner}
                  alt="Mustafa Kebab logo"
                  className="w-12 h-12 sm:w-14 sm:h-14"
                />
              </div>
            </div>
          </div>

          {/* Restaurant Info */}
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold mb-2 sm:mb-3">Mustafa Kebab</h1>
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                    <span className="ml-1 font-medium">4 (52)</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">Mościckiego 40B</span>
                </div>
                <p className="text-gray-600 text-sm sm:text-[15px]">
                  Do cen dań doliczono koszt opakowania w wysokości 1 zł.
                </p>
                <p className="text-gray-600 text-sm sm:text-[15px] mt-2 sm:mt-3">
                  Professional trader.{" "}
                  <span className="text-blue-600 cursor-pointer">Learn</span> how
                  responsibilities for orders are split with Pyszne.pl
                </p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 sm:p-2.5 rounded-full border border-gray-200 hover:bg-gray-50">
                  <Info className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 sm:p-2.5 rounded-full border border-gray-200 hover:bg-gray-50">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Desktop Basket Sidebar */}
        <aside className="hidden lg:block w-[320px] bg-white border-l border-gray-200 h-screen fixed right-0 overflow-y-auto">
          <div className="p-6">
            <BasketContent />
          </div>
        </aside>

        {/* Mobile Basket Button */}
        <button
          className="lg:hidden fixed bottom-4 right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg"
          onClick={() => setIsMobileBasketOpen(true)}
        >
          <ShoppingBasket className="w-6 h-6" />
        </button>

        {/* Mobile Basket Overlay */}
        {isMobileBasketOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <button onClick={() => setIsMobileBasketOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <BasketContent />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantPage;