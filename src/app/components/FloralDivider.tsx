'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface FloralDividerProps {
  className?: string;
  color?: string;
}

export default function FloralDivider({ className = '', color = '#C9A84C' }: FloralDividerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`flex items-center justify-center gap-3 w-full py-2 ${className}`}
      initial={{ opacity: 0, scaleX: 0.4 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Left line */}
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${color}60, ${color}90)`,
        }}
      />

      {/* Center SVG ornament */}
      <motion.svg
        width="60"
        height="20"
        viewBox="0 0 80 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={shouldReduceMotion ? {} : {
          rotate: [0, 2, -2, 0],
          transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        {/* Left leaf */}
        <ellipse cx="18" cy="12" rx="14" ry="5" fill={color} opacity="0.5"
          style={{ transform: 'rotate(-15deg)', transformOrigin: '18px 12px' }} />
        {/* Right leaf */}
        <ellipse cx="62" cy="12" rx="14" ry="5" fill={color} opacity="0.5"
          style={{ transform: 'rotate(15deg)', transformOrigin: '62px 12px' }} />
        {/* Center diamond */}
        <path d="M40 4 L46 12 L40 20 L34 12 Z" fill={color} opacity="0.85" />
        {/* Tiny dots */}
        <circle cx="28" cy="12" r="2" fill={color} opacity="0.6" />
        <circle cx="52" cy="12" r="2" fill={color} opacity="0.6" />
      </motion.svg>

      {/* Right line */}
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to left, transparent, ${color}60, ${color}90)`,
        }}
      />
    </motion.div>
  );
}
