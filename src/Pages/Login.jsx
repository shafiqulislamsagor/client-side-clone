import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginAnimation from "../animation/LoginAnimation";
import UseAuth from "../hooks/UseAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
    const { UserLogin, googleLogin , setUser ,setLoading} = UseAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const google = () => {
        googleLogin()
            .then((current) => {
                const email = current?.user?.email
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email:email },{withCredentials:true})
                    .then(() => {
                        toast('😍 Log in Successfully with google', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark"
                        });
                        navigate(location.state ? location.state : '/')
                    })
                    .catch(()=>{
                        console.log('cookies send error');
                    })

            })
            .catch(() => {
                Swal.fire({
                    title: "Sorry",
                    text: "Google sign up again...!",
                    icon: "error"
                });
                setUser(null)
                setLoading(true)
                navigate('/login')
            })
    }

    const loginForm = event => {
        event.preventDefault()

        const target = event.target
        const email = target.email.value
        const password = target.password.value

        UserLogin(email, password)
            .then(() => {
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email:email },{withCredentials:true})
                    .then(() => {
                        toast('😍 Log in Successfully', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark"
                        });
                        navigate(location.state ? location.state : '/')
                    })
                    .catch(()=>{
                        console.log('cookies send error');
                    })
            })
            .catch(()=>{
                toast.error('Your email or password wrond..!')
                setUser(null)
                setLoading(true)
                navigate('/login')
            })

    }
    return (
        <div className="hero register_img min-h-screen bg-base-200">
            <div className="hero-content w-[95%] md:w-4/5 mx-auto flex-col lg:flex-row">
                <div className="text-center lg:text-left text-white">
                    <div
                        className="">
                        <LoginAnimation />
                    </div>
                </div>
                <div className="card shrink-0 w-full lg:max-w-[50%] shadow-2xl bg-base-100">
                    <div className="px-10 pt-14">
                        <div className="flex flex-col gap-5 md:flex-row items-center justify-center lg:justify-start">
                            <p className="mb-0 me-4 text-lg">Sign in with</p>
                            <button onClick={google} type="button" className="w-auto flex-1 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-medium rounded-lg border  shadow-sm  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800">
                                <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                    <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                    <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                    <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                    <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                                </svg> Google
                            </button>
                        </div>


                        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t  after:mt-0.5 after:flex-1 after:border-t  before:border-neutral-500 after:border-neutral-500">
                            <p className="mx-4 mb-0 text-center font-semibold text-white">Or</p>
                        </div>
                    </div>
                    <form onSubmit={loginForm} className="card-body pt-0">
                        <div>
                            <h2 className="text-center text-3xl text-white font-bold">Log In Now</h2>
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                            Don&apos;t have an account?
                            <Link to='/registration'
                                className="text-danger underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                            > Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;