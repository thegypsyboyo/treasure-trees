"use client"
// pages/donate/success.js
import { useEffect, useState } from 'react';

const SuccessPage = () => {
  const [donorInfo, setDonorInfo] = useState(null);

  useEffect(() => {
    // Retrieve the Checkout Session ID from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');

    // Fetch the Checkout Session data from your backend
    const fetchCheckoutSession = async () => {
      try {
        const response = await fetch(`/api/create-checkout-session?session_id=${sessionId}`);
        if (response.ok) {
          const sessionData = await response.json();

          // Access the donor's name and email from the metadata
          const { firstName,lastName,email } = sessionData.metadata;
          (async () => {
            try {
              const emailResponse = await fetch('/api/send-donation-email', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, email, lastName }),
              });

              if (emailResponse.ok) {
                console.log('Donation email sent successfully!');
              } else {
                console.error('Failed to send donation email.');
              }
            } catch (error) {
              console.error('Error sending donation email:', error);
            }
          })();
        } else {
          console.error('Failed to fetch Checkout Session data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching Checkout Session data:', error);
      }
    };

    fetchCheckoutSession();
  }, []);

  return (
    <div>
      <h1>Donation Successful</h1>
      <p>Thank you, {sessionData.metadata.firstName} {sessionData.metadata.lastName}, for your donation.</p>
      <p>A confirmation email has been sent to {sessionData.metadata.email}.</p>
      {/* Additional content and logic */}
    </div>
  );
};

export default SuccessPage;
