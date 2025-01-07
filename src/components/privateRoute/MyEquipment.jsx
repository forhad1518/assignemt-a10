import { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Swal from "sweetalert2";

const MyEquipment = () => {
    const { user } = useContext(Authcontext);
    const loadEquipments = useLoaderData();
    const [equipments, setEquipments] = useState(loadEquipments);
    const navigate = useNavigate()

    // handle Edit
    const handleEdit = id => {
        navigate(`/myproduct/edit/${id}`)
    }
    // handle delete
    const handleDelete = id => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-nine-blue.vercel.app//equipments/${id}`, {
                    method: 'delete'
                })
                    .then(() => {
                        const remainEquipments = equipments.filter(equipment => equipment._id !== id);
                        setEquipments(remainEquipments);
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .then(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                            footer: `issue is: ${error.message}`
                        });
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });

    }
    return (
        <div className="w-11/12 mx-auto my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipments?.map(equipment => <Card key={equipment._Id} className="w-96">
                <CardHeader shadow={false} floated={false}>
                    <img
                        src={equipment.photo}
                        alt={equipment.equipmentName}
                        className="h-[250px] w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium w-[88%]">
                            {equipment.equipmentName}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium ">
                            $ {equipment.price}
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                    >
                        With plenty of talk and listen time, voice-activated Siri access, and
                        an available wireless charging case.
                    </Typography>
                </CardBody>
                <CardFooter className="flex gap-4 pt-0">
                    <Button
                        onClick={() => handleEdit(equipment._id)}
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        Update Product
                    </Button>
                    <Button
                        onClick={() => handleDelete(equipment._id)}
                        ripple={false}
                        fullWidth={true}

                        className="bg-red-500 text-white font-bold shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        Delete Product
                    </Button>
                </CardFooter>
            </Card>)}
        </div>
    );
};

export default MyEquipment;