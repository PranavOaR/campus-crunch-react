import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { searchProducts } from '../data/products';
import CartModal from './CartModal';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setShowSearchDropdown(false);
      setIsMobileSearchOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim().length > 0) {
      const results = searchProducts(query);
      setSearchResults(results);
      setShowSearchDropdown(true);
    } else {
      setSearchResults([]);
      setShowSearchDropdown(false);
    }
  };

  const handleProductSelect = (productId) => {
    navigate(`/product/${productId}`);
    setSearchQuery('');
    setShowSearchDropdown(false);
    setIsMobileSearchOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary-purple to-light-purple shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-accent-neon-yellow rounded-full flex items-center justify-center">
                <span className="text-primary-purple font-bold text-lg md:text-xl">CC</span>
              </div>
              <span className="text-white font-poppins font-bold text-lg md:text-xl">
                Campus Crunch
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link 
                to="/" 
                className="text-white hover:text-accent-neon-yellow transition-colors duration-300 font-medium"
              >
                Home
              </Link>
              <Link 
                to="/combos" 
                className="text-white hover:text-accent-neon-yellow transition-colors duration-300 font-medium"
              >
                Combos
              </Link>
              <Link 
                to="/on-the-go" 
                className="text-white hover:text-accent-neon-yellow transition-colors duration-300 font-medium"
              >
                On The Go
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-accent-neon-yellow transition-colors duration-300 font-medium"
              >
                About
              </Link>
              <Link 
                to="/subscription" 
                className="text-white hover:text-accent-neon-yellow transition-colors duration-300 font-medium"
              >
                Subscribe
              </Link>
            </nav>

            {/* Desktop Search and Cart */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Desktop Search */}
              <div className="relative" ref={searchRef}>
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                      className="w-48 lg:w-64 px-4 py-2 rounded-full bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent-neon-yellow focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </form>

                {/* Desktop Search Dropdown */}
                {showSearchDropdown && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                    {searchResults.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleProductSelect(product.id)}
                        className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-lg mr-3"
                          onError={(e) => {
                            e.target.src = '/CampusCrunchLogo.jpeg';
                          }}
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{product.name}</h4>
                          <p className="text-sm text-gray-600 truncate">{product.description}</p>
                          <p className="text-sm font-bold text-primary-purple">₹{product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-white hover:text-accent-neon-yellow transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0h9" />
                </svg>
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent-neon-yellow text-primary-purple text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartItemsCount()}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center space-x-2">
              {/* Mobile Search Button */}
              <button
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="p-2 text-white hover:text-accent-neon-yellow transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Mobile Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-white hover:text-accent-neon-yellow transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0h9" />
                </svg>
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent-neon-yellow text-primary-purple text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {getCartItemsCount()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-accent-neon-yellow transition-colors duration-300 lg:hidden"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isMobileSearchOpen && (
            <div className="md:hidden pb-4" ref={searchRef}>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent-neon-yellow focus:border-transparent"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </form>

              {/* Mobile Search Dropdown */}
              {showSearchDropdown && searchResults.length > 0 && (
                <div className="mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-64 overflow-y-auto">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductSelect(product.id)}
                      className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded-lg mr-3"
                        onError={(e) => {
                          e.target.src = '/CampusCrunchLogo.jpeg';
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{product.name}</h4>
                        <p className="text-xs text-gray-600 truncate">{product.description}</p>
                        <p className="text-sm font-bold text-primary-purple">₹{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`fixed top-16 left-0 right-0 bg-gradient-to-b from-primary-purple to-light-purple z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <nav className="px-4 py-6 space-y-4">
            <Link 
              to="/" 
              onClick={handleMobileNavClick}
              className="block text-white hover:text-accent-neon-yellow transition-colors duration-300 font-medium py-3 px-2 border-b border-white/10"
            >
              Home
            </Link>
            <Link 
              to="/combos" 
              onClick={handleMobileNavClick}
              className="block text-white hover:text-accent-neon-yellow transition-colors duration-300 font-medium py-3 px-2 border-b border-white/10"
            >
              Combos
            </Link>
            <Link 
              to="/on-the-go" 
              onClick={handleMobileNavClick}
              className="block text-white hover:text-accent-neon-yellow transition-colors duration-300 font-medium py-3 px-2 border-b border-white/10"
            >
              On The Go
            </Link>
            <Link 
              to="/about" 
              onClick={handleMobileNavClick}
              className="block text-white hover:text-accent-neon-yellow transition-colors duration-300 font-medium py-3 px-2 border-b border-white/10"
            >
              About
            </Link>
            <Link 
              to="/subscription" 
              onClick={handleMobileNavClick}
              className="block text-white hover:text-accent-neon-yellow transition-colors duration-300 font-medium py-3 px-2"
            >
              Subscribe
            </Link>
          </nav>
        </div>
      </header>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header; 