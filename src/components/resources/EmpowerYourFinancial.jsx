import React from 'react'
import women_with_smart_phone from '../../image/woman_with_smartphone1.png'

const EmpowerYourFinancial = () => {
  const bulletStyle = {
    marginRight: '8px', // Add some spacing between the bullet and text
    marginLeft: '-20px',
    fontSize: '20px', // Adjust the font size as needed
  };
  return (
    <section className='mt-24'>
      <div class=" flex justify-center items-center w-full mx-auto my-8 overflow-hidden">

        <div
          class="flex flex-wrap flex-col-reverse sm:flex-row-reverse max-w-7xl"
        >
          <div class="w-full sm:w-1/2 p-6
                px-5 flex flex-col justify-center"
          >

            <h2 className='sm:text-5xl text-4xl text-gray-700 font-bold mt-2'>
                Empower Your Financial <br />
                Journey – Fee-Free! Invest <br />
                in Your Progress, Not in Fees. <br />

            </h2>
            <p class="text-gray-600 mb-8 text-justify max-w-2xl mt-5">
              With us, your financial well-being comes first. Say goodbye to
              unnecessary fees that drain your resources.
              Experience true financial freedom with: <br /> <br />

            Here's How: <br /> <br />

            <div className=' ml-10 tracking-tighter'>
            <span style={bulletStyle}>&#8226;</span> No Overdraft Penalties <br />
            <span style={bulletStyle}>&#8226;</span> No In-Network ATM Fees <br />
            <span style={bulletStyle}>&#8226;</span> No Minimum Balance Fees <br />
            <span style={bulletStyle}>&#8226;</span> No Peer-to-Peer Transfer Fees <br />
            <span style={bulletStyle}>&#8226;</span> Zero Hidden Fees <br /> <br />
            </div>

            Choose a financial partner that values your growth. Join us and invest
            in yourself today!
          </p>

          </div>
          <div class="w-full sm:w-1/2 sm:order-first ">
            <img class="w-full h-full rounded-full" src={women_with_smart_phone} alt="image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmpowerYourFinancial
