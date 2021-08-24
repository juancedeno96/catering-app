require("dotenv").config();
const { SERVER_PORT } = process.env;
const express = require("express");
const app = express();
const mailCtrl = require('./controller/mailController')

app.use(express.json());

//mailer endpoint
app.post('/api/email', mailCtrl.email)


app.listen(SERVER_PORT, () => console.log(`running on port ${SERVER_PORT}`));
