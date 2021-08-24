const nodemailer = require("nodemailer");

module.exports = {
    email: async (req, res) => {
      const { firstName, lastName, email, subject, message } = req.body;
      try {
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          service: "gmail", 
          secure: false,
          requireTLS: true,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        });
        let info = await transporter.sendMail(
          {
            from: `${firstName} ${lastName}, ${email}`,
            to: process.env.EMAIL,
            subject: subject,
            text: message,
            html: `<div>
                          <p>You got a new message from: ${firstName} ${lastName}</p>
                          <p>${message}<p>
                          <p>Sender email: ${email}</p>
                         </div>`,
          },
          (err, res) => {
            if (err) {
              console.log(err);
            } else {
              res.status(200).send(info);
            }
          }
        );
      } catch (err) {
        res.status(500).send(err);
      }
  
      res.sendStatus(200);
    },
  };