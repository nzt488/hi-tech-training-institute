'use client';

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StickyContact() {
  const whatsappMessage = encodeURIComponent("Hello, I want to know more about Hi-Tech Training Institute courses.");
  const whatsappUrl = `https://wa.me/919876543210?text=${whatsappMessage}`;
  const phoneUrl = "tel:+919876543210";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30 transition-all z-50 relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-medium px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={phoneUrl}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all z-50 relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Phone size={24} className="group-hover:animate-pulse" />
        <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-medium px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Call Us
        </span>
      </motion.a>
    </div>
  );
}
