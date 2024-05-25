

const MarqueeCard = ({ card }) => {
    // console.log(card);
    return (
        <div className="flex flex-col w-[350px] ml-10  border shadow-sm rounded-xl bg-neutral-900 border-neutral-700 shadow-neutral-700/70">
            <div className="h-64">
                <img className="w-full h-full rounded-t-xl" src={card?.FoodImage} alt="Image Description" />
            </div>
            <div className="p-2">
                <h3 className="text-lg font-bold  text-white">
                    {card?.FoodName}
                </h3>
            </div>
        </div>
    );
};

export default MarqueeCard;