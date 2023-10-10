import React, { useState } from 'react';

const SearchBank = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default category

  const categories = ['All Categories', 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6']; // Add your own categories

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchTerm, 'in category:', selectedCategory);
  };

  return (
    <>

      <div className='w-full py-10 flex flex-col justify-center sm:pl-16 px-8 bg-gray-100'>
        <h1 className='text-gray-700 text-5xl font-bold'>
          Find Your Bank
        </h1>
        <p class="text-gray-500 mb-8 text-justify max-w-3xl text-xl mt-5">
          Welcome to a world of seamless banking experiences and financial growth.
          Discover a range of accounts tailored to your needs, from everyday transactions
          to savings and investments. Your journey to financial success starts here.
        </p>
      </div>

      <div className='w-full py-10 flex justify-center items-center bg-gray-100'>
        <div className="flex mt-3 sm:w-1/2 w-10/12">
          <div className="relative inline-block text-gray-600 w-full ">
            <input
              type="text"
              className="h-10 pl-8 pr-3 text-sm bg-white border rounded
                        focus:outline-none focus:border-orange-500 w-full"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-5">
              <select
                className="text-sm text-gray-500 bg-white focus:outline-none
                    focus:border-gray-300"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <button
            className="ml-2 p-y px-4 text-white bg-orange-500 rounded
                absolute inset-y-0
                hover:bg-orange-400 focus:outline-none"
            onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>






    </>
  )
}

export default SearchBank

