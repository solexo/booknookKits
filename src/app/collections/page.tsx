'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products, collections, getProductsByCategory, getProductsBySkillLevel } from '@/lib/data';

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSkillLevel = selectedSkillLevel === 'all' || product.skillLevel === selectedSkillLevel;
    const matchesPrice = 
      priceRange === 'all' ||
      (priceRange === 'under-50' && product.price < 50) ||
      (priceRange === '50-60' && product.price >= 50 && product.price < 60) ||
      (priceRange === '60-70' && product.price >= 60 && product.price < 70) ||
      (priceRange === '70-plus' && product.price >= 70);
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSkillLevel && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <img src="/logo.webp" alt="BookNook Kits" className="h-10 w-auto" />
                <span className="text-lg md:text-2xl font-bold text-amber-800">BookNook Kits</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/collections" className="text-amber-600 font-semibold">
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
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-br from-amber-100 to-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All Collections
          </h1>
          <p className="text-lg text-gray-600">
            Explore our complete range of DIY book nook kits
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Filters</h2>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="all">All Categories</option>
                  <option value="fantasy">Fantasy World</option>
                  <option value="nature">Nature Scenes</option>
                  <option value="urban">Urban Life</option>
                </select>
              </div>

              {/* Skill Level Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Skill Level</label>
                <select
                  value={selectedSkillLevel}
                  onChange={(e) => setSelectedSkillLevel(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="all">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="all">All Prices</option>
                  <option value="under-50">Under $50</option>
                  <option value="50-60">$50 - $60</option>
                  <option value="60-70">$60 - $70</option>
                  <option value="70-plus">$70+</option>
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSkillLevel('all');
                  setPriceRange('all');
                  setSearchQuery('');
                }}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
              </p>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/products/${product.slug}`} className="group">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
                      <div className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                        <span className="text-5xl">{product.emoji}</span>
                      </div>
                      <div className="p-4">
                        {product.badge && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            product.badge === 'Bestseller' ? 'bg-amber-100 text-amber-800' :
                            product.badge === 'New' ? 'bg-green-100 text-green-800' :
                            product.badge === 'Sale' ? 'bg-blue-100 text-blue-800' :
                            product.badge === 'Premium' ? 'bg-purple-100 text-purple-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {product.badge}
                          </span>
                        )}
                        <h3 className="font-semibold text-gray-900 mt-2 group-hover:text-amber-600 transition">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500">{product.skillLevel} • {product.buildTime}</p>
                        <div className="flex items-center justify-between mt-3">
                          <div>
                            <span className="text-lg font-bold text-amber-600">${product.price.toFixed(2)}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-400 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                            )}
                          </div>
                          <div className="flex items-center">
                            <span className="text-yellow-400">
                              {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
                            </span>
                            <span className="text-sm text-gray-500 ml-1">({product.reviewCount})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSkillLevel('all');
                    setPriceRange('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 text-amber-600 hover:text-amber-700 font-semibold"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
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
