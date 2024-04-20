import React from 'react';
import blogsData from './BlogsData.json'

function Blogs() {
  return (
    <>
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
        <h1 className="text-center text-4xl font-bold mt-10 mb-20">
            Welcome to Anime Blogs
          </h1>
          {blogsData.map((blog, index) => (
            <div key={index} className={`lg:-mx-6 lg:flex lg:items-center my-20`}>
              <img
                className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-52 rounded-lg lg:h-[36rem]"
                src={blog.Image}
                alt={blog.Name}
              />

              <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl lg:w-96">
                  {blog.Name}
                </h1>

                <p className="mt-6 text-gray-500">
                  {blog.Description}
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">
                  {blog.Author}
                </h3>
                <p className="text-gray-600">{blog.AuthorTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blogs;
