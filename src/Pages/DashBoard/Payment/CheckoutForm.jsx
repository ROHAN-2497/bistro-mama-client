import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const CheckoutForm = ({price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');  
  const [clientSecret, setClientSecret] = useState("");
  const {user} = useAuth();

  
  useEffect(() => {
    fetch("/create-payment-intent" ,{price}, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price : [{ price : "item" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
   const {error, paymentMethod} = await stripe.createPaymentMethod({
    type : 'card',
    card
   })
   if(error){
    setCardError('your card number is incomplete')
    console.log('error', error)
   }
   else{
    setCardError('')
    console.log('paymentMethod', paymentMethod)
   }

   const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
   clientSecret,
    {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'Unknown',
          name: user?.displayName || "anonymous"

        },
      },
    },
  );
  if(confirmError){
    console.log(confirmError)
  }
 console.log(paymentIntent)
  };

  return (
   <>
    <form className="w-2/3 m-8" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {cardError && <p className="text-red-500 ml-8">{cardError}</p>}
   </>
  );
};

export default CheckoutForm;
