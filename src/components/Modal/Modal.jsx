import { HiMiniBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { CiGift } from "react-icons/ci";
import { TbGiftCard } from "react-icons/tb";
import { AiOutlineTruck } from "react-icons/ai";
import { MdAddBusiness } from "react-icons/md";
import { LiaHandshake } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { IoLanguageOutline } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";
const Modal = () => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className=""
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <HiMiniBars3 className="text-2xl" />
      </button>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-white ">
          <form method="dialog ">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl mt-3 text-black">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl text-black">My account</h3>
          <div className="text-xl font-semibold flex justify-between mt-5  ">
            <button className="text-black bg-slate-200  px-10 md:px-16 py-1 rounded-full">
              Sign in
            </button>
            <button className="text-white bg-orange-600 px-4 md:px-8 py-1 rounded-full">
              Create account
            </button>
          </div>
          {/* menu bar */}
          <div className="mt-7 ">
            <ul className="space-y-5 font-extralight ">
              <li>
                <NavLink className="flex gap-5 text-black ">
                  {" "}
                  <LiaShoppingBagSolid className=" text-2xl mt-1 " />{" "}
                  <span className="text-xl">Orders</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="flex gap-5 text-black ">
                  {" "}
                  <MdOutlineFavoriteBorder className=" text-2xl mt-1" />{" "}
                  <span className="text-xl">Favourites</span>
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink className="flex gap-5 text-black ">
                  {" "}
                  <CiGift className=" text-2xl mt-1 " />{" "}
                  <span className="text-xl">Punkty</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="flex gap-5 text-black ">
                  {" "}
                  <LuBadgePercent className=" text-2xl mt-1" />{" "}
                  <span className="text-xl">StampCards</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="flex gap-5 text-black ">
                  {" "}
                  <BsExclamationCircle className=" text-2xl mt-1 " />{" "}
                  <span className="text-xl">Need help?</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="flex gap-5 text-black ">
                  {" "}
                  <TbGiftCard className=" text-2xl mt-1" />{" "}
                  <span className="text-xl">Gift cards</span>
                </NavLink>
              </li>
              <div className="divider lg:hidden"></div>
              <li>
                <NavLink className="flex gap-5 text-black lg:hidden ">
                  {" "}
                  <CiLocationOn className=" text-2xl mt-1 " />{" "}
                  <span className="text-xl">Country</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="flex gap-5 text-black lg:hidden">
                  {" "}
                  <IoLanguageOutline className=" text-2xl mt-1" />{" "}
                  <span className="text-xl">Language</span>
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink className="flex gap-5 text-black ">
                  {" "}
                  <AiOutlineTruck className=" text-2xl mt-1 " />{" "}
                  <span className="text-xl">Become a courier</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="flex gap-5 text-black ">
                  {" "}
                  <MdAddBusiness className=" text-2xl mt-1" />{" "}
                  <span className="text-xl">Pyszne.pl for business</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="flex gap-5 text-black ">
                  {" "}
                  <LiaHandshake className=" text-2xl mt-1" />{" "}
                  <span className="text-xl">Partner with us</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default Modal;
