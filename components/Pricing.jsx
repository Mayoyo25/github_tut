'use client';

import { useState } from 'react';
import PremiumCard from './PremiumCard';

const Pricing = () => {
  const [monthlyPrice, setOriginalPrice] = useState(19);
  const [lifetimePrice, setLifetimePrice] = useState(149);

  return (
    <>
      <div className='py-14 p-2' id='pricing'>
        <h2 className='text-center text-blue-900 font-semibold text-3xl md:text-3xl lg:text-5xl'>
          Unlock Premium Features
        </h2>
        <div className='flex sm:flex-row flex-col justify-center items-center gap-5'>
          <PremiumCard price={lifetimePrice} text={'Lifetime'} />
          <PremiumCard price={monthlyPrice} text={'Regular'} />
        </div>
      </div>
    </>
  );
};

export default Pricing;
