import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export default async (req: any, res: any) => {
  try {
    const { donationAmount, firstName, lastName, email } = req.body;
    const currency = req.body.currency || "usd";

    // Calculate total amount based on the donation period
    const amount = donationAmount * 100;

    // Create a new customer in Stripe
    const customer = await stripe.customers.create({
      name: `${firstName} ${lastName}`,
      email,
      metadata: {
        firstName,
        lastName,
        email,
        donationAmount,
      },
    });

    // Create a new checkout session object
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: `Donation`,
            },
            unit_amount: amount, // Stripe requires the amount to be in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
      metadata: {
        firstName,
        lastName,
        email,
        donationAmount,
      },
    });

    res.writeHead(302, {
      Location: session.url,
    });
    res.end();

    console.log("Session Object:", session);

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
};

