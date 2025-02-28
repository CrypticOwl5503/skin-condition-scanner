import React, { useState, useEffect } from 'react';
import CameraComponent from './CameraComponent';
import '../styles/FaceCapturePanel.css';

const FaceCapturePanel = ({ faceType, onProceed }) => {
  const [capturedImage, setCapturedImage] = useState(null);

  // Capture image and proceed immediately
  const handleCapture = (blob) => {
    const url = URL.createObjectURL(blob);
    setCapturedImage(url);
    onProceed(url);
  };

  return (
    <div className="face-capture-container">
      <CameraComponent onCapture={handleCapture} faceType={faceType} />
    </div>
  );
};

export default FaceCapturePanel;
