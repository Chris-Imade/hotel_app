import ChickenWings from "../img/chicken_wings.jpg";
import Sa from "../img/sa.jpg";
import restInt from "../img/restaurant-interior.jpg";
import Image from "next/image";

function Clients() {
    return (
        <div className="clients py-20 bg-gray-200 mx-8 md:mx-14">
            <div className="shadow-md m-auto w-full md:w-10/12 bg-white main flex flex-col items-center justify-center text-center">
                <span className="my-10">TESTIMONIAL</span>
                <h1 className=" mb-10 font-bold text-3xl">What Client Say</h1>
                <p className="mb-10 font-serif italic font-thin">Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Eum dignissimos error veniam harum porro earum, facere magnam provident, reiciendis corporis aliquam ullam <br />illum aliquid alias!</p>
                <p className="text-sm mb-10">Adam Levine <span className="text-gray-500">- Review from</span> SoftWeb</p>
            </div>
            <div className="flex justify-center flex-col items-center">
                <span className="my-10">EXPLORE</span>
                <h1 className=" mb-10 font-bold text-3xl">Latest from our blog</h1>
                <div className="m-auto w-full md:w-10/12 flex flex-col md:flex-row items-center justify-around">
                    <div className="shadow-sm hover:shadow-lg cursor-pointer bg-white  w-full md:w-4/12">
                    <Image src={ChickenWings} alt="image" />
                       <div className="m-8">
                            <span className="mb-2 text-xs">June 24, 2021</span>
                            <h4 className="mb-4 font-bold text-sm mt-4">Five reasons to stay at the beautiful<br /> Monalisa Hotel</h4>
                            <h5 className="text-gray-300 hover:text-gray-900">Continue --</h5>
                       </div>
                    </div>
                    <div className="shadow-sm hover:shadow-lg cursor-pointer bg-white  w-full md:w-4/12 m-2">
                    <Image src={Sa} alt="image" />
                        <div className="m-8">
                                <span className="mb-2 text-xs">June 24, 2021</span>
                                <h4 className="mb-4 font-bold text-sm mt-4">Five reasons to stay at the beautiful<br /> Monalisa Hotel</h4>
                                <h5 className="text-gray-300 hover:text-gray-900">Continue --</h5>
                        </div>
                    </div>
                    <div className="shadow-sm hover:shadow-lg cursor-pointer bg-white w-full md:w-4/12">
                    <Image src={restInt} alt="image" />
                        <div className="m-8">
                                <span className="mb-2 text-xs">June 24, 2021</span>
                                <h4 className="mb-4 font-bold text-sm mt-4">Five reasons to stay at the beautiful<br /> Monalisa Hotel</h4>
                                <h5 className="text-gray-300 hover:text-gray-900">Continue --</h5>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
