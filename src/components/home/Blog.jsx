import React, {useEffect} from 'react'
import 'react-multi-carousel/lib/styles.css';

import blog_1 from '../../image/blog_1.png'
import blog_2 from '../../image/blog_2.png'

import { Link } from 'react-router-dom';



const Blog = () => {

    const services = [
        {
          title: "Managing Your Finances",
          description:
            `Personal financial management is a subject that is not taught in many schools,
            but is something that nearly everyone has to deal with in their lives later on.`,
          image: blog_1,
        },
        {
          title: "Managing Your Finances",
          description:
            `As your business — and revenue — grow, managing your financials may become a task you don’t
            have the time or knowledge to manage.`,
          image: blog_2,
        },

      ];

  return (
    <div className="mt-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 ">
          <div className="max-w-8xl mx-auto flex flex-wrap lg:justify-between justify-center items-center">
            {services.map((service) => (
              <div
              key={service.title}
              className="overflow-hidden shadow rounded-lg w-blog-card-width mb-10 lg:mb-4"
            >
              <div className="relative h-48">
              <img
              alt='blog'
                 src={service.image}
                className='w-full h-48'
              />

              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      {service.title}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {service.description}
                    </dd>
                  </div>
                </div>
              </div>
              <div className='w-full flex mb-5 ml-11'>
                <Link
                className='bg-orange-500  hover:bg-orange-400 px-5 py-2 rounded text-white'
              >
                Read More
              </Link>
              </div>

            </div>
            ))}
          </div>
        </div>
      </div>

  )
}

export default Blog
