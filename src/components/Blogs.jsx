import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    console.log("blogs", blogs); // Log the updated value of blogs whenever it changes
  }, [blogs]); // Specify blogs as a dependency to watch for changes
  
useEffect(() => {
    fetch("https://dev.to/api/articles/latest?username=krishna121996")
  .then((res) => res.json())
  .then((json) => {
    setBlogs(json);
  })
  .catch((error) => {
    console.log(error); // Log any potential errors during the fetch operation
  });
}, [])
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Blogs
          </p>
          <p className="py-6">Check out some of my Blogs right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {blogs?.length > 0 ? blogs?.map(({ id, src, social_image }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={social_image}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105">
                <a href="https://dev.to/krishna121996/how-to-communicate-with-the-native-component-from-react-native-using-bridge-2kpj" target="_blank" rel="noopener noreferrer">
      Read my Blog
    </a>
                </button>
              </div>
            </div>
          )) : <div></div>}
          <br>
          </br>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
