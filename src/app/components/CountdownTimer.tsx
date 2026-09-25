'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FloralDecorations from './FloralDecorations';

export default function CountdownTimer() {
  const targetDate = new Date('2026-09-27T11:30:00').getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const difference = targetDate - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Mins' },
    { value: timeLeft.seconds, label: 'Secs' },
  ];

  return (
    <section
      className="w-full relative py-8 md:py-16 rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(245,230,200,0.5) 0%, rgba(253,232,218,0.4) 50%, rgba(245,230,200,0.5) 100%)',
        border: '1px solid var(--border-gold)',
      }}
    >
      <FloralDecorations position="all" size="sm" opacity={0.4} />

      {/* Top ornament */}
      <motion.div
        className="text-center mb-6 relative z-10 px-3"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p className="section-label mb-2" style={{ letterSpacing: '0.3em', fontSize: '0.58rem' }}>Countdown</p>
        <h2
          className="font-cinzel font-bold"
          style={{ fontSize: 'clamp(1.3rem, 5vw, 2.8rem)', color: 'var(--brown-dark)', letterSpacing: '0.12em' }}
        >
          COUNTING DOWN
        </h2>
        <motion.div
          className="mx-auto mt-2"
          style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
          initial={{ width: 0 }}
          whileInView={{ width: '35%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Countdown boxes */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-sm sm:max-w-lg mx-auto px-3 sm:px-4 relative z-10">
        {units.map(({ value, label }, i) => (
          <motion.div
            key={label}
            className="countdown-box"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ scale: 1.04 }}
          >
            <motion.span
              key={value}
              className="font-cinzel font-bold block"
              style={{ fontSize: 'clamp(1.4rem, 7vw, 3rem)', color: 'var(--brown-dark)', lineHeight: 1 }}
              initial={{ scale: 1.15, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {String(value).padStart(2, '0')}
            </motion.span>
            <span
              className="block mt-1 section-label"
              style={{ fontSize: '0.52rem', letterSpacing: '0.15em', color: 'var(--gold-deep)' }}
            >
              {label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom subtitle */}
      <motion.div
        className="text-center mt-6 relative z-10 px-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p
          className="font-cormorant italic"
          style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', color: 'var(--text-secondary)' }}
        >
          Until our big day
        </p>
        <p
          className="font-script mt-0.5"
          style={{ fontSize: 'clamp(1.5rem, 6vw, 2.6rem)', color: 'var(--brown-dark)' }}
        >
          Abdulla & Hiba Fathima
        </p>
      </motion.div>
    </section>
  );
}
