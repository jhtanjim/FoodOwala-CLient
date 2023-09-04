import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div className=''>
            <h3 className='lg:text-4xl uppercase border-y-4  lg:py-4 text-center mb-12 font-bold mt-8'>Payment   <span className='text-yellow-500'>Option</span></h3>
            <div className='grid lg:grid-cols-3 gap-4'>
            <div className="card w-80 bg-base-100 shadow-xl">
  
  <div className="card-body ">
    <Link
    to='bkash'>
    
    <button>
        <img className='' src="https://i.ibb.co/T8bzztL/bkash-logo-835789094-A-seeklogo-com.png" alt="" />
    </button>
    </Link>
  
</div>
</div>
<div className="card w-80 bg-base-100 shadow-xl">
  <div className="card-body ">
  <Link
  to='nagad'>
  <button>
        <img className='' src="https://i.ibb.co/gWdtbfv/Nagad-Logo-wine.png" alt="" />
    </button>
  </Link>  
    
</div>
</div>
<div className="card w-80 bg-base-100 shadow-xl">
  <div className="card-body ">
    
   <Link to='cardPayment'> <button>
        <img className='' src="https://i.ibb.co/PC2tHNM/11597193768lplv4tlwi3.png" alt="" />
    </button></Link>
</div>
</div>
            </div>
            </div>
      
    );
};

export default Payment;