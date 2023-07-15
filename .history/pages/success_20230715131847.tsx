import { GetServerSideProps } from 'next';
import Stripe from 'stripe';
import Head from 'next/head';
import axios from "axios"

import "./../styles/success.scss"


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

const SuccessPage = ({ customer }: { customer: Stripe.Customer }) => {
  const sendDonationConfirmationEmail = async () => {
    try {
      // Make an API call to the email endpoint to send the donation confirmation email
      await axios.post('/api/send-donation-email', {
        email: customer.metadata.email,
        firstName: customer.metadata.firstName,
        lastName: customer.metadata.lastName,
        donationAmount: customer.metadata.donationAmount,
      });
      console.log('Donation confirmation email sent successfully');
    } catch (error) {
      console.error('Error sending donation confirmation email:', error);
    }
  };

  // Call the function to send the donation confirmation email
  sendDonationConfirmationEmail();
  return (
    <>
    <Head>
      <title>Success Page || Confirmation that donation was received</title>
      <meta name="Success Page" content=" Confirmation that donation was received" />
      <link rel="icon" href="/favicon.ico" />
      {/* <script src="/path/to/script.js" /> */}
    </Head>

    {/* <Navbar/> */}
    <div>
      <h1>Success!</h1>
      <p>Thank you {customer.metadata.firstName} {customer.metadata.lastName} 😊❤</p>
      <p>A donation amount of {customer.metadata.donationAmount} was successfully received by TREASURE TREES</p>
      <p>A confirmation email will be sent to : <a href="#">{customer.metadata.email}</a></p>
    </div>

    <div className="card" style={{background: "white",padding: "60px",
        borderRadius: "4px",
        boxShadow: "0 2px 3px #C8D0D8",
        display: "inline-block",
        margin: "0 auto"}}>
      <div style={{borderRadius:"200px", height:"200px", width:"200px", background: "#F8FAF5", margin:"0 auto"}}>
        <i className="checkmark" style={{color: "#9ABC66",
        fontSize: "100px",
        lineHeight: "200px",
        marginLeft:"0", marginRight:"0"}}>✓</i>
      </div>
        <h1>Success</h1> 
        <p style={{fontSize:"20px",
          margin: "0",color:"#404F5E"}}>We received your purchase request;<br/> we'll be in touch shortly!</p>
      </div>
    {/* <Footer/> */}
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
