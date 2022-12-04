import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useToken from '../hooks/useToken';
import SocialLogin from '../Pages/Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const { createUser, upDateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const userOptions = [
        "Seller",
        "Buyer"
    ];

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                upDateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.person);
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {

                console.log(error)
                setSignUpError(error.message)
            });
    }

    const saveUser = (name, email, person) => {
        const user = { name, email, person };
        fetch(' https://assignment-twelve-mobile-resale-market-server-zeta.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Save User', data);
                setCreatedUserEmail(email);
                reset();
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required",
                            })}

                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: true,

                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 character long" }
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Select Option</span>
                        </label>
                        <select
                            {...register("person")}
                            className='select input-bordered w-full max-w-xs'
                        >
                            {
                                userOptions.map((userOption, index) => <option
                                    key={index}
                                    value={userOption}
                                >{userOption}</option>)
                            }

                        </select>
                    </div>
                    <input className='btn btn-accent mt-4 w-full' value='Sign Up' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className='divider'>OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    )
};

export default SignUp;