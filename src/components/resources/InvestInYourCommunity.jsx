import React from 'react'
import phone3 from '../../image/phone3.png'

const InvestInYourCommunity = () => {
    const bulletStyle = {
        marginRight: '8px', // Add some spacing between the bullet and text
        marginLeft: '-20px',
        fontSize: '20px', // Adjust the font size as needed
      };

  return (
    <section className='bg-gray-100'>
    <div class="flex justify-center items-center w-full mx-auto m-8">

      <div
        class="flex flex-wrap flex-col-reverse sm:flex-row max-w-7xl"
      >
        <div class="w-full sm:w-1/2 p-6
             px-5 flex flex-col justify-center items-center"
        >

          <h2 className='sm:text-5xl text-4xl text-gray-700 font-bold mt-2'>
            Invest in Your Community <br />
            Instantly! Introducing Instant <br />
            Card Funding: Quick Money, <br />
            No Wait! <br />
          </h2>
          <p class="text-gray-600 mb-8 text-justify max-w-2xl mt-5">
            Adding funds to your account has never been easier with our instant card funding feature.
            In just a few simple steps, you can top up your account and stay in control of your finances. <br /> <br />

            Here's How: <br /> <br />

            <div className=' ml-10 tracking-tighter'>
            <span style={bulletStyle}>&#8226;</span>  Select Instant Card Deposit: Opt for the instant card deposit option – it's fast and hassle-free. <br />
            <span style={bulletStyle}>&#8226;</span> Enter Card Details and Amount: Provide your card information and the desired amount you want to add. <br />
            <span style={bulletStyle}>&#8226;</span> Confirm and Verify: Double-check your details and confirm. Your financial security is our priority. <br />
            <span style={bulletStyle}>&#8226;</span> Voilà! Money in Minutes: Watch as your funds are seamlessly added to your Mansa Capital account within
                                                    moments. <br /> <br />
            </div>

            At Mansa Capital, we're committed to empowering both you and our community to shape a more secure financial
            future. Take advantage of instant card funding today and experience control like never before.
          </p>

        </div>
        <div class="w-full items-center justify-center sm:w-1/2 sm:order-first">
          <img class="w-full h-auto" src={phone3} alt="image" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default InvestInYourCommunity

