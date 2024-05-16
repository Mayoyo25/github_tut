import LottieAnimation from './LottieAnimation';

const Hero = () => {
  return (
    <section className='hero min-h-screen lg:px-20 bg-white'>
      <div className='hero-content flex gap-7 flex-col lg:flex-row'>
        <div className='w-1/2'>
          <h1 className='text-6xl font-bold'>
            SmartBrandly: <br />
            <span className='text-blue-700'>Where Words </span> <br />
            <span className='text-purple-700'>Shape Your Success</span> <br />
          </h1>
          <p className='py-6 text-gray-800'>
            Unleash the power of persuasive storytelling with our unrivaled
            copywriting services. Elevate your brand through meticulously
            crafted content that not only communicates but captivates. From
            magnetic web copy to impactful marketing narratives, our words are
            the brushstrokes that paint your success story.
          </p>
          <button className='btn text-2xl btn-primary'>Get Started</button>
        </div>
        <div className='w-1/2'>
          <LottieAnimation />
        </div>
      </div>
    </section>
  );
};
export default Hero;
