import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('main');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      type: 'product'
    });
    showToast(`${quantity} x ${product.name} added to cart!`, 'success');
  };

  const getImageSrc = () => {
    switch (selectedImage) {
      case 'back':
        return product.backImage || product.image;
      case 'bowl':
        return product.bowlImage || product.image;
      case 'onthego':
        return product.onTheGoImage || product.image;
      case 'alt':
        return product.altImage || product.image;
      default:
        return product.image;
    }
  };

  const availableImages = [
    { key: 'main', label: 'Front', src: product.image },
    ...(product.backImage ? [{ key: 'back', label: 'Back', src: product.backImage }] : []),
    ...(product.bowlImage ? [{ key: 'bowl', label: 'Bowl', src: product.bowlImage }] : []),
    ...(product.onTheGoImage ? [{ key: 'onthego', label: 'On-the-Go', src: product.onTheGoImage }] : []),
    ...(product.altImage ? [{ key: 'alt', label: 'Alternative', src: product.altImage }] : [])
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <button
                onClick={() => navigate('/')}
                className="text-primary-purple dark:text-primary-400 hover:text-light-purple"
              >
                Home
              </button>
            </li>
            <li className="text-gray-400 dark:text-gray-500">/</li>
            <li className="text-gray-600 dark:text-gray-300">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
              <img
                src={getImageSrc()}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/CampusCrunchLogo.jpeg';
                }}
              />
            </div>
            
            {/* Image Thumbnails */}
            {availableImages.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {availableImages.map((img) => (
                  <button
                    key={img.key}
                    onClick={() => setSelectedImage(img.key)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === img.key
                        ? 'border-primary-purple dark:border-primary-400'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/CampusCrunchLogo.jpeg';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-poppins font-bold text-gray-900 dark:text-white mb-2">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-primary-purple dark:text-primary-400">₹{product.price}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.detailedDescription || product.description}
              </p>
            </div>

            {/* Nutrition Information */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Nutrition Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-primary-purple dark:text-primary-400">{product.nutrition.calories}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Calories</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{product.nutrition.servingSize}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Serving Size</div>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">{product.nutrition.protein}</div>
                  <div className="text-gray-600 dark:text-gray-300">Protein</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">{product.nutrition.carbs}</div>
                  <div className="text-gray-600 dark:text-gray-300">Carbs</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">{product.nutrition.fat}</div>
                  <div className="text-gray-600 dark:text-gray-300">Fat</div>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Ingredients</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {product.ingredients.join(', ')}
              </p>
            </div>

            {/* Add to Cart Section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex items-center space-x-4 mb-6">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Quantity:</label>
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 dark:border-gray-600 min-w-[60px] text-center text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary text-center"
                >
                  Add to Cart - ₹{product.price * quantity}
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="btn-secondary text-center"
                >
                  Continue Shopping
                </button>
              </div>
            </div>

            {/* Category Badge */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">Category:</span>
              <span className="px-3 py-1 bg-primary-purple dark:bg-primary-600 text-white text-sm rounded-full capitalize">
                {product.category}
              </span>
              {product.isOnTheGo && (
                <span className="px-3 py-1 bg-accent-neon-yellow text-primary-purple text-sm rounded-full font-semibold">
                  On-the-Go
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 