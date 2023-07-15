"use client"
//success.js
import { useRouter } from 'next/router';

const SuccessPage = () => {
  const router = useRouter();
  const { session_id } = router.query;

  // You can use the session_id to perform any necessary actions,
  // such as fetching additional information about the donation
  // or displaying a confirmation message

  return (
    <div>
      <h1>Donation Successful</h1>
      <p>Thank you for your donation with session ID: {session_id}.</p>
      {/* Additional content and logic */}
    </div>
  );
};

export default SuccessPage;
