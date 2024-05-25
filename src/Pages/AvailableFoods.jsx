import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AvailableCard from "../components/AvailableCard";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";


const AvailableFoods = () => {

    const [FoodCount, setFoodCounts] = useState(0)
    const [current, setcurrent] = useState(1)
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')

    // Food All data 
    const FoodData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/food-All?page=${current}&size=${parpage}&filter=${filter}&search=${search}`);
        return data;
    }

    const parpage = 9;



    const { data: AllFood = [], isLoading } = useQuery({
        queryFn: () => FoodData(),
        queryKey: ['food', current, parpage, filter, search]
    })



    // console.log(FoodCount);

    const pagecount = Math.ceil(FoodCount / parpage)

    const pages = [...Array(pagecount).keys()].map(page => page + 1)
    // console.log(pages);

    const buttonClick = (value) => {

        setcurrent(value)
    }

    const filterClick = e => {
        setFilter(e.target.value)
    }
    const searchBtn = e => {
        e.preventDefault()

        setSearch(e.target.search.value);
    }

    const resetButton = () => {
        setSearch('')
        setFilter('')
    }

    const [column , setColumn] = useState(true)

    const columnHandle = () =>{
        setColumn(!column)
    }

    // console.log(current);
    useEffect(() => {
        const loaded = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/food-counts?search=${search}`);
            setFoodCounts(data.foodCounts)
        }
        loaded()
    }, [search])

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
        <div>
            <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 md:gap-4 lg:gap-10 my-8">
                <div >
                    <div className="w-80 border rounded-lg">
                        <form onSubmit={searchBtn} className="relative flex" >
                            <div className="relative">
                                <input name="search" className="py-3 pe-20 ps-4 block  w-full  rounded-lg text-sm focus:border-green-500  disabled:opacity-50 disabled:pointer-events-none rounded-e-none bg-neutral-900 border-green-700 text-white placeholder-neutral-500 focus:ring-green-600" type="text" placeholder="Type a Food name" />
                                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3.5">
                                    <svg className="flex-shrink-0 size-4 text-gray-400 text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                </div>
                            </div>
                            <button className="bg-[#ad1a19] rounded-lg px-2 rounded-s-none text-white">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                <select
                    onChange={filterClick}
                    value={filter}
                    name="filter"
                    className='border p-3 w-80  rounded-lg'
                >
                    <option value='' >Filter By Expired Date</option>
                    <option value='less time'>Expire Date Less time</option>
                    <option value='more time'>Expire Date more time</option>
                </select>
                <div className="flex gap-3">
                    <button onClick={resetButton} className="btn bg-[#ad1a19] hover:bg-[#851b1b] text-white">Reset All</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center md:gap-4 lg:gap-10 my-8">

                <button onClick={columnHandle} className="btn bg-[#ad1a19] hover:bg-[#851b1b] text-white">Column : {column ? 2 : 3}</button>
            </div>
            <div className="w-[95%] mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium"><span className="text-[#ff0] textLayer"> Available</span> Foods Page : {current}</h2>
                <div className={column ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10' : 'grid grid-cols-1 md:grid-cols-2 gap-5 my-10'}>
                    {
                        AllFood.map((single, id) => <AvailableCard card={single} key={id} />)
                    }
                </div>
                <div className="mb-20 flex justify-center">
                    <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm bg-gray-800 text-gray-100 ">
                        <button disabled={current === 1} onClick={() => buttonClick(current - 1)} type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md border-gray-700">
                            <span className="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        {/* inline-flex items-center px-4 py-2 text-sm font-semibold border bg-blue-400 text-gray-900 border-gray-700 */}
                        {
                            pages.map((button) => <button onClick={() => buttonClick(button)} key={button} type="button" className={`${current === button && 'bg-black text-white'}inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-700 hover:bg-black hover:text-white`}>{button}</button>)
                        }

                        <button onClick={() => buttonClick(current + 1)} disabled={current === pages.length || 1} type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md border-gray-700">
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default AvailableFoods;