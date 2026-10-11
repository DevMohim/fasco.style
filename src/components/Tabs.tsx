import React from 'react';
import ProductCard from './shared/ProductCard';
import { IProductType } from '@/types/Product.type';

const Tabs = ({products} : {products : IProductType[]}) => {
   const mensProducts = products.filter(
     (product) => product.category === "men" && product.rating > 4.7,
   );
   const womenProducts = products.filter(
     (product) => product.category === "women" && product.rating >= 4.7,
   );
   return (
     <div className="tabs tabs-left">
       <input
         type="radio"
         name="my_tabs_1"
         className="tab checked:bg-black checked:text-white text-dark rounded-md"
         aria-label="Men's Fashion"
         defaultChecked
       />
       <div className="tab-content bg-base-100 border-base-300 p-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
           {mensProducts.slice(0, 6).map((product) => (
             <ProductCard key={product.id} product={product} />
           ))}
         </div>
       </div>

       <input
         type="radio"
         name="my_tabs_1"
         className="tab checked:bg-black checked:text-white text-dark rounded-md"
         aria-label="Women's Fashion"
       />
       <div className="tab-content bg-base-100 border-base-300 p-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
           {womenProducts.slice(0, 6).map((product) => (
             <ProductCard key={product.id} product={product} />
           ))}
         </div>
       </div>
     </div>
   );
};

export default Tabs;