
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiRestaurantFill } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MenuModal from "../Modal/MenuModal";
import { useState } from "react";
const Navabr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-xl ">
        <div className="navbar-start">
          <div className="dropdown">

          </div>
          <Link to='/' className=" text-orange-500 text-xl flex "><MdOutlineKeyboardArrowLeft className="mt-2 text-2xl" /><RiRestaurantFill className="mt-2 text-2xl" /><span className="font-bold text-2xl">Mustofa</span>kebab</Link>
        </div>
        {/* Menu */}
        <div className="navbar-center  lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-black font-semibold lg:flex hidden">Menu</li>

          </ul>
        </div>

        <div className="navbar-end">
          <h1 className="justify-end hidden lg:flex lg:mr-10 text-xl"><FaCircleHalfStroke /></h1>
          {/* here is a nav modal  */}
          <div className='p-4'>
            <button
              onClick={() => setIsOpen(true)}
               ><TiThMenu /></button>
          </div>
          <MenuModal isOpen={isOpen} closeModal={closeModal}></MenuModal>

        </div>
      </div>
    </div>
  );
};

export default Navabr;