import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage"; // landing page
import FrontCapture from "./pages/FrontCapture";
import RightCapture from "./pages/RightCapture";
import LeftCapture from "./pages/LeftCapture";
import Recommendation from "./pages/Recommendation";

function App() {
  const [images, setImages] = useState({
    front: null,
    right: null,
    left: null,
  });

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/front" element={<FrontCapture images={images} setImages={setImages} />} />
      <Route path="/right" element={<RightCapture images={images} setImages={setImages} />} />
      <Route path="/left" element={<LeftCapture images={images} setImages={setImages} />} />
      <Route path="/recommendation" element={<Recommendation images={images} />} />
    </Routes>
  );
}

export default App;
