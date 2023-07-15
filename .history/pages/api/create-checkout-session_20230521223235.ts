import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
});


export default async (req:any, res:any) => {
    const { donationAmount, donationPeriod} = req.body;
    
    //calculate total amount based on the donation period
    const amount = donationPeriod === "one-time" ? donationAmount : donationAmount * 12;
    
    //  Create a new checkout session object
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: `Donation (${donationPeriod})`,
                    },
                    unit_amount: amount * 100, // stripe requires amount be in cents
                },
                quantity : 1,
            },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
        // cancel_url: `${req.headers.origin}/donate/donation-details/[slug]`,
        // metadata: {
        //     firstName,
        //     lastName,
        // },
    });
    res.status(200).json({ id: session.id });
}
