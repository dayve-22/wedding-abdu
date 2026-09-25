'use client';

import { motion } from 'framer-motion';

/**
 * AnimatedFloralFrame
 *
 * Sized responsively to frame the screen elegantly across all devices:
 * - Mobile (<640px): Dainty, compact scale so flowers frame the corners without overlapping any invitation text.
 * - Tablet & Desktop (>=640px): Rich, lush scale for a grand luxury feel.
 *
 * Each image has its apex baked directly at the designated corner (nw, ne, sw, se).
 */
export default function AnimatedFloralFrame() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      style={{ background: 'transparent' }}
    >

      {/* ── TOP-LEFT: Main feature bouquet ───────────────────── */}
      <motion.div
        className="absolute top-0 left-0 w-[145px] h-[145px] xs:w-[160px] xs:h-[160px] sm:w-[200px] sm:h-[200px] md:w-[290px] md:h-[290px] lg:w-[390px] lg:h-[390px]"
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ rotate: [0, 1.2, -0.8, 0], y: [0, -3, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/corner_tl.png?v=4"
            alt=""
            className="w-full h-full object-contain object-top-left drop-shadow-sm select-none"
          />
        </motion.div>
      </motion.div>

      {/* ── TOP-RIGHT: Dedicated top-right bouquet ────────────── */}
      <motion.div
        className="absolute top-0 right-0 w-[125px] h-[125px] xs:w-[140px] xs:h-[140px] sm:w-[175px] sm:h-[175px] md:w-[255px] md:h-[255px] lg:w-[340px] lg:h-[340px]"
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ rotate: [0, -1.2, 0.8, 0], y: [0, -4, 2, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/corner_tr.png?v=4"
            alt=""
            className="w-full h-full object-contain object-top-right drop-shadow-sm select-none"
          />
        </motion.div>
      </motion.div>

      {/* ── BOTTOM-LEFT: Dainty accent bouquet ────────────────── */}
      <motion.div
        className="absolute bottom-0 left-0 w-[105px] h-[105px] xs:w-[120px] xs:h-[120px] sm:w-[145px] sm:h-[145px] md:w-[200px] md:h-[200px] lg:w-[265px] lg:h-[265px]"
        initial={{ opacity: 0, x: -40, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ rotate: [0, 1, -1, 0], y: [0, 2, -2, 0] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/corner_bl.png?v=4"
            alt=""
            className="w-full h-full object-contain object-bottom-left drop-shadow-sm select-none"
          />
        </motion.div>
      </motion.div>

      {/* ── BOTTOM-RIGHT: Dainty accent bouquet ───────────────── */}
      <motion.div
        className="absolute bottom-0 right-0 w-[100px] h-[100px] xs:w-[115px] xs:h-[115px] sm:w-[135px] sm:h-[135px] md:w-[190px] md:h-[190px] lg:w-[245px] lg:h-[245px]"
        initial={{ opacity: 0, x: 40, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ rotate: [0, -1, 1, 0], y: [0, 3, -2, 0] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/corner_br.png?v=4"
            alt=""
            className="w-full h-full object-contain object-bottom-right drop-shadow-sm select-none"
          />
        </motion.div>
      </motion.div>

    </div>
  );
}
