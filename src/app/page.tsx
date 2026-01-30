import Link from "next/link";

export default function Home() {
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
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src="/logo.webp" alt="BookNook Kits" className="w-[1000px] h-[1000px] max-w-full mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Create Magical Book Nooks
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Start Crafting Today!
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your bookshelf into a world of wonder with our handcrafted DIY book nook kits. 
              Perfect for hobbyists and crafters, each kit includes everything you need to create magical miniature scenes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/collections" 
                className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition shadow-lg"
              >
                Shop Collections
              </Link>
              <Link 
                href="/about" 
                className="bg-white text-amber-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg border-2 border-amber-600"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-yellow-300 text-xl">★★★★★</span>
                <span className="text-white font-semibold ml-2">4.8 Rating</span>
              </div>
              <span className="text-white/80">|</span>
              <span className="text-white font-semibold">10,000+ Happy Customers</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">New Year Sale</h2>
                <p className="text-3xl md:text-4xl font-extrabold text-yellow-300">UP TO 60% OFF</p>
              </div>
              <p className="text-white/90 max-w-md">
                The biggest savings of the year are live, enjoy them while they last.
              </p>
              <Link
                href="/collections"
                className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 hover:text-red-700 transition shadow-lg whitespace-nowrap"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            See How It Works
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Watch our video to see how easy it is to create your own magical book nook
          </p>
          <div className="max-w-4xl mx-auto">
            <video 
              className="w-full rounded-2xl shadow-2xl"
              controls
              autoPlay
              loop
              muted
              playsInline
              poster="/home.webp"
            >
              <source 
                src="https://video.aliexpress-media.com/play/u/ae_sg_item/2215834394668/p/1/e/6/t/10301/5000278254653.mp4?from=chrome&definition=h265" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">⭐</div>
              <p className="font-semibold text-gray-900">10,000+ Happy Creators</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🚚</div>
              <p className="font-semibold text-gray-900">Free Shipping $50+</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🔒</div>
              <p className="font-semibold text-gray-900">Secure Checkout</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">💬</div>
              <p className="font-semibold text-gray-900">24/7 Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fantasy Collection */}
            <Link href="/collections/fantasy" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <span className="text-6xl">🏰</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                    Fantasy World
                  </h3>
                  <p className="text-gray-600">Magical castles, enchanted forests, and mystical creatures</p>
                  <p className="text-amber-600 font-semibold mt-4">12 Kits →</p>
                </div>
              </div>
            </Link>

            {/* Nature Collection */}
            <Link href="/collections/nature" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
                  <span className="text-6xl">🌲</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                    Nature Scenes
                  </h3>
                  <p className="text-gray-600">Peaceful forests, mountain cabins, and garden retreats</p>
                  <p className="text-amber-600 font-semibold mt-4">15 Kits →</p>
                </div>
              </div>
            </Link>

            {/* Urban Collection */}
            <Link href="/collections/urban" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
                  <span className="text-6xl">🏙️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                    Urban Life
                  </h3>
                  <p className="text-gray-600">City streets, cozy cafes, and modern apartments</p>
                  <p className="text-amber-600 font-semibold mt-4">10 Kits →</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Bestselling Kits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <Link href="/products/enchanted-castle" className="group">
              <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center">
                  <span className="text-5xl">🏰</span>
                </div>
                <div className="p-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Bestseller</span>
                  <h3 className="font-semibold text-gray-900 mt-2 group-hover:text-amber-600 transition">
                    Enchanted Castle
                  </h3>
                  <p className="text-sm text-gray-500">Beginner • 2-3 hours</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-bold text-amber-600">$49.99</span>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="text-sm text-gray-500 ml-1">(128)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <Link href="/products/cozy-cabin" className="group">
              <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-green-300 to-teal-300 flex items-center justify-center">
                  <span className="text-5xl">🏠</span>
                </div>
                <div className="p-4">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">New</span>
                  <h3 className="font-semibold text-gray-900 mt-2 group-hover:text-amber-600 transition">
                    Cozy Forest Cabin
                  </h3>
                  <p className="text-sm text-gray-500">Intermediate • 3-4 hours</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-bold text-amber-600">$59.99</span>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="text-sm text-gray-500 ml-1">(87)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product 3 */}
            <Link href="/products/magical-library" className="group">
              <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-amber-300 to-orange-300 flex items-center justify-center">
                  <span className="text-5xl">📚</span>
                </div>
                <div className="p-4">
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Popular</span>
                  <h3 className="font-semibold text-gray-900 mt-2 group-hover:text-amber-600 transition">
                    Magical Library
                  </h3>
                  <p className="text-sm text-gray-500">Beginner • 2 hours</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-bold text-amber-600">$44.99</span>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★★★★☆</span>
                      <span className="text-sm text-gray-500 ml-1">(203)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product 4 */}
            <Link href="/products/vintage-cafe" className="group">
              <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-rose-300 to-red-300 flex items-center justify-center">
                  <span className="text-5xl">☕</span>
                </div>
                <div className="p-4">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Sale</span>
                  <h3 className="font-semibold text-gray-900 mt-2 group-hover:text-amber-600 transition">
                    Vintage Cafe
                  </h3>
                  <p className="text-sm text-gray-500">Advanced • 4-5 hours</p>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <span className="text-lg font-bold text-amber-600">$54.99</span>
                      <span className="text-sm text-gray-400 line-through ml-2">$69.99</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="text-sm text-gray-500 ml-1">(64)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/collections" 
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Creators Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-2xl">👩</div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Sarah M.</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Absolutely loved my Enchanted Castle kit! The instructions were clear and the result is stunning. Already ordered my second one!"
              </p>
              <div className="text-yellow-400 mt-4">★★★★★</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-2xl">👨</div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">James K.</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Great quality materials and everything was included. The Cozy Cabin looks amazing on my bookshelf. Highly recommend!"
              </p>
              <div className="text-yellow-400 mt-4">★★★★★</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-2xl">👩</div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Emily R.</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Perfect weekend project! The Magical Library was so fun to build. My friends are all asking where I got it."
              </p>
              <div className="text-yellow-400 mt-4">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="text-amber-100 mb-8">
            Subscribe to our newsletter for exclusive deals, new product announcements, and crafting tips!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
