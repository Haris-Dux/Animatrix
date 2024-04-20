import React, { useEffect, useState } from "react";
import Data from './ProductsData.json'
import FlexSearch from 'flexsearch';
import axios from 'axios';

function ProductCards() {
  const [query, setQuery] = useState('');
  // const [Data, setData] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const index = new FlexSearch.Index({
      tokenize: 'full',
      threshold: 3,
    });

    Data.forEach((item, i) => {
      index.add(i, `${item.Name}`); 
    });

    const result = index.search(query);
    setSearchResults(result);
  }, [query]);

  const handleSearch = (text) => {
    setQuery(text);
  };

const options = {
  method: 'GET',
  url: 'https://myanimelist.p.rapidapi.com/anime/top/%7Bcategory%7D',
  headers: {
    'X-RapidAPI-Key': '3df478d800mshbf99de422e42b07p10c381jsn7694319b3906',
    'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
  }
};
                                                                                                                                                                                   
useEffect(()=>{
  const RapidApiData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      // setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  RapidApiData();
},[])



  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <h1 className="text-center text-4xl font-bold">
            Welcome to Anime World
          </h1>
          <form className="form relative my-10">
            <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
              <svg
                className="w-5 h-5 text-gray-700"
                aria-labelledby="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="16"
                width="17"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.333"
                  stroke="currentColor"
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                ></path>
              </svg>
            </button>
            <input
              type="text"
              required=""
              placeholder="Search..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="input rounded-full px-8 py-3 w-full border-2 focus:outline-none focus:border-blue-500 placeholder-gray-400"
            />
            <button
              className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
              type="reset"
              onClick={()=>setQuery('')}
            >
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </form>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {query === '' ? (
              Data.map((item, index) => (
                <li key={index}>
                  <div className="group block overflow-hidden">
                    <img
                      src={item.Image}
                      alt=""
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                      <h3 className="text-center text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        {item.Name}
                      </h3>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              searchResults.map((resultIndex) => (
                <li key={resultIndex}>
                  <div className="group block overflow-hidden">
                    <img
                      src={Data[resultIndex].Image}
                      alt=""
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                      <h3 className="text-center text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        {Data[resultIndex].Name}
                      </h3>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ProductCards;
