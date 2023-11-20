// import React from "react";
// import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import useCart from "../../../hooks/useCart";

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
// console.log(import.meta.env.VITE_STRIPE_PK);
// const Payment = () => {
//   const [cart] = useCart();
//   const total = cart.reduce((sum, item) => sum + item.price, 0);
//   const price = parseFloat(total.toFixed(2));
//   console.log("total price", total);
//   return (
//     <div className="w-2/3">
//       <SectionTitle
//         subHeading="please process"
//         Heading="Heading"
//       ></SectionTitle>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm price={price}></CheckoutForm>
//       </Elements>
//     </div>
//   );
// };

// export default Payment;

import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = () => {
    return (
        <div className="w-2/3">
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
