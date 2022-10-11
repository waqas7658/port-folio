import React from 'react'
import web from "../images/about.jpg";
import Common from "./Common";

export default function About() {
  return (
    <>
     <Common
        h1="About Us:"
        detail="We are providing you great services."
        button="Get Started"
        visit="/service"
        imgsrc={web}
      />
      
    </>
  )
}
