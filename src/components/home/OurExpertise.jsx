import React from 'react'
import analisisIcon from '../../image/icons_analysis.svg'
import marketingicon from '../../image/icons_marketing.svg'
import salesicon from '../../image/icons_sales.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const cardData = [
    {
      id: 1,
      icon: marketingicon,
      heading: `Marketing Strategy`,
      description: `Is focus on promoting Mansa-capital through social media, targeted online
        advertising, and partnerships with African American-owned banks and other organizations that support economic
        development in the African American community. We will also consider hosting events and workshops to educate
        the public on the benefits of supporting African American-owned banks.`,
        link: '#',
    },
    {
      id: 2,
      icon: salesicon,
      heading: `Sales Strategy`,
      description: `Our sales strategy will focus on converting website visitors into customers through a streamlined
        and user-friendly transfer process. We will also offer incentives and promotions to encourage customers to
        switch to an African American-owned bank, such as waived fees or bonus offers. Download our mobile app for
        easy bank transfer with end to end encryption.
      `,
      link: '#',
    },
    {
      id: 3,
      icon: analisisIcon,
      heading: `SWOT analysis`,
      description: `Strengths:
        Unique value proposition: The website provides a convenient and efficient way for customers to switch to African
        American-owned banks, which may be a compelling selling point for customers who want to support these banks.
        Potential for high demand: As awareness grows about the importance of supporting Black-owned businesses
        and institutions.
      `,
      link: '#',
    },
  ];

  const Card = ({ icon, heading, description}) => {
    // Initialize AOS library
    React.useEffect(() => {
      AOS.init();
    }, []);

    return (
      <div
        className="w-auto sm:w-96 h-expertise-card max-w-md p-6 flex flex-col
        rounded-lg  bg-white items-center shadow transition duration-300
        ease-in-out"
      >
        <div className="flex items-center justify-center mb-4">
            <img className="w-28 h-28" src={icon} alt="Icon" />
        </div>
        <h2 className="text-lg font-semibold text-gray-700">{heading}</h2>
        <br />
        <p className="text-gray-700 mb-4">{description}</p>
        <Link className='bg-orange-500 hover:bg-orange-400 text-white px-8 py-2 rounded mt-2'>Read More</Link>
      </div>
    );
  };

const OurExpertise = () => {
  return (
    <div className="flex flex-wrap -mx-4 w-full justify-center">
      {cardData.map((card) => (
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4" key={card.id}>
          <Card
            icon={card.icon}
            heading={card.heading}
            description={card.description}
            link={card.link}
          />
        </div>
      ))}
    </div>
  )
}

export default OurExpertise

