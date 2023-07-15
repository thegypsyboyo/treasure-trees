import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface CustomerData {
  email: string;
  firstName: string;
  lastName: string;
}

const SuccessPage: React.FC = () => {
  const router = useRouter();
  const { session_id } = router.query;
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);

  useEffect(() => {
    // Fetch customer data using the session ID
    const fetchCustomerData = async () => {
      try {
        const response = await fetch(`/api/create-checkout-session?session_id=${session_id}`);
        const data: CustomerData = await response.json();
        setCustomerData(data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    if (session_id) {
      fetchCustomerData();
    }
  }, [session_id]);

  return (
    <div>
      <h1>Payment Successful!</h1>
      {customerData && (
        <div>
          <p>Email: {customerData.email}</p>
          <p>First Name: {customerData.firstName}</p>
          <p>Last Name: {customerData.lastName}</p>
        </div>
      )}
    </div>
  );
};

export default SuccessPage;
