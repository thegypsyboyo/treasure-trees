"use client"
// pages/donate/success.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SuccessPage = () => {
  const router = useRouter();
  const { session_id, firstName, lastName, email } = router.query;

  useEffect(() => {
    // Send the success email to the donor's email address (stored in 'email')
    // Include the donor's name (stored in 'firstName' and 'lastName') in the email
    // Retrieve any other relevant information from the query parameters

    // You can use a server-side email sending library or an external email service provider
  }, [session_id]);

  return (
    <div>
      <h1>Donation Successful</h1>
      <p>Thank you, {firstName} {lastName}, for your donation with session ID: {session_id}.</p>
      {/* Additional content and logic */}
      <p>An email was sent to {email}, Please check your inbox. Thank you ❤</p>
    </div>
  );
};

export default SuccessPage;
