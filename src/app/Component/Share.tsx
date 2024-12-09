import React from 'react'
import Image from "next/image";
import ShareImg from "./../Assets/Share.png";

const Share = () => {
  return (
    <div>
        <Image src={ShareImg} alt="Share" />
    </div>
  )
}

export default Share