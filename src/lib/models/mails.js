const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const { welcomeMail } = require('../mails/templates/welcomeMail');

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

async function sendMail(userMail, templateName, replacements) {
    const pathToTemplate = path.join(__dirname, '..', 'mails', 'templates', `${templateName}.html`);

    fs.readFile(pathToTemplate, { encoding: 'utf-8' }, async (error, html) => {
        if (error) {
            throw error;
        } else {
            const template = handlebars.compile(html);
            // Make replacements in mail
            const htmlToSend = template(replacements);
            const info = await transporter.sendMail({
                from: sender,
                to: userMail,
                subject: 'test',
                text: 'test',
                html: htmlToSend,
            });
            return info;
        }
    });
}

sendMail('user@doe.de', 'welcomeMail', { username: 'Hans-Peter' });
