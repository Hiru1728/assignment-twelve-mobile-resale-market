import React, { useState } from 'react';
import ProductCategorie from './ProductCategorie';

const ProductCategories = () => {
    const [categories, setCategories] = useState([])
    fetch('https://assignment-twelve-mobile-resale-market-server.vercel.app/category')
        .then(res => res.json())
        .then(data => setCategories(data))


    return (
        <div className='mb-5'>
            <h2 className='text-6xl font-bold text-center my-5'>Second hand Mobiles</h2>
            <p className='text-2xl text-center mb-3'>You can choose any Company mobiles</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    categories.map(category => <ProductCategorie
                        key={category._id}
                        category={category}
                    ></ProductCategorie>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;