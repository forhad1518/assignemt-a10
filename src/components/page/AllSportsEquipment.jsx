import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
    const loadequipments = useLoaderData();
    const [equipments, setEquipments] = useState(loadequipments);

    // sort price 
    const handlesort = () => {
        const sort = equipments.sort((a, b) => parseInt(b.price) - parseInt(a.price))
        setEquipments(sort)

    }
    return (
        <div className="overflow-x-auto w-11/12 mx-auto my-5">
            <div className="text-right">
                <Button onClick={handlesort}>Sort Price</Button>
            </div>
            <table className="table">
                {/* head */}
                <thead className="dark:text-brown-50">
                    <tr>
                        <th>SL No</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Post By</th>
                        <th>Email</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        equipments?.map((equipment, index) =>
                            <tr key={equipment?._id} className="hover:bg-gray-500">
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={equipment?.photo}
                                                    alt={equipment?.equipmentName} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{equipment?.equipmentName}</div>
                                            <div className="text-sm opacity-50">{equipment?.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    $ {equipment?.price}
                                </td>
                                <td>{equipment?.name}</td>
                                <td>{equipment?.email}</td>
                                <th>
                                    <Link to={`/details/${equipment._id}`} className="btn btn-xs">details</Link>
                                </th>
                            </tr>)
                    }
                </tbody>
                {/* foot */}
                <tfoot className="dark:text-brown-50">
                    <tr>
                        <th>SL No</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Post By</th>
                        <th>Email</th>
                        <th>Details</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default AllSportsEquipment;