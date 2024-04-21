import React, { useEffect, useState } from "react";
// import Data from './ProductsData.json'
import FlexSearch from "flexsearch";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync } from "../../../features/productsSlice";
import axios from "axios";
import toast from "react-hot-toast";

function ProductCards() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const {User} = useSelector(state => state.auth)
  const response = useSelector((state) => state.products.productData);
  const Data = response?.data;

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  useEffect(() => {
    const index = new FlexSearch.Index({
      tokenize: "full",
      threshold: 3,
    });

    Data?.forEach((item, i) => {
      index.add(i, `${item?.title}`);
    });

    const result = index?.search(query);
    setSearchResults(result);
  }, [query]);

  const handleSearch = (text) => {
    setQuery(text);
  };

  const handleAddToFavourites = async ({ title, images: { jpg: { image_url} } }) => {
   try {
   if(!User?.login) {
    return toast.error('Please login first!')
   } else {
    const userId = User.id;
    await axios.post("http://localhost:8080/api/fav/createFav",{userId,title,imageUrl: image_url});
   }
    toast.success("Sucessfully Added");
   } catch (error) {
    console.log(error);
   }
  }

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
              onClick={() => setQuery("")}
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
            {query === ""
              ? Data?.map((item, index) => (
                  <li key={index}>
                    <div className="group block overflow-hidden">
                      <img
                        src={item.images.jpg.image_url}
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                      />

                      <div className="flex items-center justify-center gap-8">
                        <div className="relative bg-white pt-1">
                          <h3 className="text-center text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                            {item.title}
                          </h3>
                        </div>
                        <div className="flex items-center justify-center p-3 ">
                          <button onClick={()=>handleAddToFavourites(item)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-700 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M18.364 5.636A9 9 0 1112 2a9 9 0 016.364 14.364l-6.363 6.364-6.364-6.364A9 9 0 1118.364 5.636z"
                            />
                          </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              : searchResults?.map((resultIndex) => (
                  <li key={resultIndex}>
                    <div className="group block overflow-hidden">
                      <img
                        src={Data[resultIndex]?.images.jpg.image_url}
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                      />

                      <div className="relative bg-white pt-3">
                        <h3 className="text-center text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                          {Data[resultIndex]?.title}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ProductCards;
