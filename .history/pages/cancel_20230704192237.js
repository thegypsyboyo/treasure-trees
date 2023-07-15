// pages/donate/cancel.js
import { useRouter } from 'next/router';

const CancelPage = () => {
  const router = useRouter();
  const { session_id } = router.query;

  // You can use the session_id to perform any necessary actions,
  // such as displaying a message or handling the cancellation

  return (
    <div>
      <h1>Donation Cancelled</h1>
      <p>Sorry, your donation with session ID: {session_id} was cancelled. Please try again later.</p>
    </div>
  );
};

export default CancelPage;
