import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";

const Details = () => {
    const equipment = useLoaderData()
    const {user} = useContext(Authcontext)
    return (
        <Card className="w-full md:flex-row items-center dark:bg-gray-900 dark:text-brown-50">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src={equipment.photo}
                    alt={equipment.equipmentName}
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase dark:text-brown-50">
                    {equipment.category}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2 dark:text-brown-50">
                    {equipment.equipmentName}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    {equipment.description}
                </Typography>
                <div className="mb-3 flex items-center justify-between border-y">
                    <Typography variant="h5" color="blue-gray" className="font-medium dark:text-brown-50" >
                        Price: $ {equipment.price}
                    </Typography>
                    <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal dark:text-brown-50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {equipment.rating}
                    </Typography>
                </div>
                <div className="flex flex-wrap justify-between items-center border-y ">
                    <Typography color="blue-gray" variant="h6" className="dark:text-brown-50">
                       Stock: {equipment.stock}
                    </Typography>
                    <Typography variant="small" color="gray">
                       Delivery: {equipment.delivery} days
                    </Typography>
                </div>
                <div className="flex items-center gap-x-3">
                    <h1>Post By: </h1>
                    <Avatar size="sm" src={user?.photoURL} alt={equipment.name} />
                    <div>
                        <Typography color="blue-gray" className="dark:text-brown-50" variant="h6">
                            {equipment.name}
                        </Typography>
                        <Typography variant="small" color="gray">
                            {equipment.email}
                        </Typography>
                    </div>
                    <Avatar />
                </div>
            </CardBody >

        </Card >
    );
};

export default Details;

/* 
{
    "_id": "675137b13fe6babb75e23378",
    "equipmentName": "\"ProBlast Cricket Bat\"",
    "photo": "https://media.istockphoto.com/id/1263323602/vector/the-wooden-bat-wicket-the-ball-for-the-game-of-cricket-realistic-3d-vector-models-with.jpg?s=612x612&w=0&k=20&c=lZlt_NSJ077utDs8QxA_l1Wc4ERtzi_nXv6QXUnC4bU=",
    "category": "Cricket Gear",
    "price": "120",
    "rating": "4.5",
    "customization": "Choose Extra",
    "delivery": "3",
    "stock": "120",
    "email": "ahforhad20@gmail.com",
    "name": "Forhad Hossen",
    "description": "Handcrafted English Willow bat with superior grip and lightweight design, perfect for professional matches."
}
*/