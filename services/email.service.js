const nodemailer = require("nodemailer");

const sendEmail = function(login, password, mailOptions) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      auth: {
        user: `${login}`,
        pass: `${password}`
      }
    });

    transporter.sendMail(mailOptions, (error, info) => {
      if (error != null) reject(error);
      else resolve(`Message sent: ${info.messageId}`);
    });
  });
};

module.exports = sendEmail;
