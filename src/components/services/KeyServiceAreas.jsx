import React from 'react';
import accounting from '../../image/accounting_service.png';
import auditing from '../../image/auditing_services.png';
import tax from '../../image/tax_services.png';
import consulting from '../../image/consulting_services.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    icon: accounting,
    heading: `Accounting Services`,
    descriptions: [
      "Finical education",
      "Finding a African American bank",
      "Investment in African American",
    ],
    link: '#',
  },
  {
    id: 2,
    icon: auditing,
    heading: `Auditing & Assurance Services`,
    descriptions: [
      "Financial statement audits",
      "Compliance and single audits",
      "Internal audit services",
      "Employee benefits plan audit",
      "Technology assurance services",
    ],
    link: '#',
  },
  {
    id: 3,
    icon: consulting,
    heading: `Consulting Services`,
    descriptions: [
      "Special education finance",
      "Attendance accounting",
      "Budget preparation and review",
      "Categorical accounting",
    ],
    link: '#',
  },
  {
    id: 4,
    icon: tax,
    heading: `Tax Services`,
    descriptions: [
      "Business tax",
      "International tax",
      "Personal tax",
      "Tax accounting",
      "State and local tax",
    ],
    link: '#',
  },
];

const Card = ({ icon, heading, descriptions, link }) => {
  // Initialize AOS library
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="w-auto sm:w-96 h-expertise-card max-w-md flex flex-col rounded-lg shadow-md
        bg-white items-center transition duration-300 ease-in-out
        "
    >
      <div className="flex items-center justify-center mb-4 w-full">
        <img className="w-full h-52 rounded-t-lg" src={icon} alt="Icon" />
      </div>
      <Link to={link} className="text-lg font-semibold text-gray-700 hover:text-orange-500">{heading}</Link>
      <br />
      <ul className="text-gray-700 mb-4">
        {descriptions.map((description, index) => (
          <li className='border-b border-gray-500 mt-2' key={index}>{description}</li>
        ))}
      </ul>
    </div>
  );
};

const KeyServiceAreas = () => {
  return (
    <div className="flex flex-wrap w-full justify-center items-center mt-16 mb-10">
      <h2 className='text-gray-700 font-bold sm:text-4xl text-3xl mb-5 ml-4 sm:ml-0'>
        Our Expertise and Key Service Areas
      </h2>
      <div className="flex flex-wrap w-11/12 justify-center items-center">
        {cardData.map((card) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-0 gap-2 sm:gap-0 sm:mt-0 mt-6" key={card.id}>
            <Card
              icon={card.icon}
              heading={card.heading}
              descriptions={card.descriptions}
              link={card.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyServiceAreas;
