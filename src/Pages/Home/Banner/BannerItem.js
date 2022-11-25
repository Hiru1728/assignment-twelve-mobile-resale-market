import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full h-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 lg:top-1/4 top-[30px]">
                <h1 className='lg:text-6xl font-bold text-white'>
                    Cheap <br />
                    Price of Second Hand
                    <br />
                    Mobile
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 lg:top-1/2 top-[150px]">
                <p className='lg:text-xl text-white'>You can check quality inspection,IMEI history check, Test Battery,Check Warranty. </p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;