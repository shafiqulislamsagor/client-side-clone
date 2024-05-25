import { useEffect, useState } from "react";
import DateObject from "react-date-object";
import { Link } from "react-router-dom";


const AvailableCard = ({ card }) => {
    const {_id, FoodImage, FoodName, Donator, FoodQuantity, status, ExpiredDateTime, PickupLocation , AdditionalNotes } = card
    // console.log(card);
    const [date, setDate] = useState(new DateObject().format())
    useEffect(() => {

        const time = new DateObject(ExpiredDateTime);
        setDate(time.format("DD/MM/YYYY"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className=" p-4 shadow-md bg-gray-900 text-gray-100">
            <div className="flex items-center space-x-2 mb-4">
                <img src={Donator?.donatorImage} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-300" />
                <div className="-space-y-1">
                    <h2 className="text-sm font-semibold leading-none">{Donator.DonatorName}</h2>
                </div>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={FoodImage} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    <div className="badge badge-primary badge-outline text-sm">{status}</div>
                    <div className="flex items-center justify-between text-xs">
                        <span>Quantity: {FoodQuantity} person by served</span>
                        <span>Expired Date : {date}</span>
                    </div>
                </div>
                <div className="space-y-2  ">
                    <div>
                        <h3 className="text-xl font-semibold text-blue-400">{FoodName}</h3>
                        <p className="leading-snug mt-2 text-white text-base">Location : {PickupLocation}</p>
                        <p title={AdditionalNotes} className="text-sm text-gray-500"><span className="text-base text-gray-300 font-semibold">Description:</span> {AdditionalNotes.slice(0, 20)}....</p>
                    </div>
                    <Link to={`/food-info/${_id}`} className="btn btn-primary text-sm h-auto px-3 text-white min-h-0 py-2">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AvailableCard;