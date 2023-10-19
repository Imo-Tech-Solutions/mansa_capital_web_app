import React, { useEffect, useRef, useState   } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../asset/logo.png"


const navigation = [
  { name: "HOME", href: "/", current: true },
  { name: "SERVICES", href: "/services", current: false },
  { name: "RESOURCES", href: "/resources", current: false },
  { name: "FIND YOUR BANK", href: "/find-your-bank", current: false },
  { name: "WHO WE ARE", href: "/who-we-are", current: false },
  { name: "TESTIMONIALS", href: "/testimonials", current: false },
  { name: "CONTACTS", href: "/contact", current: false },
];



function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth <= 1200); // Adjust the breakpoint to 1200px
  const location = useLocation();
  const activeLinkRef = useRef(null);
  const [activeLink, setActiveLink] = useState('/'); // Initialize active link to the home page

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

    // Add a resize event listener to dynamically update isMobileSize
    const handleResize = () => {
      setIsMobileSize(window.innerWidth <= 1200); // Adjust the breakpoint
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

  useEffect(() => {
    // When the location changes, set focus back to the active link
    if (activeLinkRef.current) {
      activeLinkRef.current.focus();
    }
  }, [location]);

  useEffect(() => {
    // When the location changes, set focus back to the active link
    if (activeLinkRef.current) {
      activeLinkRef.current.focus();
    }
  }, [location, activeLink]);

  const handleNavLinkClick = (href) => {
    setActiveLink(href);
    if (isMobileSize) {
      setIsOpen(false); // Close the mobile menu when a link is clicked
    }
  };



  return (
    <nav className="bg-white shadow top-0 w-full fixed z-10" aria-label="Top">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center ml-20">
            <NavLink to="/" className="text-xl font-bold text-gray-800">
              <img
                className="block h-10 w-auto lg:hidden"
                src={logo}
                alt="Your Company"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src={logo}
                alt="Your Company"
              />
            </NavLink>
          </div>

          {isMobileSize ? (
            <div className="flex items-center -mr-2 tablet:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2
                            rounded-md text-gray-800 hover:text-gray-700
                            hover:bg-gray-100 focus:outline-none focus:bg-gray-100
                            focus:text-gray-700 transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex justify-center w-full hidden sm:flex items-center">
              <div className="hidden sm:flex sm:items-center sm:ml-6 mr-20">
                {navigation.map((item, index) => (
                  <NavLink
                    key={item.name}
                    exact
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-bold text-gray-800 hover:text-orange-500
                    hover:bg-gray-100 focus:outline-none focus:text-orange-500
                    focus:bg-gray-100 transition duration-150 ease-in-out ${
                      activeLink === item.href ? 'bg-gray-100 text-orange-500' : ''
                    }`}
                      onClick={() => handleNavLinkClick(item.href)}
                      tabIndex={item.href === '/' ? '0' : '-1'} // Set tabIndex for the home link
                      ref={item.href === activeLink ? activeLinkRef : null}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <Link
                to='#'
                className='bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-400'
              >
                Get a Consultation
              </Link>
            </div>
          )}
        </div>
      </div>

      {isMobileSize && isOpen && (
        <div className="tablet:hidden">
          <div className="pt-2 pb-3 flex flex-col justify-center items-center">
            {navigation.map((item, index) => (
              <NavLink
                key={item.name}
                exact
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-bold text-gray-800 hover:text-orange-500
                    hover:bg-gray-100 focus:outline-none focus:text-orange-500
                    focus:bg-gray-100 transition duration-150 ease-in-out ${
                      activeLink === item.href ? 'bg-gray-100 text-orange-500' : ''
                    }`}
                      onClick={() => handleNavLinkClick(item.href)}
                      tabIndex={item.href === '/' ? '0' : '-1'} // Set tabIndex for the home link
                      ref={item.href === activeLink ? activeLinkRef : null}
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to='#'
              className='bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-400'
            >
              Get a Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}





export default NavBar;
