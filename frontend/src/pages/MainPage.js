import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MainPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="content">
        <h1>Skin Condition Scanner</h1>
        <p>Capture images of your face from different angles for analysis.</p>
        <button onClick={() => navigate("/front")}>Start</button>
      </div>
    </div>
  );
}

export default LandingPage;

