"use client"
// pages/donate/success.js
import { useEffect } from 'react';

const SuccessPage = () => {
  useEffect(() => {
    // Retrieve the form data from session storage
    const formDataString = sessionStorage.getItem('donationFormData');
    if (formDataString) {
      const formData = JSON.parse(formDataString);

      // Here, you can access the donor's name and email from formData
      const { firstName, lastName, email } = formData;

      // Send the success email to the donor's email address (stored in 'email')
      // Include the donor's name (stored in 'firstName' and 'lastName') in the email
      // Retrieve any other relevant information from formData

      // You can use a server-side email sending library or an external email service provider

      // Clear the stored form data from session storage
      sessionStorage.removeItem('donationFormData');
    }
  }, []);

  (async () => {
    try {
      const response = await fetch('/api/send-donation-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
  
      if (response.ok) {
        console.log('Donation email sent successfully!');
      } else {
        console.error('Failed to send donation email.');
      }
    } catch (error) {
      console.error('Error sending donation email:', error);
    }
  })();  
  return (
    <div>
      <h1>Donation Successful</h1>

      <p>Thank you for your for your donation.</p>
      <p>An confirmation email has been sent to your inbox</p>
      {/* Additional content and logic */}
    </div>
  );
};

export default SuccessPage;
