'use client';

import Link from 'next/link';
import SmartBrandlyLogo from './SmartBrandlyLogo';

const Footer = () => {
  return (
    <>
      <footer className='footer p-10 bg-base-200 text-base-content px-24'>
        <div>
          <SmartBrandlyLogo />
        </div>
        <div>
          <span className='footer-title'>Navigation</span>
          <Link href={'/aboutus'} className='link link-hover'>
            About us
          </Link>
          <Link href={'/contact'} className='link link-hover'>
            Contact
          </Link>
          <a href='#top' className='underline'>
            Return To top
          </a>
        </div>
        <div>
          <span className='footer-title'>Legal</span>
          <Link href={'/terms-of-use'} className='link link-hover'>
            Terms of use
          </Link>
          <Link href={'/privacy-policy'} className='link link-hover'>
            Privacy policy
          </Link>
        </div>
      </footer>
    </>
  );
};
export default Footer;
