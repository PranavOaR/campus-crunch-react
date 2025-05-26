import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';

const Home = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      type: 'product'
    });
    showToast(`${product.name} added to cart!`, 'success');
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-purple to-light-purple text-white py-12 md:py-20">
        <div className="container mx-auto px-4 safe-area-inset">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fadeInUp text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4 md:mb-6">
                Fuel Your
                <span className="block text-accent-neon-yellow">Study Sessions</span>
              </h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90">
                Delicious snacks and meals designed for busy students. 
                From quick bites to energy-packed combos, we've got everything you need to stay focused and satisfied.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/combos" className="btn-secondary touch-manipulation">
                  Explore Combos
                </Link>
                <button 
                  onClick={scrollToProducts}
                  className="btn-primary touch-manipulation"
                >
                  Shop Now
                </button>
              </div>
            </div>
            <div className="relative animate-float">
              <img
                src="/banner.jpeg"
                alt="Campus Crunch Products"
                className="w-full h-auto rounded-2xl shadow-2xl"
                onError={(e) => {
                  e.target.src = '/CampusCrunchLogo.jpeg';
                }}
              />
              <div className="absolute -top-4 -right-4 bg-accent-neon-yellow text-primary-purple rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg animate-bounce">
                Fresh!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 safe-area-inset">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-gradient">Popular Products</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Handpicked favorites that keep students energized and satisfied throughout their academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="card group cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={hoveredProduct === product.id ? product.backImage : product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = '/CampusCrunchLogo.jpeg';
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-primary-purple text-white px-2 py-1 rounded-full text-sm font-semibold">
                      ₹{product.price}
                    </div>
                  </div>
                </Link>
                
                <div className="space-y-3">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-xl font-poppins font-semibold text-gray-900 dark:text-white group-hover:text-primary-purple transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-purple">
                      ₹{product.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-accent-neon-yellow text-primary-purple px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors touch-manipulation"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 safe-area-inset">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-2 text-gray-900 dark:text-white">Quick Energy</h3>
              <p className="text-gray-600 dark:text-gray-300">Instant energy boost for those long study sessions and late-night cramming.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-2 text-gray-900 dark:text-white">Nutritious</h3>
              <p className="text-gray-600 dark:text-gray-300">Carefully crafted with quality ingredients to fuel your body and mind.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-2 text-gray-900 dark:text-white">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300">Quick delivery right to your dorm or study spot. No time wasted!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 