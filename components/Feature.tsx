import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';
const Feature = () => {
  return (
    <section className='lg:px-20 pb-20 bg-blue-50'>
      <h2 className='lg:text-4xl text-center py-10 font-bold'>Our Services</h2>
      <div className='space-y-10'>
        {/* Web Design & Development */}
        <div className='grid grid-cols-2 gap-10 items-center'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold'>Web Design & Development</h3>
            <p className='text-gray-600'>
              Elevate your online presence with our expert web design and
              development services. We craft visually stunning and user-friendly
              websites tailored to your brand, ensuring a seamless digital
              experience for your audience.
            </p>
            <button className='btn border-custom btn-outline'>
              Learn More <GoArrowUpRight />
            </button>
          </div>
          <div className='w-full'>
            <Image
              src={'/web-design.png'}
              alt='Feature Image'
              width={500}
              height={300}
              className='rounded-lg outline outline-custom'
            />
          </div>
        </div>

        {/* SEO */}
        <div className='grid grid-cols-2 gap-10 items-center'>
          <div className='w-full'>
            <Image
              src={'/seo.png'}
              alt='Feature Image'
              width={500}
              height={300}
              className='rounded-lg outline outline-custom'
            />
          </div>
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold'>SEO</h3>
            <p className='text-gray-600'>
              Boost your online visibility and reach your target audience with
              our SEO services. We optimize your website to rank higher on
              search engines, driving organic traffic and maximizing your online
              impact.
            </p>
            <button className='btn border-custom btn-outline'>
              Learn More <GoArrowUpRight />
            </button>
          </div>
        </div>

        {/* Copywriting */}
        <div className='grid grid-cols-2 gap-10 items-center'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold'>Copywriting</h3>
            <p className='text-gray-600'>
              Capture your audience's attention and convey your message
              effectively with our professional copywriting services. From
              compelling website content to engaging marketing materials, we
              craft words that resonate and drive results.
            </p>
            <button className='btn border-custom btn-outline'>
              Learn More <GoArrowUpRight />
            </button>
          </div>
          <div className='w-full'>
            <Image
              src={'/copywriting.png'}
              alt='Feature Image'
              width={500}
              height={300}
              className='rounded-lg outline outline-custom'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feature;
