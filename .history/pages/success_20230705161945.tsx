"use client"

import { useEffect, useState } from 'react';

interface CustomerData {
  name: string;
  email: string;
}

const SuccessPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');

    // Retrieve the name and email from the backend using the session ID
    const fetchCustomerData = async () => {
      try {
        const response = await fetch(`/api/create-checkout-session?session_id=${sessionId}`);
        if (!response.ok) {
          throw new Error('Failed to retrieve customer data');
        }
        const data: CustomerData = await response.json();
        setName(data.name);
        setEmail(data.email);
      } catch (error) {
        console.error('Error retrieving customer data:', error);
        // Handle error accordingly, e.g., display an error message to the user
      }
    };

    fetchCustomerData();
  }, []);

  useEffect(() => {
    const sendConfirmationEmail = async () => {
      try {
        const response = await fetch('/api/send-donation-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
        });

        if (!response.ok) {
          throw new Error('Failed to send confirmation email');
        }
        console.log('Confirmation email sent successfully!');
      } catch (error) {
        console.error('Error sending confirmation email:', error);
        // Handle error accordingly, e.g., display an error message to the user
      }
    };

    sendConfirmationEmail();
  }, [name, email]);

  return (
    <div>
      <h1>Success</h1>
      <p>Your payment was successful!</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {/* Additional success page content */}
      {/* ... */}
    </div>
  );
};

export default SuccessPage;
