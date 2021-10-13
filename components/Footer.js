function Footer() {
    return (
        <div className="bg-gray-900 w-full text-gray-400 items-center text-xs">
            <div className="mx-auto w-full md:w-11/12 flex flex-col justify-around items-start p-10 md:flex-row md:justify-around">
                <div className="mt-2">
                    <ul className="footer__ul">
                        <li>Site Map</li>
                        <li><span className="text-white">Term and conditions</span></li>
                        <li>Privacy Policy</li>
                        <li>Help</li>
                        <li>Affliate</li>
                    </ul>
                </div>
                <div className="mt-2">
                    <ul className="footer__ul">
                        <li>Our location</li>
                        <li>Career</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="mt-2">
                    <ul className="footer__ul">
                        <li>FAQs</li>
                        <li>Blogs</li>
                        <li>Car Blog</li>
                        <li>Location</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div className=" flex items-start justify-around flex-col">
                    <p className="">Sign up to get our newsletter</p>
                    <div className="input">
                        <input className="bg-none mt-4" type="text" placeholder="Your email..." />
                        {/* Icon goes here */}
                    </div>
                </div>
            </div>
            <hr className="w-9/12 mx-auto invisible md:visible" />
            <div className="py-4">
                <div className="text-center">
                    <h4>Imade Chris <span>&copy; 2021 SoftWeb</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Footer
