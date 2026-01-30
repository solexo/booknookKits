'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <img src="/logo.webp" alt="BookNook Kits" className="h-10 w-auto" />
                <span className="text-2xl font-bold text-amber-800">BookNook Kits</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/collections" className="text-gray-700 hover:text-amber-600 transition">
                Collections
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-600 transition">
                About
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-amber-600 transition">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-amber-600 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-gray-700 hover:text-amber-600 transition relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-br from-amber-100 to-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shopping Cart
          </h1>
          <p className="text-lg text-gray-600">
            {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              href="/collections"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start gap-6">
                    {/* Product Image */}
                    <Link href={`/products/${item.product.slug}`} className="flex-shrink-0">
                      <div className={`w-24 h-24 bg-gradient-to-br ${item.product.gradient} rounded-lg flex items-center justify-center`}>
                        <span className="text-4xl">{item.product.emoji}</span>
                      </div>
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1">
                      <Link href={`/products/${item.product.slug}`}>
                        <h3 className="font-semibold text-gray-900 hover:text-amber-600 transition">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-500">{item.product.skillLevel} • {item.product.buildTime}</p>
                      <p className="text-lg font-bold text-amber-600 mt-2">
                        ${item.product.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="flex flex-col items-end gap-4">
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-600 transition"
                        title="Remove from cart"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-sm text-amber-600">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}
                  <div className="border-t pt-4 flex justify-between font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition mb-4">
                  Proceed to Checkout
                </button>

                <Link
                  href="/collections"
                  className="block text-center text-gray-600 hover:text-amber-600 transition"
                >
                  Continue Shopping
                </Link>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <span className="text-xl mr-1">🔒</span>
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl mr-1">🚚</span>
                      <span>Free Ship $50+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">📚 BookNook Kits</h3>
              <p className="text-gray-400">
                Craft magic, one nook at a time. Transform your bookshelf into a world of wonder.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/collections" className="hover:text-white transition">All Collections</Link></li>
                <li><Link href="/collections?filter=beginner" className="hover:text-white transition">Beginner Kits</Link></li>
                <li><Link href="/collections?filter=intermediate" className="hover:text-white transition">Intermediate Kits</Link></li>
                <li><Link href="/collections?filter=advanced" className="hover:text-white transition">Advanced Kits</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-white transition">Returns</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition text-2xl">📷</a>
                <a href="#" className="text-gray-400 hover:text-white transition text-2xl">🎵</a>
                <a href="#" className="text-gray-400 hover:text-white transition text-2xl">📌</a>
                <a href="#" className="text-gray-400 hover:text-white transition text-2xl">🐦</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BookNook Kits. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
