// pages/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Welcome to the Skin Condition Scanner</h1>
      <p>Capture images of your face from different angles for analysis.</p>
      <button onClick={() => navigate("/front")}>Start</button>
    </div>
  );
}

export default LandingPage;
