"use client"

import React,{useState} from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
import { BsArrowClockwise, BsPeople } from 'react-icons/bs'
import urlFor from '../../../lib/urlFor'

import "../../../styles/donation-details.scss"
import "../../../styles/about.scss"
import DonateIntroVideo from '../IntroVideo/introVideo'

// import { loadStripe}  from "@stripe/stripe-js"
import { loadStripe, Stripe } from '@stripe/stripe-js';

type Props = {
    causesData: CausesItem
}
type DonationPeriod = 'monthly' | 'one-time';

type FormState = {
    donationAmount: number;
    donationPeriod: DonationPeriod;
    firstName: string;
    lastName: string;
    email: string; // Add the email field
};
const defaultFormState: FormState = {
    donationAmount: 5,
    donationPeriod: 'one-time',
    firstName: '',
    lastName: '',
    email: '', // Add the email field
};

// const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!;

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);


const DonationDetails = ({causesData}: Props) => {

    const allData = causesData.singleCauses
    const [isLoading, setIsLoading] = useState(false);
    const [formState, setFormState] = useState<FormState>(defaultFormState);
    const handleDonationAmountChange = (amount: number) => {
        setFormState({ ...formState, donationAmount: amount });
    };
    const handleDonationPeriodChange = (period: DonationPeriod) => {
        setFormState({ ...formState, donationPeriod: period });
    };
    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, firstName: event.target.value });
    };
    
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, lastName: event.target.value });
    };
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, email: event.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true); // Set loading state to true while waiting for Stripe to load
        console.log(formState);

        // Save the form data to session storage before redirecting
        sessionStorage.setItem('donationFormData', JSON.stringify(formState));
        // const stripe = await stripePromise;
        const stripe: Stripe | null = await stripePromise;
        if (stripe) {
          const response = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
          });
        
          const session = await response.json();
          
          
          // Redirect to Stripe checkout page
          window.open(session.url, '_blank');
          const result = await stripe.redirectToCheckout({
              sessionId: session.id
            });
            // Redirect to Stripe checkout page in a new tab
          // Handle any errors that occur during the redirect to Stripe checkout page
          if (result.error) {
            console.error(result.error);
            setIsLoading(false); // Set loading state back to false after the Stripe checkout has been opened
          }
        } else {
          console.error('Stripe has not yet loaded.');
          setIsLoading(false); // Set loading state back to false if Stripe fails to load
        }

        setIsLoading(false); // Set loading state back to false after Stripe has loaded or an error occurred
    };
      




  return (
    <React.Fragment>
        <div className="causes-details-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8">
                        {allData.map((data, index) => (
                        <div className="single-details-wrapper" key={index}>
                            <div className="single-details-img">
                                <img src={urlFor(causesData.image).url()} alt='main-image'/>
                            </div>
                            <div className="single-details-content">
                                <div className="single-donation-content">
                                    <div className="section-title">
                                        <span>{causesData.title}</span>
                                    </div>
                                    <h4 className="details_title">
                                    {data.title}
                                    </h4>
                                    <p>
                                    {data.firstDescription}
                                    </p>
                                </div>
                                {/* <p className="mb-30">
                                    {data.secondDescription}
                                </p> */}
                                <p className="mb-45">
                                    {data.thirdDescription}
                                </p>

                                <div className="row">
                                    {data.image.map((item, index)=> (
                                        <div className="col-6" key={index}>
                                            <img src={urlFor(item).url()}alt='img-array'/>
                                        </div>
                                    ))}
                                </div>
                                <p className="single_border pb-45 mb-50">{data.lastDescription}</p>                           
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="single-sidebar-wrapper">
                            <div className="donation-container">
                                
                                {allData.map((data, index) => (
                                    <h1 key={index}>
                                        {data.donationFormDescription}
                                    </h1>
                                ))}
                                <form className='donate' onSubmit={handleSubmit}>
                                    <div className="form-block">
                                    <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                      type="text"
                                      id="firstName"
                                      name="firstName"
                                      value={formState.firstName}
                                      onChange={handleFirstNameChange}
                                      required
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                      type="text"
                                      id="lastName"
                                      name="lastName"
                                      value={formState.lastName}
                                      onChange={handleLastNameChange}
                                      required
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                      type="email"
                                      id="email"
                                      name="email"
                                      value={formState.email}
                                      onChange={handleEmailChange}
                                      required
                                    />
                                  </div>
                                        <div className="amount-select">
                                            <label htmlFor="#">Select amount</label>
                                            <div className="amount-preset">
                                                <button  
                                                    className={formState.donationAmount === 5 ? 'active' : ''}
                                                    onClick={() => handleDonationAmountChange(5)}>$5
                                                </button>
                                                <button  className={formState.donationAmount === 25 ? "active" : ""} onClick={() => handleDonationAmountChange(25)}>$25</button>
                                                <button className={formState.donationAmount === 50 ? "active": ""} onClick={() => handleDonationAmountChange(50)}>$50</button>
                                                <button className={formState.donationAmount === 100 ? "active": ""} onClick={() => handleDonationAmountChange(100)}>$100</button>
                                                <button className={formState.donationAmount === 200 ? "active": ""} onClick={() => handleDonationAmountChange(200)}>$200</button>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="custom-donation">OR, Type a Custom amount
                                            </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" >$
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control custom-donation" aria-describedby="validatedInputGroupPrepend" placeholder="0.00" 
                                                value={formState.donationAmount}
                                                onChange= {(event) => handleDonationAmountChange(Number(event.target.value))}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group donation-period">
                                            <div className="custom-radio">
                                                <input 
                                                    type="radio" 
                                                    name="gender" 
                                                    className="custom-control-input" 
                                                    id="monthly" 
                                                    value="monthly"
                                                    checked={formState.donationPeriod === "monthly"}
                                                    onChange={() => handleDonationPeriodChange("monthly")}
                                                    />
                                                <label htmlFor="" className='custom-control-label'>
                                                    Monthly Donation
                                                    <span>We will automaticcally receive your gift each month</span>
                                                </label>
                                            </div>
                                            <div className="custom-radio">
                                                <input 
                                                    type="radio"
                                                    name="gender" 
                                                    className="custom-control-input" 
                                                    id="one-time"
                                                    value="one-time"
                                                    checked={formState.donationPeriod === "one-time"}
                                                    onChange={() => handleDonationPeriodChange("one-time")}
                                                    />
                                                <label htmlFor="" className='custom-control-label'>
                                                    One Time
                                                    <span>Make this Donation Only Once In Memory of something you love </span>
                                                </label>
                                            </div>
                                        </div>
                                        <button 
                                            className="btn-donate" 
                                            type='submit' 
                                        >
                                        {isLoading ? 'Loading...' : 'Send Your Donation ❤'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default DonationDetails