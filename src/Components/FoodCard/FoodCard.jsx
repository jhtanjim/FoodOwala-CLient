import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCarts from "../../Hooks/useCarts";


const FoodCard = ({ item }) => {
    const { name, recipe, image, price, category, _id } = item
    const { user } = useContext(AuthContext)
    const [, refetch] = useCarts()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = () => {

        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            console.log(cartItem);
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Order the Food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="">
            <div className="card  lg:w-96 bg-base-100 shadow-xl">
                <figure><img className='h-40 mt-4' src={image} alt="Shoes" /></figure>
                <p className=' absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white '>${price}</p>
                <div className="card-body flex-col items-center">
                    <p>{category}</p>
                    <h2 className="card-title ">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="btn   my-8 border-0 border-b-4  border-orange-400">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;