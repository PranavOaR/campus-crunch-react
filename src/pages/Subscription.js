import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const subscriptionPlans = [
    {
      id: 'quarterly',
      name: '3-Month Plan',
      duration: '3 Months',
      originalPrice: 1800,
      price: 1500,
      savings: 300,
      savingsPercent: 17,
      deliveries: 12,
      description: 'Perfect for trying out our subscription service',
      features: [
        '12 deliveries (weekly)',
        'Mix of all product categories',
        'Free delivery',
        'Cancel anytime after 3 months',
        'Student discount applied'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'biannual',
      name: '6-Month Plan',
      duration: '6 Months',
      originalPrice: 3600,
      price: 2700,
      savings: 900,
      savingsPercent: 25,
      deliveries: 24,
      description: 'Most popular choice among students',
      features: [
        '24 deliveries (weekly)',
        'Priority customer support',
        'Exclusive seasonal products',
        'Free delivery',
        'Flexible pause options',
        'Bonus monthly surprise snack'
      ],
      popular: true,
      color: 'from-primary-purple to-light-purple'
    },
    {
      id: 'annual',
      name: 'Annual Plan',
      duration: '12 Months',
      originalPrice: 7200,
      price: 4800,
      savings: 2400,
      savingsPercent: 33,
      deliveries: 48,
      description: 'Best value for committed snack lovers',
      features: [
        '48 deliveries (weekly)',
        'VIP customer support',
        'Early access to new products',
        'Free delivery',
        'Unlimited pause/resume',
        'Monthly bonus snacks',
        'Exclusive Campus Crunch merchandise',
        'Birthday surprise box'
      ],
      popular: false,
      color: 'from-green-500 to-green-600'
    }
  ];

  const handleSubscribe = (plan) => {
    addToCart({
      id: plan.id,
      name: `Campus Crunch ${plan.name}`,
      price: plan.price,
      image: '/CampusCrunchLogo.jpeg',
      quantity: 1,
      type: 'subscription',
      duration: plan.duration,
      deliveries: plan.deliveries
    });
    showToast(`${plan.name} subscription added to cart!`, 'success');
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-poppins font-bold text-gray-900 mb-6">
            Campus Crunch <span className="text-gradient">Subscriptions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Never run out of your favorite snacks! Choose a subscription plan that fits your lifestyle 
            and enjoy regular deliveries of delicious, nutritious Campus Crunch products.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-light-purple mx-auto rounded-full"></div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-accent-neon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-lg font-poppins font-semibold mb-2">Save Money</h3>
            <p className="text-gray-600 text-sm">Up to 33% off regular prices</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-accent-neon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-poppins font-semibold mb-2">Free Delivery</h3>
            <p className="text-gray-600 text-sm">No delivery fees on any plan</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-accent-neon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-poppins font-semibold mb-2">Flexible</h3>
            <p className="text-gray-600 text-sm">Pause, resume, or cancel anytime</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-accent-neon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-poppins font-semibold mb-2">Exclusive</h3>
            <p className="text-gray-600 text-sm">Access to subscriber-only products</p>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-poppins font-bold text-center text-gray-900 mb-12">
            Choose Your Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-4 ring-primary-purple ring-opacity-50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-purple text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-primary-purple">₹{plan.price}</span>
                      <span className="text-gray-500 line-through">₹{plan.originalPrice}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      ₹{Math.round(plan.price / (plan.deliveries / 4))} per month
                    </div>
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                      Save {plan.savingsPercent}% (₹{plan.savings})
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="text-center text-gray-600">
                    <span className="font-semibold">{plan.deliveries} deliveries</span> over {plan.duration}
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSubscribe(plan)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary-purple text-white hover:bg-light-purple'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-poppins font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">
                  How does delivery work?
                </h3>
                <p className="text-gray-600">
                  We deliver fresh snacks to your dorm or specified address every week. 
                  You'll receive a tracking notification before each delivery.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">
                  Can I customize my box?
                </h3>
                <p className="text-gray-600">
                  Yes! You can set preferences for your deliveries and we'll curate 
                  your box based on your taste preferences and dietary requirements.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">
                  What if I'm not satisfied?
                </h3>
                <p className="text-gray-600">
                  We offer a 100% satisfaction guarantee. If you're not happy with 
                  any delivery, we'll make it right or provide a full refund.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">
                  Can I pause my subscription?
                </h3>
                <p className="text-gray-600">
                  Absolutely! You can pause your subscription for up to 8 weeks 
                  if you're going home for holidays or taking a break from studies.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">
                  How do I cancel?
                </h3>
                <p className="text-gray-600">
                  You can cancel anytime after your minimum commitment period. 
                  Just contact our support team or manage it from your account dashboard.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">
                  Do you offer student discounts?
                </h3>
                <p className="text-gray-600">
                  Yes! All our subscription prices already include student discounts. 
                  Just verify your student status during checkout.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-purple to-light-purple rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-poppins font-bold mb-4">
            Ready to Start Your Snack Journey?
          </h2>
          <p className="text-xl mb-6 text-white/90">
            Join thousands of students who never run out of their favorite snacks!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
              Learn More About Us
            </Link>
            <Link to="/" className="btn-secondary">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription; 