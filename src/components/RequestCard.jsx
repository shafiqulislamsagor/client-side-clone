import DateObject from "react-date-object";
import { useEffect, useState } from "react";


const RequestCard = ({card}) => {
    const {  FoodName, donar, FoodQuantity, ExpiredDateTime, AdditionalNotes, status } = card
    const [newDate, setNewDate] = useState('')
    const [newQuantity, setnewQuantity] = useState('')

    useEffect(() => {
        setNewDate(ExpiredDateTime);
        setnewQuantity(FoodQuantity);
    }, [AdditionalNotes, ExpiredDateTime, FoodQuantity]);

    return (
        <tr className=" odd:bg-gray-900  even:bg-gray-800 border-b border-gray-700">
            <th scope="row" className="px-6 pl-20 py-4 font-medium  whitespace-nowrap text-white">
                {FoodName}
            </th>
            <td className="px-6 py-4">
                {status}
            </td>
            <td className="px-6 py-4">
                {new DateObject(newDate).format('DD/MM/YYYY')}
            </td>
            <td className="px-6 py-4">
                {newQuantity}
            </td>
            <td className="px-6 py-4 flex gap-5">
                {donar?.orderDate}
            </td>
        </tr>

    );
};

export default RequestCard;