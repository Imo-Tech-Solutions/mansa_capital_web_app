import React from 'react'
import find_ur_bank2 from '../../image/find_ur_bank2.png'

const SavingsAccount = () => {
  return (
    <section className='bg-gray-100 py-5' >
        <div class="container max-w-7xl mx-auto m-20 ">
            <h1 className='text-gray-700 text-5xl font-bold text-center mb-2'>Savings Account</h1>
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
                    Secure Your Tomorrow with <br />
                    Mansa Capital Savings <br />
                    Account <br />
                </h2>
                <p class="text-gray-600 mb-8 text-justify max-w-2xl mt-5">
                    At Mansa Capital, we believe in helping you build a stronger financial foundation for your future.
                    Our Savings Account is designed to empower your aspirations and provide you with the tools to reach
                    your goals.
                </p>

            </div>
            <div class="w-full sm:w-1/2 sm:order-first sm:px-0 px-4">
                <img class="w-full h-full" src={find_ur_bank2} alt="image" />
            </div>
            </div>
        </div>
    </section>
  )
}

export default SavingsAccount
