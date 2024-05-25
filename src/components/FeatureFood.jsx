import { Typewriter } from 'react-simple-typewriter'
import FeatureCard from './FeatureCard';
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';


const FeatureFood = () => {
    // console.log(`${import.meta.env.VITE_API_URL}/food`);
    const foodData = async () => {
        try {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/food`)
            return data;
        }
        catch (err) {
            console.log(err.message);
        }
    }
    const { data: foodItems = [], isLoading } = useQuery({
        queryFn: () => foodData(),
        queryKey: ['food', foodData],
    })
    // console.log(isLoading);
    // console.log(foodItems);
    if(isLoading) return <div className="flex justify-centerflex justify-center items-center h-screen"><Triangle
    visible={true}
    height="100"
    width="100"
    color="#ff0"
    ariaLabel="triangle-loading"
    wrapperStyle={{}}
    wrapperClass=""
    /></div>

    return (
        <div className='w-[90%] mx-auto my-16'>
            <h1 className='text-5xl text-center font-semibold'>
                {' '}
                <span style={{ color: '#ff0', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Featured Foods', 'New Foods', 'Latest Foods']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={150}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-4'>
                {
                    foodItems.sort((a, b) => b.FoodQuantity - a.FoodQuantity).slice(0, 6).map((card, id) => <FeatureCard card={card} key={id} />)
                }
            </div>
            <div className='flex justify-center my-6'>
                <Link to='/available-foods' className="py-3 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border   hover:btnHoverColor  btnColor  disabled:pointer-events-none border-neutral-700 hover:bg-[#e48413] text-white hover:text-white">Show All Foods</Link>
            </div>
        </div>
    );
}

export default FeatureFood;