import PropTypes from 'prop-types';
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react';
import { Fragment, useState } from 'react';
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
import SignIn from '../../pages/Authontaction/SignIn';
import SignUp from '../../pages/Authontaction/SignUp';
import { GrPrevious } from "react-icons/gr";
import { MdCancel } from "react-icons/md";

const MenuModal = ({ closeModal, isOpen }) => {
    const [activeComponent, setActiveComponent] = useState('initial');

    const handleSignInClick = () => {
        setActiveComponent('SignIn');
    };
    const handleSignUpClick = () => {
        setActiveComponent('SignUp');
    };
    const handlePreviousClick = () => {
        setActiveComponent('initial');
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle as='h3' className='text-lg font-medium text-center leading-6 text-gray-900 relative'>
                                    {activeComponent !== 'initial' && (
                                        <button
                                            onClick={handlePreviousClick}
                                            className="text-gray-500 underline absolute top-0 left-0 text-3xl hover:bg-gray-100 p-1 rounded-md"
                                        >
                                            <GrPrevious />
                                        </button>
                                    )}

                                    <button
                                        onClick={closeModal}
                                        className="absolute top-0 right-0 text-3xl text-gray-500 hover:bg-gray-100 p-1 rounded-md"
                                    >
                                        <MdCancel />
                                    </button>

                                    <h3 className="font-bold text-xl text-black">My account</h3>

                                    <div className="text-xl font-semibold flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mt-5">
                                        <button
                                            onClick={handleSignInClick}
                                            className={`w-full sm:w-auto py-2 sm:px-8 sm:py-2 md:px-10 md:py-2 rounded-full ${activeComponent === 'SignIn' ? 'bg-orange-600 text-white' : 'bg-slate-200 text-black'}`}
                                        >
                                            Sign in
                                        </button>
                                        <button
                                            onClick={handleSignUpClick}
                                            className={`w-full sm:w-auto py-2 sm:px-8 sm:py-2 md:px-10 md:py-2 rounded-full ${activeComponent === 'SignUp' ? 'bg-orange-600 text-white' : 'bg-slate-200 text-black'}`}
                                        >
                                            Create account
                                        </button>
                                    </div>
                                </DialogTitle>

                                <div className="mt-7">
                                    {activeComponent === 'SignIn' && <SignIn />}
                                    {activeComponent === 'SignUp' && <SignUp />}
                                    {activeComponent === 'initial' && (
                                        <ul className="space-y-5 font-extralight">
                                            <li>
                                                <NavLink className="flex gap-5 text-black ">
                                                    <LiaShoppingBagSolid className="text-2xl mt-1" />
                                                    <span className="text-xl">Orders</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="flex gap-5 text-black ">
                                                    <MdOutlineFavoriteBorder className="text-2xl mt-1" />
                                                    <span className="text-xl">Favourites</span>
                                                </NavLink>
                                            </li>
                                            <div className="divider"></div>

                                            <li>
                                                <NavLink className="flex gap-5 text-black ">
                                                    <LuBadgePercent className="text-2xl mt-1" />
                                                    <span className="text-xl">StampCards</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

MenuModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default MenuModal;
