import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import BookingModal from './BookingModal/BookingModal';
import SubCategoryOption from './SubCategoryOption';


const SubCategoryProducts = () => {
    const [booking, setBooking] = useState(null);
    const mobiles = useLoaderData();
    console.log(mobiles);

    return (
        <div className='mb-5'>
            <h2 className='text-3xl font-bold text-center pt-3 pb-3'>Here available {mobiles.length} mobile</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {
                    mobiles.map(mobile => <SubCategoryOption
                        key={mobile._id}
                        mobile={mobile}
                        setBooking={setBooking}
                    ></SubCategoryOption>)
                }
            </div>
            {
                booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                ></BookingModal>
            }
        </div>
    );
};

export default SubCategoryProducts;