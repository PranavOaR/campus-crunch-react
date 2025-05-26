import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { ToastProvider } from './contexts/ToastContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Combos from './pages/Combos';
import OnTheGo from './pages/OnTheGo';
import Checkout from './pages/Checkout';
import Delivery from './pages/Delivery';
import AboutUs from './pages/AboutUs';
import Subscription from './pages/Subscription';

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/combos" element={<Combos />} />
                <Route path="/on-the-go" element={<OnTheGo />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/subscription" element={<Subscription />} />
              </Routes>
            </main>
            <Footer />
            <Toast />
          </div>
        </Router>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
