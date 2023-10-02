const Classroom=require("../models/Classroom")
const Student=require("../models/Student")
const mongoose = require("mongoose");



const addStudent = async (studentID, studentName, className) => {
  try {
   
    const classroom = await Classroom.findOne({ ClassName: className });

    if (!classroom) {
      console.error(`Classroom ${className} not found`);
      return;
    }

    const student = new Student({
      studentID: studentID, 
      studentName: studentName, 
      className: className,
    });

    await student.save();

    classroom.EnrolledStudents.push(student);

    await classroom.save();

    console.info(`Student ${studentName} (ID: ${studentID}) added to Classroom ${className}`);
  } catch (error) {
    console.error('Error adding student:', error);
  }
};
const removeStudent = async (studentID, className) => {
    try {
      const classroom = await Classroom.findOne({ ClassName: className });
  
      if (!classroom) {
        console.error(`Classroom ${className} not found`);
        return;
      }
  
      const student = await Student.findOneAndDelete({ studentID: studentID, className: className });
  
      if (!student) {
        console.error(`Student with ID ${studentID} not found in Classroom ${className}`);
        return;
      }
  
      // Remove the student's ObjectId from the EnrolledStudents array
      classroom.EnrolledStudents.pull(student._id);
  
      await classroom.save();
  
      console.info(`Student ${student.studentName} (ID: ${student.studentID}) removed from Classroom ${className}`);
    } catch (error) {
      console.error('Error removing student:', error);
    }
  };
  

  const listStudents = async (className) => {
    try {
      const classroom = await Classroom.findOne({ ClassName: className }).populate('EnrolledStudents');
  
      if (!classroom) {
        console.error(`Classroom ${className} not found`);
        return;
      }
  
      if (!classroom.EnrolledStudents || classroom.EnrolledStudents.length === 0) {
        console.info(`No students found in Classroom ${className}`);
        return;
      }
  
      console.info(`List of Students in Classroom ${className}:`);
      classroom.EnrolledStudents.forEach(student => {
        console.info(`Student Name: ${student.studentName}, Student ID: ${student.studentID}`);
      });
    } catch (error) {
      console.error('Error listing students:', error);
    }
  };
  


module.exports = {
    addStudent,
    removeStudent,
    listStudents,
  };
  
  
  