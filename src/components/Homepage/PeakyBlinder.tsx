import Image from 'next/image';
import Peaky from '@/assets/peakyBlinder.png'

const PeakyBlinder = () => {
   return (
      <section className='my-20'>
        
               <Image src={Peaky} alt='Peaky Blinder style ' width={1400} height={300}></Image>
      </section>
   );
};

export default PeakyBlinder;