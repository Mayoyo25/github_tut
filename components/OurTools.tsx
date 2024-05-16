import { twMerge } from 'tailwind-merge';
import { RiTrademarkLine } from 'react-icons/ri';
import { IoMdGlobe } from 'react-icons/io';
import { BsChatDots } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';

const ToolCard = ({ id, title, info, label }: ToolCardProps) => {
  return (
    <div
      className={twMerge(
        'relative rounded-lg p-8 flex flex-col justify-between gap-2',
        id === 1
          ? 'bg-blue-100'
          : id === 2
          ? 'bg-green-100'
          : id === 3
          ? 'bg-orange-100'
          : 'bg-purple-100'
      )}
    >
      <small
        className={twMerge(
          label === 'Premium' ? 'bg-orange-500' : 'bg-green-700',
          'absolute top-2 right-5 px-2 skew-x-6 rounded-sm text-white'
        )}
      >
        {label}
      </small>
      <p className='py-3'>
        {id === 1 ? (
          <RiTrademarkLine size={35} className='text-blue-700' />
        ) : id === 2 ? (
          <IoMdGlobe size={35} className='text-green-700' />
        ) : id === 3 ? (
          <BsChatDots size={35} className='text-orange-700' />
        ) : (
          <AiFillEdit size={35} className='text-purple-700' />
        )}
      </p>
      <h3 className='text-2xl'>{title}</h3>
      <p>{info}</p>
      <button className='btn btn-primary w-fit'>Try It Out!</button>
    </div>
  );
};

const OurTools = () => {
  return (
    <section className='lg:px-20 pb-20 bg-white'>
      <h2 className='lg:text-6xl text-center py-10 font-bold'>
        Our <span className='text-purple-500'>Tools</span>
      </h2>
      <div className='grid grid-cols-4 gap-4 '>
        {aiTools.map((tool) => (
          <ToolCard
            key={tool.id}
            title={tool.title}
            info={tool.info}
            label={tool.label}
            id={tool.id}
          />
        ))}
      </div>
    </section>
  );
};
export default OurTools;

const aiTools = [
  {
    id: 1,
    title: 'Brand Name Generator',
    info: "Discover unique and memorable brand names that resonate with your audience and set you apart in the competitive landscape. Unleash creativity and elevate your brand's recognition effortlessly.",
    label: 'Free',
  },
  {
    id: 2,
    title: 'Domain Name Generator',
    info: "Generate a plethora of domain name ideas seamlessly and check their availability instantly. Elevate your online presence with a domain name that reflects your brand's essence and ensures a lasting impression.",
    label: 'Free',
  },
  {
    id: 3,
    title: 'Tagline & Slogan Generator',
    info: 'Crafted with precision and creativity, our AI-driven generator ensures your brand message is not just heard but remembered. Elevate your marketing campaigns and enhance brand recall effortlessly.',
    label: 'Free',
  },

  {
    id: 4,
    title: 'AI Copywriting Tool',
    info: 'Leverages advanced AI to deliver impeccably crafted copy that speaks directly to your audience. Elevate your content strategy with engaging, authentic, and conversion-focused copy that sets you apart in the digital realm.',
    label: 'Premium',
  },
];
