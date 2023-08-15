import React, { useCallback, useRef, useState } from 'react';
import { RiCameraLensFill, RiCameraLensLine } from 'react-icons/ri';
import Webcam from 'react-webcam';

import { dataURLToBlob } from '../utils/imageUtils';

function HomeScreen() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [shutterClosed, setShutterClosed] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(true);

  const webcamRef = useRef(null);

  const captureImage = useCallback(() => {
    setShutterClosed(true);
    setTimeout(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      const blob = dataURLToBlob(imageSrc);

      const convertedImage = URL.createObjectURL(blob);
      console.log(convertedImage);
      setCapturedImage(convertedImage);
      setShutterClosed(false);
    }, 300);
  }, [webcamRef]);

  return (
    <section className="h-screen bg-indigo-500 flex flex-col-reverse sm:flex-row justify-evenly items-center p-7 sm:pr-56 sm:pl-24">
      <button
        onClick={capturedImage ? () => setCapturedImage(null) : captureImage}
        className="bg-indigo-800 text-white rounded-full p-2 mr-2 shadow-xl"
      >
        {shutterClosed ? (
          <RiCameraLensFill
            size={80}
            className="animate-shutter"
            style={{ animationDuration: '1s' }}
          />
        ) : (
          <RiCameraLensLine size={80} />
        )}
      </button>
      {capturedImage ? (
        <img
          src={capturedImage}
          alt="captured"
          className="border-2 border-indigo-800 rounded-xl shadow-xl p-1"
        />
      ) : (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="border-2 border-indigo-800 rounded-xl shadow-xl p-1"
        />
      )}
    </section>
  );
}

export default HomeScreen;
