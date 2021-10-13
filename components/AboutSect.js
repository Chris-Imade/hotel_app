import Image from "next/image";
import Boiled from "../img/boiled.jpg";

function AboutSect() {
    return (
        <div className="w-full py-20 flex items-center flex-col justify-center">
           <span className="text-center text-gray-700 mb-10">LITTLE ABOUT US</span> 
           <div className="flex flex-col md:flex-row mx-8 md:w-8/12">
               <div className="leftAbout bg-white flex justify-center items-center border-8 border-white">
                    <Image src={Boiled} className="" height={700} width={600} alt="girl_photo" />
               </div>
               <div className="rightAbout px-0 md:px-20 flex flex-col justify-between">
                   <div className="line invisible md:visible bg-black mb-8"></div>
                   <h5 className="font-bold text-2xl mb-8">A best place to enjoy your life</h5>
                   <p className="text-xs text-gray-400 mb-8">Nobis voluptatibus, mollitia quam autem inventore ipsa? Dolores porro amet hic molestias. Accusantium nobis ut consequuntur asperiores voluptatum quis! Voluptas assumenda ex fugiat modi nostrum.</p>
                   <p className="text-xs text-gray-400"><span className="text-gray-900">Ethan Hunt -</span> Director at Monalisa</p>
               </div>
           </div>

        </div>
    )
}

export default AboutSect
