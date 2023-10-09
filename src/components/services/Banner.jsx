import React from 'react'
import service_Banner from '../../image/service_banner.png'

function Banner() {
  return (
    <>
     <div className="bg-gray-100 w-full">
        <div
          className="
          w-full bg-cover bg-no-repeat h-96
          align-middle justify-center flex
          flex-col px-10
          "
          style={{ backgroundImage: `url(${service_Banner})` }}
        >
          <div className='bg-orange-500 w-28 h-1 mt-16' data-aos="fade-right"> </div>

          <h2 className='text-7xl text-white font-bold mt-2'>
            Our Services
          </h2>
          <p class="text-white mb-8 text-justify max-w-3xl text-2xl mt-5">
            Ask us for the expert assistance from banking relationships investment and Financial education
          </p>

        </div>
      </div>
    </>
  )
}

export default Banner

