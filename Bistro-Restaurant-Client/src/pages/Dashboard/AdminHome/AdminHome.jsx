import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {

    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-3xl">
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

export default AdminHome;