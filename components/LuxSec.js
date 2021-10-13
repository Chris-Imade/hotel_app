import Image from "next/image";
import Room from "../img/room.jpg";
import Boiled from "../img/boiled.jpg";
import Modern from "../img/modern.jpg";
import Room2 from "../img/room_2.jpg";


function LuxSec() {
    return (
        <div className="interior py-30 flex md:flex-row flex-col-reverse justify-center items-center bg-white mx-8 md:mx-14">
            <div className=" left flex flex-col">
                <div className="top mt-10">
                    <span className="ml-20 mt-20 text-xs text-gray-400">DISCOVER OUR ROOMS</span>
                    <h3 className="ml-20 text-2xl">Luxury Interior</h3>
                </div>
                <div className="botm mb-10 mt-6 ml-20 overflow-y-scroll">
                    <div className="cards">
                        <Image width="100" height="100" src={Room} alt="bg_pic" />
                            <div className="info">
                                <h4 className="title_h text-sm">Classic Room</h4>
                                <p className="title_p text-xs"><span>Starting from</span> $39/Night</p>
                            </div>
                    </div>
                    <div className="cards">
                        <Image width="100" height="100" className="" src={Modern} alt="bg_pic" />
                            <div className="info">
                                <h4 className="title_h text-xl">Gand Delux</h4>
                                <p className="title_p text-sm"><span>Starting from</span> $39/Night</p>
                            </div>
                    </div>
                    <div className="cards">
                        <Image width="100" height="100" src={Room2} alt="bg_pic" />
                            <div className="info">
                                <h4 className="title_h text-xl">Classic Room</h4>
                                <p className="title_p text-sm"><span>Starting from</span> $39/Night</p>
                            </div>
                    </div>
                    <div className="cards">
                        <Image width="100" height="100" src={Room} alt="bg_pic" />
                        <div className="info">
                            <h4 className="title_h text-xl">Ultra Superior</h4>
                            <p className="title_p text-sm"><span>Starting from</span> $39/Night</p>
                        </div>
                    </div>
                    <div className="cards">
                        <Image width="100" height="100" src={Modern} width="100" height="100" alt="bg_pig" />
                        <div className="info">
                            <h4 className="title_h text-xl">Ultra Superior</h4>
                            <p className="title_p text-sm"><span>Starting from</span> $59/Night</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right flex justify-center items-center">
                <Image src={Boiled} alt="Image right" width={`${600}px`} height={`${600}px`} />
            </div>
        </div>
    )
}

export default LuxSec
