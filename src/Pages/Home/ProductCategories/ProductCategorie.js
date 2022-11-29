import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategorie = ({ category }) => {
    const { picture, name, about, id } = category;
    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Mobile" className="rounded-xl h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{`${about}If you need Sumsung second hand phone. Click this Button`}</p>
                <div className="card-actions">
                    <Link to={`/category/${id}`}><button className="btn btn-primary">Click Here</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCategorie;