import React from 'react';
import CheckOutForm from './CheckOutForm.jsx';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCarts from '../../../../Hooks/useCarts.jsx';


const stripePromise= loadStripe(import.meta.env.VITE_Payement_GateWay_PK)

const CardPayment = () => {
    const [cart] = useCarts()
  
    // reduce function
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
 <h3 className='lg:text-4xl uppercase border-y-4  lg:py-4 text-center mb-12 font-bold mt-8'>Card   <span className='text-yellow-500'>Payment</span></h3> 
 <Elements stripe={stripePromise}>
    <CheckOutForm price ={price}></CheckOutForm>
 </Elements>
        </div>
    );
};

export default CardPayment;