'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface FloralDecorationsProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'both-top' | 'all';
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
}

const FlowerA = ({ color = '#C9A84C', size = 60 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`flGrad_${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FAF6EF" />
        <stop offset="50%" stopColor="#F2A07B" />
        <stop offset="100%" stopColor={color} />
      </linearGradient>
    </defs>
    <ellipse cx="45" cy="22" rx="12" ry="20" fill={`url(#flGrad_${size})`} opacity="0.85" />
    <ellipse cx="45" cy="68" rx="12" ry="20" fill={`url(#flGrad_${size})`} opacity="0.85" />
    <ellipse cx="22" cy="45" rx="20" ry="12" fill={`url(#flGrad_${size})`} opacity="0.85" />
    <ellipse cx="68" cy="45" rx="20" ry="12" fill={`url(#flGrad_${size})`} opacity="0.85" />

    <ellipse cx="29" cy="29" rx="11" ry="18" fill="#FADADD" opacity="0.75" style={{ transformOrigin: '29px 29px', transform: 'rotate(45deg)' }} />
    <ellipse cx="61" cy="29" rx="11" ry="18" fill="#FADADD" opacity="0.75" style={{ transformOrigin: '61px 29px', transform: 'rotate(-45deg)' }} />
    <ellipse cx="29" cy="61" rx="11" ry="18" fill="#FADADD" opacity="0.75" style={{ transformOrigin: '29px 61px', transform: 'rotate(-45deg)' }} />
    <ellipse cx="61" cy="61" rx="11" ry="18" fill="#FADADD" opacity="0.75" style={{ transformOrigin: '61px 61px', transform: 'rotate(45deg)' }} />

    <circle cx="45" cy="45" r="10" fill="#DFC06A" />
    <circle cx="45" cy="45" r="5" fill="#9C7A3C" />
  </svg>
);

const LeafSprig = ({ color = '#C9A84C', size = 50 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 75 C30 75 30 40 30 5" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    <ellipse cx="22" cy="55" rx="13" ry="8" fill={color} opacity="0.65"
      style={{ transform: 'rotate(-25deg)', transformOrigin: '22px 55px' }} />
    <ellipse cx="38" cy="45" rx="13" ry="8" fill={color} opacity="0.65"
      style={{ transform: 'rotate(25deg)', transformOrigin: '38px 45px' }} />
    <ellipse cx="22" cy="32" rx="11" ry="7" fill={color} opacity="0.6"
      style={{ transform: 'rotate(-30deg)', transformOrigin: '22px 32px' }} />
    <ellipse cx="38" cy="22" rx="11" ry="7" fill={color} opacity="0.6"
      style={{ transform: 'rotate(30deg)', transformOrigin: '38px 22px' }} />
    <circle cx="30" cy="6" r="5" fill="#DFC06A" opacity="0.8" />
    <circle cx="28" cy="4" r="2.5" fill="#FAF6EF" opacity="0.9" />
  </svg>
);

const RoseBud = ({ color = '#F2A07B', size = 45 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="22" rx="14" ry="10" fill={color} opacity="0.8" />
    <ellipse cx="30" cy="28" rx="16" ry="12" fill="#FADADD" opacity="0.7" />
    <ellipse cx="30" cy="35" rx="18" ry="14" fill="#FDE8DA" opacity="0.6" />
    <ellipse cx="30" cy="20" rx="8" ry="6" fill="#DFC06A" opacity="0.85" />
    <ellipse cx="30" cy="17" rx="5" ry="4" fill="#9C7A3C" opacity="0.95" />
    <path d="M30 46 C20 46 14 55 14 60" stroke="#9C7A3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <ellipse cx="20" cy="52" rx="7" ry="4" fill="#C9A84C" opacity="0.5"
      style={{ transform: 'rotate(-30deg)', transformOrigin: '20px 52px' }} />
  </svg>
);

const anim1 = {
  y: [0, -14, -6, -14, 0] as number[],
  rotate: [0, 4, -2, 3, 0] as number[],
  transition: {
    duration: 9,
    ease: 'easeInOut' as const,
    repeat: Infinity,
    repeatType: 'loop' as const,
  },
};

const anim2 = {
  y: [0, -10, -18, -8, 0] as number[],
  rotate: [0, -3, 2, -4, 0] as number[],
  transition: {
    duration: 11,
    ease: 'easeInOut' as const,
    repeat: Infinity,
    repeatType: 'loop' as const,
    delay: 1.5,
  },
};

const anim3 = {
  y: [0, -8, -16, -5, 0] as number[],
  rotate: [0, 5, -1, 3, 0] as number[],
  transition: {
    duration: 13,
    ease: 'easeInOut' as const,
    repeat: Infinity,
    repeatType: 'loop' as const,
    delay: 3,
  },
};

export default function FloralDecorations({ position, size = 'md', opacity = 0.7 }: FloralDecorationsProps) {
  const shouldReduceMotion = useReducedMotion();

  // Responsive size scale — smaller on mobile
  const sizeMap = { sm: 0.45, md: 0.7, lg: 0.9 };
  const scale = sizeMap[size];

  const flowerSize = Math.round(60 * scale);
  const leafSize   = Math.round(50 * scale);
  const roseSize   = Math.round(45 * scale);

  const showTopLeft     = ['top-left', 'both-top', 'all'].includes(position);
  const showTopRight    = ['top-right', 'both-top', 'all'].includes(position);
  const showBottomLeft  = ['bottom-left', 'all'].includes(position);
  const showBottomRight = ['bottom-right', 'all'].includes(position);

  const a1 = shouldReduceMotion ? undefined : anim1;
  const a2 = shouldReduceMotion ? undefined : anim2;
  const a3 = shouldReduceMotion ? undefined : anim3;

  return (
    <>
      {showTopLeft && (
        <>
          <motion.div
            className="absolute pointer-events-none select-none"
            style={{ top: '-8px', left: '-4px', opacity, zIndex: 0 }}
            animate={a1}
          >
            <FlowerA color="#C9A84C" size={flowerSize} />
          </motion.div>
          <motion.div
            className="absolute pointer-events-none select-none"
            style={{ top: '24px', left: '2px', opacity: opacity * 0.75, zIndex: 0 }}
            animate={a2}
          >
            <LeafSprig color="#C9A84C" size={leafSize} />
          </motion.div>
        </>
      )}

      {showTopRight && (
        <>
          <motion.div
            className="absolute pointer-events-none select-none"
            style={{ top: '-8px', right: '-4px', opacity, zIndex: 0, transform: 'scaleX(-1)' }}
            animate={a2}
          >
            <FlowerA color="#DFC06A" size={flowerSize} />
          </motion.div>
          <motion.div
            className="absolute pointer-events-none select-none"
            style={{ top: '30px', right: '2px', opacity: opacity * 0.7, zIndex: 0, transform: 'scaleX(-1)' }}
            animate={a3}
          >
            <RoseBud color="#F2A07B" size={roseSize} />
          </motion.div>
        </>
      )}

      {showBottomLeft && (
        <>
          <motion.div
            className="absolute pointer-events-none select-none"
            style={{ bottom: '-8px', left: '-4px', opacity: opacity * 0.8, zIndex: 0 }}
            animate={a3}
          >
            <RoseBud color="#F2A07B" size={roseSize} />
          </motion.div>
          <motion.div
            className="absolute pointer-events-none select-none"
            style={{ bottom: '16px', left: '2px', opacity: opacity * 0.6, zIndex: 0 }}
            animate={a1}
          >
            <LeafSprig color="#C9A84C" size={Math.round(leafSize * 0.8)} />
          </motion.div>
        </>
      )}

      {showBottomRight && (
        <>
          <motion.div
            className="absolute pointer-events-none select-none"
            style={{ bottom: '-8px', right: '-4px', opacity: opacity * 0.8, zIndex: 0, transform: 'scaleX(-1)' }}
            animate={a1}
          >
            <FlowerA color="#DFC06A" size={Math.round(flowerSize * 0.85)} />
          </motion.div>
          <motion.div
            className="absolute pointer-events-none select-none"
            style={{ bottom: '18px', right: '2px', opacity: opacity * 0.65, zIndex: 0, transform: 'scaleX(-1)' }}
            animate={a2}
          >
            <LeafSprig color="#C9A84C" size={Math.round(leafSize * 0.85)} />
          </motion.div>
        </>
      )}
    </>
  );
}
