import React from 'react'
import find_ur_bank4 from '../../image/find_ur_bank4.png'

const ElevateMembership = () => {
  return (
    <section className='bg-gray-100 py-5' >
        <div class="container max-w-8xl mx-auto m-20 ">
            <h1 className='text-gray-700 text-5xl font-bold text-center mb-2'>Elevate Membership</h1>
            <div className='w-full flex justify-center'>
            <div className='bg-orange-500 w-28 h-1 mb-16' data-aos="fade-right"> </div>
            </div>
            <div
            class="flex flex-wrap flex-col-reverse sm:flex-row"
            >
            <div class="w-full sm:w-1/2 p-6
                    px-5 flex flex-col justify-center"
            >

                <h2 className='sm:text-5xl text-4xl text-gray-700 font-bold mt-2'>
                    Elevate Your Banking with <br />
                    Mansa Capital   <br />
                    Membership  <br />
                </h2>
                <p class="text-gray-600 mb-8 text-justify max-w-2xl mt-5">
                    Welcome to an exclusive realm of financial privilege – the [Bank Name] Elevate Membership.
                    Designed to provide you with unparalleled benefits and services, this membership is your
                    gateway to a superior banking experience.
                </p>

            </div>
            <div class="w-full sm:w-1/2 sm:order-first sm:px-0 px-4">
                <img class="w-full h-full" src={find_ur_bank4} alt="image" />
            </div>
            </div>
        </div>
    </section>
  )
}

export default ElevateMembership
