import React from "react";
import Card from "./Card";
import Cdata from "../Components/Cdata";


export default function Service() {
  return (
    <>
      <h1 className=" text-center mt-5">Our Services</h1>
      <hr className="w-25 mx-auto" />

      <div className="container-fluid my-5">
        <div className="row gy-3 gx-3 ">
        <div className="col-10 mx-auto">
            <div className="row ">
          
                
                {Cdata.map((val, ind)=>{
                    return(
                        <Card
                            key={ind}
                            title={val.title}
                            content={val.content}
                            btn={val.btn}
                            img={val.img}
                            visit= "/Contact"
                        />
                    )
                })

                }       
                </div>

                    
                </div>
            </div>
            </div>
         
    
    </>
  );
}
