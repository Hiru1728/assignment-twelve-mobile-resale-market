import React from 'react';
import { useLoaderData } from 'react-router-dom'
import SubCategoryOption from './SubCategoryOption';


const SubCategoryProducts = () => {
    const mobiles = useLoaderData();
    console.log(mobiles);

    return (
        <div>
            <h2 className='text-3xl font-bold'>Here available {mobiles.length} mobile</h2>
            <div className=''>
                {
                    mobiles.map(mobile => <SubCategoryOption
                        key={mobile._id}
                        mobile={mobile}
                    ></SubCategoryOption>)
                }
            </div>
        </div>
    );
};

export default SubCategoryProducts;