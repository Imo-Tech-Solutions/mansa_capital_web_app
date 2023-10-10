import React from 'react'
import find_your_bank_banner from "../../image/find_your_bank_banner.png"

function Banner() {
  return (
    <>
        <section
            className="
            text-gray-800 w-full flex bg-resources_banner_bg
            items-center justify-center
            bg-cover bg-center bg-no-repeat"
            id="home"
            style={{ backgroundImage: `url(${find_your_bank_banner})` }}
        >
            <div
            className="
            container flex flex-col justify-center p-6
            sm:py-16 lg:py-24 lg:px-14 lg:flex-row
            lg:justify-between pb-12 pt-20
            xl:ml-5  "
            >
            <div
                className="
                flex flex-col justify-center
                text-center rounded-sm
                lg:max-w-xl xl:max-w-2xl lg:text-left"
            >

                <div className='bg-orange-500 w-28 h-1 mt-8' data-aos="fade-right"> </div>

                 <h2 className='sm:text-7xl text-6xl text-white font-bold mt-2'>
                    Explore Our <br />
                    Account Services <br />
                  </h2>

                  <p class="text-white mb-8 text-justify max-w-3xl text-xl mt-5">
                    Welcome to a world of seamless banking experiences and financial growth.
                    Discover a range of accounts tailored to your needs, from everyday transactions
                    to savings and investments. Your journey to financial success starts here.
                  </p>


            </div>

            </div>
        </section>
    </>
  )
}

export default Banner

