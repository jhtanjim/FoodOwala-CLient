import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import Swal from 'sweetalert2';




const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
const UpdateItem = () => {

    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const { name, category, price, recipe,_id } = data

        console.log(data);
        const newMenuItem = {
            name,
            price: parseFloat(price),
            category, recipe, image: imgUrl
        }
        console.log(data);
        fetch(`http://localhost:5000/menu/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMenuItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // rcv from server
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Menu Updated Succesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    };

    return (

        <div className='w-full px-10'>
        
        <div>
<h3 className='lg:text-4xl uppercase border-y-4  lg:py-4 text-center mb-12 font-bold'>Edit   <span className='text-yellow-500'>an Items</span></h3>        </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text font-semibold">Recipe name *</span>
                    </label>
                    <input type="text" placeholder="Recipe name"
                        {...register("name", { required: true, maxLength: 120 })}
                        class="input input-bordered w-full " />

                </div>
                {/* flex */}
                <div className='flex my-4'>

                    {/* category */}

                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text">Category*</span>

                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} class="select select-bordered">
                            <option disabled >Pick One</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>salad</option>
                            <option>drinks</option>
                            <option>deshi</option>

                            <option>dessert</option>
                        </select>

                    </div>
                    {/* Price */}
                    <div class="form-control w-full ml-4 ">
                        <label class="label">
                            <span class="label-text font-semibold">Price *</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" class="input input-bordered w-full " />

                    </div>
                </div>
                {/* text area */}
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                </div>
                {/* file input/ add image */}

                <div class="form-control w-full my-4">
                    <label class="label">
                        <span class="label-text">Item Image*</span>
                    </label>
                    <input {...register("image", { required: true })} type="file" class="file-input file-input-bordered w-full " />

                </div>
                {/* submit */}

                <input className='btn btn-accent btn-sm mt-4 ' type="submit" value="Edit Item" ></input>
                <FaUtensils />
            </form>


        </div>
    );
};

export default UpdateItem;