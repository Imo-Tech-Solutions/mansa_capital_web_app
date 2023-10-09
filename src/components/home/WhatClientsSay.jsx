import React from 'react'
import { Carousel } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';


const WhatClientsSay = () => {

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
    <Flowbite theme={{ theme: CustomFlowbiteTheme  }}
    className='flex flex-row justify-center items-center'
    >
    <Carousel className='sm:h-full h-96 sm:w-full'
      slideInterval={8000}
    >

      <div className="flex flex-col h-screen w-full justify-center
        px-5"
      >
        <h1 className='font-extrabold sm:text-8xl text-6xl sm:ml-10
        text-orange-500 font-sans italic'>
          ''
        </h1>

        <p className='sm:ml-10 mt-2 text-gray-600 sm:text-2xl text-lg italic px-10' >
            “ We have working with Mansa Capital for three years. there
            team is very professional and are always gives clear advice
            and guidance in a prompt and efficient manner
        </p>

        <p className='sm:ml-20 mt-5 text-gray-700 px-10 font-bold text-right' >
            - Chinedu Roland Eke -
        </p>
      </div>

      <div className="flex flex-col h-screen w-full justify-center
        px-5"
      >
        <h1 className='font-extrabold sm:text-8xl text-6xl sm:ml-10
        text-orange-500 font-sans italic'>
          ''
        </h1>

        <p className='sm:ml-10 mt-2 text-gray-600 sm:text-2xl text-lg italic px-10' >
            “ We have working with Mansa Capital for three years. there
            team is very professional and are always gives clear advice
            and guidance in a prompt and efficient manner
        </p>

        <p className='sm:ml-20 mt-5 text-gray-700 px-10 font-bold text-right' >
            - Abdulai Lebbie -
        </p>
      </div>

    </Carousel>
  </Flowbite>
  )
}

export default WhatClientsSay

