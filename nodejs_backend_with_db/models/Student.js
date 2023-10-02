
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true, 
  },
  studentName: {
    type: String,
    required: true, 
  },
  className: {
    type: String,
    required: true,
  },
  submittedAssignments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assignment',
    },
  ],
});

module.exports = mongoose.model("Student", StudentSchema);

