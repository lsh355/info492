'use client';

import { useState } from 'react';
import { Coffee, MapPin, Clock, MessageCircle, ShoppingCart, Star } from 'lucide-react';
import AIAgent from './components/AIAgent';
import ShoppingCartComponent from './components/ShoppingCart';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

export default function Home() {
  const [showAIAgent, setShowAIAgent] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (coffee: any) => {
    const existingItem = cartItems.find(item => item.id === coffee.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === coffee.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...coffee, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const coffeeMenu = [
    {
      id: 1,
      name: "Seattle Fog",
      description: "Our signature blend with notes of chocolate and caramel",
      price: 4.50,
      category: "Espresso",
      popular: true
    },
    {
      id: 2,
      name: "Pike Place Pour Over",
      description: "Single-origin Ethiopian beans, hand-poured to perfection",
      price: 5.25,
      category: "Pour Over",
      popular: true
    },
    {
      id: 3,
      name: "Space Needle Cold Brew",
      description: "12-hour cold steeped for smooth, rich flavor",
      price: 4.00,
      category: "Cold Brew"
    },
    {
      id: 4,
      name: "Rain City Latte",
      description: "Creamy latte with a hint of vanilla and cinnamon",
      price: 5.50,
      category: "Espresso"
    },
    {
      id: 5,
      name: "Emerald City Mocha",
      description: "Rich chocolate mocha with a touch of mint",
      price: 6.00,
      category: "Espresso"
    },
    {
      id: 6,
      name: "Mount Rainier Macchiato",
      description: "Layered espresso with foamed milk and caramel drizzle",
      price: 5.75,
      category: "Espresso"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-600" />
              <h1 className="text-3xl font-bold text-gray-900">WOOF COFFEE</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowAIAgent(true)}
                className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>AI Assistant</span>
              </button>
              <button 
                onClick={() => setShowCart(true)}
                className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Cart ({cartItems.length})</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Welcome to WOOF COFFEE</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Seattle's premier virtual coffee shop. Experience the perfect blend of technology and tradition 
            with our AI-powered ordering system and locally sourced beans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Order Now
            </button>
            <button 
              onClick={() => setShowAIAgent(true)}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
            >
              Chat with AI Barista
            </button>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Seattle Area Delivery</h3>
              <p className="text-gray-600">We deliver to all Seattle neighborhoods within 30 minutes</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Open 24/7</h3>
              <p className="text-gray-600">Our virtual shop never closes - order anytime!</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Service</h3>
              <p className="text-gray-600">Get personalized recommendations from our AI barista</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Menu */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Coffee Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeMenu.map((coffee) => (
              <div key={coffee.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{coffee.name}</h3>
                  {coffee.popular && (
                    <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{coffee.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">${coffee.price}</span>
                  <button 
                    onClick={() => addToCart(coffee)}
                    className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Modal */}
      <AIAgent isOpen={showAIAgent} onClose={() => setShowAIAgent(false)} />
      
      {/* Shopping Cart Modal */}
      <ShoppingCartComponent 
        isOpen={showCart} 
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="h-6 w-6 text-amber-400" />
                <span className="text-xl font-bold">WOOF COFFEE</span>
              </div>
              <p className="text-gray-400">
                Seattle's premier virtual coffee shop with AI-powered service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Menu</a></li>
                <li><a href="#" className="hover:text-white">Order Online</a></li>
                <li><a href="#" className="hover:text-white">Delivery Areas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">AI Assistant</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 mb-2">Seattle, WA</p>
              <p className="text-gray-400">Open 24/7</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WOOF COFFEE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
