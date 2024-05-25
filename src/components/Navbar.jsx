import { Link, NavLink } from 'react-router-dom'
import UseAuth from './../hooks/UseAuth';
import { toast } from 'react-toastify';
import { motion } from "framer-motion"
import { useState } from 'react';

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuNavLink = <>
        <div className="flex flex-col gap-y-3 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-5 lg:mt-0">
            <div>
                <NavLink to='/' className={({ isActive }) => isActive ? 'bg-[#ff0] text-black px-3 py-1 rounded-lg font-bold fontLarge text-base' : 'inline-block  px-3 py-1 text-white hover:text-neutral-300'} href="#" aria-current="page">Home</NavLink>
            </div>
            <div>
                <NavLink to='/available-foods' className={({ isActive }) => isActive ? 'bg-[#ff0] text-black px-3 py-1 rounded-lg font-bold fontLarge text-base' : 'inline-block  px-3 py-1 text-white hover:text-neutral-300'} href="#"> Available Foods</NavLink>
            </div>
            <div>
                <NavLink to='/add-foods' className={({ isActive }) => isActive ? 'bg-[#ff0] text-black px-3 py-1 rounded-lg font-bold fontLarge text-base' : 'inline-block  px-3 py-1 text-white hover:text-neutral-300'} href="#">Add Food</NavLink>
            </div>
            <div>
                <NavLink to='/manage-my-food' className={({ isActive }) => isActive ? 'bg-[#ff0] text-black px-3 py-1 rounded-lg font-bold fontLarge text-base' : 'inline-block  px-3 py-1 text-white hover:text-neutral-300'} href="#"> Manage My Foods</NavLink>
            </div>
            <div>
                <NavLink to='/my-food-request' className={({ isActive }) => isActive ? 'bg-[#ff0] text-black px-3 py-1 rounded-lg font-bold fontLarge text-base' : 'inline-block  px-3 py-1 text-white hover:text-neutral-300'} href="#">My Food Request</NavLink>
            </div>
        </div>
    </>

    const { user, UserLogout } = UseAuth()
    // console.log(user);
    const logout = () => {
        UserLogout()
            .then(() => {
                toast.success('Your account Log Out now...!')
            })
            .catch(() => {
                toast.error('try again...!')
            })
    }
    return (
        <div className=' bg-gray-900 sticky top-0 z-50'>
            <div className="navbar md:w-[95%] mx-auto">
                <div className="navbar-start w-full gap-2 lg:w-1/2">
                    <div className='dropdown' >
                        <div onClick={() => setIsOpen(isOpen => !isOpen)} tabIndex={0} role="button" className="px-3 py-2 lg:hidden">
                            {
                                !isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" className='stroke-current text-gray-300' fill='none' height="25px"><path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" className='stroke-current text-gray-300' fill='none' height="30px"><path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z" /></svg>
                            }
                        </div>

                        <motion.nav
                            animate={isOpen ? "open" : "closed"}
                            variants={variants}
                        >
                            <ul tabIndex={0} className="menu block lg:hidden menu-sm absolute mt-3 z-[1] pt-0 p-2 lg:p-5 shadow bg-base-100 rounded-box max-w-52 min-w-52">
                                {menuNavLink}
                            </ul>
                        </motion.nav>
                    </div>
                    <Link to='/' className="text-xl lg:text-3xl font-bold text-white flex items-center gap-2 cursor-pointer">
                        <img className='w-9 md:w-12' src="/—Pngtree—food logo_8366734.png" alt="" />
                        <span className="text-[#ff0] textLayer">SM</span> Food
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex ml-14">
                    <ul className="menu menu-horizontal px-1">
                        {menuNavLink}
                    </ul>
                </div>
                <div className="navbar-end w-1/3">
                    {
                        !user ? <Link to='/login' type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border  hover:btnHoverColor  btnColor  disabled:pointer-events-none border-neutral-700 hover:bg-[#e48413] text-white hover:text-white">
                            Log in
                        </Link> : <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 border text-white rounded-box w-52">
                                <li onClick={logout}><a>Logout</a></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;