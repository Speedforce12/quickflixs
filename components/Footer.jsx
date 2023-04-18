import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi"
import {CiLinkedin} from "react-icons/ci"

const Footer = () => {
  return (
    <div className='text-white md:h-64 h-auto flex items-center justify-center bg-[#020C1B] mt-10'>
      <div className='flex items-center justify-center flex-col text-center'>
        <ul className='flex text-xs md:text-base gap-5 pt-10  md:pt-5 pb-5'>
          <li>
            <Link
              href='#'
              className='font-semibold duration-200 transition ease-linear text-white hover:text-rose-500'>
              Terms of Use
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className='font-semibold duration-200 transition ease-linear text-white hover:text-rose-500'>
              Privacy-Policy
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className='font-semibold duration-200 transition ease-linear text-white hover:text-rose-500'>
              About
            </Link>
          </li>
          <li>
            <Link
              href='/#'
              className='font-semibold duration-200 transition ease-linear text-white hover:text-rose-500'>
              Blog
            </Link>
          </li>
          <li>
            <Link
              href='/#'
              className='font-semibold duration-200 transition ease-linear text-white hover:text-rose-500'>
              FAQ
            </Link>
          </li>
        </ul>
        <p className='text-gray-400 text-xs md:text-base font-medium mx-auto w-80 lg:w-[850px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className='flex items-center gap-4 mt-5 md:pb-10 pb-5'>
          <div className='relative group'>
            <div className='absolute inset-0.5 group-hover:duration-200 duration-1000 bg-pink-600 rounded-full blur opacity-0 group-hover:opacity-100 transition'></div>
            <Link
              href='https://www.facebook.com'
              className='rounded-full h-12 w-12 bg-[#04152D] flex items-center justify-center relative'>
              <FaFacebook className='group-hover:text-pink-600 transition duration-200' />
            </Link>
          </div>

          <div className='relative group'>
            <div className='absolute inset-0.5 group-hover:duration-200 duration-1000 bg-pink-600 rounded-full blur opacity-0 group-hover:opacity-100 transition'></div>
            <Link
              href='https://www.instagram.com'
              className='rounded-full h-12 w-12 bg-[#04152D] flex items-center justify-center relative'>
              <FaInstagram className='group-hover:text-pink-600 transition duration-200' />
            </Link>
          </div>

          <div className='relative group'>
            <div className='absolute inset-0.5 group-hover:duration-200 duration-1000 bg-pink-600 rounded-full blur opacity-0 group-hover:opacity-100 transition'></div>
            <Link
              href='https://www.twitter.com'
              className='rounded-full h-12 w-12 bg-[#04152D] flex items-center justify-center relative'>
              <FiTwitter className='group-hover:text-pink-600 transition duration-200' />
            </Link>
          </div>

          <div className='relative group'>
            <div className='absolute inset-0.5 group-hover:duration-200 duration-1000 bg-pink-600 rounded-full blur opacity-0 group-hover:opacity-100 transition'></div>
            <Link
              href='https://www.linkedin.com'
              className='rounded-full h-12 w-12 bg-[#04152D] flex items-center justify-center relative'>
              <CiLinkedin className='group-hover:text-pink-600 transition duration-200' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
