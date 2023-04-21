import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/images/logo.png";
import { FiSearch } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import MiniSearchBar from "./MiniSearchBar";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showMiniNav, setShowMiniNav] = useState(false)

  return (
    <header className='sticky top-0 bg-black z-20  py-3 flex items-center justify-between bg-opacity-40 px-3 lg:px-0'>
      <div className='flex items-center justify-between w-full max-w-7xl mx-auto relative'>
        <Link href='/' className='flex items-center gap-2'>
          <Image src={logo} alt='logo' className='object-cover w-10' />
          <h1 className='text-3xl bg-gradient-to-r from-orange-500 to-pink-600 inline-block text-transparent bg-clip-text font-bold tracking-tighter'>
            QuickFlicks
          </h1>
        </Link>
        <div className='flex items-center gap-5'>
          <Link
            href='/explore/movie'
            className='text-white text-lg hover:text-orange-500 duration-200 hidden lg:block'>
            Movie
          </Link>
          <Link
            href='/explore/tv'
            className='text-white text-lg duration-200 hover:text-orange-500 hidden lg:block'>
            TV Shows
          </Link>
          <Link
            href='/people'
            className='text-white text-lg duration-200 hover:text-orange-500 hidden lg:block'>
            People
          </Link>

          <FiSearch
            className='text-white text-xl duration-200 hover:text-orange-500 cursor-pointer'
            onClick={() => setShowMiniNav(!showMiniNav)}
          />

          {showMiniNav && (
            <di className='absolute top-16 right-1'>
              <MiniSearchBar setShowMiniNav={setShowMiniNav} />
            </di>
          )}

          <div className='flex items-center lg:hidden'>
            {showNav ? (
              <>
                <nav className='absolute duration-500 ease-in-out top-16 left-0 w-full bg-black py-4 px-6 space-y-2'>
                  <Link
                    href='/explore/movie'
                    className='text-white text-lg hover:text-orange-500 duration-200 block'
                    onClick={() => setShowNav(false)}>
                    Movie
                  </Link>
                  <Link
                    href='/explore/tv'
                    className='text-white text-lg hover:text-orange-500 duration-200 block'
                    onClick={() => setShowNav(false)}>
                    TV Shows
                  </Link>
                  <Link
                    href='/people'
                    className='text-white text-lg hover:text-orange-500 duration-200 block'
                    onClick={() => setShowNav(false)}>
                    People
                  </Link>
                </nav>
                <MdClose
                  className='text-white text-xl hover:animate-pulse cursor-pointer'
                  onClick={() => setShowNav(false)}
                />
              </>
            ) : (
              <HiMenuAlt3
                className='text-white text-xl cursor-pointer'
                onClick={() => setShowNav(true)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
