import Image from "next/image";
import HeaderImage from "../public/hotel45.jpg";

function HeaderSec() {
    
 let myTime = null;
 let updatedTime = null;
    
    return (
        <div className="header__section flex flex-col justify-center items-center">
            <nav className="bg-white mx-8 md:mx-14 w-full md:w-10/12 md:px-40 lg:px-60 sticky">
                <div className="nav__top flex  flex-col md:flex-row justify-between">
                    <p>Contact us directly at +234 (70)80 89 69 01 (Local time: (
                            {updatedTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()})</p>
                    <p><span>ENG &darr; |  </span> USD &darr;</p>
                </div>
                <div className="nav__bottom mt-4 group">
                    <ul className="flex items-center justify-between my-8 text-xs font-bold overflow-x-auto md:overflow-x-hidden whitespace-nowrap">
                        <li className="m-2 cursor-pointer hover:text-blue-900 active:animate-bounce active:text-blue-600">HOME</li>
                        <li className="m-2 cursor-pointer hover:text-blue-900 active:animate-bounce active:text-blue-600">ABOUT US</li>
                        <li className="m-2 cursor-pointer hover:text-blue-900 active:animate-bounce active:text-blue-600">OUR ROOMS</li>
                        <li className="m-2 cursor-pointer hover:text-blue-900 active:animate-bounce active:text-blue-600">Monalisa</li>
                        <li className="m-2 cursor-pointer hover:text-blue-900 active:animate-bounce active:text-blue-600">RESERVATION</li>
                        <li className="m-2 cursor-pointer hover:text-blue-900 active:animate-bounce active:text-blue-600">BLOG</li>
                        <li className="m-2 cursor-pointer hover:text-blue-900 active:animate-bounce active:text-blue-600">CONTACT</li>
                    </ul>
                </div>
            </nav>
            <div className="hero mx-14 w-full md:w-10/12">
                <Image src={HeaderImage} alt="header__Imade" />
            </div>
            <div className="promotion__code w-full md:w-8/12 flex flex-col sm:flex-row justify-between bg-white">
                <div className="boxes border-0 md:border-r-2 border-gray-200 py-8 px-4">
                    <span className="font-bold text-xs">CHECK IN</span>
                    <p className="font-light text-4xl">26<span className="font-bold text-gray-600 text-sm"> / June &darr;</span></p>
                </div>
                <div className="boxes border-0 md:border-r-2 border-gray-200 py-8 px-4">
                    <span className="font-bold text-xs">CHECK OUT</span>
                    <p className="font-light text-4xl">29<span className="font-bold text-gray-600 text-sm"> / June &darr;</span></p>
                </div>
                <div className="py-8 px-4">
                    <span className="font-bold  sm:ml-0 text-xs">GUESTS</span>
                    <p className="font-light text-4xl">03<span className="font-bold text-gray-600 text-sm"> &darr;</span></p>
                </div>
                <div className="bg-gray-200 p-8 flex flex-col  sm:ml-0 justify-start items-center py-8 px-4">
                    <span className="text-blue-600  cursor-pointer">have a promotion code?</span>
                    <button className="bg-green-600 py-2 px-4 text-xs text-white mt-2">CHECK AVAILABILITY</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderSec
