'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

export default function GiftRegistry() {
  const [copied, setCopied] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const clabe = '012180015489201948';

  const handleCopy = () => {
    navigator.clipboard.writeText(clabe);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="card-luxury relative overflow-hidden h-full">
        <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

        {/* Background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: 0.035 }}>
          <svg width="120" height="120" viewBox="0 0 24 24" fill="var(--gold)">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div className="flex flex-col items-center justify-center text-center py-7 px-4 relative z-10">
          {/* Icon */}
          <motion.div
            className="rounded-full flex items-center justify-center mb-4 mx-auto"
            style={{
              width: '52px', height: '52px',
              background: 'linear-gradient(145deg, var(--champagne), var(--peach-light))',
              border: '1.5px solid var(--border-gold)',
              boxShadow: 'var(--shadow-gold)',
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-deep)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 12v10H4V12"/>
              <path d="M22 7H2v5h20V7z"/>
              <path d="M12 22V7"/>
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
            </svg>
          </motion.div>

          <p className="section-label mb-1.5" style={{ letterSpacing: '0.3em', fontSize: '0.58rem' }}>Gift Registry</p>

          <h3
            className="font-cinzel font-bold my-2"
            style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', color: 'var(--brown-dark)', letterSpacing: '0.1em' }}
          >
            GIFTS
          </h3>

          <p
            className="font-cormorant italic"
            style={{ fontSize: 'clamp(0.88rem, 2.5vw, 1.1rem)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '240px', margin: '0 auto' }}
          >
            &ldquo;Your presence is our greatest gift. Should you wish to honor us with a gift, a monetary contribution would be warmly appreciated.&rdquo;
          </p>

          <button
            id="show-bank-details-btn"
            onClick={() => setShowDetails(!showDetails)}
            className="btn-gold mt-4"
            style={{ fontSize: '0.65rem' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            {showDetails ? 'Hide bank details' : 'View bank details'}
          </button>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden w-full mt-3"
              >
                <div
                  className="text-left text-sm space-y-2 p-3 rounded-xl"
                  style={{
                    background: 'linear-gradient(145deg, var(--ivory-warm), var(--champagne))',
                    border: '1px solid var(--border-gold)',
                  }}
                >
                  <div>
                    <p className="section-label" style={{ fontSize: '0.55rem' }}>Bank:</p>
                    <p className="font-semibold mt-0.5" style={{ color: 'var(--brown-dark)', fontSize: '0.85rem' }}>State Bank of India</p>
                  </div>
                  <div>
                    <p className="section-label" style={{ fontSize: '0.55rem' }}>Account Holder:</p>
                    <p className="font-semibold mt-0.5" style={{ color: 'var(--brown-dark)', fontSize: '0.82rem' }}>Abdulla &amp; Hiba Fathima</p>
                  </div>
                  <div>
                    <p className="section-label" style={{ fontSize: '0.55rem' }}>Account Number / IBAN:</p>
                    <div
                      className="flex items-center justify-between p-2 rounded-lg mt-1"
                      style={{ background: 'var(--ivory-warm)', border: '1px solid var(--border-champagne)' }}
                    >
                      <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--brown-mid)', letterSpacing: '0.03em', wordBreak: 'break-all' }}>
                        {clabe}
                      </span>
                      <button
                        id="copy-clabe-btn"
                        onClick={handleCopy}
                        className="ml-2 flex-shrink-0 p-1.5 rounded-lg transition-all"
                        style={{ color: copied ? '#16a34a' : 'var(--gold-deep)', background: copied ? 'rgba(22,163,74,0.1)' : 'rgba(201,168,76,0.1)' }}
                        title="Copy Account Number"
                      >
                        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
