import Link from 'next/link';

const SimpleLinkButton = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link href={href}>
      {' '}
      <button className='btn btn-info btn-sm md:btn-md'>{label}</button>
    </Link>
  );
};
export default SimpleLinkButton;
