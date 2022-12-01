import React from 'react';
import picture from '../../../assets/iphone.jpg';

const Advertisement = () => {
    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Mobile" className="rounded-xl h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Advertisement</h2>
                <p>QuickAds is the right market for used and brand new mobile phones where you will find out the best quality second-hand mobile phones along with the latest brand new phones that you are looking for sellers of mobile phones can also increase their sales on QuickAds</p>
            </div>
        </div>
    );
};

export default Advertisement;