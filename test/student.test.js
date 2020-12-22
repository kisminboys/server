const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize
const { passHelper, sendEmail } = require('../helpers')

const studentEmail = 'reyhanprtrs@gmail.com'
const studentPass = 'student123cba'
const studentTester = [
  {
    firstName: 'Reyhan',
    lastName: 'Partiraes',
    address: 'Jalan Asem Baris VIII',
    phoneNumber: '082112639633',
    gender: 'Laki-laki',
    birthDate: '05-11-1997',
    batch: 1
  }
]

beforeAll(done => {
  queryInterface.bulkInsert('Students', studentTester, { returning: true })
    .then(data => {
      console.log(data[0])
      sendEmail(studentEmail, data[0].email, studentPass)
      done()
    })
    .catch(err => done(err))
})

describe('GET /student', () => {
  test('Case 1: Get all students', done => {
    request(app)
      .get('/student/data')
      .end((err, res) => {
        if (err) return done(err)
        const { status, body } = res
        expect(status).toBe(200)
        expect(body).toHaveProperty('firstName', 'Reyhan')

      })
  })
})