import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    console.log(imageHostKey);

    const navigate = useNavigate();

    const condition = [
        "Excelent",
        "Good",
        "Fair"
    ]

    const handleAddProduct = data => {
        console.log(data.img[0]);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        name: data.name,
                        email: data.email,
                        resalePrice: data.resalePrice,
                        image: imgData.data.url,
                        originalPrice: data.originalPrice,
                        conditionType: data.conditionType,
                        mobileNumber: data.mobileNumber,
                        customerLocation: data.customerLocation,
                    }
                    // console.log(product);
                    fetch('https://assignment-twelve-mobile-resale-market-server-zeta.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/myproduct');
                        })
                }
            })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add a Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
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
                        <span className="label-text">Resale Price</span>
                    </label>
                    <input type="text"
                        {...register("resalePrice", {
                            required: "Resale Price is required",
                        })}

                        className="input input-bordered w-full max-w-xs" />
                    {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Original Price</span>
                    </label>
                    <input type="text"
                        {...register("originalPrice", {
                            required: "Original Price is required",
                        })}

                        className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Condition type</span>
                    </label>
                    <select
                        {...register("conditionType")}
                        className='select input-bordered w-full max-w-xs'>
                        {
                            condition.map((con, index) => <option
                                key={index}
                                value={con}
                            >{con}</option>)
                        }

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input type="text"
                        {...register("mobileNumber", {
                            required: "Mobile number is required",
                        })}

                        className="input input-bordered w-full max-w-xs" />
                    {errors.mobileNumber && <p className='text-red-500'>{errors.mobileNumber.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text"
                        {...register("customerLocation", {
                            required: "Location is required",
                        })}

                        className="input input-bordered w-full max-w-xs" />
                    {errors.customerLocation && <p className='text-red-500'>{errors.customerLocation.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        {...register("img", {
                            required: "Photo is required",
                        })}

                        className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}

                </div>
                <input className='btn btn-accent mt-4 w-full' value='Add Product' type="submit" />

            </form>
        </div>
    );
};

export default AddProduct;