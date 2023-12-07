import React, { useState } from "react";
import "./AccountVerificationScreen.css";
import VerifyBackground from "../images/accveriwobutton.png";
import { useNavigate } from "react-router-dom";

const AccountVerificationScreen = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(""); 

  const navigateToLogin = () => {

    navigate("/login");
  };

  return (
    <div className="Account-screen" style={{ backgroundImage: `url(${VerifyBackground})` }}>
      <div className="Account-container">
        <div className="verify-container">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="otp-input"
          />
          <button className="verify-button" onClick={navigateToLogin}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountVerificationScreen;
