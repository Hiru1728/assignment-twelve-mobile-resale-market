import React, { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Select from "react-select";
import { AuthContext } from '../contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, control, handleSubmit } = useForm();
    const { createUser, upDateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    // if (token) {
    //     navigate('/');
    // }

    const options = [
        { value: '1', label: 'Seller' },
        { value: '2', label: 'Buyer' },
    ];

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('User Created Successfully.')
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
        fetch(' https://assignment-twelve-mobile-resale-market-server.vercel.app/users', {
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
                        <Controller
                            control={control}
                            defaultValue={1}
                            name="person"
                            render={({ onChange, value, name, ref }) => (
                                <Select
                                    inputRef={ref}
                                    classNamePrefix="addl-class"
                                    options={options}
                                    value={options.find(c => c.value === value)}
                                    onChange={val => onChange(val.value)}
                                />
                            )}
                        />
                    </div>
                    <input className='btn btn-accent mt-4 w-full' value='Sign Up' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline btn-accent w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    )
};

export default SignUp;