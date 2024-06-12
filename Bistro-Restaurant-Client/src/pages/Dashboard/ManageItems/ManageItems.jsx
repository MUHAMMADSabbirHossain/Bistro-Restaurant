import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {

    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        console.log(item);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);

                if (res.data.deletedCount > 0) {
                    // refetch 
                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        text: "Your file has been deleted.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry up"></SectionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>#</th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{item.name}</div>
                                    </td>
                                    <td className="text-right">${item.price}</td>
                                    <th>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button
                                                className="btn btn-ghost btn-lg">
                                                <FaEdit className="text-yellow-600"></FaEdit>
                                            </button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                        {/* foot */}
                        {/* <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </tfoot> */}

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;