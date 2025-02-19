import React from "react";
import axios from "axios";

const CameraCard = ({ camera, refreshCameras, refreshActivity }) => {
  const toggleCamera = async () => {
    await axios.post(`http://localhost:5000/api/cameras/${camera.id}/toggle`);
    refreshCameras();
    refreshActivity();
  };

  return (
    <div className="flex items-center justify-between p-3 bg-gray-100 rounded">
      <div>
        <h4 className="font-semibold">{camera.name}</h4>
        <p className="text-sm text-gray-500">Schedule: {camera.schedule}</p>
      </div>
      <button
        onClick={toggleCamera}
        className={`px-4 py-1 rounded text-sm font-semibold ${
          camera.active ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {camera.active ? "On" : "Off"}
      </button>
    </div>
  );
};

export default CameraCard;
