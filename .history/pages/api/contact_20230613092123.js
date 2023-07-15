import nodemailer from "nodemailer";




// Replace the email and password values with a string containing your email and password
const email = 'lewisonyango1@gmail.com'
const password = '@@lewis99'


export default function handler(req, res) {

    if (request.method == "POST") {
        const formValues = req.body;

        try {
            // Function to validate email and send form values goes here
            return res.status(200).json({ message: "Success: Message Sent" });
        } catch (error) {
            return res
            .status(400)
            .json({
            message: "Failed: Something went wrong. Please try again later",
            });
        }
    }
}