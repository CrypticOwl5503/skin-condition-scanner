import React, { useState, useRef, useEffect } from 'react';

const CameraComponent = ({ onCapture, faceType = 'front' }) => {
  const [isCapturing, setIsCapturing] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Start the camera when the component mounts
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (err) {
        console.error('Error accessing the camera:', err);
      }
    };

    startCamera();

    // Cleanup the stream on unmount
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Determine the overlay outline style based on faceType
  const getOutlineStyle = () => {
    const baseStyle = {
      position: 'absolute',
      border: '3px dashed #00FF00',
      pointerEvents: 'none',
    };

    if (faceType === 'front') {
      // Circular outline for the front face
      return {
        ...baseStyle,
        borderRadius: '50%',
        width: '300px',
        height: '300px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
    } else if (faceType === 'right') {
      // Slightly rotated outline for the right face
      return {
        ...baseStyle,
        borderRadius: '50%',
        width: '300px',
        height: '300px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(15deg)',
      };
    } else if (faceType === 'left') {
      // Slightly rotated outline for the left face
      return {
        ...baseStyle,
        borderRadius: '50%',
        width: '300px',
        height: '300px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-15deg)',
      };
    }
    return baseStyle;
  };

  // Capture the current video frame as an image
  const captureImage = () => {
    setIsCapturing(true);
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const context = canvas.getContext('2d');

    // Optional: fill the background with white
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    // Draw the video frame onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas content to a Blob and pass it to the onCapture callback
    canvas.toBlob((blob) => {
      if (blob) {
        onCapture(blob);
      }
      setIsCapturing(false);
    }, 'image/jpeg');
  };

  return (
    <div style={{ position: 'relative', width: '640px', height: '480px' }}>
      {/* Live preview video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {/* Overlay outline */}
      <div style={getOutlineStyle()} />
      {/* Capture button */}
      <button
        onClick={captureImage}
        className="capture-button"
        disabled={isCapturing}
        style={{ marginTop: '10px' }}
      >
        {isCapturing ? 'Capturing...' : 'Capture Image'}
      </button>
    </div>
  );
};

export default CameraComponent;
