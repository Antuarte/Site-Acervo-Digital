const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nuvemaline0509@gmail.com', // Seu e-mail
        pass: '061121Aline!' // Sua senha
    }
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'nuvemaline0509@gmail.com', // Seu e-mail
        to: 'nuvemaline0509@gmail.com', // E-mail do destinatário (seu e-mail)
        subject: 'Nova mensagem de contato',
        text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email enviado: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});