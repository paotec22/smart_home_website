import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import LockCard from "../components/LockCard";
import CameraCard from "../components/CameraCard";
import ActivityLog from "../components/ActivityLog";
import MemberCard from "../components/MemberCard";

const Dashboard = () => {
  const [locks, setLocks] = useState([]);
  const [cameras, setCameras] = useState([]);
  const [activity, setActivity] = useState([]);
  const [members, setMembers] = useState([]);

  // Fetch data
  const fetchLocks = async () => {
    const { data } = await axios.get("http://localhost:5000/api/locks");
    setLocks(data);
  };

  const fetchCameras = async () => {
    const { data } = await axios.get("http://localhost:5000/api/cameras");
    setCameras(data);
  };

  const fetchActivity = async () => {
    const { data } = await axios.get("http://localhost:5000/api/activity");
    setActivity(data);
  };

  const fetchMembers = async () => {
    const { data } = await axios.get("http://localhost:5000/api/members");
    setMembers(data);
  };

  useEffect(() => {
    fetchLocks();
    fetchCameras();
    fetchActivity();
    fetchMembers();
  }, []);

  // Render
  return (
    <div className="flex min-h-screen">
      {/* Left Nav */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Home</h1>
            <p className="text-gray-500">Backyard</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <div className="text-gray-500 text-sm">
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            {/* Example user avatar */}
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* House 3D / Mock */}
        <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center mb-6">
          <div className="text-gray-400 italic">
            [ 3D House Model Placeholder ]
          </div>
        </div>

        {/* Locks and Cameras */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="font-semibold mb-2">Locks</h2>
            <div className="space-y-2">
              {locks.map((lock) => (
                <LockCard key={lock.id} lock={lock} refreshLocks={fetchLocks} refreshActivity={fetchActivity} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Cameras</h2>
            <div className="space-y-2">
              {cameras.map((camera) => (
                <CameraCard
                  key={camera.id}
                  camera={camera}
                  refreshCameras={fetchCameras}
                  refreshActivity={fetchActivity}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-50 border-l p-6">
        <h2 className="text-xl font-semibold mb-4">Smart Home Security Systems</h2>

        {/* Members */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Members</h3>
          <div className="space-y-2">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Activity Log */}
        <div>
          <h3 className="font-semibold mb-2">Activity</h3>
          <ActivityLog activity={activity} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
