'use client';

import { motion } from 'framer-motion';

export default function DressCodeSection() {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="card-luxury relative overflow-hidden h-full">
        <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

        {/* Background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: 0.04 }}>
          <svg width="120" height="120" viewBox="0 0 80 80" fill="none">
            <ellipse cx="40" cy="20" rx="10" ry="18" fill="var(--gold)" />
            <ellipse cx="40" cy="60" rx="10" ry="18" fill="var(--gold)" />
            <ellipse cx="20" cy="40" rx="18" ry="10" fill="var(--gold)" />
            <ellipse cx="60" cy="40" rx="18" ry="10" fill="var(--gold)" />
            <circle cx="40" cy="40" r="9" fill="var(--gold)" />
          </svg>
        </div>

        <div className="flex flex-col items-center justify-center text-center py-7 px-4 relative z-10">
          {/* Icon */}
          <motion.div
            className="w-13 h-13 rounded-full flex items-center justify-center mb-4 mx-auto"
            style={{
              width: '52px', height: '52px',
              background: 'linear-gradient(145deg, var(--champagne), var(--peach-light))',
              border: '1.5px solid var(--border-gold)',
              boxShadow: 'var(--shadow-gold)',
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-deep)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 3L6 6l-3 3 3 12h12l3-12-3-3-3-3"/>
              <path d="M9 3c0 2.5 6 2.5 6 0"/>
              <path d="M12 6v8"/>
            </svg>
          </motion.div>

          <p className="section-label mb-1.5" style={{ letterSpacing: '0.3em', fontSize: '0.58rem' }}>Dress Code</p>

          <h3
            className="font-cinzel font-bold my-2"
            style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', color: 'var(--brown-dark)', letterSpacing: '0.1em' }}
          >
            FORMAL ATTIRE
          </h3>

          <p
            className="font-cormorant italic"
            style={{ fontSize: 'clamp(1rem, 3vw, 1.35rem)', color: 'var(--gold-deep)', fontWeight: 600 }}
          >
            Evening Wear
          </p>

          <div className="my-3 w-14 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

          <p
            className="font-cormorant"
            style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}
          >
            Gentlemen in elegant suits,<br />ladies in long gowns
          </p>

          {/* Palette */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {['#3D2B1F', '#C9A84C', '#F2A07B', '#FAF6EF', '#9C7A3C'].map((c) => (
              <div
                key={c}
                className="rounded-full"
                style={{ width: 12, height: 12, background: c, border: '1.5px solid rgba(61,43,31,0.2)', boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
              />
            ))}
          </div>
          <p className="mt-1.5 section-label" style={{ fontSize: '0.55rem', letterSpacing: '0.22em', opacity: 0.7 }}>Color Palette</p>
        </div>
      </div>
    </motion.div>
  );
}
