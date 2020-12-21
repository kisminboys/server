'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.addConstraint('Students', {
    //   fields: ['ClassroomId'],
    //   type: 'foreign key',
    //   name: 'classroomid_students',
    //   references: { //Required field
    //     table: 'Classrooms',
    //     field: 'id'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // })
    //   .then(() => {
        return queryInterface.addConstraint('Classrooms', {
          fields: ['StudentId'],
          type: 'foreign key',
          name: 'studentid_classrooms',
          references: { //Required field
            table: 'Students',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
      // })
      .then(() => {
        return queryInterface.addConstraint('Classrooms', {
          fields: ['TeacherId'],
          type: 'foreign key',
          name: 'teacherid_classrooms',
          references: { //Required field
            table: 'Teachers',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
      })
      // .then(() => {
      //   return queryInterface.addConstraint('Teachers', {
      //     fields: ['ClassroomId'],
      //     type: 'foreign key',
      //     name: 'classroomid_teachers',
      //     references: { //Required field
      //       table: 'Classrooms',
      //       field: 'id'
      //     },
      //     onDelete: 'cascade',
      //     onUpdate: 'cascade'
      //   })
      // })
      .then(() => {
        return queryInterface.addConstraint('Teachers', {
          fields: ['SubjectId'],
          type: 'foreign key',
          name: 'subjectid_teachers',
          references: { //Required field
            table: 'Subjects',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
      })
      // .then(() => {
      //   return queryInterface.addConstraint('Subjects', {
      //     fields: ['TeacherId'],
      //     type: 'foreign key',
      //     name: 'teacherid_subjects',
      //     references: { //Required field
      //       table: 'Teachers',
      //       field: 'id'
      //     },
      //     onDelete: 'cascade',
      //     onUpdate: 'cascade'
      //   })
      // })
      .then(() => {
        return queryInterface.addConstraint('QuestionBanks', {
          fields: ['SubjectId'],
          type: 'foreign key',
          name: 'subjectid_questionbanks',
          references: { //Required field
            table: 'Subjects',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
      })
      .then(() => {
        return queryInterface.addConstraint('Exams', {
          fields: ['ClassroomId'],
          type: 'foreign key',
          name: 'classroomid_exams',
          references: { //Required field
            table: 'Classrooms',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
      })
      .then(() => {
        return queryInterface.addConstraint('Exams', {
          fields: ['SubjectId'],
          type: 'foreign key',
          name: 'subjectid_exams',
          references: { //Required field
            table: 'Subjects',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
      })
      // .then(() => {
      //   return queryInterface.addConstraint('Exams', {
      //     fields: ['QuestionBankId'],
      //     type: 'foreign key',
      //     name: 'questionbankid_exams',
      //     references: { //Required field
      //       table: 'QuestionBanks',
      //       field: 'id'
      //     },
      //     onDelete: 'cascade',
      //     onUpdate: 'cascade'
      //   })
      // })
  },

  down: (queryInterface, Sequelize) => {
    // return queryInterface.removeConstraint('Students', 'classroomid_students')
    //   .then(() => {
        return queryInterface.removeConstraint('Classrooms', 'studentid_classrooms')
      // })
      .then(() => {
        return queryInterface.removeConstraint('Classrooms', 'teacherid_classrooms')
      })
      // .then(() => {
      //   return queryInterface.removeConstraint('Teachers', 'classroomid_teachers')
      // })
      .then(() => {
        return queryInterface.removeConstraint('Teachers', 'subjectid_teachers')
      })
      // .then(() => {
      //   return queryInterface.removeConstraint('Subjects', 'teacherid_subjects')
      // })
      .then(() => {
        return queryInterface.removeConstraint('QuestionBanks', 'subjectid_questionbanks')
      })
      .then(() => {
        return queryInterface.removeConstraint('Exams', 'classroomid_exams')
      })
      .then(() => {
        return queryInterface.removeConstraint('Exams', 'subjectid_exams')
      })
      // .then(() => {
      //   return queryInterface.removeConstraint('Exams', 'questionbankid_exams')
      // })
  }
};
