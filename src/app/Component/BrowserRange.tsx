import React from 'react'
import Image from 'next/image'
// import BrowerRange from './../Assets/Browse-range.png'
import Picture1 from './../Assets/Picture-1.png'
import Picture2 from './../Assets/Picture-2.png'
import Picture3 from './../Assets/Picture-3.png'

const BrowserRange = () => {
  return (
    <div className=" container m-auto ">
      <div className=" m-auto text-center">
        <h3 className="text-xl font-bold p-4 md:text-3xl lg:text-5xl lg:pt-5">
          {" "}
          Browse The Range
        </h3>
        <p className="text-lg pb-4 text-[#666666] md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 pt-10">
        <div className="imgOne">
          <Image src={Picture1} width={282} alt="Picture of the author" />
          <h6 className="text-center p-4 text-[#333333] text-2xl">Dining</h6>
        </div>

        <div className="imgTow">
          <Image src={Picture2} width={282} alt="Picture of the author" />
          <h6 className="text-center p-4 text-[#333333] text-2xl">Living</h6>
        </div>

        <div className="imgThree">
          <Image src={Picture3} width={282} alt="Picture of the author" />
          <h6 className="text-center p-4 text-[#333333] text-2xl">Bedroom</h6>
        </div>
      </div>
    </div>
  );
}

export default BrowserRange