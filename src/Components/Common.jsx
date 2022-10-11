import React from "react";
import { NavLink } from "react-router-dom";

export default function Common(props) {
  return (
    <>
      <section id="header" className=" d-flex align-items-center">
        <div className="container my-5 ">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
              <div className="col-md-6 col-sm-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  {props.h1}
                  <strong className="brand-name"> Muhammad Waqas</strong>
                </h1>
                <h4 className="my-3">{props.detail}</h4>
                <div className="mt-2">
                  <NavLink
                    to={props.visit}
                    className="btn btn-lg btn-dark rounded-pill "
                    id="start-btn"
                  >
                    {props.button}
                  </NavLink>
                </div>
              </div>
              <div className="my-5 col-md-6 col-sm-6 order-1 order-lg-2">
                <img
                  src={props.imgsrc}
                  className=" img-fluid rounded-pill animated"
                  alt="home image"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
