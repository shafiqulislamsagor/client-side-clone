import Lottie from "lottie-react";
import animation from '../../public/login.json'
const LoginAnimation = () => {
    return (
        <div>
            <Lottie animationData={animation} loop={true} />
        </div>
    );
};

export default LoginAnimation;