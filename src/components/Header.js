import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header(props) {
  return (
    <header>
      {/* Top Nav Bar */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/e-commerce-logo.png"
            width={60}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search Left */}
        <div className="hidden sm:flex items-center flex-grow cursor-pointer h-10 rounded-md bg-yellow-400 hover:bg-yellow-500">
          <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md" type="text" />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Search Right */}
        <div className="text-white flex items-center space-x-6 mx-6 whitespace-nowrap">
          <div className='link'>
            <p>Hello GF</p>
            <p>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <div className='link relative flex items-center h-14'>
            <span className="w-6 absolute top-0 right-0 text-red-500 font-bold md:right-11 bg-yellow-400 text-center rounded-full" >0</span>
            <ShoppingCartIcon className="h-14"/>
            <p className="mt-2 hidden md:inline font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div></div>
    </header>
  );
}

export default Header;
