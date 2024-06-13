import useAuth from '../../../hooks/useAuth';

const UserHome = () => {

    const { user } = useAuth();
    return (
        <div>
            <h2>
                <span>Hi, Welcome Back: </span>
                {
                    user?.displayName ?
                        user.displayName :
                        "."
                }
            </h2>
        </div>
    );
};

export default UserHome;