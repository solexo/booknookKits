'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products, getProductBySlug } from '@/lib/data';
import { useCart } from '@/contexts/CartContext';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart, getCartCount } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/collections" className="text-amber-600 hover:text-amber-700">
            Back to Collections
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

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
              <Link href="/cart" className="text-gray-700 hover:text-amber-600 transition relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-amber-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/collections" className="text-gray-500 hover:text-amber-600">Collections</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className={`bg-gradient-to-br ${product.gradient} rounded-2xl overflow-hidden mb-4`}>
              <div className="aspect-square flex items-center justify-center">
                <span className="text-9xl">{product.emoji}</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`bg-gradient-to-br ${product.gradient} rounded-lg aspect-square flex items-center justify-center transition ${
                    selectedImage === i ? 'ring-2 ring-amber-600' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <span className="text-3xl">{product.emoji}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {product.badge && (
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                product.badge === 'Bestseller' ? 'bg-amber-100 text-amber-800' :
                product.badge === 'New' ? 'bg-green-100 text-green-800' :
                product.badge === 'Sale' ? 'bg-blue-100 text-blue-800' :
                product.badge === 'Premium' ? 'bg-purple-100 text-purple-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {product.badge}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-xl">
                {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="text-gray-600 ml-2">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-amber-600">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through ml-3">${product.originalPrice.toFixed(2)}</span>
                  <span className="ml-3 bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                    Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-500">Skill Level</p>
                <p className="font-semibold text-gray-900">{product.skillLevel}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-500">Build Time</p>
                <p className="font-semibold text-gray-900">{product.buildTime}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-500">Dimensions</p>
                <p className="font-semibold text-gray-900">{product.dimensions}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-500">Availability</p>
                <p className={`font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition"
                >
                  -
                </button>
                <span className="px-4 py-3 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 py-3 px-8 rounded-full font-semibold transition ${
                  product.inStock
                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🚚</span>
                <span>Free shipping $50+</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🔄</span>
                <span>30-day returns</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🔒</span>
                <span>Secure checkout</span>
              </div>
            </div>

            {/* Materials Included */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.materials.map((material, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {material}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">👩</div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Sarah M.</p>
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">
                "Absolutely loved this kit! The instructions were clear and the result is stunning. Already ordered my second one!"
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">👨</div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">James K.</p>
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">
                "Great quality materials and everything was included. The final piece looks amazing on my bookshelf!"
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`} className="group">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
                    <div className={`h-48 bg-gradient-to-br ${relatedProduct.gradient} flex items-center justify-center`}>
                      <span className="text-5xl">{relatedProduct.emoji}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-gray-500">{relatedProduct.skillLevel} • {relatedProduct.buildTime}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-lg font-bold text-amber-600">${relatedProduct.price.toFixed(2)}</span>
                        <div className="flex items-center">
                          <span className="text-yellow-400">
                            {'★'.repeat(Math.floor(relatedProduct.rating))}{'☆'.repeat(5 - Math.floor(relatedProduct.rating))}
                          </span>
                          <span className="text-sm text-gray-500 ml-1">({relatedProduct.reviewCount})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
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
