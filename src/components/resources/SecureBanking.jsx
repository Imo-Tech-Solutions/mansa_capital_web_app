import React from 'react'
import phone2 from '../../image/phone2.png'

const SecureBanking = () => {
  return (
    <section >
        <div class="w-full flex justify-center items-center m-8">

          <div
            class="flex flex-wrap flex-col-reverse sm:flex-row-reverse max-w-7xl"
          >
            <div class="w-full sm:w-1/2 p-6
                 px-5 flex flex-col justify-center"
            >

              <h2 className='sm:text-5xl text-4xl text-gray-700 font-bold mt-2'>
                Secure Banking, <br />
                Right at Your <br />
                Fingertips! <br />
              </h2>
              <p class="text-gray-600 mb-8 text-justify max-w-2xl mt-5">
                Our platform is designed with state-of-the-art security measures to safeguard your personal and
                financial information at every step. With end-to-end encryption, biometric login options, and real-time
                fraud monitoring, you can trust that your data is in safe hands.
              </p>

            </div>
            <div class="w-full sm:w-1/2 sm:order-first">
              <img class="w-full h-full" src={phone2} alt="image" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default SecureBanking
