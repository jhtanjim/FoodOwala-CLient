import React from 'react';
import useCarts from '../../../Hooks/useCarts';

const MyCart = () => {
    const [cart] = useCarts()
    return (
        <div>
            <div>
                {/* <h3>Total Orders:{cart.length}</h3> */}
            </div>
        </div>
    );
};

export default MyCart;