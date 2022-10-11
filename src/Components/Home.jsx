import React from "react";

import web from "../images/home.jpg";
import Common from "./Common";


export default function Home() {
  return (
    <>
    <div className=" container home rounded-pill">
      <Common
        h1=" Grow your Knowledge with"
        detail=" We have the team of professional and talented developers"
        button="Get Started"
        visit="/service"
        imgsrc={web}
      />
      </div>
     
    
    </>
  );
}
