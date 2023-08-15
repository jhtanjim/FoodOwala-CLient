import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useMenu from "../../../Hooks/useMenu";

const ManageItemCard = ({ item }) => {
    const [menu]=useMenu()
  const { name, image, price } = item;
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
            fetch(`http://localhost:5000/menu/${item._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
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
    
    <div className="w-full max-w-6xl my-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
        
          <tbody>
            <tr>
              <td>
                #
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{name}</td>
              <td>${price}</td>
              <td>
                <button
                  onClick={() => handleUpdate(item)}
                  className="btn btn-ghost bg-yellow-900 text-white"
                >
                  <FaEdit />
                </button>
                
              </td>
              <td>
              <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-ghost bg-red-600 text-white"
                >
                  <FaTrashAlt />
                </button> 
              </td>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
           
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageItemCard;
