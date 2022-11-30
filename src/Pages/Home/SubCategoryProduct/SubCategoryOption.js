import React from 'react';

const SubCategoryOption = ({ mobile, setBooking }) => {
    const { subcategoryName
        , ResalePrice, OriginalPrice, img, location, registered, yearsOfUse, sallerName } = mobile;
    return (
        <div>
            <div className="card shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="mobile" className="h-[300px] w-[400px] lg:h-[440px] rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: <span className='text-3xl text-bold'>{subcategoryName
                    }</span></h2>
                    <p>Resale Price: {ResalePrice}</p>
                    <p>Original Price: {OriginalPrice}</p>
                    <p>location: <strong>{location}</strong></p>
                    <p>Publish date: {registered}</p>
                    <p>{yearsOfUse}</p>
                    <h3>Seller Name : <strong>{sallerName}</strong></h3>
                    <div className="card-actions">
                        <button className="btn btn-primary"><label
                            onClick={() => setBooking(mobile)} htmlFor="booking-modal">Book Now</label></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryOption;