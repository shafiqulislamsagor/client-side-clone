import Lottie from 'lottie-react';
import animation from '../../public/register.json'

const RegisterAnimation = () => {
    return (
        <div>
             <Lottie animationData={animation} loop={true} />
        </div>
    );
};

export default RegisterAnimation;