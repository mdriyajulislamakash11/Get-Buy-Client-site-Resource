import React from "react";
import SectionlTitle from "../pages/Share/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GET_WAY);

const Payment = () => {
  return (
    <div>
      <SectionlTitle
        heading="Payment"
        subHeading="Please in Sure payment"
      ></SectionlTitle>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
