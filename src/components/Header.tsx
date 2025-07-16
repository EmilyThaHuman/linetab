import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from './ui/resizable-navbar';
import LineTabLogo from '../assets/linetab-logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Product', link: '/product' },
    { name: 'How to Use', link: '/how-to-use' },
    { name: 'Biofilm Dangers', link: '/biofilm-dangers' },
    { name: 'Contact', link: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <Link 
          to="/" 
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
        >
          <img
            src={LineTabLogo}
            alt="LineTab"
            width={40}
            height={40}
            className="h-8 w-8"
          />
          <span className="font-bold text-lg text-blue-900 dark:text-white">LineTab</span>
        </Link>
        
        <NavItems 
          items={navItems.map(item => ({
            ...item,
            link: item.link
          }))} 
        />
        
        <div className="flex items-center space-x-2">
          <Link
            to="/product"
            className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-bold relative cursor-pointer hover:bg-blue-700 hover:-translate-y-0.5 transition duration-200 inline-block text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          >
            Buy Now
          </Link>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Link 
            to="/" 
            className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
          >
            <img
              src={LineTabLogo}
              alt="LineTab"
              width={32}
              height={32}
              className="h-6 w-6"
            />
            <span className="font-bold text-blue-900 dark:text-white">LineTab</span>
          </Link>
          
          <MobileNavToggle 
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </MobileNavHeader>
        
        <MobileNavMenu 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm text-neutral-600 hover:text-blue-900 dark:text-neutral-300"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 pt-4">
            <Link
              to="/product"
              className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-bold relative cursor-pointer hover:bg-blue-700 hover:-translate-y-0.5 transition duration-200 inline-block text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              Buy Now
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header; 