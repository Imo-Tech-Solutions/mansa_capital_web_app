import React from 'react'
import mansa_card from '../../image/master_card.png'

const RealTimeSecurity = () => {
    const bulletStyle = {
        marginRight: '8px', // Add some spacing between the bullet and text
        marginLeft: '-20px',
        fontSize: '20px', // Adjust the font size as needed
      };
  return (
    <section className='mt-24'>
    <div class="w-full flex justify-center items-center m-8">

      <div
        class="flex flex-wrap flex-col-reverse sm:flex-row-reverse max-w-7xl "
      >
        <div class="w-full sm:w-1/2 p-6
             px-5 flex flex-col justify-center"
        >

          <h2 className='sm:text-5xl text-4xl text-gray-700 font-bold mt-2'>
            Empower Your Finances with <br />
            Real-Time Security. <br />
            Take Control, Send Money, <br />
            Stay Secure. <br />
          </h2>
          <p class="text-gray-600 mb-8 text-justify max-w-2xl mt-5">

            <div className=' ml-10 tracking-tighter'>
            <span style={bulletStyle}>&#8226;</span>
            Swift Peer-to-Peer Transfers: Manage your funds in real time. Send money seamlessly to friends and family
            with just a few taps on our mobile app or online portal. Reach beyond Mansa Capital – send money from your
            bank account to friends at other banks using our peer-to-peer transfer service.
             <br />
            <span style={bulletStyle}>&#8226;</span>
            Advanced Security Measures: Your safety is paramount. Your deposits are insured up to $250,000 per depositor
            through Coastal Community Bank. We ensure secure bank connections for transferring funds from any account.
            Instantly block your Mansa Capital Card in case of fraud and receive real-time account alerts to stay informed.
            <br />
            </div>

          </p>


        </div>
        <div class="w-full sm:w-1/2 sm:order-first">
          <img class="w-full h-auto" src={mansa_card} alt="image" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default RealTimeSecurity

