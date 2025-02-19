const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data (for demonstration; replace with DB as needed)
let locks = [
  { id: 1, name: "Front Door", locked: true, battery: 60 },
  { id: 2, name: "Backyard", locked: false, battery: 45 },
];

let cameras = [
  { id: 1, name: "Camera 1", active: true, schedule: "9 am - 6 pm" },
  { id: 2, name: "Camera 2", active: false, schedule: "3 pm - 6 pm" },
  { id: 3, name: "Camera 3", active: true, schedule: "2 pm - 6 pm" },
];

let activityLogs = [
  { time: "07:00", description: "Back door was Closed" },
  { time: "08:00", description: "Back door was Opened" },
];

let members = [
  { id: 1, name: "Sophia W.", role: "Admin" },
  { id: 2, name: "John D.", role: "Member" },
  { id: 3, name: "Emily K.", role: "Member" },
  { id: 4, name: "Luke M.", role: "Guest" },
];

// Routes

// GET locks
app.get("/api/locks", (req, res) => {
  res.json(locks);
});

// Toggle lock
app.post("/api/locks/:id/toggle", (req, res) => {
  const lockId = parseInt(req.params.id, 10);
  locks = locks.map((lock) => {
    if (lock.id === lockId) {
      const updated = { ...lock, locked: !lock.locked };
      // Log the activity
      activityLogs.push({
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        description: `${lock.name} was ${updated.locked ? "Locked" : "Unlocked"}`
      });
      return updated;
    }
    return lock;
  });
  res.json({ success: true, locks });
});

// GET cameras
app.get("/api/cameras", (req, res) => {
  res.json(cameras);
});

// Toggle camera
app.post("/api/cameras/:id/toggle", (req, res) => {
  const cameraId = parseInt(req.params.id, 10);
  cameras = cameras.map((cam) => {
    if (cam.id === cameraId) {
      const updated = { ...cam, active: !cam.active };
      // Log the activity
      activityLogs.push({
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        description: `${cam.name} was ${updated.active ? "Activated" : "Deactivated"}`
      });
      return updated;
    }
    return cam;
  });
  res.json({ success: true, cameras });
});

// GET activity logs
app.get("/api/activity", (req, res) => {
  res.json(activityLogs);
});

// GET members
app.get("/api/members", (req, res) => {
  res.json(members);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
