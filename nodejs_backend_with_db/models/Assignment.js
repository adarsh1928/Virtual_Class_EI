const mongoose = require("mongoose")

const AssignmentSchema = new mongoose.Schema({

    AssignmentID: {
        type: String,
        require: true
    },
    AssignmentDetail: [{
        type: String,
        required: true
    }],
    submittedByStudents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
        },
    ],
    className: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model("Assignment", AssignmentSchema)