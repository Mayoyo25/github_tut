'use client';

import Link from 'next/link';

const SmartBrandlyLogo = () => {
  return (
    <Link href='/' className='flex justify-center items-center gap-1'>
      <span
        className={'md:text-xl text-lg font-bold bg-clip-text text-blue-900 '}
      >
        SmartBrandly
      </span>
      {/* <span className='text-gray-800 text-xs bg-green-300'>beta</span> */}
    </Link>
  );
};
export default SmartBrandlyLogo;
