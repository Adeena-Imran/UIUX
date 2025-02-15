import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ['700'] });
const pop = Poppins({ subsets: ["latin"], weight: ['400'] });

const Footer = () => {
    return (
        <div className="py-10">
            <div className="w-full my-6">
                <hr className="border-t border-black" />
            </div>

            {/* Grid Layout for Footer */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">

                {/* Funiro Logo & Address */}
                <div>
                    <h1 className={`${poppins.className} text-2xl font-bold mb-4`}>
                        Funiro
                    </h1>
                    <p className={`${pop.className} text-sm sm:text-base`}>
                        400 University Drive Suite 200 Coral Gables,<br />
                        FL 33134 USA
                    </p>
                </div>

                {/* Links Section */}
                <div>
                    <h2 className="text-lg font-bold text-gray-600 mb-4">Links</h2>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-black hover:underline">Home</a></li>
                        <li><a href="#" className="text-black hover:underline">Shop</a></li>
                        <li><a href="#" className="text-black hover:underline">About</a></li>
                        <li><a href="#" className="text-black hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Help Section */}
                <div>
                    <h2 className="text-lg font-bold text-gray-600 mb-4">Help</h2>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-black hover:underline">Payment Options</a></li>
                        <li><a href="#" className="text-black hover:underline">Returns</a></li>
                        <li><a href="#" className="text-black hover:underline">Privacy Policies</a></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h2 className="text-lg font-bold text-gray-600 mb-4">Newsletter</h2>
                    <form className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-2">
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="px-4 py-2 border rounded-md w-full sm:w-auto"
                        />
                        <button className="px-4 py-2 text-black border rounded-md hover:bg-gray-100">
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            <div className="w-full my-6">
                <hr className="border-t border-black" />
            </div>

            {/* Copyright Section */}
            <div className="text-left pl-4 sm:pl-[100px] text-sm text-black mt-4">
                2023 Funiro. All rights reserved
            </div>

        </div>
    );
}

export default Footer;
