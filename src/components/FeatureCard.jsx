import { useEffect, useState } from "react";
import DateObject from "react-date-object";
import { Link } from "react-router-dom";

const FeatureCard = ({ card }) => {
    // const { _id, FoodImage, FoodName, Donator, FoodQuantity, PickupLocation, status, ExpiredDateTime, AdditionalNotes } = card
    const { _id ,FoodImage,AdditionalNotes, FoodName, Donator, FoodQuantity, PickupLocation, status, ExpiredDateTime } = card
    // console.log(card);
    const [date, setDate] = useState(new DateObject().format())
    useEffect(() => {

        const time = new DateObject(ExpiredDateTime);
        setDate(time.format("DD/MM/YYYY"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // console.log(date);

    return (
        <div className=" p-4 shadow-md bg-gray-900 text-gray-100">
            <div className="flex items-center space-x-2 mb-4">
                <img src={Donator?.donatorImage} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-300" />
                <div className="-space-y-1">
                    <h2 className="text-sm font-semibold leading-none">{Donator?.DonatorName}</h2>
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
                <div className="space-y-2  flex justify-between items-end">
                    <div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center gap-3">
                            <h3 className="text-xl font-semibold text-blue-400">{FoodName}</h3>
                        </a>
                        <p title={AdditionalNotes} className="leading-snug mt-2 text-white text-sm">Additional Notes : {AdditionalNotes.slice(0,25)}.....</p>
                        <p className="leading-snug mt-2 text-white text-base">Location : {PickupLocation}</p>
                    </div>
                    <Link to={`/food-info/${_id}`} className="btn btn-primary text-sm h-auto px-3 text-white min-h-0 py-2">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;