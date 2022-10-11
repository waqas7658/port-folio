import React, { useState } from "react";

export default function Contact() {


  const [data, setData]=useState({
     fullname:"",
     email: "",
     phone:"",
     opinions:""
  })
  const InputEvent=(event)=>{
    const {name, value}= event.target

    setData((preVal)=>{
      return{
        ...preVal,
        [name]: value,
      }
    })


  }

    const formSubmit=(e)=>{
          e.preventDefault();
          alert(
            `My name is ${data.name} and My opinion is ${data.opinions}`
          )
    }


  return (
    <>
      <h1 className=" text-center mt-5">Contact Us</h1>
      <hr className="w-25 mx-auto" />
      <div className="container my-5">
        <div className="row">
          <div className="col-8 col-md-8 col-sm-8 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="form-label fw-bold"
                >
                  FullName:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="1"
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                  placeholder="Enter Name"
                ></textarea>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label fw-bold">
                  Email Address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="someone@gmail.com"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputtel" className="form-label fw-bold">
                  Phone No:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputtel"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="xxxx-xxxxxxx"
                  aria-describedby="Phone"
                />
              </div>

            
              <div className="mb-3">
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label fw-bold"
                  >
                    Your Opinions:
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="opinions"
                    value={data.opinions}
                    onChange={InputEvent}
                  ></textarea>
                </div>
              </div>

              <div className="my-5 text-center">
                <button
                  type="submit"
                  className="btn btn-lg btn-outline-dark rounded-pill"
                >
                  Submit
                </button>
              </div>
                {/* <div className="mb-4">
                <select
                  className="form-select fw-bold"
                  aria-label="Default select example"
                >
                  <option selected>Select your city.</option>
                  <option value="1">Rawalpindi</option>
                  <option value="2">Karachi</option>
                  <option value="3">Lahore</option>
                </select>
              </div>
              <div className="mb-3">
                <select
                  className="form-select fw-bold"
                  aria-label="Default select example"
                >
                  <option selected>Select your Course.</option>
                  <option value="1">Web Development</option>
                  <option value="2">Computer Studies</option>
                  <option value="3">English Language</option>
                </select>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
