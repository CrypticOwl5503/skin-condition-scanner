// FaceCapturePanel.js
import React, { useState } from 'react';
import CameraComponent from './CameraComponent';

const FaceCapturePanel = ({ faceType, onProceed }) => {
  const [capturedImage, setCapturedImage] = useState(null);

  // When the camera component captures an image, save it here.
  const handleCapture = (blob) => {
    const url = URL.createObjectURL(blob);
    setCapturedImage(url);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      {/* Left Panel: Live Preview */}
      <div style={{ flex: 1, position: 'relative', width: '640px', height: '480px' }}>
        <h3>Live Preview ({faceType})</h3>
        <CameraComponent onCapture={handleCapture} faceType={faceType} />
      </div>

      {/* Right Panel: Captured Result */}
      <div style={{ flex: 1, width: '640px', height: '480px' }}>
        <h3>Captured Image ({faceType})</h3>
        {capturedImage ? (
          <>
            <img
              src={capturedImage}
              alt={`${faceType} captured`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                border: '1px solid #ccc',
              }}
            />
<button 
  onClick={() => onProceed(capturedImage)} 
  className="action-button"
>
  Proceed
</button>

          </>
        ) : (
          <p>No image captured yet.</p>
        )}
      </div>
    </div>
  );
};

export default FaceCapturePanel;