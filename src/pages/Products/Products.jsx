import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

import Product from '../Product/Product';

const Products = () => {
    const  {products} = useLoaderData()
     

    return (
        <div>
       
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4 lg:px-4 px-20'>
         { products?.map(product=><Product key={product.id} product={product}/>)}
         </div>
        </div>
    );
};

export default Products;