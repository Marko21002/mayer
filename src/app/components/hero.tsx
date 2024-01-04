import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      style={{
        // Add background image style here
        backgroundImage: "url('./dark30.jpg')", // Corrected the image path
      }}
      className="min-h-screen bg-black flex flex-col  bg-no-repeat  bg-bottom-left bg-fixed bg-cover pt-3 pl-3 pr-3"
    >
      <ul className="flex space-x-4 justify-start">
        <li>
          <a href="/sk">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1280px-Flag_of_Slovakia.svg.png"
              alt=""
              className="w-10"
            />
          </a>
        </li>
        <li>
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
              alt=""
              className="w-12 "
            />
          </a>
        </li>
      </ul>
      <div className="text-center items-center flex flex-col justify-center pt-[50%] md:pt-[30%] lg:pt-[10%]">
        <div>
          <img src="/logo.png" width={300} height={150} alt="logo" />
        </div>
        <p className=" pt-8 text-stone-100 font-boeck text-5xl font-bold pb-4">
          Cafe Mayer
        </p>
      </div>
    </div>
  );
};

export default Hero;
