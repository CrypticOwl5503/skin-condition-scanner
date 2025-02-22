import React from "react";
import { useNavigate } from "react-router-dom";
import FaceCapturePanel from "../components/FaceCapturePanel";
import "../styles/LeftCapture.css";

function LeftCapture({ images, setImages }) {
  const navigate = useNavigate();

  const handleProceed = (imageUrl) => {
    setImages((prev) => ({ ...prev, left: imageUrl }));
    navigate("/recommendation"); // Proceed to the Recommendation page.
  };

  return (
    <div className="left-capture-page">
      <h2>Capture Left Face</h2>
      <FaceCapturePanel faceType="left" onProceed={handleProceed} />
    </div>
  );
}

export default LeftCapture;
