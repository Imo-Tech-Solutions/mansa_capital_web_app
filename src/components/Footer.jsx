/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../asset/logo_black.png'
import twitter from "../asset/icon_twitter.svg";
import linkedIn from "../asset/icon_linkedin.svg";
import facebook from "../asset/icon_Facebook.svg";
import instagram from "../asset/icons_Instagram.svg";
import { Link } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { HiUserCircle, HiMail, HiOutlinePencilAlt } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { AiOutlineLoading } from "react-icons/ai";

function Footer() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // Send form data to backend or API
    // Show success message
    reset();
  };

  const loading = watch("loading");


  return (
    <footer className="bg-footer_bg py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-start items-center">
          <img src={logo} alt="Logo" className="h-28 w-60 mr-2" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">

          <div className="md:mr-8">
            <p className="text-white mt-2 w-80 text-sm">
            Welcome to Mansa Founded by Eric Washington,
            a one-stop shop platform for black-owned banks.
            </p>
          </div>

          <div className="md:mr-8 flex flex-col sm:my-0 my-2 font-bold">
            <Link
            to=''
            className="text-white hover:border-b"
            >
              Home
            </Link>
            <Link
            to=''
            className="text-white hover:border-b"
            >
              Services
            </Link>
            <Link
            to=''
            className="text-white hover:border-b"
            >
              Features
            </Link>
            <Link
            to=''
            className="text-white hover:border-b"
            >
              Accounts
            </Link>
            <Link
            to=''
            className="text-white hover:border-b"
            >
              Who we are
            </Link>
            <Link
            to=''
            className="text-white hover:border-b"
            >
              News
            </Link>
            <Link
            to=''
            className="text-white hover:border-b"
            >
              Contact us
            </Link>
          </div>

          <div className="md:mr-8">
            <h4 className="text-white uppercase font-semibold">Contact Me</h4>
            <p className="text-white mt-2">
              Address: 123 Street, Freetown, Sierra Leone
            </p>
            <p className="text-white mt-1">Phone: +1 00 000 000</p>
            <p className="text-white mt-1">Email: info@imo-tech.com</p>
            <p className="text-white mt-1">Time: Mon - Sat 8.00 - 18.00 </p>
          </div>


          <div className="mt-4 md:mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 mx-2">
                <label className="block text-white font-bold mb-2" htmlFor="email">
                  Sign up for updates
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className={`${
                      errors.email ? "border-red-500" : ""
                    } appearance-none border rounded bg-footer_bg border-white w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:border-orange-500`}
                    type="email"
                    placeholder="johndoe@example.com"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">Invalid email address</p>
                )}
              </div>
              <div className="flex items-center justify-center">
                <button
                  className={`${
                    loading ? "bg-orange-500 cursor-not-allowed" : "bg-orange-500 transform hover:bg-orange-400 transition-transform duration-300"
                  } text-white font-bold py-2 px-4 rounded flex items-center focus:outline-none`}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="mr-2">Loading</span>
                      <AiOutlineLoading className="animate-spin h-5 w-5 text-white" />
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <IoIosSend className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
              <input type="hidden" value={loading} {...register("loading")} />
            </form>

            <h4 className="text-white uppercase font-semibold mt-2 sm:text-start text-center ">Social Media</h4>
            <div className="flex mt-2 sm:justify-start justify-center">
              <a
                  rel="GitHub noreferrer"
                  href="#"
                  target="_blank"
                  className="px-1 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
              >
                  <img class="w-8 h-8" src={facebook} alt="image" />
              </a>

              <a
                  rel="GitHub noreferrer"
                  href="#"
                  target="_blank"
                  className="px-1 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
              >
                  <img class="w-8 h-8" src={twitter} alt="image" />
              </a>

              <a
                  rel="facebook noreferrer"
                  href="#"
                  target="_blank"
                  className="px-1 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
              >
                  <img class="w-8 h-8 " src={linkedIn} alt="image" />
              </a>

              <a
                  rel="phone"
                  href="tel: +23279000000"
                  className="px-1 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
              >
                  <img class="w-8 h-8 " src={instagram} alt="image" />
              </a>
            </div>
          </div>

        </div>
        <hr className="border-gray-600 my-6" />
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mansa Capital. All rights reserved.
          ~ Design By <span className='hover:text-gray-400'> <a href='#'
          target="_blank" rel="noopener noreferrer"> IMO Technology </a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
