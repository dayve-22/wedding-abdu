'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X, Sparkles, MessageCircle } from 'lucide-react';

export default function DeveloperCreditWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Info Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] h-10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-lg border border-[#C9A84C]/40 text-[#9C7A3C] hover:text-[#3D2817] hover:bg-white transition-all duration-300 cursor-pointer group ${
          isScrolled ? 'w-10 px-0 gap-0' : 'px-4 gap-2'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="About this website"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span
          className={`font-montserrat text-[0.65rem] font-bold tracking-wider uppercase overflow-hidden whitespace-nowrap transition-all duration-300 hidden sm:block ${
            isScrolled ? 'max-w-0 opacity-0' : 'max-w-[120px] opacity-90'
          }`}
        >
          Want your own?
        </span>
        <span
          className={`font-montserrat text-[0.65rem] font-bold tracking-wider uppercase overflow-hidden whitespace-nowrap transition-all duration-300 sm:hidden ${
            isScrolled ? 'max-w-0 opacity-0' : 'max-w-[100px] opacity-90'
          }`}
        >
          Create Yours
        </span>
        <Info className="w-4 h-4 shrink-0" />
      </motion.button>

      {/* Luxury Developer Inquiry Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#2A1B12]/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-md p-6 sm:p-7 rounded-3xl text-center shadow-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #FAF6EF 0%, #FDF8F0 50%, #F5E6C8 100%)',
                border: '1.5px solid rgba(201, 168, 76, 0.5)',
                boxShadow: '0 25px 60px rgba(45, 28, 18, 0.25), 0 0 30px rgba(201, 168, 76, 0.2)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-[#7A624E] hover:text-[#3D2817] hover:bg-[#C9A84C]/15 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Decorative Header */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#C9A84C]" />
                <span className="font-montserrat text-[0.65rem] tracking-[0.22em] uppercase text-[#9C7A3C] font-semibold">
                  Custom Web Development
                </span>
                <Sparkles className="w-4 h-4 text-[#C9A84C]" />
              </div>

              <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#3D2817] leading-tight mb-2">
                Craft Your Dream Invitation
              </h3>
              <p className="font-montserrat text-xs text-[#7A5C42] leading-relaxed mb-6 max-w-sm mx-auto">
                Looking for a bespoke, animated wedding invitation or premium event website? Reach out directly to our developers:
              </p>

              {/* Developers Contact Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                <a
                  href="https://wa.me/918590190369?text=Hi!%20I%20saw%20the%20beautiful%20wedding%20invitation%20website%20and%20would%20love%20to%20get%20a%20custom%20invitation%20site%20built%20for%20myself."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-montserrat font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href="https://www.instagram.com/daybuildemup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-montserrat font-bold text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
                  style={{
                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>@daybuildemup</span>
                </a>
              </div>

              {/* Note */}
              <p className="text-[0.65rem] font-montserrat text-[#7A624E]/70">
                Custom themes, live countdowns, music players &amp; interactive RSVP systems.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
