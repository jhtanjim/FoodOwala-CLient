import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCarts from '../../../Hooks/useCarts';

const MyCart = () => {
    const [cart, refetch] = useCarts()
    console.log(cart);
    // reduce function
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    // delete
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )


                        }
                    })
            }
        })

    }

    return (




        <div className='w-full max-w-6xl my-16 '>
          
<h3 className='lg:text-4xl uppercase border-y-4  lg:py-4 text-center my-12 font-bold'>My  <span className='text-yellow-500'>Cart</span></h3>

            <div className='uppercase h-[60px] mb-4 align-items-center font-semibold flex justify-evenly'>
                <h3 className="text-3xl">Total Items : {cart.length}</h3>
                <h3 className="text-3xl">Total Price : {total}</h3>
                <button className="btn btn-warning  btn-sm">Pay</button>

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>JoItem Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            cart.map((item, index) => <tr
                                key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>


                                </td>
                                <td>
                                    {item.name}

                                </td>
                                <td className=''> ${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost  bg-red-600 text-white">

                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>)
                        }








                    </tbody>
                    {/* foot */}


                </table>
            </div>

        </div>
    );
};

export default MyCart;