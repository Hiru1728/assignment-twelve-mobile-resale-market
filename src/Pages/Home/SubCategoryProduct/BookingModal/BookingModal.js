import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {
    const { user } = useContext(AuthContext);
    console.log(booking);
    const { subcategoryName, ResalePrice } = booking;
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const customerLocation = form.customerLocation.value;

        const booking = {
            productName: subcategoryName,
            ResalePrice,
            customerLocation,
            phone,
            customerName: name,
            email,
        }

        console.log(booking);

        fetch('https://assignment-twelve-mobile-resale-market-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBooking(null);
                    toast.success('Booking Confirm');

                }
                else {
                    toast.error(data.message);
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{subcategoryName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={subcategoryName} className="input w-full input-bordered" disabled />
                        <input type="text" value={ResalePrice} className="input w-full input-bordered" disabled />
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name='customerLocation' type="text" placeholder="location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full input-bordered' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;