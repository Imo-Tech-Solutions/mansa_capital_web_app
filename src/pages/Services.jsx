import React from 'react'
import Banner from '../components/services/Banner'
import KeyServiceAreas from '../components/services/KeyServiceAreas'
import dorts from '../image/dorts.svg'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <Banner />
      <KeyServiceAreas />
      <div className='w-full flex justify-center mb-24 mt-16'>
        <div className='flex flex-row items-center justify-between w-10/12 h-60 rounded-xl bg-orange-500
          bg-center bg-no-repeat px-10
        '
        style={{ backgroundImage: `url(${dorts})` }}
        >
          <div className='flex flex-col justify-center  h-full'>
            <h2 className='text-white font-bold text-6xl mb-5'>Get a free consultation</h2>
            <p className='text-white text-3xl'>Will Help You Solve Accounting and Taxation Issues</p>
          </div>

          <Link
          to='#'
          className='border border-white text-white hover:bg-white hover:text-orange-500 h-16 px-6
          flex justify-center items-center rounded font-bold text-2xl'
          >
            Contact Us
          </Link>

        </div>

      </div>
    </>
  )
}

export default Services
