import React from 'react';
import { useLoaderData } from 'react-router-dom'

const SubCategoryProducts = () => {
    const mobiles = useLoaderData();
    console.log(mobiles);
    return (
        <div>
            <h2>This is sub category section {mobiles.length}</h2>
        </div>
    );
};

export default SubCategoryProducts;