const nodemailer = require('nodemailer')

function sendEmail(email, regEmail, regPassword) {
  const output = `
    <p>Register succeed!</p>
    <h3>Account details:</h3>
    <ul>
      <li>Email: ${regEmail}</li>
      <li>Password: ${regPassword}</li>
    </ul>
    <p>Please upload your photo with format 3x4 and change your password immediately:)</p>
    <h3>Thanks for using this web app!</h3>
  `
  
  let transporter = nodemailer.createTransport({
    service: process.env.MAILER_PROVIDER,
    host: `${process.env.MAILER_PROVIDER}.com`,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILER_EMAIL, // generated ethereal user
      pass: process.env.MAILER_PASS // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  const mailOptions = {
    from: `"School App" <${process.env.MAILER_EMAIL}>`, // sender address
    to: `${email}`, // list of receivers
    subject: "Your To-Do Account Details", // Subject line
    html: output // html body
  }

  return transporter.sendMail(mailOptions)
}

module.exports = sendEmail