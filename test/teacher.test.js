const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize
const { passHelper, jwtHelper, sendEmail } = require('../helpers')

let access_token = ''
let teacher_access_token = ''
let teacherId = ''
const teacherEmail = 'suburbanwayne@gmail.com'
const teacherPass = 'teacher123cba'
const teacherTester = {
    firstName: 'Wayne',
    lastName: 'Suburban',
    address: 'Jalan Semongko no.95',
    email: 'suburbanwayne@gmail.com',
    phoneNumber: '0821328372839',
    gender: 'Laki-laki',
    birthDate: '1997-11-05'
  }

const adminTester = [
  {
    email: 'admin@school.com',
    password: 'admin123',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

beforeAll(done => {
  queryInterface.bulkInsert('Admins', adminTester, { returning: true })
    .then(admin => {
      access_token = jwtHelper.encode({ id: admin[0].id, email: admin[0].email })
      done()
    })
    .catch(err => done(err))
})

afterAll(done => {
  queryInterface.bulkDelete('Teachers', null, {})
    .then(() => { return queryInterface.bulkDelete('Admins', null, {}) })
    .then(() => done())
    .catch(err => done(err))
})

describe('POST /teachers', () => {
  test('Case 1: Success create teachers', done => {
    request(app)
      .post('/teachers')
      .set('access_token', access_token)
      .send(teacherTester)
      .end((err, res) => {
        if (err) return done(err)
        const { status, body } = res
        console.log();
        expect(status).toBe(201)
        expect(body).toHaveProperty('fullName', 'Wayne Suburban')
        done()
      })
  })
  // test(`Case 2: Don't have access token`, done => {
  //   request(app)
  //     .get('/teachers')
  //     .end((err, res) => {
  //       if (err) return done(err)
  //       const { status, body } = res
  //       expect(status).toBe(401)
  //       expect(body).toHaveProperty('message', 'Please Login First !')
  //       done()
  //     })
  // })
})

// describe('GET /teachers/data', () => {
//   test('Case 1: Success get all teachers', done => {
//     request(app)
//       .get('/teachers')
//       .set('access_token', access_token)
//       .end((err, res) => {
//         if (err) return done(err)
//         const { status, body } = res
//         expect(status).toBe(200)
//         expect(body).toEqual(expect.arrayContaining([]))
//         done()
//       })
//   })

//   test(`Case 2: Don't have access token`, done => {
//     request(app)
//       .get('/teachers')
//       .end((err, res) => {
//         if (err) return done(err)
//         const { status, body } = res
//         expect(status).toBe(401)
//         expect(body).toHaveProperty('message', 'Please Login First !')
//         done()
//       })
//   })
// })

// describe('GET /teachers/data/:id', () => {
//   test('Case 1: Success get teacher by id', done => {
//     request(app)
//       .get(`/teachers/${teacherId}`)
//       .set('access_token', access_token)
//       .end((err, res) => {
//         if (err) return done(err)
//         const { status, body } = res
//         expect(status).toBe(200)
//         expect(body).toHaveProperty('firstName', 'Reyhan')
//         done()
//       })
//   })

//   test(`Case 2: Don't have access token`, done => {
//     request(app)
//       .get(`/teachers/${teacherId}`)
//       .end((err, res) => {
//         if (err) return done(err)
//         const { status, body } = res
//         expect(status).toBe(401)
//         expect(body).toHaveProperty('message', 'Please Login First !')
//         done()
//       })
//   })
// })

// describe('PUT /teachers/reset', () => {
//   test('Case 1: Success reset password', done => {
//     request(app)
//       .put('/teachers/reset')
//       .set('access_token', teacher_access_token)
//       .send({ oldPassword: 'teacher123cba', newPassword: 'barunih' })
//       .end((err, res) => {
//         if (err) return done(err)
//         const { status, body } = res
//         expect(status).toBe(200)
//         expect(body).toHaveProperty('message', 'Password changed!')
//         done()
//       })
//   })

//   test('Case 2: Wrong old password', done => {
//     request(app)
//       .put('/teachers/reset')
//       .set('access_token', teacher_access_token)
//       .send({ oldPassword: 'yanglama', newPassword: 'barunih' })
//       .end((err, res) => {
//         if (err) return done(err)
//         const { status, body } = res
//         expect(status).toBe(400)
//         expect(body).toHaveProperty('message', 'Wrong password')
//         done()
//       })
//   })

//   test(`Case 3: Don't have access token`, done => {
//     request(app)
//       .put('/teachers/reset')
//       .send({ oldPassword: 'teacher123cba', newPassword: 'barunih' })
//       .end((err, res) => {
//         if (err) return done(err)
//         const { status, body } = res
//         expect(status).toBe(401)
//         expect(body).toHaveProperty('message', 'Please Login First !')
//         done()
//       })
//   })
// })