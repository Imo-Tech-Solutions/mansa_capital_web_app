import React from 'react'
import phone1 from '../../image/phone1.png'

function Banner() {
  return (
    <>
        <section
            className="
            text-gray-800 w-full flex bg-resources_banner_bg
            items-center justify-center"
            id="home"
        >
            <div
            className="
            container flex flex-col justify-center p-6
            sm:py-16 lg:py-24 lg:px-14 lg:flex-row
            lg:justify-between pb-12 pt-20
            xl:ml-5 max-w-7xl"
            >
            <div
                className="
                flex flex-col justify-center
                text-center rounded-sm
                lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                 <h2 className='sm:text-6xl text-5xl text-white font-bold mt-2'>
                    Empower Your <br />
                    Finances with <br />
                    Mansa Capital: <br />
                    For You, By You. <br />
                  </h2>

                  <div className='bg-orange-500 w-28 h-1 mt-8' data-aos="fade-right"> </div>

                  <p class="text-white mb-8 text-justify max-w-3xl text-2xl mt-5">
                    Discover better financial options designed to support Black and Latinx communities. Secure your
                    financial future, grow your wealth, and access your funds seamlessly with Greenwood.
                  </p>


            </div>

            <div
                className="
                flex items-center justify-center p-6 mt-8
                lg:max-w-7xl xl:max-w-7xl
                lg:w-2/4
                "
            >
                <img
                src={phone1}
                alt="Service"
                className="object-contain object-center h-full w-full"
                />
            </div>
            </div>
        </section>
    </>
  )
}

export default Banner

