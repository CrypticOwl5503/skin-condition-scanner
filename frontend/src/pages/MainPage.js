import React, {useEffect} from "react";
import { useNavigate} from "react-router-dom";
import "../styles/MainPage.css";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        navigate("/front");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="content">
        <h1>Skin Condition Scanner</h1>
        <p>Press Button to continue!</p>
        <button onClick={() => navigate("/front")}>Start</button>
      </div>
    </div>
  );
}

export default LandingPage;