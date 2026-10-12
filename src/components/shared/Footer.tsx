import React from 'react';
const footerLinks = ['Support Center' ,  'Invoicing' , "Contract" , 'Careers', 'Blog' , 'FAQ']
const Footer = () => {
   return (
     <footer className="bg-gray-100">
       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-10 px-4 py-3">
         <div>
           <h1 className='text-dark font-volkhov text-4xl font-medium'>Fasco</h1>
         </div>
         <div>
           <ul className='flex items-center gap-10'>
             {footerLinks.map((link, ind:number) => (
               <li key={ind}>
                 <a href="" className='text-dark text-sm hover:underline transition ease-in duration-75'>{link}</a>
               </li>
             ))}
           </ul>
         </div>
       </div>
     </footer>
   );
};

export default Footer;