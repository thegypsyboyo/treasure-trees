import { useEffect, useState } from 'react';

const SuccessPage = () => {
  const [donorInfo, setDonorInfo] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');

    const fetchCheckoutSession = async () => {
      try {
        const response = await fetch(`/api/create-checkout-session?session_id=${sessionId}`);
        if (response.ok) {
          const sessionData = await response.json();

          const { firstName, lastName, email } = sessionData.metadata;
          setDonorInfo({ firstName, lastName, email });

          const emailResponse = await fetch('/api/send-donation-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email }),
          });

          if (emailResponse.ok) {
            console.log('Donation email sent successfully!');
          } else {
            console.error('Failed to send donation email.');
          }
        } else {
          console.error('Failed to fetch Checkout Session data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching Checkout Session data:', error);
      }
    };

    fetchCheckoutSession();
  }, []);

  if (donorInfo) {
    return (
      <div>
        <h1>Donation Successful</h1>
        <p>Thank you, {donorInfo.firstName} {donorInfo.lastName}, for your donation.</p>
        <p>A confirmation email has been sent to {donorInfo.email}.</p>
        {/* Additional content and logic */}
      </div>
    );
  }

  return (
    <div>
      <h1>Donation Successful</h1>
      <p>Loading...</p>
    </div>
  );
};

export default SuccessPage;
