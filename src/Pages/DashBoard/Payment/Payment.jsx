import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";

// TODO: Publishable Key
const stripPromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useState();
    const total = cart.reduce((sum, item)=> sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            <SectionTitle subTitle='payment'
            heading="please Process"
            ></SectionTitle>
            <h2 className="text-3xl">taka o taka tumi uira uira asho...........</h2>
            <Elements stripe={stripPromise}>
                <CheckoutForm price={price}> </CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;