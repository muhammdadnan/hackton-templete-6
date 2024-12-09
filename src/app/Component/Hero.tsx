import React from "react";
import Image from "next/image";
import HeroImg from './../Assets/Hero.png'
import HeroImg2 from './../Assets/Hero-2.png'


const Hero = () => {
  return (
    <div>
      <div>
        <div className="relative md:relative sm:relative">
          <Image src={HeroImg} alt="Hero" />
        </div>
        <div className="absolute z-10 bottom-20 left-1/2 md:absolute md:bottom-1/3 md:left-1/2 sm:absolute sm:top-40 sm:left-1/2">
        <Image src={HeroImg2} alt="Hero 2" className="w-10/12" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
