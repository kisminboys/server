const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize
const { passHelper, jwtHelper, sendEmail } = require('../helpers')

let access_token = ''
let student_access_token = ''
let studentId = ''
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
    password: passHelper.generatePassword(studentPass),
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
      student_access_token = jwtHelper.encode({ id: student[0].id, email: student[0].email })
      studentId = student[0].id
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

describe('GET /students/data', () => {
  test('Case 1: Success get all students', done => {
    request(app)
      .get('/students')
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
      .get('/students')
      .end((err, res) => {
        if (err) return done(err)
        const { status, body } = res
        expect(status).toBe(401)
        expect(body).toHaveProperty('message', 'Please Login First !')
        done()
      })
  })
})

describe('GET /students/data/:id', () => {
  test('Case 1: Success get student by id', done => {
    request(app)
      .get(`/students/${studentId}`)
      .set('access_token', access_token)
      .end((err, res) => {
        if (err) return done(err)
        const { status, body } = res
        expect(status).toBe(200)
        expect(body).toHaveProperty('firstName', 'Reyhan')
        done()
      })
  })

  test(`Case 2: Don't have access token`, done => {
    request(app)
      .get(`/students/${studentId}`)
      .end((err, res) => {
        if (err) return done(err)
        const { status, body } = res
        expect(status).toBe(401)
        expect(body).toHaveProperty('message', 'Please Login First !')
        done()
      })
  })
})

describe('PUT /students/reset', () => {
  test('Case 1: Success reset password', done => {
    request(app)
      .put('/students/reset')
      .set('access_token', student_access_token)
      .send({ oldPassword: 'student123cba', newPassword: 'barunih' })
      .end((err, res) => {
        if (err) return done(err)
        const { status, body } = res
        expect(status).toBe(200)
        expect(body).toHaveProperty('message', 'Password changed!')
        done()
      })
  })

  test('Case 2: Wrong old password', done => {
    request(app)
      .put('/students/reset')
      .set('access_token', student_access_token)
      .send({ oldPassword: 'yanglama', newPassword: 'barunih' })
      .end((err, res) => {
        if (err) return done(err)
        const { status, body } = res
        expect(status).toBe(400)
        expect(body).toHaveProperty('message', 'Wrong password')
        done()
      })
  })

  test(`Case 3: Don't have access token`, done => {
    request(app)
      .put('/students/reset')
      .send({ oldPassword: 'student123cba', newPassword: 'barunih' })
      .end((err, res) => {
        if (err) return done(err)
        const { status, body } = res
        expect(status).toBe(401)
        expect(body).toHaveProperty('message', 'Please Login First !')
        done()
      })
  })
})