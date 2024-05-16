const About = () => {
  return (
    <>
      <h1 className='text-3xl md:text-4xl font-semibold text-center mb-6 md:py-10'>
        About Us
      </h1>
      <article className='flex flex-col justify-between items-center md:flex-row'>
        <div className='md:w-1/2 w-full p-5'>
          <img src={'about-us-image.png'} alt='SmartBrandly About Us Image' />
        </div>
        <div className='md:w-1/2 w-fill p-2 px-5 md:px-10 mx-auto'>
          <p className='mb-4 '>
            SmartBrandly is a cutting-edge AI-powered domain generation tool
            designed to help you find the perfect domain name for your online
            presence. Whether you're starting a new business or looking to
            revamp your brand, SmartBrandly is here to assist you.
          </p>
          <p className='mb-4 '>
            Our mission is to simplify the domain name selection process and
            provide you with AI-driven suggestions that align with your brand
            identity. We understand the importance of a strong online presence,
            and we're dedicated to helping you achieve it.
          </p>
          <p className='mb-4 '>
            Our team is composed of tech enthusiasts, domain experts, and
            creative minds who are passionate about helping you succeed. We
            continuously strive to enhance our platform and deliver a seamless
            experience for our users.
          </p>
          <p className='mb-4 '>
            We believe that AI can make domain name selection more efficient and
            effective, and we're excited to be part of the journey toward a
            smarter, more convenient online presence.
          </p>
          <p className='mb-4 '>
            Thank you for choosing SmartBrandly. We're committed to assisting
            you in finding the perfect domain name that resonates with your
            brand and vision.
          </p>
        </div>
      </article>
    </>
  );
};

export default About;
