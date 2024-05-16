'use client';
import Feature from '@/components/Feature';
import Hero from '@/components/Hero';
import OurTools from '@/components/OurTools';

export default function Home() {
  return (
    <main className='flex mx-auto max-w-screen-2xl flex-col items-center justify-between'>
      <Hero />
      <Feature />
      <OurTools />
    </main>
  );
}
