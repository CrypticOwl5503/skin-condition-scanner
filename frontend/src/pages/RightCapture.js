import React from "react";
import { useNavigate } from "react-router-dom";
import FaceCapturePanel from "../components/FaceCapturePanel";
import "../styles/RightCapture.css";

function RightCapture({ images, setImages }) {
  const navigate = useNavigate();

  const handleProceed = (imageUrl) => {
    setImages((prev) => ({ ...prev, right: imageUrl }));
    navigate("/left"); // Next step: left capture
  };

  return (
    <div className="right-capture-page">
      <h2>Capture Right Face</h2>
      <FaceCapturePanel faceType="right" onProceed={handleProceed} />
    </div>
  );
}

export default RightCapture;
