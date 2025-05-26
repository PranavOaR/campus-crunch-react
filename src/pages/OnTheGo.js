import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getOnTheGoProducts } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';

const OnTheGo = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const onTheGoProducts = getOnTheGoProducts();

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

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-poppins font-bold text-gray-900 mb-6">
            On The <span className="text-gradient">Go</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Perfect snacks for busy students who need quick, nutritious fuel between classes, 
            during study sessions, or while rushing to the next lecture. Grab and go!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-light-purple mx-auto rounded-full"></div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-poppins font-semibold mb-2">Quick & Easy</h3>
            <p className="text-gray-600">Ready to eat in seconds. Perfect for busy schedules.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-poppins font-semibold mb-2">Portable</h3>
            <p className="text-gray-600">Designed to fit in your backpack or pocket.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-poppins font-semibold mb-2">Energy Boost</h3>
            <p className="text-gray-600">Sustained energy to keep you going strong.</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-poppins font-bold text-center text-gray-900 mb-12">
            Our On-The-Go Collection
          </h2>
          
          {onTheGoProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {onTheGoProducts.map((product) => (
                <div
                  key={product.id}
                  className="card group cursor-pointer"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={hoveredProduct === product.id ? (product.bowlImage || product.onTheGoImage || product.backImage) : product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = '/CampusCrunchLogo.jpeg';
                        }}
                      />
                      <div className="absolute top-2 right-2 bg-primary-purple text-white px-2 py-1 rounded-full text-sm font-semibold">
                        ₹{product.price}
                      </div>
                      <div className="absolute top-2 left-2 bg-accent-neon-yellow text-primary-purple px-2 py-1 rounded-full text-xs font-bold">
                        ON-THE-GO
                      </div>
                    </div>
                  </Link>
                  
                  <div className="space-y-3">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xl font-poppins font-semibold text-gray-900 group-hover:text-primary-purple transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Nutrition Highlights */}
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {product.nutrition.calories} cal
                      </span>
                      <span>{product.nutrition.protein} protein</span>
                      <span>{product.nutrition.servingSize}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary-purple">
                        ₹{product.price}
                      </span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-accent-neon-yellow text-primary-purple px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No On-The-Go Products Available</h3>
              <p className="text-gray-600 mb-4">Check back soon for new portable snacks!</p>
              <Link to="/" className="btn-primary">
                Browse All Products
              </Link>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-purple to-light-purple rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-poppins font-bold mb-4">
            Never Go Hungry Between Classes
          </h2>
          <p className="text-xl mb-6 text-white/90">
            Stock up on your favorite on-the-go snacks and save with our combo deals!
          </p>
          <Link to="/combos" className="btn-secondary">
            View Combo Deals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnTheGo; 