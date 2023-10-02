#!/usr/bin/env node

// Import required modules
const { Command } = require('commander');
const { prompt } = require('inquirer');

const { removeClassroom, listClassrooms } = require("./controller/Classroom")
const { addStudent, removeStudent, listStudents } = require("./controller/Student")
const { addClassroom } = require("./index");
const { scheduleAssignment, submitAssignment } = require('./controller/Assignment');

// Create a new Commander command
const program = new Command();

const questionsForClassroom = [
  {
    type: 'input',
    name: 'ClassName',
    message: 'Enter Name of classroom'
  }
];

const questionsForStudent = [
  {
    type: 'input',
    name: 'studentID',
    message: 'Enter the studentID'
  },
  {
    type: 'input',
    name: 'studentName',
    message: 'Enter the studentName'
  },
  {
    type: 'input',
    name: 'className',
    message: 'Enter the Name of classroom'
  },
]

const questionsForStudentRemove = [
  {
    type: 'input',
    name: 'StudentID',
    message: 'Enter the StudentID'
  },
  {
    type: 'input',
    name: 'className', 
    message: 'Enter the Name of classroom'
  }
];

const questionsForAssignment = [
  {
    type: 'input',
    name: 'AssignmentID',
    message: 'Enter the Assignment ID',
  },
  {
    type: 'input',
    name: 'AssignmentDetail',
    message: 'Enter the Assignment Detail',
  },
  {
    type: 'input',
    name: 'className',
    message: 'Enter the Classroom Name',
  },
];
const questionsForAssignmentSubmission = [
  {
    type: 'input',
    name: 'studentID',
    message: 'Enter the Student ID:',
  },
  {
    type: 'input',
    name: 'className',
    message: 'Enter the Class Name:',
  },
  {
    type: 'input',
    name: 'assignmentID',
    message: 'Enter the Assignment ID:',
  },
];

program
  .command('add_student')
  .alias('a')
  .description('Add a student')
  .action(() => {
    prompt(questionsForStudent).then(answers => {

      addStudent(answers.studentID, answers.studentName, answers.className);
    });
  });

program
  .command('add_classroom')
  .alias('a')
  .description('Add a classroom')
  .action(() => {
    prompt(questionsForClassroom).then(answers => addClassroom(answers.ClassName));
  });

program
  .command('remove_classroom')
  .alias('r')
  .description('Remove a classroom')
  .action(() => {
    prompt(questionsForClassroom).then(answers => removeClassroom(answers.ClassName));
  });

program
  .command('list_classrooms')
  .alias('l')
  .description('List all classrooms')
  .action(() => {
    listClassrooms();
  });

program
  .command('remove_student')
  .alias('rs')
  .description('Remove a student from a classroom')
  .action(() => {
    prompt(questionsForStudentRemove).then(answers => removeStudent(answers.StudentID, answers.className));
  });

program
  .command('list_students')
  .alias('ls')
  .description('List students in a classroom')
  .action(() => {
    prompt(questionsForClassroom).then(answers => listStudents(answers.ClassName));
  });
program
  .command('schedule_assignment')
  .alias('sa')
  .description('Schedule a new assignment')
  .action(() => {
    prompt(questionsForAssignment).then((answers) => {
      scheduleAssignment(answers.AssignmentID, answers.AssignmentDetail, answers.className);
    });
  });

program
  .command('submit_assignment')
  .alias('s')
  .description('Submit an assignment')
  .action(() => {
    prompt(questionsForAssignmentSubmission).then(answers => {
      // Call the submitAssignment function with the answers
      submitAssignment(answers.studentID, answers.className, answers.assignmentID);
    });
  });


program.parse(process.argv);
