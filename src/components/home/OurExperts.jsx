import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import abdulai from '../../image/abdulai.png';
import chinedum from '../../image/chinedum.png'
import judah from '../../image/judah.png'
import phone from '../../image/icons_phone_orange.svg';
import mailBox from '../../image/icons_mail_orange.svg';
import twitter from '../../image/icons_twitter.svg';
import fb from '../../image/icons_facebook.svg';

const consultants = [
  {
    button: 'Tax Consultant',
    id: 1,
    name: 'Abdulai Samuel Moiwa',
    specialization: 'Tax Consulting Specialist',
    description:
      `Brian provides a complete suite of tax accounting services that focus on the preparation, analysis,
      and presentation of tax payments and tax returns. Tax accounting services focus on income, investment gains or
      losses, qualifying deductions, and other transaction factors`,
    phone: '+232 00 000 000',
    email: 'tax@demolink.com',
    image: abdulai,
  },
  {
    button: 'Financial Consultant',
    id: 2,
    name: 'Chinedum Roland Eke',
    specialization: 'Financial Consulting Specialist',
    description:
      `Anna offers a comprehensive range of financial advisory services, specializing in the assessment, analysis,
      and communication of financial strategies and data. Her expertise covers budgeting, investment performance,
      strategic financial planning, and various critical financial elements.`,
    phone: '+232 00 000 000',
    email: 'tax@demolink.com',
    image: chinedum,
  },
  {
    button: 'Business Accounting Consultant',
    id: 3,
    name: 'Judah Dore',
    specialization: 'Business Accounting Consulting',
    description:
      `David delivers an extensive array of business accounting advisory services, emphasizing the evaluation,
      interpretation, and communication of financial records and transactions. His domain encompasses financial
      statements, auditing, cost analysis, and diverse aspects of business accounting.`,
    phone: '+232 00 000 000',
    email: 'tax@demolink.com',
    image: judah,
  },
  // Add more consultants here
];

const OurExperts = () => {

  const [activeConsultant, setActiveConsultant] = useState(1);

  const toggleConsultant = (id) => {
    if (activeConsultant === id) {
      setActiveConsultant(null); // Toggle off if already active
    } else {
      setActiveConsultant(id); // Activate the selected consultant
    }
  };

  return (
    <section className="bg-gray-100 pb-10 pt-5 mt-10" id="ourExperts">
      <div className="container max-w-8xl mx-auto m-8">
        <h2 className="text-5xl text-center font-bold mb-5">
          Our Dedicated Experts
        </h2>

        <div className="flex-col md:flex-row mb-10">
          {consultants.map((consultant) => (
            <Link
              key={consultant.id}
              to="#"
              className={`inline-block ${
                activeConsultant === consultant.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-300 text-gray-700 hover:bg-orange-500'
              } md:w-auto w-full px-8 py-4 h-fit sm:ml-4 hover:text-white rounded transition
              duration-300 ease-in-out font-md text-sm justify-center items-center text-center`}
              onClick={() => toggleConsultant(consultant.id)}
            >
              {consultant.button}
            </Link>
          ))}
        </div>

        <div
          className="flex flex-wrap flex-col-reverse sm:flex-row-reverse expert-div"
        >
          {consultants.map((consultant) => (
            <div
              key={consultant.id}
              className={`w-full sm:w-1/2 p-6 px-5 flex flex-col justify-center ${
                activeConsultant === consultant.id ? '' : 'hidden'
              }`}
            >
              <h2 className="text-3xl text-gray-700 font-bold mt-2">
                {consultant.name}
              </h2>
              <h3 className="text-2xl text-orange-500 mt-4">
                {consultant.specialization}
              </h3>
              <p className="text-gray-600 xl:text-2xl text-sm mb-8 text-justify max-w-2xl mt-5">
                {consultant.description}
              </p>
            </div>
          ))}
          <div className="w-full sm:w-1/2 sm:order-first flex flex-col items-center">
            {consultants.map((consultant) => (
              <div
                key={consultant.id}
                className={`xl:w-img-width xl:h-72 w-64 flex justify-center ${
                  activeConsultant === consultant.id ? '' : 'hidden'
                }`}
              >
                <img
                  className="w-full h-full"
                  src={consultant.image}
                  alt="image"
                />
              </div>
            ))}

            {consultants.map((consultant) => (
              <div
                key={consultant.id}
                className={`mt-10 w-full flex justify-center lg:px-0 px-8 ${
                  activeConsultant === consultant.id ? '' : 'hidden'
                }`}
              >
                <div className="w-img-width">
                  <div className="flex items-center">
                    <a className="flex items-center" href={`tel: ${consultant.phone}`}>
                      <img alt="phone" src={phone} className="w-4 h-4 mr-2" />
                      <p>
                        <span className="font-bold">Tel:</span> {consultant.phone}
                      </p>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <a className="flex items-center" href={`mailto: ${consultant.email}`}>
                      <img alt="email" src={mailBox} className="w-4 h-4 mr-2" />
                      <p>
                        <span className="font-bold">Email:</span> {consultant.email}
                      </p>
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <a href="#">
                    <img alt="Facebook" src={fb} className="w-6 h-6 mr-2" />
                  </a>
                  <a href="#">
                    <img alt="Twitter" src={twitter} className="w-6 h-6 mr-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};






export default OurExperts;
