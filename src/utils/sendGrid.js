const sgMail = require('@sendgrid/mail');

const sendEmail = async (to, subject, text) => {
    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to,
            from: 'tu-correo-electronico@example.com', // Cambia esto por tu correo electrónico
            subject,
            text
        };
        await sgMail.send(msg);
        console.log('Correo electrónico enviado');
    } catch (error) {
        console.error('Error al enviar correo electrónico:', error);
    }
};

module.exports = sendEmail;