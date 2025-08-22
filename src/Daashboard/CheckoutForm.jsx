import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useCart from "../hook/useCart";
import useAxiosSecure from "../hook/useAxiosSecure";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (pmError) {
      console.log("[error]", pmError);
      setError(pmError.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError.message);
      setError(confirmError.message);
    } else if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        email: user?.email,
        name: user?.displayName,
        transactionId: paymentIntent.id,
        price: totalPrice,
        cartId: cart.map((item) => item._id),
        menuItemId: cart.map((item) => item.menuItemId),
        status: "pending",
      };

      const res = await axiosSecure.post("/payment", paymentInfo);
      if (res.data.paymentResult.insertedId) {
        Swal.fire({
          title: "Payment Successful!",
          text: "Your payment has been processed successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        refetch(); // cart update 
      }
    }
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit}>
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
        <button
          className="btn btn-primary px-6 my-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay ${totalPrice}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
