/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import HeroCarousel from '../components/home/HeroCarousel'
import Rating from '../components/home/Rating'
import OurExperts from '../components/home/OurExperts'


import who_we_are2 from '../image/who_we_are_2.png'
import who_we_are1 from '../image/who_we_are.png'
import { Link } from 'react-router-dom'
import OurExpertise from '../components/home/OurExpertise'
import WhatClientsSay from '../components/home/WhatClientsSay'
import Blog from '../components/home/Blog'


const Home = () => {
  return (
    <>
      <div className='w-screen h-carousel'>
        <HeroCarousel />
      </div>

      <Rating />

      <section class=" " id="whoWeAre">
        <div class="container max-w-8xl mx-auto m-8">

          <div
            class="flex flex-wrap flex-col-reverse sm:flex-row"
          >
            <div class="w-full sm:w-1/2 p-6
              bg-cover bg-center bg-no-repeat px-5 flex flex-col justify-center"
              style={{ backgroundImage: `url(${who_we_are1})` }}
            >
              <h3 className='text-2xl text-orange-500'>
                who we are
              </h3>
              <h2 className='text-3xl text-white font-bold mt-2'>
                Mansa Capital <br />
                Banking and Finance
              </h2>
              <p class="text-white mb-8 text-justify max-w-2xl mt-5">
                Our company, "Mansa-Capital," aims to address the need for increased support of African
                American-owned banks by providing an easy and convenient platform for individuals to transfer
                their banking accounts to these institutions. With the ongoing issues of racial inequality and
                social justice, there has been a push for consumers to "put their money where their mouth is"
                and support businesses that align with their values. Mansa-Capital aims to make this process
                simple and streamlined, allowing individuals to easily switch their banking to an African
                American-owned institution with minimal hassle.
              </p>
              <Link
                to="#"
                data-aos="fade-left"
                className='bg-orange-500 hover:bg-orange-400 px-9 py-3 rounded text-white w-52'
              >
               More About Us
              </Link>
            </div>
            <div class="w-full sm:w-1/2 sm:order-first">
              <img class="w-full h-full" src={who_we_are2} alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full py-6 sm:px-2 bg-white mt-16">
        <div className='w-10/12 sm:px-16'>
          <h3 className='text-2xl text-orange-500'>
            SERVICES
          </h3>
        </div>
        <div className='w-10/12 mb-10 flex justify-between sm:px-16'>
          <h2
            className="text-3xl font-bold leading-none md:text-4xl sm:text-6xl
            text-purple-header my-6"
          >
            Our Expertise and Key <br />
            Service Areas
          </h2>

          <Link
            to='#'
            className="inline-block  border border-orange-500
              text-gray-700 hover:bg-orange-500 w-auto px-8 py-4 h-fit sm:ml-24 ml-5 mt-10
              hover:text-white rounded transition duration-300 ease-in-out
              font-md text-2xl md:text-sm md:w-72 justify-center items-center text-center
              "
          >
            Browse All Services
          </Link>
        </div>
          <OurExpertise />
      </section>

      < OurExperts />

      <section class="bg-white pb-10 pt-5 sm:mt-7 mt-0" id="ClientsSayAboutUs">
        <div class="container max-w-8xl mx-auto m-8">

          <div
            class="flex flex-wrap flex-col sm:flex-row-reverse"
          >

            <div class="w-full sm:w-1/2 p-6
              px-5 flex flex-col justify-center"
            >

              <h2 className='sm:text-8xl text-7xl text-gray-700 font-bold mt-2'>
                What Our
                Clients Say
                About Us?
              </h2>
            </div>

            <div class="w-full sm:w-1/2 sm:order-first flex justify-center items-center bg-blue-100">
              < WhatClientsSay />
            </div>

          </div>
        </div>
      </section>


      <section class="bg-white pb-10 pt-5 mt-10" id="whoWeAre">
        <div class="container max-w-8xl mx-auto m-8">
          <h3 className='text-2xl text-orange-500 mt-4 text-center'>
            BLOG
          </h3>
          <h2 className='text-5xl text-center font-bold mb-5'>
            Last News
          </h2>

        <Blog />

        </div>
      </section>

    </>

  )
}

export default Home
