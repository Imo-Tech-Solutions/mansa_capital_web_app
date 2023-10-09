import React, {useEffect} from 'react'
import { Carousel } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import { Link } from 'react-router-dom';

import carousel_1 from "../../image/banner_1.png"
import carousel_2 from "../../image/banner_2.png"

import AOS from "aos";
import "aos/dist/aos.css";


const HeroCarousel = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
    });
    AOS.refresh();
  }, []);

  const CustomFlowbiteTheme  = {
    root: {
      "base": "relative h-full w-full",
      "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
    },
    indicators: {
      "active": {
        "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        "on": "bg-white dark:bg-gray-800"
      },
      "base": "h-3 w-3 rounded-full",
      "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      "wrapper": "w-full flex-shrink-0 transform cursor-grab snap-center"
    },
    control: {
      "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/50 group-hover:bg-white/80 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
    },
    scrollContainer: {
      "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      "snap": "snap-x"
    }
  };


  return (
    <Flowbite theme={{ theme: CustomFlowbiteTheme  }}>
      <Carousel className='h-full w-screen sm:mt-16'
        slideInterval={8000}
      >

        <div className="flex flex-col h-screen w-screen justify-center dark:text-white
          bg-cover bg-center bg-no-repeat px-5 "
          style={{ backgroundImage: `url(${carousel_1})` }}
        >
          <h1 className='font-extrabold sm:text-7xl text-6xl sm:ml-20'>
            Your Personal <br/> Online Accountant
          </h1>

          <p className='sm:ml-20 mt-5' >
          We provide advice when your business needs it, not just when you ask for it.
          </p>

          <Link
            to='#'
            className="inline-block px-2 py-2 border border-orange-500
              text-orange-500 hover:bg-orange-500 w-64 sm:ml-24 ml-5 mt-10
              hover:text-white rounded transition duration-300 ease-in-out
              font-bold text-3xl justify-center items-center text-center
              "
          >
            Read More
          </Link>
        </div>

        <div className="flex flex-col h-screen w-screen justify-center dark:text-white
          bg-cover bg-center bg-no-repeat px-5 "
          style={{ backgroundImage: `url(${carousel_2})` }}
        >
          <h1 className='font-extrabold sm:text-7xl text-6xl sm:ml-20'>
            Download our  <br/> mobile application
          </h1>

          <p className='sm:ml-20 mt-5' text-4x1 >
          Our Mobile application provide easy and secure access to your account.
          </p>

          <Link
            to='#'
            className="inline-block px-2 py-2 border border-orange-500
              text-orange-500 hover:bg-orange-500 w-64 sm:ml-24 ml-5 mt-10
              hover:text-white rounded transition duration-300 ease-in-out
              font-bold text-3xl justify-center items-center text-center
              "
          >
            Download App
          </Link>
        </div>
      </Carousel>
    </Flowbite>
  )
}

export default HeroCarousel
