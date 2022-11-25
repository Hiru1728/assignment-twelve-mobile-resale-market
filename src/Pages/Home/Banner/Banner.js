import React from 'react';
import img1 from '../../../assets/SliderImage/slider1.jpg';
import img2 from '../../../assets/SliderImage/silder2.jfif';
import img3 from '../../../assets/SliderImage/slide3.jpg';
import img4 from '../../../assets/SliderImage/slide4.webp';
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }

        </div>
    );
};

export default Banner;