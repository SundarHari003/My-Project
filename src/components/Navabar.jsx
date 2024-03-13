import React, { useState } from "react";
import { BiRestaurant } from "react-icons/bi";
import {FaCaretDown}  from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import {Link} from 'react-scroll';
import Buttons from "../layout/Buttons";


const Navabar = () => {
    const [menu,setMenu]=useState(true);

    const handleOpen=()=>{
        setMenu(!menu);
    }
    const closeMenu=()=>{
        setMenu(!menu);
    }
  return (
    <div className='fixed w-full'>
      <div>
        <div className='flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
          <div className='flex flex-row items-center cursor-pointer'>
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className='text-xl font-semibold'>FoodieWeb</h1>
          </div>
          <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
            <Link to="home" spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-all'>
              Home
            </Link>
            <div className='relative group'>
                <div className='flex items-center gap-1 relative'>
                    <Link to="dishes" spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-all'>
                    Dishes<FaCaretDown className='absolute top-1 left-14 pl-2'/>
                    </Link>
                </div>
                <ul className='absolute space-y-2 hidden group-hover:block border-2 border-gray-300 bg-white p-5 rounded-lg -left-6 '>
                    <li>
                        <Link to="dishes" spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-all'>
                        Spicy
                        </Link>
                    </li>
                    <li>
                        <Link to="dishes" spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-all'>
                        Tasty
                        </Link>
                    </li>
                    <li>
                        <Link to="dishes" spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-all'>
                        Delicious
                        </Link>
                    </li>
                    <li>
                        <Link to="dishes" spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-all'>
                        Crispy
                        </Link>
                    </li>
                </ul>
            </div>
            <Link to="about" spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-all'>
              About
            </Link>
            <Link to="menu" spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-all'>
              Menu
            </Link>
            <Link to="review" spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-all'>
              Review
            </Link>
            <Buttons title="Login"/>
            </nav>
            <div className='md:hidden flex items-center'>
                {
                    menu?( <CiMenuFries size={32} onClick={closeMenu}/>):(<IoCloseOutline size={32} onClick={handleOpen}/>)
                }
            </div>
        </div>
        <div className={`${menu?'translate-x-full':'translate-x-0'} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
            <Link to="home" spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-all'>
              Home
            </Link>
                <Link to="dishes" spy={true} smooth={true} duration={500} className='cursor-pointer flex justify-center items-center pl-4 hover:text-orange-500 transition-all'>
                    Dishes<FaCaretDown/>
                </Link>
            <Link to="about" spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-all'>
              About
            </Link>
            <Link to="menu" spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-all'>
              Menu
            </Link>
            <Link to="review" spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-all'>
              Review
            </Link>
            <Buttons title="Login"/>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
