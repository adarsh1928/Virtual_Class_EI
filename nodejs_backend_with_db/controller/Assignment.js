const Assignment = require("../models/Assignment");
const Classroom = require("../models/Classroom");
const Student = require("../models/Student");

const scheduleAssignment = async (AssignmentID, AssignmentDetail, className) => {
  try {
    
    const classroom = await Classroom.findOne({ ClassName: className });

    if (!classroom) {
      console.error(`Classroom ${className} not found`);
      return;
    }

    const assignment = new Assignment({
      AssignmentID: AssignmentID,
      AssignmentDetail: AssignmentDetail,
      className: className, 
    });

    await assignment.save();

   classroom.ScheduledAssignments.push(assignment);

    await classroom.save();

    console.info(`Assignment ${AssignmentID} scheduled in Classroom ${className}`);
  } catch (error) {
    console.error('Error scheduling assignment:', error);
  }
};


const submitAssignment = async (studentID, className, assignmentID) => {
    try {
      
      const student = await Student.findOne({ studentID: studentID }); 
  
      if (!student) {
        console.error(`Student with ID ${studentID} not found`);
        return;
      }
  
      // Next, find the classroom where the assignment was scheduled
      const classroom = await Classroom.findOne({ ClassName: className }); 
  
      if (!classroom) {
        console.error(`Classroom ${className} not found`);
        return;
      }
  
      // Then, find the assignment to be submitted
      const assignment = await Assignment.findOne({ AssignmentID: assignmentID }); 
  
      if (!assignment) {
        console.error(`Assignment with ID ${assignmentID} not found`);
        return;
      }
  
      student.submittedAssignments.push(assignment._id); 
  
      await student.save();
  
      assignment.submittedByStudents.push(student._id);
  
      await assignment.save();
  
      console.info(`Assignment ${assignmentID} submitted by Student ${studentID}`);
  
    } catch (error) {
      console.error('Error submitting assignment:', error);
    }
  };
  

module.exports = {
    scheduleAssignment,
    submitAssignment
};
