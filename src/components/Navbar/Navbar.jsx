
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiRestaurantFill } from "react-icons/ri";
import Modal from "../Modal/Modal";
import { FaCircleHalfStroke } from "react-icons/fa6";
const Navabr = () => {
    return (
        <div>
          <div className="navbar bg-base-100 shadow-xl ">
  <div className="navbar-start">
    <div className="dropdown">
      {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div> */}
      {/* <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul> */}
    </div>
    <a className=" text-orange-500 text-xl flex "><MdOutlineKeyboardArrowLeft className="mt-2 text-2xl"/><RiRestaurantFill className="mt-2 text-2xl"/><span className="font-bold text-2xl">Pyszne.</span>pl</a>
  </div>
  <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="text-black font-semibold">Menu</li>
      
    </ul>
  </div>
  
  <div className="navbar-end">
  <h1 className="justify-end hidden lg:flex lg:mr-10 text-xl"><FaCircleHalfStroke /></h1>
  <Modal></Modal>
  
  </div>
</div>
        </div>
    );
};

export default Navabr;