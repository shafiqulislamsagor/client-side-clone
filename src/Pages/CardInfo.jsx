import { useLoaderData, useNavigate } from "react-router-dom";
import { IoMdMailOpen } from "react-icons/io";
import { RiUserLocationLine } from "react-icons/ri";
import DateObject from "react-date-object";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import UseAuth from "../hooks/UseAuth";
import axios from "axios";
import { toast } from "react-toastify";


const CardInfo = () => {
    const navigate = useNavigate()
    const info = useLoaderData()
    const [date, setDate] = useState(new DateObject().format())
    const [newStatus, setStatus] = useState('Available')
    // console.log(info); 
    const { user } = UseAuth()
    // console.log(user.email);
    const { _id, FoodName, FoodImage, Donator, FoodQuantity, PickupLocation, ExpiredDateTime, AdditionalNotes, status } = info

    useEffect(() => {
        const time = new DateObject(ExpiredDateTime);
        setDate(time.format("DD/MM/YYYY"));
        setStatus(status)
    }, [ExpiredDateTime, status]);

    const confirmed = e => {
        const notes = e.target.Notes.value
        const foodId = _id
        const orderDate = new DateObject().format("DD/MM/YYYY")
        const donerEmail = e.target.userName.value
        const donarName = user.displayName
        const donar = { notes, orderDate, donarName, donerEmail,foodId }
        const status = 'Requested'
        // console.log(donar);
        const NewRequest = { FoodName, FoodImage, Donator, FoodQuantity, PickupLocation, ExpiredDateTime, AdditionalNotes, status, donar }
        // console.log(NewRequest);
        axios.post(`${import.meta.env.VITE_API_URL}/food-request`, NewRequest)
            .then(() => {
                
                axios.put(`${import.meta.env.VITE_API_URL}/food/${_id}`,{status})
                .then(()=>{
                    toast.success('Food Request Successfully..!')
                    setStatus(status)
                    navigate('/my-food-request')
                })
                .catch(()=>{
                })
            })
            .catch(()=>{
                toast.error('Try again later..!')
            })

    }
    return (
        <div className="">
            <div className="pt-6">
                <div className="mx-auto mt-6 w-[90%]  md:w-3/5 sm:px-6 justify-center lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">

                    <div className="aspect-h-5 h-80 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img src={FoodImage} alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <div className="flex items-center gap-2">
                                <div className="w-10 rounded-full">
                                    <img alt="donarImage" className="rounded-full" src={Donator?.donatorImage} />
                                </div>
                                <h3 className="text-white">{Donator?.DonatorName}</h3>
                            </div>
                            <div className="mt-6">

                                <div className="flex items-center">
                                    <div className="badge badge-secondary badge-outline">{newStatus}</div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-sm font-medium text-white">Contact :</h3>
                                <ul role="list" className="mt-2 divide-y divide-gray-200">
                                    <li className="py-2 flex justify-between items-center">
                                        <span className="text-sm text-white">{Donator?.DonatorEmail}</span>

                                        <IoMdMailOpen />
                                    </li>
                                    <li className="py-2 flex justify-between items-center">
                                        <span className="text-sm text-white">{PickupLocation}</span>
                                        <RiUserLocationLine />
                                    </li>
                                    <li className="py-2 flex justify-between items-center">
                                        <span className="text-sm text-white"></span>

                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 mb-4">
                                <button disabled={newStatus === 'Requested' || user?.email === Donator?.DonatorEmail} onClick={() => document.getElementById('my_modal_1').showModal()} type="submit" className="group relative w-[80%] ml-3 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10 2.667c-3.68 0-6.667 2.987-6.667 6.666 0 3.68 2.987 6.667 6.667 6.667 3.68 0 6.667-2.987 6.667-6.667 0-3.68-2.987-6.666-6.667-6.666zM8.333 10H6.667v-1.666h1.666V6.667h1.667v1.667h1.667v1.666H10V11H8.333v-1z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    {
                                        user?.email === Donator?.DonatorEmail ? 'Your Product' : newStatus !== 'Requested' ? 'Food Request' : 'Requested'
                                    } 

                                </button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Food Request Now !</h3>
                                        <p className="py-4">Clicking on the Request Confirm button will confirm the request</p>
                                        <div className="modal-action block">
                                            <form onSubmit={confirmed} method="dialog" className="">
                                                <div className="flex gap-5">
                                                    <div className="relative z-0 mb-5 group">
                                                        <img src={FoodImage} alt="Model wearing plain white basic tee." className="h-44 w-44 object-cover object-center" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="space-y-2">
                                                            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{FoodName}</h1>
                                                            <p className="text-white text-sm ">Food id : {_id.slice(0, 9)}</p>

                                                            <p className="text-white text-sm ">Expired Date : {date}</p>
                                                            <p className="text-white text-sm">Request Date: {new DateObject().format("DD/MM/YYYY")}</p>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-2 mb-4">
                                                    <p className="text-white text-sm flex items-center gap-3 "><IoLocationOutline /> {PickupLocation}</p>
                                                    <p className="text-sm text-white"> Donator Name :{Donator?.DonatorName}</p>
                                                    <h3 className="text-white text-sm mb-5 ">Donator Email : {Donator?.DonatorEmail}</h3>
                                                </div>
                                                <div className="relative z-0 w-full mb-5 mt-7 group">
                                                    <input
                                                        defaultValue={user.email}
                                                        disabled
                                                        type="text"
                                                        name="userName"
                                                        id="userName"
                                                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" "
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="userName"
                                                        className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                    >
                                                        Your Email
                                                    </label>
                                                </div>
                                                <div className="relative z-0 w-full mb-5 group">
                                                    <input
                                                        type="text"
                                                        name="Notes"
                                                        id="Notes"
                                                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" "
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="Notes"
                                                        className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                    >
                                                        Your Additional Notes
                                                    </label>
                                                </div>
                                                <button className="btn">Request Confirm</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto  mt-6 w-[90%]  md:w-3/5 px-4 pb-16 pt-10 sm:px-6 ">
                    <div className="">
                        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{FoodName}</h1>
                        <p className="text-sm mt-4">Additional Notes : {AdditionalNotes}</p>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <h3 className="text-white mt-5">Food Quantity : {FoodQuantity} person by served</h3>
                            <p className="text-white mt-5">Expired Date : {date}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default CardInfo;