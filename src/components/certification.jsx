import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const Certification = () => {
  const [certificates, setCertificates] = useState([])
  useEffect(() => {
let cert = [
    {
        name: 'Infosys Certified React Native Developer'
    },
    {
        name: 'Infosys Certified ReactJs Developer'
    },
    {
        name: 'Infosys Certified Associate Mobile Developer'
    },
    {
        name: 'Udemy AWS Cloud Practicioner'
    },
    {
        name: 'HP Certified Java Developer'
    },
    {
        name: 'Bussiness English Communication by Cambridge'
    }
]
    setCertificates(cert);
}, []); // Specify blogs as a dependency to watch for changes
  
// useEffect(() => {
//     fetch("https://dev.to/api/articles/latest?username=krishna121996")
//   .then((res) => res.json())
//   .then((json) => {
//     setBlogs(json);
//   })
//   .catch((error) => {
//     console.log(error); // Log any potential errors during the fetch operation
//   });
// }, [])
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Certification
          </p>
          <p className="py-6">Find some completed certificates</p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {certificates?.length > 0 ? certificates?.map(({ name }) => (
            <div key={''} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={'https://w7.pngwing.com/pngs/88/146/png-transparent-certificate-illustration-certificate-template-text-label-rectangle-thumbnail.png'}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-40 px-6 py-3 m-1 duration-200 hover:scale-105">
                <a target="_blank" rel="noopener noreferrer">{name}</a>
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

export default Certification;
