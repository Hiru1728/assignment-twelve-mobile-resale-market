import React from 'react';

const SubCategoryOption = ({ mobile }) => {
    const { subcategoryId, ResalePrice, OriginalPrice, img, location, registered, yearsOfUse, sallerName } = mobile;
    return (
        <div>
            <div className="card shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="mobile" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {subcategoryId}</h2>
                    <p>Resale Price: {ResalePrice}</p>
                    <p>Original Price: {OriginalPrice}</p>
                    <p>location: {location}</p>
                    <p>Publish date: {registered}</p>
                    <p>{yearsOfUse}</p>
                    <h3>Seller Name : <strong>{sallerName}</strong></h3>
                    <div className="card-actions">
                        <button className="btn btn-primary">Booking Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryOption;