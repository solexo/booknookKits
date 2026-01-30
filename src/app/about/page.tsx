import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <img src="/logo.webp" alt="BookNook Kits" className="h-8 w-auto md:h-10" />
                <span className="text-lg md:text-2xl font-bold text-amber-800">BookNook Kits</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/collections" className="text-gray-700 hover:text-amber-600 transition">
                Collections
              </Link>
              <Link href="/about" className="text-amber-600 font-semibold">
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
      <div className="bg-gradient-to-br from-amber-100 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Craft magic, one nook at a time.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It All Began</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              BookNook Kits was born from a simple idea: everyone deserves to experience the joy of creating something magical with their own hands. What started as a passion project in a small garage has grown into a community of over 10,000 creators worldwide.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our founder, an avid book lover and craft enthusiast, wanted to bring the magic of miniature worlds to bookshelves everywhere. After months of prototyping and testing, the first BookNook Kit was born – and the response was overwhelming.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At BookNook Kits, we believe that creativity should be accessible to everyone. Our mission is to provide high-quality, easy-to-assemble craft kits that bring joy, relaxation, and a sense of accomplishment to crafters of all skill levels.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What Makes Us Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Materials</h3>
                <p className="text-gray-600 text-sm">Premium wooden pieces, LED lights, and detailed instructions in every kit.</p>
              </div>
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="font-semibold text-gray-900 mb-2">Clear Instructions</h3>
                <p className="text-gray-600 text-sm">Step-by-step guides with photos make assembly easy for beginners.</p>
              </div>
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-semibold text-gray-900 mb-2">Community Support</h3>
                <p className="text-gray-600 text-sm">Join our community of creators for tips, inspiration, and support.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Values</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-600 mr-3">✓</span>
                <span><strong>Creativity:</strong> We believe everyone has a creative spark waiting to be ignited.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3">✓</span>
                <span><strong>Quality:</strong> We never compromise on the quality of our materials or instructions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3">✓</span>
                <span><strong>Community:</strong> We're building a supportive community of crafters and creators.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3">✓</span>
                <span><strong>Sustainability:</strong> We're committed to eco-friendly packaging and sustainable sourcing.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Join Our Journey</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you're a seasoned crafter or just starting out, we invite you to join our community. Explore our collections, share your creations, and discover the magic of book nooks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                href="/collections" 
                className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition text-center"
              >
                Start Creating Today
              </Link>
              <Link 
                href="/contact" 
                className="bg-white text-amber-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition border-2 border-amber-600 text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

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
