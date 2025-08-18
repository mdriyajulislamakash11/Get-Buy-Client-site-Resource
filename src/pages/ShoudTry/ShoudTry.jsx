import React from 'react';
import useProduct from '../../hook/useProduct';
import SectionlTitle from '../Share/SectionTitle';
import ProductCard from '../Product-Card/ProductCard';

const ShoudTry = () => {
    const [product] = useProduct();
    const popularProduct = product.filter(item => item.category === "Popular")

    return (
        <div>
            <SectionlTitle 
                heading="You Should Try" 
                subHeading="Our most popular products recommended for u" 
            />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    popularProduct.map(item => <ProductCard key={item._id} item={item} />)
                }
            </div>

            
        </div>
    );
};

export default ShoudTry;