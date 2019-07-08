require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.first} ${req.body.last}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>`

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: process.env.gmailAddress,
                clientId: process.env.gmailclientid,
                clientSecret: process.env.gmailclientsecret,
                refreshToken: process.env.accesstoken,
                accessToken: process.env.refreshtoken
            }
        })

        let mailOptions = {
            from: req.body.email,
            to: process.env.gmailAddress,
            subject: 'Portfolio alert',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) console.log(err)
            res.send(info);
        })
    })
})

const PORT = process.env.port || 5000

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
})