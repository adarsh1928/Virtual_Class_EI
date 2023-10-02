const Classroom = require("../models/Classroom");

// add classroom feature implement in index.js file as a demo

const removeClassroom = (className) => {
  Classroom.findOneAndDelete({ ClassName: className }).then((deletedClassroom) => {
    if (deletedClassroom) {
      console.info(`Classroom ${deletedClassroom.ClassName} Removed`);
    } else {
      console.error(`Classroom ${className} not found`);
    }
  }).catch((error) => {
    console.error('Error removing classroom:', error);
  });
}

const listClassrooms = () => {
  Classroom.find().then((classrooms) => {
    if (classrooms.length > 0) {
      console.info('List of Classrooms:');
      classrooms.forEach((classroom) => {
        console.info(classroom.ClassName);
      });
    } else {
      console.info('No classrooms found');
    }
  }).catch((error) => {
    console.error('Error listing classrooms:', error);
  });
}

module.exports = {
  removeClassroom,
  listClassrooms,
};

