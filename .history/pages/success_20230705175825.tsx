import { GetServerSideProps } from 'next';
import Stripe from 'stripe';
import Head from 'next/head';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});


export const metadata = {
  title: 'About us || Know more about treasure trees and what we strive for. Our mission to restore',
  description: ' Know more about treasure trees and what we strive for. Our mission to restore',
}
const SuccessPage = ({ customer }: { customer: Stripe.Customer }) => {

  return (
    <>
    <Head>
      <title>Success Page || Confirmation that donation was received</title>
      <meta name="Success Page" content=" Confirmation that donation was received" />
      <link rel="icon" href="/favicon.ico" />
      <script src="/path/to/script.js" />
    </Head>

    <div>
      <h1>Success!</h1>
      <p>Thank you for your donation, {customer.metadata.firstName} {customer.metadata.lastName}!</p>
      <p>A confirmation email will be sent to : ,<a href="#">{customer.metadata.email}!</a></p>
    </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { session_id } = context.query;

  try {
    // Retrieve the checkout session from Stripe using the session_id
    const session = await stripe.checkout.sessions.retrieve(session_id as string);

    // Retrieve the customer from Stripe using the customer ID in the session
    const customer = await stripe.customers.retrieve(session.customer as string);

    return {
      props: {
        customer,
      },
    };
  } catch (error) {
    console.error('Error retrieving customer data:', error);
    // Handle error and display an appropriate error message
    return {
      props: {
        error: 'Failed to retrieve customer data',
      },
    };
  }
};

export default SuccessPage;
