const express = require('express')
const app = express();
const nodemailer = require('nodemailer')

app.listen(3000, () => {
    console.log('Node app is running on port 3000 !')
})

app.post('/sendemail', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'realbearpro@gmail.com',
            pass: 'Dkigiupo@1452'
        }
    })
    const option = {
        from: 'realbearpro@gmail.com',
        to: 'natthakiat.k@gmail.com',
        subject: 'Test Nodemailer',
        html: `
            <p>Hello world I'm from nodemailer</p>
            <img src="https://images.unsplash.com/photo-1643390920099-93ed8d1b605d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
        `
    }

    transporter.sendMail(option, (err, info) => {
        if(err) {
            console.log('err', err)
            return res.status(200).json({
                RespCode: 400,
                RespMessage: 'bad',
                RespError: err
            })
        }
        else {
            console.log('Send: ' + info.response)
            return res.status(200).json({
                RespCode: 200,
                RespMessage: 'good',
            })
        }
    })
})

module.exports = app;