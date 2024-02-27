/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie";
import { useForm } from "react-hook-form";
import { HiUserCircle, HiMail, HiOutlinePencilAlt } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";

import mailBox from "../../image/contact_us.json";

import AOS from "aos";
import "aos/dist/aos.css";

function ContactUs() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const form = useRef();

  const sendEmail = async () => {
    try {
      await emailjs.sendForm(
        "service_nd857p7",
        "template_0liycub",
        form.current,
        "DvyYTrHzMghHjXCHS"
      );

      setIsSuccess(true);
      setIsError(false);
      reset();
      // Display success message for 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      setIsSuccess(false);
      setIsError(true);
      // Display error message for 3 seconds
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  };

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: mailBox,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
    });
    AOS.refresh();
  }, []);

  const loading = watch("loading");

  return (
    <>
      <section class="bg-white border-b border-t py-8" id="services">
        <div class="container max-w-5xl mx-auto m-8">
          <div class="flex flex-wrap flex-col sm:flex-row" data-aos="fade-up">
            <div class="w-full sm:w-1/2 p-6">
              <div class="text-gray-600 mb-8 text-justify">
                <h1 className="text-4xl font-bold leading-none sm:text-4xl text-purple-header">
                  READY <br />
                  <span className="text-orange-500"> FOR </span>
                  PARTNERSHIP?
                </h1>
              </div>

              <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <div className="mb-4 mx-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiUserCircle className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      className={`${
                        errors.name ? "border-red-500" : ""
                      } appearance-none border rounded-lg w-full py-2 px-3 pl-10 text-gray-700 leading-tight
                      focus:outline-none focus:border-purple`}
                      type="text"
                      placeholder="Samuel Moiwa"
                      {...register("name", { required: true })}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      Name is required
                    </p>
                  )}
                </div>

                <div className="mb-4 mx-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      className={`${
                        errors.email ? "border-red-500" : ""
                      } appearance-none border rounded-lg w-full py-2 px-3 pl-10 text-gray-700 leading-tight
                        focus:outline-none focus:border-purple`}
                      type="email"
                      placeholder="mail@example.com"
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      Invalid email address
                    </p>
                  )}
                </div>

                <div className="mb-4 mx-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      className={`${
                        errors.phone ? "border-red-500" : ""
                      } appearance-none border rounded-lg w-full py-2 px-3 pl-10 text-gray-700
                        leading-tight focus:outline-none focus:border-purple`}
                      type="phone"
                      placeholder="phone number"
                      {...register("phone", {
                        required: true,
                        pattern: /^\+?[0-9]{1,}$/,
                      })}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      Invalid phone number
                    </p>
                  )}
                </div>

                <div className="mb-4 mx-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="message"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                      <HiOutlinePencilAlt className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      className={`${
                        errors.message ? "border-red-500" : ""
                      } appearance-none border
                        rounded-lg w-full py-2 px-3 pl-10
                        text-gray-700 leading-tight focus:outline-none focus:border-purple`
                      }
                      placeholder="Write your message here"
                      rows="6"
                      {...register("message", { required: true })}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      Message is required
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-center">
                <button
                  className={`${
                    loading
                      ? "bg-orange-500 cursor-not-allowed"
                      : "bg-orange-500 transform hover:scale-110 transition-transform duration-300"
                  } text-white font-bold py-2 px-4 rounded-lg flex items-center focus:outline-none`}
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

                {isSuccess && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-2">
                    <span className="block sm:inline">
                      Form submitted successfully!
                    </span>
                  </div>
                )}

                {isError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-2">
                    <span className="block sm:inline">
                      Failed to submit the form. Please try again.
                    </span>
                  </div>
                )}
              </form>
            </div>

            <div
              class="w-full sm:w-1/2 p-6 sm:order-first flex-col
              flex justify-center item-center"
            >

              <Lottie options={animationOptions} height={350} width={350} />

              <div
                className="flex space-y-0 sm:items-center
                  sm:flex-row sm:space-y-0 space-x-4 mt-6
                  sm:space-x-4 lg:justify-center md:items-center"
              >
                <a
                  rel="google"
                  href="#"
                  target="_blank"
                  className="px-4 py-2 flex justify-center
                    transform hover:scale-110 transition-transform duration-300"
                >
                  <svg class="w-6 h-6 text-orange-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 22a10 10 0 0 1-7.1-3A9.9 9.9 0 0 1 5 4.8C7 3 9.5 2 12.2 2h.2c2.4 0 4.8 1 6.6 2.6l-2.5 2.3a6.2 6.2 0 0 0-4.2-1.6c-1.8 0-3.5.7-4.8 2a6.6 6.6 0 0 0-.1 9.3c1.2 1.3 2.9 2 4.7 2h.1a6 6 0 0 0 4-1.1c1-.9 1.8-2 2.1-3.4v-.2h-6v-3.4h9.6l.1 1.9c-.1 5.7-4 9.6-9.7 9.6H12Z" clip-rule="evenodd"/>
                  </svg>
                </a>

                <a
                  rel="LinkedIn noreferrer"
                  href="#"
                  target="_blank"
                  className="px-4 py-2 flex justify-center
                    transform hover:scale-110 transition-transform duration-300"
                >
                  <svg class="w-6 h-6 text-orange-500"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                  </svg>

                </a>

                <a
                  rel="facebook noreferrer"
                  href="#"
                  target="_blank"
                  className="px-4 py-2 flex justify-center
                    transform hover:scale-110 transition-transform duration-300"
                >
                  <svg class="w-6 h-6 text-orange-500"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z" clip-rule="evenodd"/>
                  </svg>

                </a>

                <a
                  rel="x"
                  href="#"
                  className="px-4 py-2 flex justify-center
                    transform hover:scale-110 transition-transform duration-300"
                >
                  <svg class="w-6 h-6 text-orange-500 "
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
