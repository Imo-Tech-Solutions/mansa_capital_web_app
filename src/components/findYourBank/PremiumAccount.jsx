import React from 'react'
import find_ur_bank3 from '../../image/find_ur_bank3.png'

const PremiumAccount = () => {
  return (
    <section >
        <div class="container max-w-8xl mx-auto m-20">
            <h1 className='text-gray-700 text-5xl font-bold text-center mb-2'>Premium Account</h1>
            <div className='w-full flex justify-center'>
            <div className='bg-orange-500 w-28 h-1 mb-16' data-aos="fade-right"> </div>
            </div>
          <div
            class="flex flex-wrap flex-col-reverse sm:flex-row-reverse"
          >
            <div class="w-full sm:w-1/2 p-6
                 px-5 flex flex-col justify-center"
            >

              <h2 className='sm:text-5xl text-4xl text-gray-700 font-bold mt-2'>
                Elevate Your Banking <br />
                Experience with <br />
                Mansa Capital <br />
                Premium Account <br />
              </h2>
              <p class="text-gray-600 mb-8 text-justify max-w-2xl mt-5">
                Introducing a new standard of banking excellence – the [Bank Name] Premium Account.
                Designed for those who demand more from their banking relationship,
                this account offers a range of exclusive benefits tailored to meet
                your financial aspirations and lifestyle.

              </p>

            </div>
            <div class="w-full sm:w-1/2 sm:order-first sm:px-0 px-4">
              <img class="w-full h-full" src={find_ur_bank3} alt="image" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default PremiumAccount

