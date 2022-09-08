import React, { useState } from "react";

const OTPBox = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <>
      <div className="container mx-auto mt-10 flex flex-col items-center">
        
      

      <div className="text-lg">
        <div className="col text-center ">
          <p>Enter the OTP sent to you to verify your identity</p>

          {otp.map((data, index) => {
            return (
              <input
                className="w-10 mr-2.5 pl-3 h-10  shadow-lg"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}

          <p>OTP Entered - {otp.join("")}</p>
          <p>
            <button
              className="btn btn-secondary mr-2"
              onClick={(e) => setOtp([...otp.map((v) => "")])}
            >
              Clear
            </button>
            <button
              className="btn btn-primary"
              onClick={(e) => alert("Entered OTP is " + otp.join(""))}
            >
              Verify OTP
            </button>
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default OTPBox;