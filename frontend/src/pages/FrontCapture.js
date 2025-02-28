// FrontCapture.js
import React from "react";
import { useNavigate } from "react-router-dom";
import FaceCapturePanel from "../components/FaceCapturePanel";
import '../styles/FrontCapture.css';

function FrontCapture({ images, setImages }) {
  const navigate = useNavigate();

  // This callback is invoked when the user clicks "Proceed" in the FaceCapturePanel.
  const handleProceed = (capturedUrl) => {
    setImages((prev) => ({ ...prev, front: capturedUrl }));
    navigate("/right"); // Next step: capture the right face.
  };

  return (
    <div className="front-capture-page">
      <h2>Capture Front Face</h2>
      <FaceCapturePanel faceType="front" onProceed={handleProceed} />
    </div>
  );
}

export default FrontCapture;