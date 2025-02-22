// FaceCapturePanel.js
import React, { useState, useEffect} from 'react';
import CameraComponent from './CameraComponent';
import '../styles/FaceCapturePanel.css';

const FaceCapturePanel = ({ faceType, onProceed }) => {
  const [capturedImage, setCapturedImage] = useState(null);
  const proceedButtonRef = React.useRef(null); // Ref for the "Proceed" button

  // When the camera component captures an image, save it here.
  const handleCapture = (blob) => {
    const url = URL.createObjectURL(blob);
    setCapturedImage(url);
  };

  // Add event listener for the 'a' key to trigger the "Proceed" button click
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'p' && proceedButtonRef.current) {
        proceedButtonRef.current.click();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

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
              alt={'${faceType} captured'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                border: '1px solid #ccc',
              }}
            />
<button 
  onClick={() => onProceed(capturedImage)} 
  className="proceed-btn"
  ref={proceedButtonRef} // Attach the ref to the "Proceed" button
>
  Proceed (Press 'P')
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