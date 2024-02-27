import React, { useState, useEffect } from 'react';

const Rating = () => {
  // Initialize state variables for the counts
  const [experienceCount, setExperienceCount] = useState(0);
  const [expertsCount, setExpertsCount] = useState(0);
  const [casesCount, setCasesCount] = useState(0);

  // Define the target values for the counts
  const targetExperienceCount = 20;
  const targetExpertsCount = 65;
  const targetCasesCount = 539;

  // Use useEffect to update the counts when the component mounts
  useEffect(() => {
    // Function to increment the counts
    const incrementCounts = () => {
      // Increment the counts until they reach their target values
      if (experienceCount < targetExperienceCount) {
        setExperienceCount(experienceCount + 1);
      }
      if (expertsCount < targetExpertsCount) {
        setExpertsCount(expertsCount + 1);
      }
      if (casesCount < targetCasesCount) {
        setCasesCount(casesCount + 5);
      }
    };

    // Interval to increment the counts (adjust the interval time as needed)
    const interval = setInterval(incrementCounts, 50);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [experienceCount, expertsCount, casesCount]);

  return (
    <div className='w-screen py-14 my-10 flex justify-center'>
      <div className='w-9/12 max-w-7xl flex justify-between'>
        <div>
          <h1 className='font-bold text-3xl md:text-5xl lg:text-8xl text-orange-500'>
            {experienceCount}+
          </h1>
          <p className='md:text-md text-sm'>years of experience</p>
        </div>

        <div className='bg-gray-600 w-1 h-full' />

        <div className='px-10 border-gray-600'>
          <h1 className='font-bold text-3xl md:text-5xl lg:text-8xl text-orange-500'>
            {expertsCount}+
          </h1>
          <p className='md:text-md text-sm'>certified accounting experts</p>
        </div>

        <div className='bg-gray-600 w-1 h-full' />

        <div>
          <h1 className='font-bold text-3xl md:text-5xl lg:text-8xl text-orange-500'>
            {casesCount}+
          </h1>
          <p className='md:text-md text-sm'>successful cases</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
