import Image from "next/image";
import Chanel from '@/assets/chanel.png'
import Louis from '@/assets/louis.png'
import Prada from '@/assets/prada.png'
import Calvin from '@/assets/calvin klein.png'
import Denim from '@/assets/demin.png'
import Marquee from "react-fast-marquee";

const BrandLogo = () => {
   return (
     <section className="my-12">
       <Marquee direction="left" loop={0} speed={150}>
         <div className="max-w-7xl mx-auto items-center flex  gap-16">
           <div>
             <Image
               src={Chanel}
               alt="Chanel Brand logo"
               height={200}
               width={200}
             ></Image>
           </div>
           <div>
             <Image
               src={Louis}
               alt="Louis Brand logo"
               height={200}
               width={200}
             ></Image>
           </div>
           <div>
             <Image
               src={Prada}
               alt="Prada Brand logo"
               height={200}
               width={200}
             ></Image>
           </div>
           <div>
             <Image
               src={Calvin}
               alt=" Calvin Brand logo"
               height={200}
               width={200}
             ></Image>
           </div>
           <div className="mr-16">
             <Image
               src={Denim}
               alt="Denim Brand logo"
               height={200}
               width={200}
             ></Image>
           </div>
         </div>
       </Marquee>
     </section>
   );
};

export default BrandLogo;