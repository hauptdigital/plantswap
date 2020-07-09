const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const sender = '"Marc 🌴" <marc@plantswap.de>';

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

async function sendMail(userMail, { subject, text, html }) {
    const info = await transporter.sendMail({
        from: sender,
        to: userMail,
        subject: subject,
        text: text,
        html: html,
    });

    return info;
}
