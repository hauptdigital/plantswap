const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

dotenv.config();

const sender = '"Marc 🌴" <marc@plantswap.de>';
const baseUrl = process.env.BASE_URL;

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

            // Use title of mail template as subject
            titleStartPosition = htmlToSend.indexOf('<title>') + 7;
            titleEndPosition = htmlToSend.indexOf('</title>');
            mailSubject = htmlToSend.substr(titleStartPosition, titleEndPosition - titleStartPosition);

            const mailInfo = await transporter.sendMail({
                from: sender,
                to: userMail,
                subject: mailSubject,
                html: htmlToSend,
            });
            return mailInfo;
        }
    });
}

async function sendWelcomeMail(user) {
    const mailVerificationLink = baseUrl + '/token/' + user.mailVerificationToken;
    sendMail(user.email, 'welcomeMail', { username: user.userName, mailVerificationLink: mailVerificationLink });
}

module.exports.sendWelcomeMail = sendWelcomeMail;
