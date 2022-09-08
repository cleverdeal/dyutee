import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img1 from "../../assests/cdl.png";
import { FaChevronLeft } from "react-icons/fa";
const Signup = () => {

    const [info, setInfo] = useState({});
    const navigate = useNavigate()

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    
      
    try{
        const newUser = {...info};

      
      await axios.post("/client/signup", newUser)
      .then((response) =>{
        console.log("respose", response);
      });
      navigate("/Signin")
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info);
  return (
    <div className="mt-10 bg-grey-lighter min-h-screen flex flex-col">
      <Link to="/" className="mx-20">
        <FaChevronLeft />
      </Link>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <img src={img1} className="mx-auto mb-7" alt=""></img>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            id="username"
            onChange={handleChange}
            placeholder="Full Name"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded-lg  text-white btn-primary my-1"
            onClick={handleClick}
          >
            Create Account
          </button>
          <hr className="my-2"></hr>
          <Link to='/BrokerForm' className=" grid justify-items-center">
            <button className="btn rounded-lg btn-outline btn-accent">
              broker SignUp
            </button>
          </Link>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to="/signIn"
          >
            {" "}
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default Signup;