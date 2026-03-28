import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const updatePath = () => setActivePath(window.location.pathname);
    window.addEventListener('popstate', updatePath);
    return () => window.removeEventListener('popstate', updatePath);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="absolute top-8 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Motiox Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => {
                const isActive = activePath === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActivePath(link.href)}
                    className={`${isActive ? 'bg-white text-black rounded-full shadow-lg' : 'text-white hover:text-gray-900 hover:bg-white hover:rounded-full hover:shadow-lg'} px-4 py-2 text-lg font-medium transition-all duration-500`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Get a Quote Button - Desktop */}
          <div className="hidden md:block shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
            >
              GET A QUOTE
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = activePath === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActivePath(link.href)}
                  className={`${isActive ? 'text-black bg-white rounded-full' : 'text-white hover:text-gray-300'} block px-3 py-2 text-lg font-medium transition-colors duration-300`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
