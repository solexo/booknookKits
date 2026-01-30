'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is a book nook kit?",
      answer: "A book nook kit is a DIY craft kit that contains everything you need to create a miniature scene that fits between books on your shelf. Each kit includes pre-cut wooden pieces, LED lights, paints, glue, and detailed step-by-step instructions."
    },
    {
      question: "How long does it take to assemble a book nook?",
      answer: "Assembly time varies by kit complexity. Beginner kits typically take 1-3 hours, intermediate kits take 3-4 hours, and advanced kits can take 4-6 hours. We recommend setting aside a relaxing afternoon or evening to enjoy the crafting process."
    },
    {
      question: "Do I need any special tools or skills?",
      answer: "No special tools are required! All kits come with everything you need, including glue, brushes, and instructions. Basic craft skills like cutting and gluing are helpful, but our detailed guides make it easy for beginners to succeed."
    },
    {
      question: "What skill levels are available?",
      answer: "We offer three skill levels: Beginner (perfect for first-time crafters), Intermediate (for those with some crafting experience), and Advanced (for experienced crafters looking for a challenge). Each product page clearly indicates the skill level."
    },
    {
      question: "How much does shipping cost?",
      answer: "We offer free shipping on orders over $50. For orders under $50, standard shipping is $5.99 within the continental US. Express shipping options are available at checkout for faster delivery."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days. Express shipping takes 1-2 business days. International shipping times vary by destination. You'll receive a tracking number once your order ships."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of delivery for unopened kits in their original packaging. If you receive a damaged or defective kit, please contact us within 7 days for a replacement or refund. Opened kits cannot be returned unless defective."
    },
    {
      question: "Can I customize my book nook?",
      answer: "Absolutely! While our kits come with everything you need, many crafters love to add their own personal touches. You can use your own paints, add miniature figures, or incorporate additional lighting to make your book nook uniquely yours."
    },
    {
      question: "Are the materials safe?",
      answer: "Yes, all our materials are non-toxic and safe for crafting. We use high-quality wood, water-based paints, and safe adhesives. However, we recommend adult supervision for children under 12."
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes! We offer digital gift cards in various denominations. They make perfect gifts for crafters and book lovers. Gift cards are delivered via email and can be used on any purchase."
    },
    {
      question: "Can I track my order?",
      answer: "Yes! Once your order ships, you'll receive an email with a tracking number. You can use this to track your package's journey from our warehouse to your doorstep."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates are calculated at checkout based on your location. Please note that international orders may be subject to customs fees and import taxes."
    }
  ];

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
              <Link href="/faq" className="text-amber-600 font-semibold">
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our book nook kits
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-amber-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-amber-100 mb-6">
            Can't find the answer you're looking for? Our friendly team is here to help!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
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
