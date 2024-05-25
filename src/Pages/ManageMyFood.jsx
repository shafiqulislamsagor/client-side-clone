import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ManageCard from "../components/ManageCard";
import UseAuth from './../hooks/UseAuth';
import { Triangle } from "react-loader-spinner";

const ManageMyFood = () => {

    const { user } = UseAuth()

    const getFood = async () => {
        const foodData = await axios(`${import.meta.env.VITE_API_URL}/foods/${user?.email}`, { withCredentials: true })
        return foodData.data
    }

    const { data, isLoading } = useQuery({
        queryFn: () => getFood(),
        queryKey: ['manage']
    })

    if (isLoading) return <div className="flex justify-centerflex justify-center items-center h-screen"><Triangle
    visible={true}
    height="100"
    width="100"
    color="#ff0"
    ariaLabel="triangle-loading"
    wrapperStyle={{}}
    wrapperClass=""
    /></div>

    return (
        <div className="w-full mx-auto mb-16 mt-8">
            <h3 className="text-4xl font-bold text-center mb-7 text-[#ff0]">Manage Card</h3>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left rtl:text-right  text-gray-400">
                    <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 pl-20 py-3">
                                Food name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Expired Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    data.map((single, id) => <ManageCard key={id}  card={single} />)
                }
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
            </div>
        </div>
    );
};

export default ManageMyFood;