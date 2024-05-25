

const FoodQuility = () => {
    return (
        <div className="bg-gray-900 py-28 my-16">
            <div className="w-[90%] md:w-2/3 mx-auto text-center space-y-6 mb-12">
                <h2 className="text-4xl lg:text-5xl text-[#ff0]">How Can We Help You ?</h2>
                <p  className="text-base">Super Quality Food is your go-to destination for delicious meals made with passion and care. we guarantee a dining experience that exceeds your expectations. </p>
            </div>
            <div className="w-[90%] md:w-3/4 mx-auto bg-gray-800 rounded-lg ">
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What makes Super Quality Food stand out?
                    </div>
                    <div className="collapse-content">
                        <p>Super Quality Food stands out for its commitment to original recipes made with high-quality ingredients. We prioritize freshness and flavor in every dish we prepare.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What type of recipes does Super Quality Food offer?
                    </div>
                    <div className="collapse-content">
                        <p>At Super Quality Food, we offer a wide range of original recipes, including international cuisine, comfort food classics, and healthy options to cater to diverse tastes and preferences.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How fast is the delivery service at Super Quality Food?
                    </div>
                    <div className="collapse-content">
                        <p>Our delivery service at Super Quality Food is known for its speed and efficiency. We strive to get your order to you as quickly as possible without compromising on the quality of your food.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What sets Super Quality Food apart in terms of delivery?
                    </div>
                    <div className="collapse-content">
                        <p>Super Quality Food prides itself on its quick and fast delivery service. We understand the importance of getting your food to you promptly, and our efficient delivery system ensures that your order arrives fresh and delicious every time.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodQuility;