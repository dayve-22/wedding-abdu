'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Heart } from 'lucide-react';
import FloralDecorations from './FloralDecorations';

export default function RSVPForm() {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('yes');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const phoneNumber = "918589919915";
    const attendanceText = attendance === 'yes' ? 'Yes, I will joyfully attend! ' : 'No, I will regretfully decline. ';
    let message = `Hi, this is *${name.trim()}*. I would like to RSVP to the wedding invitation.\n\nAttendance: ${attendanceText}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    confetti({
      particleCount: 90, spread: 75, origin: { y: 0.65 },
      colors: ['#C9A84C', '#F2A07B', '#FADADD', '#DFC06A', '#FAF6EF', '#9C7A3C'],
    });
    setSubmitted(true);
  };

  return (
    <motion.div
      className="w-full my-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="card-luxury relative overflow-hidden">
        {/* Top Gold Accent Bar */}
        <div
          className="h-1 w-full"
          style={{ background: 'linear-gradient(90deg, var(--gold-deep), var(--gold-light), var(--gold-deep))' }}
        />

        {/* Subtle background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: 0.03 }}>
          <svg width="140" height="140" viewBox="0 0 24 24" fill="var(--gold)">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Floating floral corner ornaments */}
        <FloralDecorations position="both-top" size="sm" opacity={0.4} />

        <div className="p-6 sm:p-8 relative z-10">
          {/* Header Icon & Title */}
          <div className="text-center mb-6">
            <motion.div
              className="rounded-full flex items-center justify-center mb-3 mx-auto"
              style={{
                width: '52px',
                height: '52px',
                background: 'linear-gradient(145deg, var(--champagne), var(--peach-light))',
                border: '1.5px solid var(--border-gold)',
                boxShadow: 'var(--shadow-gold)',
              }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart className="w-5 h-5" style={{ color: 'var(--gold-deep)', strokeWidth: 2 }} />
            </motion.div>

            <p className="section-label mb-1.5" style={{ letterSpacing: '0.3em', fontSize: '0.58rem' }}>
              RSVP & ATTENDANCE
            </p>

            <h3
              className="font-cinzel font-bold"
              style={{ fontSize: 'clamp(1.3rem, 4vw, 2rem)', color: 'var(--brown-dark)', letterSpacing: '0.1em' }}
            >
              PLEASE RESPOND
            </h3>

            <p
              className="font-cormorant italic mt-1"
              style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', color: 'var(--text-secondary)' }}
            >
              Please respond by September 10th, 2026
            </p>

            <div
              className="mt-3 w-16 h-px mx-auto"
              style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
            />
          </div>

          {/* Form Content */}
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="text-center py-8 space-y-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: 'linear-gradient(135deg, var(--champagne), var(--peach-light))', border: '2px solid var(--border-gold)' }}
                >
                  <CheckCircle2 className="w-7 h-7" style={{ color: 'var(--gold-deep)' }} />
                </motion.div>
                <h4 className="font-cinzel font-bold" style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)', color: 'var(--brown-dark)' }}>
                  Thank You!
                </h4>
                <p className="font-cormorant italic" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', color: 'var(--text-secondary)', maxWidth: '320px', margin: '0 auto' }}>
                  Your response has been received. We look forward to celebrating with you!
                </p>
                <p className="font-script pt-1" style={{ fontSize: '1.8rem', color: 'var(--brown-dark)' }}>
                  Abdulla &amp; Hiba Fathima
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4 max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <label className="block mb-1.5 section-label" style={{ fontSize: '0.58rem', letterSpacing: '0.22em' }}>
                    Full Name *
                  </label>
                  <input
                    id="rsvp-name-input"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Kumar"
                    className="input-luxury"
                  />
                </div>

                <div>
                  <label className="block mb-1.5 section-label" style={{ fontSize: '0.58rem', letterSpacing: '0.22em' }}>
                    Will you attend?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { val: 'yes', label: 'Joyfully Accept ✨' },
                      { val: 'no', label: 'Regretfully Decline 🤍' },
                    ].map(({ val, label }) => (
                      <button
                        key={val}
                        type="button"
                        id={`attendance-${val}-btn`}
                        onClick={() => setAttendance(val)}
                        className="py-2.5 px-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-center"
                        style={{
                          fontSize: 'clamp(0.72rem, 2vw, 0.82rem)',
                          background: attendance === val ? 'linear-gradient(135deg, #DFC06A 0%, #C9A84C 100%)' : 'var(--ivory-warm)',
                          color: attendance === val ? 'var(--brown-dark)' : 'var(--text-secondary)',
                          border: attendance === val ? '1.5px solid var(--gold-deep)' : '1.5px solid var(--border-champagne)',
                          boxShadow: attendance === val ? 'var(--shadow-gold)' : 'none',
                          fontFamily: 'Montserrat, sans-serif',
                        }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <motion.button
                    id="rsvp-submit-btn"
                    type="submit"
                    className="btn-gold w-full py-3.5 justify-center text-center"
                    style={{ fontSize: '0.74rem' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-3.5 h-3.5" />
                    CONFIRM ATTENDANCE
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

