import React from 'react'
import paying_with_nfc from '../../image/paying_with_nfc_restaurant1.png'

const EffortlessShopping = () => {
    const bulletStyle = {
        marginRight: '8px', // Add some spacing between the bullet and text
        marginLeft: '-20px',
        fontSize: '20px', // Adjust the font size as needed
      };
  return (
    <section className='mt-24'>
      <div class="flex justify-center items-center w-full mx-auto my-8 overflow-hidden">

        <div
          class="flex flex-wrap flex-col-reverse sm:flex-row max-w-7xl"
        >
          <div class="w-full sm:w-1/2 p-6
                px-5 flex flex-col justify-center"
          >

            <h2 className='sm:text-5xl text-4xl text-gray-700 font-bold mt-2'>
            Effortless Shopping with <br />
            Contactless Payments! <br />
            Secure Transactions, <br />
            Simplified Process. <br />

            </h2>
            <p class="text-gray-600 mb-8 text-justify max-w-2xl mt-5">
            Experience the future of payments with our contactless option. Seamlessly link your Mansa Capital
            account to your Apple Pay or Android Pay mobile wallets for a swift and secure shopping experience:
            <br /> <br />

            <div className=' ml-10 tracking-tighter'>
            <span style={bulletStyle}>&#8226;</span> In-Store Convenience: Shop effortlessly at numerous stores using
                your mobile device for payments. <br />
            <span style={bulletStyle}>&#8226;</span> Online Privacy: Make online purchases without the need to disclose
                your card details. <br />
            <span style={bulletStyle}>&#8226;</span> Cash Back Rewards: Enjoy cash back for debit transactions, making
                your shopping even more rewarding.<br />
            </div>

          </p>

          </div>
          <div class="w-full sm:w-1/2 sm:order-first">
            <img class="w-full h-full rounded-full" src={paying_with_nfc} alt="image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EffortlessShopping

