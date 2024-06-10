import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {

    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
            })
    }

    return (
        <div className="mb-4 px-8">
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-block">
                <FaGoogle className=""></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;