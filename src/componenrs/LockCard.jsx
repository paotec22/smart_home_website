import React from "react";
import axios from "axios";

const LockCard = ({ lock, refreshLocks, refreshActivity }) => {
  const toggleLock = async () => {
    await axios.post(`http://localhost:5000/api/locks/${lock.id}/toggle`);
    refreshLocks();
    refreshActivity();
  };

  return (
    <div className="flex items-center justify-between p-3 bg-gray-100 rounded">
      <div>
        <h4 className="font-semibold">{lock.name}</h4>
        <p className="text-sm text-gray-500">Battery: {lock.battery}%</p>
      </div>
      <button
        onClick={toggleLock}
        className={`px-4 py-1 rounded text-sm font-semibold ${
          lock.locked ? "bg-red-500 text-white" : "bg-green-500 text-white"
        }`}
      >
        {lock.locked ? "Locked" : "Unlocked"}
      </button>
    </div>
  );
};

export default LockCard;
