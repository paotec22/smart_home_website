import React from "react";

const MemberCard = ({ member }) => {
  return (
    <div className="flex items-center space-x-2 p-2 bg-white rounded shadow-sm">
      <img
        src="https://via.placeholder.com/30"
        alt="Member"
        className="w-8 h-8 rounded-full"
      />
      <div>
        <h4 className="text-sm font-semibold">{member.name}</h4>
        <p className="text-xs text-gray-500">{member.role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
