
import  Marquee  from 'react-fast-marquee';

const FoodMarque = () => {
    return (
        <div className='my-10 '>
            <Marquee>  
                <h3 className='text-7xl ml-20 py-2 font-bold'>🍕</h3>
                <h3 className='text-7xl ml-20 py-2 font-bold textStyle'>Popular Food</h3>
                <h3 className='text-7xl ml-20 py-2 font-bold'>🍗</h3>
                <h3 className='text-7xl ml-20 py-2 font-bold textStyle'>Trending Food</h3>
                <h3 className='text-7xl ml-20 py-2 font-bold'>🍔</h3>
                <h3 className='text-7xl ml-20 py-2 font-bold textStyle'>Spacial Food</h3>
            </Marquee>
        </div>
    );
};

export default FoodMarque;