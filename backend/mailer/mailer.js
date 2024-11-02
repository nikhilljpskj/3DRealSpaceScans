const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use your preferred email service
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
});

const sendConfirmationEmail = (to, bookingData) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'Booking Confirmation',
        text: `Hello,

Thank you for your booking!

Here are your booking details:
- Booking ID: ${bookingData.bookingId}
- Date: ${bookingData.date}
- Time: ${bookingData.time}

If you have any questions, feel free to contact us.

Best Regards,
Your Company Name
        `,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendConfirmationEmail };
