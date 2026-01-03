const express = require("express");
const Attendance = require("../models/Attendance");
const Student = require("../models/Student");

const router = express.Router();

router.post("/mark", async (req, res) => {
  const { studentId, date, status } = req.body;

  let record = await Attendance.findOne({ studentId, date });

  if (record) {
    record.status = status;
    await record.save();
    return res.json({ message: "Attendance updated" });
  }

  await Attendance.create({ studentId, date, status });
  res.status(201).json({ message: "Attendance marked" });
});

router.get("/date/:date", async (req, res) => {
  const data = await Attendance.find({ date: req.params.date })
    .populate("studentId", "name rollNumber className");
  res.json(data);
});

router.get("/student/:studentId", async (req, res) => {
  const data = await Attendance.find({ studentId: req.params.studentId })
    .populate("studentId", "name rollNumber className")
    .sort({ date: -1 });
  res.json(data);
});

router.get("/stats", async (req, res) => {
  const totalStudents = await Student.countDocuments();
  const today = new Date().toISOString().slice(0, 10);
  const todayAttendance = await Attendance.find({ date: today });
  const presentCount = todayAttendance.filter(a => a.status === "Present").length;
  const absentCount = todayAttendance.filter(a => a.status === "Absent").length;
  
  res.json({
    totalStudents,
    presentToday: presentCount,
    absentToday: absentCount,
    notMarkedToday: totalStudents - todayAttendance.length
  });
});

router.get("/all", async (req, res) => {
  const data = await Attendance.find()
    .populate("studentId", "name rollNumber className")
    .sort({ date: -1 })
    .limit(100);
  res.json(data);
});

module.exports = router;
