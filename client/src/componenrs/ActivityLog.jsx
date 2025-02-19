import React from "react";

const ActivityLog = ({ activity }) => {
  return (
    <div className="space-y-2">
      {activity.map((item, idx) => (
        <div key={idx} className="flex items-center space-x-2">
          <span className="text-gray-500 text-sm w-16">{item.time}</span>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivityLog;
