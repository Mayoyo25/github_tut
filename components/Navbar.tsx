import SmartBrandlyLogo from './SmartBrandlyLogo';
import SimpleLinkButton from './SimpleLinkButton';

const Navbar = async () => {
  return (
    <>
      <div id='top'></div>
      <div className='navbar md:px-20 fixed top-0 ring-0 left-0 z-10 bg-base-100 max-w-full'>
        <div className='navbar-start'>
          <SmartBrandlyLogo />
        </div>
        <div className='navbar-center'>pricing</div>
        <div className='navbar-end'>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
