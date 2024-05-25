import axios from "axios";
import UseAuth from "../hooks/UseAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const AddFoods = () => {

    const {user} = UseAuth()

    const navigate = useNavigate()

    // console.log(user);
    const AddCard = async(event) =>{
        event.preventDefault()

        const target = event.target
        const FoodName = target.FoodName.value;
        const FoodImage = target.FoodPhoto.value;
        const DonatorEmail =  target.email.value;
        const DonatorName = target.Donator.value;
        const FoodQuantity=  target.Quantity.value;
        const PickupLocation= target.Location.value;
        const ExpiredDateTime=  target.date.value;
        const AdditionalNotes= target.AdditionalNotes.value
        const status= target.order.value;
        const donatorImage = user.photoURL

        const Donator = {DonatorEmail,DonatorName ,donatorImage}

        const Food = {FoodName,FoodImage,Donator,FoodQuantity,PickupLocation,ExpiredDateTime,AdditionalNotes,status}

        console.log(Food);
        
        try{
            await axios.post(`${import.meta.env.VITE_API_URL}/food`,Food,{withCredentials:true})
            Swal.fire({
                title: "Successfully",
                text: "Your Food Product Added..!!",
                icon: "success"
            });
            target.reset()
            navigate('/available-foods')
        }
        catch(error){
            toast.error(error.message)
        }

    }
    const today = new Date().toISOString().split('T')[0];
    return (
        <div className="my-12">
            <h2 className="text-center text-3xl my-5">Added Foods</h2>
            <form onSubmit={AddCard} className="w-11/12 md:w-3/5 mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="FoodName"
                        id="FoodName"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="FoodName"
                        className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Food name
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="FoodPhoto"
                        id="FoodPhoto"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="FoodPhoto"
                        className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Food Photo url
                    </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="email"
                            disabled
                            id="email"
                            defaultValue={user?.email}
                            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Donator Email Address
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="Donator"
                            disabled
                            defaultValue={user?.displayName}
                            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="Donator"
                            className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Donator name
                        </label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="AdditionalNotes"
                        id="description"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="description"
                        className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Additional Notes
                    </label>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"

                            name="Quantity"
                            id="Quantity"
                            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="Quantity"
                            className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Quantity
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="Location"
                            id="Location"
                            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            min={1} max={5}
                            required
                        />
                        <label
                            htmlFor="Location"
                            className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Location
                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <fieldset>
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium  text-gray-400">Status</label>

                            <div className="flex items-center mb-4">
                                <input id="country-option-1" type="radio" name="order" value=" Available" className="w-4 h-4  focus:ring-2  focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600" defaultChecked />
                                <label htmlFor="country-option-1" className="block ms-2 text-sm font-medium  text-gray-300">
                                    Available
                                </label>
                            </div>


                        </fieldset>

                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium  text-gray-400">Expired Date</label>
                        <div className="relative max-w-sm">

                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4  text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input type="date" min={today} required name="date" className=" border   text-sm rounded-lg   block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 " placeholder="Select date" />
                        </div>

                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-4">
                        <label  className="block mb-2 text-sm font-medium  text-gray-400">Donator Images</label>
                        <img
                            src={user?.photoURL}
                            className="h-auto max-w-full w-24 rounded-lg"
                            alt="" />
                    </div>

                </div>


                <button
                    type="submit"
                    className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                >
                    Food Add
                </button>
            </form>
        </div>
    );
};

export default AddFoods;