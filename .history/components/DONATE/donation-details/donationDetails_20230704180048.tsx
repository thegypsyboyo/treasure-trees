"use client"

import React,{useState} from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
import { BsArrowClockwise, BsPeople } from 'react-icons/bs'
import urlFor from '../../../lib/urlFor'

import "../../../styles/donation-details.scss"
import "../../../styles/about.scss"
import DonateIntroVideo from '../IntroVideo/introVideo'

import { loadStripe}  from "@stripe/stripe-js"

type Props = {
    causesData: CausesItem
}
type DonationPeriod = 'monthly' | 'one-time';

type FormState = {
    donationAmount: number;
    donationPeriod: DonationPeriod;
    firstName: string;
    lastName: string;
};
const defaultFormState: FormState = {
    donationAmount: 5,
    donationPeriod: 'one-time',
    firstName: '',
    lastName: '',
};

// const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!;

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);


const DonationDetails = ({causesData}: Props) => {

    const allData = causesData.singleCauses
    
    const [formState, setFormState] = useState<FormState>(defaultFormState);
    const handleDonationAmountChange = (amount: number) => {
        setFormState({ ...formState, donationAmount: amount });
    };
    const handleDonationPeriodChange = (period: DonationPeriod) => {
        setFormState({ ...formState, donationPeriod: period });
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState);
        const stripe = await stripePromise;
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
          const result = await stripe.redirectToCheckout({
            sessionId: session.id
          });
        
          // Handle any errors that occur during the redirect to Stripe checkout page
          if (result.error) {
            console.error(result.error);
          }
        } else {
          console.error('Stripe has not yet loaded.');
        }
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
                                <p className="mb-30">
                                    {data.secondDescription}
                                </p>
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
                                        <div className="amount-select">
                                            <label htmlFor="#">Select amount</label>
                                            <div className="amount-preset">
                                                <button  
                                                    className={formState.donationAmount === 5 ? 'active' : ''}
                                                    onClick={() => handleDonationAmountChange(5)}>$5
                                                </button>
                                                <button  className={formState.donationAmount === 25 ? "active" : ""} onClick={() => handleDonationAmountChange(25)}>$25</button>
                                                <button className={formState.donationAmount === 50 ? "active": ""} onClick={() => handleDonationAmountChange(50)}>$50</button>
                                                <button className={formState.donationAmount === 200 ? "active": ""} onClick={() => handleDonationAmountChange(200)}>$200</button>
                                                <button className={formState.donationAmount === 500 ? "active": ""} onClick={() => handleDonationAmountChange(500)}>$500</button>
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
                                                    id="monthly"
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
                                        <button className="btn-donate" type='submit'>Send Your Donation ❤</button>
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