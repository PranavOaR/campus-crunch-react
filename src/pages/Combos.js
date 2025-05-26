import React from 'react';
import { Link } from 'react-router-dom';
import { combos, getProductById } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';

const Combos = () => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddComboToCart = (combo) => {
    // Add each product in the combo to cart
    combo.products.forEach(productId => {
      const product = getProductById(productId);
      if (product) {
        addToCart({
          id: `combo-${combo.id}-${product.id}`,
          name: `${combo.name} - ${product.name}`,
          price: combo.comboPrice / combo.products.length, // Distribute combo price
          image: product.image,
          quantity: 1,
          type: 'combo',
          comboId: combo.id
        });
      }
    });
    showToast(`${combo.name} added to cart!`, 'success');
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-poppins font-bold text-gray-900 dark:text-white mb-6">
            Combo <span className="text-gradient">Deals</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Save more with our specially curated combo packs! Perfect combinations of your favorite snacks 
            and meals designed to keep you energized throughout your academic journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-light-purple mx-auto rounded-full"></div>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {combos.map((combo) => (
            <div key={combo.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              {/* Combo Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/CampusCrunchLogo.jpeg';
                  }}
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Save ₹{combo.savings}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-poppins font-bold">{combo.name}</h3>
                </div>
              </div>

              {/* Combo Details */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {combo.detailedDescription || combo.description}
                </p>

                {/* Products in Combo */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Includes:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {combo.products.map((productId) => {
                      const product = getProductById(productId);
                      return product ? (
                        <div key={product.id} className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-8 h-8 object-cover rounded"
                            onError={(e) => {
                              e.target.src = '/CampusCrunchLogo.jpeg';
                            }}
                          />
                          <span className="text-xs text-gray-700 dark:text-gray-200 font-medium">{product.name}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Individual Price:</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-through">₹{combo.originalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Combo Price:</span>
                    <span className="text-2xl font-bold text-primary-purple dark:text-primary-400">₹{combo.comboPrice}</span>
                  </div>
                  <div className="text-center mt-2">
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      You Save ₹{combo.savings} ({Math.round((combo.savings / combo.originalPrice) * 100)}% off)
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleAddComboToCart(combo)}
                    className="w-full btn-primary text-center"
                  >
                    Add Combo to Cart - ₹{combo.comboPrice}
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    {combo.products.slice(0, 2).map((productId) => {
                      const product = getProductById(productId);
                      return product ? (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          className="text-xs text-primary-purple dark:text-primary-400 hover:text-light-purple text-center py-2 border border-primary-purple dark:border-primary-400 rounded-lg hover:bg-primary-purple hover:text-white transition-colors"
                        >
                          View {product.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-primary-purple to-light-purple rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-poppins font-bold mb-4">Why Choose Combo Deals?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Money</h3>
              <p className="text-white/90">Get more for less with our specially priced combo deals.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Perfect Pairings</h3>
              <p className="text-white/90">Expertly curated combinations for optimal nutrition and taste.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Convenience</h3>
              <p className="text-white/90">Everything you need in one package - perfect for busy students.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Browse our individual products to create your own perfect combination!
          </p>
          <Link to="/" className="btn-primary">
            Browse All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Combos; 