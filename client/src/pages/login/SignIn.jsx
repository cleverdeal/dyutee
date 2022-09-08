import React from 'react'
import img1 from "../../assests/cdl.png";
import "./login.css";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {Link} from "react-router-dom"
import { FaChevronLeft } from 'react-icons/fa';
const Signin = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/signin", credentials);
      console.log(res);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
    <Link to='/' className='mr-auto'><FaChevronLeft /></Link>
    <img src={img1} alt="aaa"></img>
    <form className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
      <input type="text" 
      placeholder="username"
      id="username"
      onChange={handleChange}
      className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <input type="text" 
      placeholder="Password"
      id="password"
      onChange={handleChange} 
      className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <button 
      disabled={loading} onClick={handleClick}
      className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">
        Login</button>

      {/* <a className="text-blue-400 text-center my-2">Forgot Pasword?</a> */}
      <hr />
      <Link to='/SignOtp' className="w-full bg-blue-500 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Login in with Otp</Link>
    </form>
   
  </div>
  )
}

export default Signin