import { useEffect, useState } from "react";
import ProductCard from "../page/ProductCard";
import Slide from "../page/Slide";
import Marquee from "react-fast-marquee";
import Category from "../page/Category";
import Trust from "../page/Trust";
import { Bounce } from "react-awesome-reveal";
const Home = () => {
    const [equipments, setEquipments] = useState([]);
    (equipments)
    useEffect(() => {
        fetch('https://assignment-10-server-nine-blue.vercel.app/equipments')
            .then(res => res.json())
            .then(data => setEquipments(data.slice(0, 6)))
    }, [])
    return (
        <div>
            <div>
                <Slide></Slide>
            </div>
            <div className="my-[50px] text-center">
                <h1 className="font-bold text-4xl mb-5 ">Our Category</h1>
                <Marquee pauseOnHover>
                    <Category></Category>
                </Marquee>
            </div>
            <div>
                <div className="text-center">
                    <h1 className="font-bold text-4xl mb-5 ">Product: {equipments?.length}</h1>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto">
                    {
                        equipments?.map(equipment => <ProductCard key={equipment._id} equipment={equipment}></ProductCard>)
                    }
                </div>
            </div>
            <div className="my-10">
                <div className="text-center">
                    <h1 className="font-bold text-4xl mb-5 ">Our Runnig Campain</h1>
                </div>
                <Bounce>
                    <div className="flex justify-center h-[500px]">
                        <img className="w-full" src="https://cdn.prod.website-files.com/61cdf3c5e0b8152652e01082/66a3adfedffcea35d5dc852a_thumbnail_The-Best-Sports-Marketing-Campaigns-of-2024.jpg" alt="" />
                    </div>
                </Bounce>
            </div>
            <div className="mb-10">
                <div className="text-center">
                    <h1 className="font-bold text-4xl mb-5 ">Trusted By</h1>
                </div>
                <Marquee direction="right">

                    <Trust></Trust>
                </Marquee>
            </div>
        </div>
    );
};

export default Home;