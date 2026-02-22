import nodemailer from 'nodemailer';

export const sendVerificationEmailService = async (token: string, email: string) => {
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
    html: `Click here to verify your email: <a href="${process.env.CLIENT_URL}/auth/verify-email-result?token=${encodeURIComponent(token)}">Verify</a>`,
  };

  const info = await transporter.sendMail(emailOptions);
  return info;
};
