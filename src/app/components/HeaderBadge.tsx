'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import FloralDecorations from './FloralDecorations';

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'backOut' } },
};

export default function HeaderBadge() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center relative pt-12 pb-8 sm:pt-8 sm:pb-12 md:py-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >

      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(242,160,123,0.12) 0%, transparent 70%)' }}
      />

      {/* Ambient background glow & soft aura */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.12) 0%, rgba(242,160,123,0.06) 45%, transparent 75%)' }}
      />

      {/* Location & date badge */}
      <motion.div
        variants={itemVariants}
        className="scalloped-badge px-5 py-3 text-center mb-7 md:mb-10 relative z-10"
        style={{ minWidth: '200px' }}
      >
        <p
          className="font-cormorant font-semibold"
          style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', color: 'var(--brown-mid)', letterSpacing: '0.06em' }}
        >
          Pookolathur Mahallu Auditorium
        </p>
        <div className="my-1.5 gold-divider max-w-[90px] mx-auto" />
        <p
          className="font-montserrat font-bold"
          style={{ fontSize: 'clamp(0.65rem, 1.8vw, 0.75rem)', letterSpacing: '0.22em', color: 'var(--gold-deep)' }}
        >
          27 · 09 · 2026
        </p>
      </motion.div>

      {/* Host Invitation text */}
      <motion.div variants={itemVariants} className="max-w-xl mx-auto px-4 mb-6 relative z-10 space-y-1">
        <p
          className="font-cormorant font-semibold text-lg sm:text-xl tracking-wide"
          style={{ color: 'var(--brown-dark)' }}
        >
          Late Mr. Ahammed &amp; Mrs. Fathima
        </p>
        <p
          className="section-label"
          style={{ fontSize: '0.62rem', opacity: 0.85, letterSpacing: '0.15em' }}
        >
          Pulikkottil (H), Thottekkad
        </p>
        <p
          className="font-cormorant italic text-base sm:text-lg pt-1.5"
          style={{ color: 'var(--text-secondary)' }}
        >
          Cordially invite your esteemed presence to the wedding ceremony of their son
        </p>
      </motion.div>

      {/* Couple Names */}
      <div className="relative z-10 px-2">
        <motion.h1
          variants={scaleVariants}
          className="font-script leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(2.9rem, 10.5vw, 8.2rem)',
            color: 'var(--brown-dark)',
            textShadow: '0 4px 30px rgba(201, 168, 76, 0.2)',
            lineHeight: 1.05,
          }}
        >
          Abdulla
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 my-2"
        >
          <div className="flex-1 h-px max-w-[60px]" style={{ background: 'linear-gradient(to right, transparent, var(--gold))' }} />
          <span
            className="font-cormorant italic font-light"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3.2rem)', color: 'var(--gold)', lineHeight: 1 }}
          >
            with
          </span>
          <div className="flex-1 h-px max-w-[60px]" style={{ background: 'linear-gradient(to left, transparent, var(--gold))' }} />
        </motion.div>

        <motion.h1
          variants={scaleVariants}
          className="font-script leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(2.8rem, 10vw, 7.8rem)',
            color: 'var(--brown-dark)',
            textShadow: '0 4px 30px rgba(201, 168, 76, 0.2)',
            lineHeight: 1.05,
          }}
        >
          Hiba Fathima
        </motion.h1>

        {/* Bride's family info */}
        <motion.div variants={itemVariants} className="mt-3">
          <p className="font-cormorant italic text-sm sm:text-base" style={{ color: 'var(--brown-mid)' }}>
            D/o Mr. Rasheed KP &amp; Mrs. Sajana M
          </p>
          <p className="section-label mt-0.5" style={{ fontSize: '0.62rem', opacity: 0.8, letterSpacing: '0.12em' }}>
            Kodukaparamban (H), Koomankulam
          </p>
        </motion.div>
      </div>

      {/* Gold underline */}
      <motion.div
        className="mt-6 mx-auto"
        style={{ height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold-light), var(--gold), var(--gold-light), transparent)' }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '55%', opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0, ease: 'easeOut' }}
      />

      {/* Date subtitle */}
      <motion.div variants={itemVariants} className="mt-5 text-center relative z-10 px-4">
        <p
          className="font-cormorant italic font-semibold"
          style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.8rem)', color: 'var(--brown-dark)', letterSpacing: '0.06em' }}
        >
          Sunday, September 27th, 2026
        </p>
        <p
          className="mt-1 font-montserrat font-bold"
          style={{ fontSize: '0.72rem', color: 'var(--gold-deep)', letterSpacing: '0.18em' }}
        >
          11:30 AM ONWARDS
        </p>
        <p
          className="mt-1 section-label"
          style={{ fontSize: '0.65rem', color: 'var(--brown-mid)', letterSpacing: '0.12em' }}
        >
          Pookolathur Mahallu Auditorium · Pulpatta
        </p>
        <p
          className="mt-1 text-xs sm:text-sm text-[#9C7A3C] font-semibold"
        >
          പൂക്കൊളത്തൂർ മഹല്ല് ഓഡിറ്റോറിയം
        </p>
      </motion.div>

      {/* Diamond row */}
      <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mt-5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            style={{
              width: i === 1 ? 8 : 5,
              height: i === 1 ? 8 : 5,
              background: 'var(--gold)',
              borderRadius: '1px',
              opacity: i === 1 ? 0.85 : 0.5,
              transform: 'rotate(45deg)',
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
