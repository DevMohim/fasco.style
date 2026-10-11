import { getProducts } from '@/services/getProduct';
import Tabs from '../Tabs';

const NewArrivals = async() => {
   const products = await getProducts()
   
   return (
     <section className="my-10">
       <div className="max-w-7xl mx-auto">
         <div className="flex items-center flex-col max-w-[80%] md:max-w-[40%] lg:max-w-[40%] mx-auto justify-center space-y-2">
           <h1 className="text-dark font-volkhov text-4xl font-medium uppercase text-center">
             new Arrivals
           </h1>
           <p className="text-[#808080] text-sm text-center">
             Discover the latest trends and elevate your style with our newest
             arrivals. Fresh looks, timeless essentials, and must-have pieces
             await you.
           </p>
         </div>
       </div>
       {/* filter category btn */}
       <div className="px-4 mt-10">
         {/* name of each tab group should be unique */}
         <Tabs products={products} />
       </div>

       <div className='my-8 flex justify-center items-center gap-4'>
        <button className='btn bg-dark text-white'>Show more</button>
       </div>
     </section>
   );
};

export default NewArrivals;