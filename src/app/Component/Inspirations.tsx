import React from 'react'
import Image from "next/image";
import InspirationsImg from './../Assets/Inspirations.png'

const Inspirations = () => {
  return (
    <div>
        <Image src={InspirationsImg} alt="Inspirations" />
    </div>
  )
}

export default Inspirations