import React from "react";
import { useNavigate } from "react-router-dom";
import FaceCapturePanel from "../components/FaceCapturePanel";

function LeftCapture({ images, setImages }) {
  const navigate = useNavigate();

  const handleProceed = (imageUrl) => {
    setImages((prev) => ({ ...prev, left: imageUrl }));
    navigate("/recommendation"); // Proceed to the Recommendation page.
  };

  return (
    <div>
      <h2>Capture Left Face</h2>
      <FaceCapturePanel faceType="left" onProceed={handleProceed} />
    </div>
  );
}

export default LeftCapture;
