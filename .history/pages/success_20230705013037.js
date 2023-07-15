// pages/donate/success.js
import { useEffect } from 'react';

const SuccessPage = ({ formState }) => {
  useEffect(() => {
    const formDataString = sessionStorage.getItem('donationFormData');
    if (formDataString) {
      const formData = JSON.parse(formDataString);

      const { firstName, lastName, email } = formData;
      sessionStorage.removeItem('donationFormData');

      (async () => {
        try {
          const response = await fetch('/api/send-donation-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
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
    }
  }, []);

  return (
    <div>
      <h1>Donation Successful</h1>
      <p>Thank you, {formState.firstName} {formState.lastName}, for your donation.</p>
      <p>A confirmation email has been sent to {formState.email}.</p>
      {/* Additional content and logic */}
    </div>
  );
};

export default SuccessPage;
