'use client';

import { useState } from 'react';
import { ShoppingCart, Plus, Minus, X, MapPin, Clock } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export default function ShoppingCartComponent({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem 
}: ShoppingCartProps) {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('30 minutes');

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax for Seattle
  const deliveryFee = subtotal > 20 ? 0 : 2.99; // Free delivery over $20
  const total = subtotal + tax + deliveryFee;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty! Add some coffee to get started.');
      return;
    }
    
    if (!deliveryAddress.trim()) {
      alert('Please enter your delivery address.');
      return;
    }

    // Simulate checkout process
    alert(`Order placed! Total: $${total.toFixed(2)}\nDelivery to: ${deliveryAddress}\nEstimated delivery: ${deliveryTime}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-amber-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Your Order</h3>
            <span className="bg-white text-amber-600 px-2 py-1 rounded-full text-sm font-semibold">
              {cartItems.length} items
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">Your cart is empty</h3>
              <p className="text-gray-400">Add some delicious coffee to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.category}</p>
                    <p className="text-lg font-bold text-amber-600">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Delivery Info */}
        {cartItems.length > 0 && (
          <div className="p-4 bg-gray-50 border-t">
            <h4 className="font-semibold mb-3 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-amber-600" />
              Delivery Information
            </h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address
                </label>
                <input
                  type="text"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="Enter your Seattle address..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-amber-600" />
                <span>Estimated delivery: {deliveryTime}</span>
              </div>
            </div>
          </div>
        )}

        {/* Order Summary */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t bg-white">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span className={deliveryFee === 0 ? 'text-green-600' : ''}>
                  {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              {deliveryFee > 0 && (
                <p className="text-xs text-gray-500">
                  Add ${(20 - subtotal).toFixed(2)} more for free delivery!
                </p>
              )}
              <div className="border-t pt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleCheckout}
              className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
