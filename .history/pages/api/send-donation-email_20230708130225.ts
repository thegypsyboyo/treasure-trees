"use client"
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface EmailData {
  email: string;
  firstName: string;
  lastName: string;
}

const emailUser = 'lewisonyango9@gmail.com';
const password = 'lbpkdnzfjjrowyul';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: password,
  },
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
});

const sendDonationEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, firstName, lastName } = req.body as EmailData;

    // Compose the email message
    const mailOptions = {
      from: emailUser,
      to: email,
      subject: 'Donation Confirmation',
      text: `Dear ${firstName} ${lastName},\n\nThank you for your donation!`,
      html: `<p>Dear ${firstName} ${lastName},</p><p>Thank you for your donation!</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send a success response
    res.status(200).json({ message: 'Donation confirmation email sent successfully' });
  } catch (error) {
    console.error('Error sending donation confirmation email:', error);
    // Send an error response
    res.status(500).json({ error: 'Failed to send donation confirmation email' });
  }
};

export default sendDonationEmail;
