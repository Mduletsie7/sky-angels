import React from "react";
import "../styles/Hero.css";
import Wings from "../assets/wings.gif";

const Hero = () => {
  return (
    <div
      className="w-screen text-black"
      style={{
        background:
          "color: white",
      }}>
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center"
          alt="hero"
          src={Wings}
        />
        <div class="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Spreading our wings for a better tomorrow
          </h1>
          <div className="flex justify-center mx-auto">
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;