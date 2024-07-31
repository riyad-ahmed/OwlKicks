import React from 'react';
import Menu from './Menu';
import { CiUser } from "react-icons/ci";
import { BsQuestionCircle } from "react-icons/bs";

import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='bg-[#fff] py-4 border-b border-[#f0f0f0] sm:px-10 px-6 font-[sans-serif] min-h-[70px]'>
      <div className='flex flex-wrap items-center justify-between lg:gap-y-2 gap-y-4 gap-x-4'>
        <div className='hidden lg:block justify-end'>
          <Menu />
        </div>
        <div className='m-auto'>
            <a href="add" className='text-[40px] font-bold font-[Righteous]'>
              OwlKicks
            </a>
        </div>
        <div className='flex items-center ml-auto lg:order-1'>
          <div className="flex items-center">
            <span className="relative mr-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24"
                className="cursor-pointer hover:fill-[#FFA726] inline-block" fill="#000">
                <path
                  d="M1 1a1 1 0 1 0 0 2h1.78a.694.694 35.784 0 1 .657.474l3.297 9.893c.147.44.165.912.053 1.362l-.271 1.087C6.117 17.41 7.358 19 9 19h12a1 1 0 1 0 0-2H9c-.39 0-.64-.32-.545-.697l.205-.818A.64.64 142.028 0 1 9.28 15H20a1 1 0 0 0 .95-.684l2.665-8A1 1 0 0 0 22.666 5H6.555a.694.694 35.783 0 1-.658-.474l-.948-2.842A1 1 0 0 0 4 1zm7 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                  data-original="#000000" paintOrder="fill markers stroke"></path>
              </svg>
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
            </span>
            <input type="text" placeholder="Search something..."
              className="bg-[#e5e5e5] focus:bg-[#d8d8d8] focus:drop-shadow-sm w-full px-6 h-10 rounded outline-none text-sm"
            ></input>
          </div>
          <div id='user' >
            <Link to="/account">  
              <CiUser className='text-2xl ml-3'/>
            </Link>
          </div>
          <div>
          <BsQuestionCircle className='text-xl ml-3'/>
          </div>
        </div>
      </div>
    </header>
  );

};

export default Header;