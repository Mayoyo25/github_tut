import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex min-h-screen items-center justify-center flex-col gap-4'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <button className='btn btn-primary'>
        <Link href='/'>Return Home</Link>
      </button>
    </div>
  );
}
