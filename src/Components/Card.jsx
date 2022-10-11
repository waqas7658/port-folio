import React from "react";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 my-3 mx-auto ">
        <div className="card">
          <img src={props.img} className="card-img-top img-fluid" alt="..." />

          <div className="card-body">
            <h5 className="card-title fw-bold">{props.title}</h5>

            <p className="card-text overflow-hidden">{props.content}</p>

            <NavLink
              to={props.visit}
              className="btn btn-outline-dark rounded-pill"
            >
              {props.btn}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
