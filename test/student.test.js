const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize
const { passHelper, jwtHelper, sendEmail } = require('../helpers')

let access_token = ''
let wrong_access_token = ''
const studentEmail = 'reyhanprtrs@gmail.com'
const studentPass = 'student123cba'
const studentTester = [
  {
    firstName: 'Reyhan',
    lastName: 'Partiraes',
    fullName: 'Reyhan Partiraes',
    address: 'Jalan Asem Baris VIII',
    email: 'reyhanprtrs@gmail.com',
    phoneNumber: '082112639633',
    gender: 'Laki-laki',
    birthDate: '05-11-1997',
    password: 'student123cba',
    activation: 'Not Active',
    batch: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

const adminTester = [
  {
    email: 'admin@school.com',
    password: 'admin123',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

beforeAll(done => {
  queryInterface.bulkInsert('Students', studentTester, { returning: true })
    .then(student => {
      console.log(student[0])
      wrong_access_token = jwtHelper.encode({ id: student[0].id, email: student[0].email })
      sendEmail(studentEmail, student[0].email, studentPass)
      return queryInterface.bulkInsert('Admins', adminTester, { returning: true })
    })
    .then(admin => {
      access_token = jwtHelper.encode({ id: admin[0].id, email: admin[0].email })
      done()
    })
    .catch(err => done(err))
})

afterAll(done => {
  queryInterface.bulkDelete('Students', null, {})
    .then(() => { return queryInterface.bulkDelete('Admins', null, {}) })
    .then(() => done())
    .catch(err => done(err))
})

describe('GET /students', () => {
  test('Case 1: Get all students', done => {
    request(app)
      .get('/students/data')
      .set('access_token', access_token)
      .end((err, res) => {
        if (err) return done(err)
        const { status, body } = res
        expect(status).toBe(200)
        expect(body).toEqual(expect.arrayContaining([]))
        done()
      })
  })

  test(`Case 2: Don't have access token`, done => {
    request(app)
      .get('/students/data')
      .end((err, res) => {
        if (err) return done(err)
        const { status, body } = res
        expect(status).toBe(401)
        expect(body).toHaveProperty('message', 'Please Login First !')
        done()
      })
  })
})