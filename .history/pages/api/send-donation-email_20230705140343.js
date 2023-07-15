import nodemailer from 'nodemailer';

const email = 'lewisonyango9@gmail.com';
const password = 'lbpkdnzfjjrowyul';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, donationAmount, donationPeriod } = req.body;

    // Server-side form validation
    if (!firstName || !lastName || !email || !donationAmount || !donationPeriod) {
      return res.status(400).json({ message: 'Failed: Missing Required Values' });
    }

    try {
      // Create the email message
      const message = {
        from: email,
        to: email,
        subject: 'Thank you for your donation',
        text: `Dear ${firstName} ${lastName},\n\nThank you for your generous donation of $${donationAmount} (${donationPeriod}). We appreciate your support!\n\nSincerely,\nTreasure trees`,
      };

      // Send the email
      await transporter.sendMail(message);

      return res.status(200).json({ message: 'Success: Donation email sent' });
    } catch (error) {
      return res.status(400).json({ message: `Failed: ${error.message}` });
    }
  }
}
