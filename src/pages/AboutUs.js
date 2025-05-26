import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-poppins font-bold text-gray-900 mb-6">
            About <span className="text-gradient">Campus Crunch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Fueling student success one snack at a time. We're more than just a food brand - 
            we're your study companion, your energy booster, and your taste bud satisfier.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-light-purple mx-auto rounded-full"></div>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-poppins font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Campus Crunch was born from a simple observation: students needed better snacking options. 
              Founded by college students who understood the struggle of finding nutritious, affordable, 
              and delicious food between classes, we set out to revolutionize campus dining.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What started as a small initiative to provide healthy snacks to fellow students has grown 
              into a comprehensive food solution that serves thousands of students across campuses. 
              We believe that good nutrition shouldn't be a luxury - it should be accessible to every student.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-r from-primary-purple to-light-purple rounded-2xl p-8 text-white text-center">
              <div className="w-20 h-20 bg-accent-neon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-purple font-bold text-3xl">CC</span>
              </div>
              <h3 className="text-2xl font-poppins font-bold mb-2">Since 2024</h3>
              <p className="text-white/90">Serving students with passion and purpose</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-light-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the leading provider of nutritious, convenient, and affordable food solutions 
              for students worldwide. We envision a future where every student has access to quality 
              nutrition that fuels their academic success and overall well-being.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-light-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide students with delicious, nutritious, and convenient food options that support 
              their academic journey. We're committed to using quality ingredients, sustainable practices, 
              and innovative solutions to make healthy eating accessible and enjoyable for every student.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-poppins font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-neon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">We never compromise on the quality of our ingredients and products.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-neon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-2">Student-Centric</h3>
              <p className="text-gray-600">Every decision we make is with students' needs and preferences in mind.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-neon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">We're committed to environmentally responsible practices and packaging.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-poppins font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-primary-purple to-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">AA</span>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-1">Abdul Azeem</h3>
              <p className="text-primary-purple font-medium mb-2">CEO</p>
              <p className="text-gray-600 text-sm">Visionary leader driving Campus Crunch's mission to revolutionize student nutrition and campus dining experiences.</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-primary-purple to-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">PR</span>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-1">Pranav Rao</h3>
              <p className="text-primary-purple font-medium mb-2">CTO</p>
              <p className="text-gray-600 text-sm">Tech innovator building cutting-edge solutions to make healthy snacking accessible and convenient for students.</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-primary-purple to-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">VT</span>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-1">Varsha TM</h3>
              <p className="text-primary-purple font-medium mb-2">Operations Director</p>
              <p className="text-gray-600 text-sm">Operations expert ensuring seamless delivery and supply chain management to keep students well-fed.</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-primary-purple to-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">VB</span>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-1">Vibhav BS</h3>
              <p className="text-primary-purple font-medium mb-2">Head of Nutrition</p>
              <p className="text-gray-600 text-sm">Nutrition specialist ensuring every Campus Crunch product meets the highest health and dietary standards.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-purple to-light-purple rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-poppins font-bold mb-4">
            Join the Campus Crunch Family
          </h2>
          <p className="text-xl mb-6 text-white/90">
            Ready to fuel your academic journey with delicious, nutritious snacks?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-secondary">
              Shop Now
            </Link>
            <Link to="/subscription" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
              View Subscriptions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 