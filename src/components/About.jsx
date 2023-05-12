import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        As a mobile app developer, I have responsibility to translate the code into an 
        easy-to-use application. I will collaborate with internal teams to develop functional 
        mobile apps while working in a fast-paced environment. As a Full stack developer, I will develop 
        application programming interfaces (APIs) to support mobile functionality while staying up-to-date 
        with terminology, concepts, and best practices for coding mobile applications. Basically, 
        We will contribute to the design, testing, release, and support of applications. Mobile developers are generally employed by retailers, the healthcare sector and the travel and tourism industry.
        </p>

        <br />

        <p className="text-xl">
          Now its time to learn new technologies in web development, So I would like to contribute in React js 
          for web aaplication development. As I have already experienced in React, it is easy to learn React in 
          short period. I have started working on both web and mobile application developer.
        </p>
      </div>
    </div>
  );
};

export default About;
