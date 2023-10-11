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
        <div className='flex sm:flex-row flex-col items-center justify-between w-10/12 sm:h-60 py-4 rounded-xl bg-orange-500
          bg-center bg-no-repeat px-10
        '
        style={{ backgroundImage: `url(${dorts})` }}
        >
          <div className='flex flex-col justify-center  h-full'>
            <h2 className='text-white font-bold sm:text-6xl text-5xl mb-5'>Get a free consultation</h2>
            <p className='text-white sm:text-3xl text-xl'>Will Help You Solve Accounting and Taxation Issues</p>
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
