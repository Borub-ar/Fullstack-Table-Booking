import nodemailer from 'nodemailer';

export const sendVerificationEmailService = async (token: string, email: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const emailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Verify your email',
      html: `Click here to verify your email: <a href="http://localhost:3000/verify-email?token=${token}">Verify</a>`,
    };

    const info = await transporter.sendMail(emailOptions);
  } catch (error) {
    console.error('Failed to send verification email:', error);
    throw new Error('Failed to send verification email');
  }
};
