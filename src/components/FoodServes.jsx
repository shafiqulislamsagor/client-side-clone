import serve from '../assets/food-dish-hand-serve-svgrepo-com.svg'
import quality from '../assets/food-dish-waiter-svgrepo-com.svg'
import delivery from '../assets/deliveryman-svgrepo-com.svg'

const FoodServes = () => {
    return (
        <div className="w-4/5 mx-auto bg-gray-900 rounded-lg my-10">
            <div className="flex flex-col text-center lg:flex-row justify-between items-center gap-12 px-5 md:px-16 py-20 ">
                <div className='space-y-3'>
                    <div className='flex justify-center'><img src={serve} className="w-16 h-16 text-white" alt="" /></div>
                    <h3 className='text-xl text-white font-medium'>Super Quality Food</h3>
                    <p className='text-sm'>Super Quality Food offers the finest selection of fresh, high-quality produce.</p>
                </div>
                <div className='space-y-3'>
                    <div className='flex justify-center'><img className="w-16 h-16 text-white" src={quality} alt="" /></div>
                    <h3 className='text-xl text-white font-medium'>ORIGINAL RECIPES</h3>
                    <p className='text-sm'> Super Quality Food offers the finest selection of fresh, high-quality produce.</p>
                </div>
                <div className='space-y-3'>
                    <div className='flex justify-center'><img className="w-16 h-16 text-white" src={delivery} alt="" /></div>
                    <h3 className='text-xl text-white font-medium'>QUICK FAST DELIVERY</h3>
                    <p className='text-sm'>Super Quality Food offers the finest selection of fresh, high-quality produce.</p>
                </div>
            </div>
        </div>
    );
};

export default FoodServes;