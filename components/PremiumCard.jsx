'use client';

import SmartBrandlyStore from '@/store/Zustand';

const PremiumCard = ({ price, text }) => {
  const { isLoggedIn, setIsLoginModalOpen } = SmartBrandlyStore();

  const handlePayment = () => {
    if (!isLoggedIn) {
      return setIsLoginModalOpen(true);
    }
    window.open(
      `https://brandnames.lemonsqueezy.com/checkout/buy/f6fbfdad-3c17-4026-9a0e-574060d75e86`,
      '_blank'
    );
  };
  return (
    <div
      className={`${
        text === 'Regular' ? 'bg-white' : 'bg-indigo-100'
      }  border border-indigo-200 rounded-lg shadow-md p-6 w-full sm:w-1/2 lg:w-1/3 md:mx-0 mx-auto max-w-md min-w-fit mt-8 relative`}
    >
      {text === 'Lifetime' && (
        <p className='absolute top-2 right-5 bg-blue-950 rounded-sm text-white px-2'>
          best deal
        </p>
      )}
      <div className='text-center'>
        <h2 className='text-xl font-semibold text-indigo-800 mb-2'>{text}</h2>
        <div className='flex flex-col items-center'>
          <div className='flex gap-3 justify-center items-center '>
            <p className='text-3xl font-semibold text-indigo-800 my-1'>
              {text === 'Regular' ? <>${price}/m</> : <>${price}</>}
            </p>
          </div>
          <small className='text-green-900 font-semibold'>
            {text === 'Lifetime' ? 'Pay once use forever' : 'Recurring'}
          </small>
        </div>
      </div>
      <ul className='mt-4 list-disc list-inside text-gray-700'>
        <li className='mb-2'>Auto-availability check</li>
        <li className='mb-2'>Longer AI context.</li>
        <li className='mb-2'>Future premium features access.</li>
        <li className='mb-2'>Early access to premium domains.</li>
        <li className='mb-2'>Priority in domain listing.</li>
        <li className='mb-2'>Top domain listing positions.</li>
        <li className='mb-2'>Super domain listing chance.</li>
      </ul>

      <div className='mt-6 text-center'>
        <button
          disabled={text === 'Regular'}
          onClick={handlePayment}
          className='bg-indigo-700 btn text-white px-6 py-3 rounded-lg hover:bg-indigo-900'
        >
          Get {text === 'Regular' ? 'Regular' : 'Lifetime'}
        </button>
      </div>
    </div>
  );
};

export default PremiumCard;
