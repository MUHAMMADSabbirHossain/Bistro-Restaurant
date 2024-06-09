import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
    };
    // console.log(watch("example")); // watch input value by passing the name of it

    return (
        <>
            <Helmet>
                <title>Bistro | SignUp</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            {errors.name && <span className='text-red-600'>Name is required</span>}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            {errors.email && <span className='text-red-600'>Email is required</span>}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {errors.password?.type === "required" && <p className='text-red-600'>Password is required</p>}
                            {errors.password?.type === "minLength" && <p className='text-red-600'>Password must be 6 charecters</p>}
                            {errors.password?.type === "maxLength" && <p className='text-red-600'>Password must be less then 20 charecters</p>}
                            {errors.password?.type === "pattern" && <p className='text-red-600'>Password must have one uppercase, one lowercase,one number and one special charecter</p>}

                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Signup" />
                            </div>
                        </form>

                        <p className='my-2 text-center'><small>Already have an account?<Link to="/login"> Login.</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;