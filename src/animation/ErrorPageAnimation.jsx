import Lottie from "lottie-react";
import animation from '../../public/Error.json'

const ErrorPageAnimation = () => {
    return (
        <div>
            <Lottie animationData={animation} loop={true} />
        </div>
    );
};

export default ErrorPageAnimation;