/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-purple': '#5e2a9d',
        'accent-neon-yellow': '#ffff00',
        'light-purple': '#7e3eb1',
        'dark-text': '#333',
        'bg-white': '#fff',
        'text-gray': '#666',
        'border-light': '#e5e5e5',
        'primary': {
          400: '#8b5cf6',
          600: '#5e2a9d',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #5e2a9d, #7e3eb1)',
        'gradient-yellow': 'linear-gradient(135deg, #ffff00, #ffd700)',
        'gradient-bg': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        'gradient-hero': 'linear-gradient(135deg, #f8f9fc 0%, #e6e9f0 100%)',
      },
      boxShadow: {
        'purple': '0 4px 20px rgba(94, 42, 157, 0.3)',
        'dark': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'card': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'fadeInDown': 'fadeInDown 0.8s ease-out',
        'slideInLeft': 'slideInLeft 0.8s ease-out',
        'slideInRight': 'slideInRight 0.8s ease-out',
        'bounce-custom': 'bounce 2s infinite',
        'pulse-custom': 'pulse 2s infinite',
        'shimmer': 'shimmer 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'cartPop': 'cartPop 0.5s ease-out',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          'from': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        shimmer: {
          '0%': {
            'background-position': '-200px 0',
          },
          '100%': {
            'background-position': 'calc(200px + 100%) 0',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        cartPop: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.3)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
    },
  },
  plugins: [],
} 