import { CiLocationOn, CiMail } from "react-icons/ci";
import { MdPhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-gray-900 text-white">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <div rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <Link to='/' className="text-3xl font-bold text-white flex items-center gap-2 cursor-pointer">
                            <img className='w-12' src="/—Pngtree—food logo_8366734.png" alt="" />
                            <span className="text-[#ff0] textLayer">SM</span> Food
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3">
                    <ul className="flex flex-col items-start space-y-2  mb-6 text-base font-medium  sm:mb-0 text-gray-400">
                        <li className="text-2xl">Quick Page</li>
                        <Link to='/' className="flex gap-2 items-center">
                            Home
                        </Link>
                        <Link to='/available-foods' className="flex gap-2 items-center">
                            Available Food
                        </Link>
                    </ul>
                    <ul className="flex flex-col items-start space-y-2  mb-6 text-base font-medium  sm:mb-0 text-gray-400">
                        <li className="text-2xl">Contact</li>
                        <li className="flex gap-2 items-center">
                            <CiLocationOn /> Nakla-2150 , Sherpur , Mymensingh
                        </li>
                        <li className="flex gap-2 items-center">
                            <CiMail /> shafiqulislamsagor277@gmail.com
                        </li>
                        <li className="flex gap-2 items-center">
                            <MdPhoneInTalk /> +8801793035257
                        </li>
                        <div className="grid grid-flow-col gap-6 mt-6">
                            <Link to='https://www.linkedin.com/in/shafiqulislamsagor/'><FaLinkedin className="fill-current text-3xl" /></Link>
                            <Link to='https://github.com/shafiqulislamsagor'><FaGithub className="fill-current text-3xl" /></Link>
                            <Link to='https://www.facebook.com/sagor220277'><FaFacebook className="fill-current text-3xl" /></Link>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-400">© 2024 SM FOOD --||-- All rights reserved.</div>
        </footer>
    );
};

export default Footer;