import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email } = req.body;

  try {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure the email transport settings (e.g., SMTP, sendmail, etc.)
      // Provide the necessary credentials and server information
      // Example for using Gmail SMTP:
      service: 'Gmail',
      auth: {
        user: 'info@treasuretrees.com',
        pass: 'Zanzibar747!',
      },
    });

    // Create the email message
    const message = {
      from: 'info@treasuretrees.com',
      to: email,
      subject: 'Thank you for your donation',
      text: `Dear ${firstName} ${lastName},\n\nThank you for your generous donation. We appreciate your support!\n\nSincerely,\nTreasure trees`,
    };

    // Send the email
    await transporter.sendMail(message);

    res.status(200).json({ message: 'Donation email sent successfully' });
  } catch (error) {
    console.error('Error sending donation email:', error);
    res.status(500).json({ message: 'Failed to send donation email' });
  }
}
