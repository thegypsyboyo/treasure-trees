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
      html: `<p>Dear ${firstName} ${lastName},</p><p>We wanted to take a moment to express our heartfelt gratitude for your generous donation. Your support means the world to us and has a significant impact on TREAUSE TREES. Thanks to your contribution, we can continue our mission of [describe the mission or work of the organization].</p><p>Your generosity is truly inspiring, and we are incredibly grateful for your commitment to making a difference. With your help, we can [provide assistance/research/find solutions] to those in need and create a positive change in our community.</p><p>Once again, thank you for your kindness and belief in our cause. We are honored to have you as a donor and look forward to keeping you updated on the progress we achieve together.</p><p>Wishing you all the best,</p><p>BOB Van Der Bijl</p><p>TREASURE TREES</p>`,
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
