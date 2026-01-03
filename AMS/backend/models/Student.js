const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true, unique: true },
  className: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  department: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
