import { IoPersonCircleOutline } from "react-icons/io5";
import { MdAddPhotoAlternate } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import RegisterAnimation from "../animation/RegisterAnimation";
import UseAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";
import axios from "axios";


const Register = () => {
    const navigate = useNavigate()

    const { UserCreate, UserUpdate, UserLogout , setLoading , setUser} = UseAuth()

    const RegisterForm = event => {

        event.preventDefault()

        const target = event.target
        const name = target.name.value
        const photo = target.photo.value
        const email = target.email.value
        const password = target.password.value

        if(password.length < 6) {
            Swal.fire({
                title: "Sorry",
                text: "Password minimum 6 characters",
                icon: "error"
            });
            return
        }

        UserCreate(email, password)
            .then(() => {
                // console.log('user create');
                UserUpdate(name, photo)
                    .then(() => {
                        axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email:email },{withCredentials:true})
                            .then(() => {
                                Swal.fire({
                                    title: "Successfully",
                                    text: "Your Account has been Created..! Please Log in Your Accounts",
                                    icon: "success"
                                });
                                UserLogout()
                                navigate('/login')
                                target.reset()
                            })

                    })
            })
            .catch(() => {
                Swal.fire({
                    title: "Sorry",
                    text: "Already Your Account created this Email..!",
                    icon: "error"
                });
                setUser(null)
                setLoading(true)
                navigate('/registration')
                target.reset()
                // navigate('/')
            })
        // console.log(name, photo, email, password);
    }
    return (
        <div className="hero register_img min-h-screen bg-base-200">
            <div className="hero-content w-[95%] md:w-4/5 mx-auto flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left text-white">
                    <div
                        className="">
                        <RegisterAnimation />
                    </div>
                </div>
                <div className="card shrink-0 w-full lg:max-w-[50%] shadow-2xl bg-base-100">

                    <form onSubmit={RegisterForm} className="card-body pt-10">
                        <div>
                            <h2 className="text-center text-3xl text-white font-bold">Register Now</h2>
                        </div>
                        <div>
                            <label className="text-xs block mb-2">Full Name</label>
                            <div className="relative flex items-center">
                                <input name="name" type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter Your Name" />
                                <IoPersonCircleOutline className="text-3xl absolute right-2 opacity-80" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs block mb-2">Photo URL</label>
                            <div className="relative flex items-center">
                                <input name="photo" type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter Your Photo" />
                                <MdAddPhotoAlternate className="text-3xl absolute right-2 opacity-80" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs block mb-2">Email</label>
                            <div className="relative flex items-center">
                                <input name="email" type="email" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter Your Email" />
                                <MdOutlineMarkEmailRead className="text-3xl absolute right-2 opacity-80" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs block mb-2">Password</label>
                            <div className="relative flex items-center">
                                <input name="password" type="password" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter Your Password" />
                                <TbPasswordUser className="text-3xl absolute right-2 opacity-80" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                            Already have an account?
                            <Link to='/login'
                                className="text-danger underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                            > Log-In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;