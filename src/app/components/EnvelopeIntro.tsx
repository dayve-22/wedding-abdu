'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, MailOpen, Crown } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EnvelopeIntroProps {
  onOpen: () => void;
  guestName?: string;
  guestCount?: number;
}

export default function EnvelopeIntro({
  onOpen,
  guestName = 'Honored Guest',
  guestCount = 1,
}: EnvelopeIntroProps) {
  const [openingPhase, setOpeningPhase] = useState<'idle' | 'unsealing' | 'flap-open' | 'letter-emerge' | 'complete'>('idle');

  const handleOpenEnvelope = (e?: React.MouseEvent) => {
    if (openingPhase !== 'idle') return;

    // Phase 1: Unsealing & Confetti Sparkles
    setOpeningPhase('unsealing');

    const rect = e?.currentTarget?.getBoundingClientRect();
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.55;

    // Golden wedding sparkle burst
    confetti({
      particleCount: 55,
      spread: 70,
      origin: { x, y },
      colors: ['#C9A84C', '#F2A07B', '#FAF6EF', '#DFC06A', '#FADADD', '#9C7A3C'],
      ticks: 180,
      gravity: 0.7,
      scalar: 1.2,
      shapes: ['circle'],
    });

    // Phase 2: Flap Opens backwards (after seal breaks)
    setTimeout(() => {
      setOpeningPhase('flap-open');
    }, 400);

    // Phase 3: Letter slides out of envelope
    setTimeout(() => {
      setOpeningPhase('letter-emerge');

      // Secondary soft glitter spray
      confetti({
        particleCount: 35,
        spread: 100,
        origin: { x: 0.5, y: 0.45 },
        colors: ['#C9A84C', '#DFC06A', '#FAF6EF', '#FADADD'],
        gravity: 0.6,
        scalar: 0.9,
      });
    }, 1100);

    // Phase 4: Transition to full site
    setTimeout(() => {
      setOpeningPhase('complete');
      setTimeout(() => {
        onOpen();
      }, 700);
    }, 3800);
  };

  const isFlapOpen = openingPhase === 'flap-open' || openingPhase === 'letter-emerge' || openingPhase === 'complete';
  const isLetterEmerging = openingPhase === 'letter-emerge' || openingPhase === 'complete';

  return (
    <motion.div
      className="flex flex-col items-center justify-center px-4 py-8 min-h-[92vh] text-center z-30 relative select-none"
      initial={{ opacity: 0 }}
      animate={{
        opacity: openingPhase === 'complete' ? 0 : 1,
        scale: openingPhase === 'complete' ? 1.06 : 1,
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 45%, rgba(242,160,123,0.18) 0%, rgba(201,168,76,0.08) 40%, transparent 75%)',
        }}
      />

      {/* Floating starlight sparkles in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '15%', left: '18%', delay: 0 },
          { top: '25%', right: '15%', delay: 1.2 },
          { bottom: '20%', left: '22%', delay: 0.6 },
          { bottom: '30%', right: '20%', delay: 1.8 },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="absolute text-sm text-[#C9A84C] opacity-35"
            style={{ top: s.top, left: s.left, right: s.right }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3.5, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* ── ROYAL HEADER: Calligraphy & Couple Names ─────────── */}
      <motion.div
        className="mb-6 md:mb-8 relative z-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: -25 }}
        animate={{
          opacity: openingPhase !== 'idle' ? 0.2 : 1,
          y: openingPhase !== 'idle' ? -15 : 0,
          scale: openingPhase !== 'idle' ? 0.96 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Grand Calligraphy Couple Names (Always Single Line) */}
        <h1
          className="font-script leading-tight"
          style={{
            fontSize: 'clamp(2.5rem, 8.8vw, 6.0rem)',
            color: '#3D2817',
            textShadow: '0 4px 30px rgba(201, 168, 76, 0.25)',
          }}
        >
          <motion.span
            className="block whitespace-nowrap"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Abdulla
          </motion.span>
          <motion.span
            className="block font-cormorant italic font-light text-xl sm:text-3xl text-[#C9A84C] my-0.5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            with
          </motion.span>
          <motion.span
            className="block whitespace-nowrap"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Hiba Fathima
          </motion.span>
        </h1>

        {/* Gold ornamental underline */}
        <div className="flex items-center justify-center gap-3 my-2">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]" />
          <Heart className="w-3.5 h-3.5 text-[#C9A84C] fill-[#C9A84C]/30" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]" />
        </div>

        <p className="font-cormorant italic text-xs sm:text-sm text-[#7A624E] font-semibold">
          Sunday, September 27th, 2026 &bull; Pookolathur Mahallu Auditorium
        </p>
      </motion.div>

      {/* ── 100% FULLY RESPONSIVE 3D ENVELOPE (Higher z-index) ─ */}
      <div
        className="w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] relative z-25 my-3 cursor-pointer"
        onClick={handleOpenEnvelope}
        style={{ perspective: '1200px' }}
      >
        {/* Pulsing aura glow behind envelope */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: [
              '0 15px 40px rgba(201, 168, 76, 0.25), 0 0 35px rgba(242, 160, 123, 0.15)',
              '0 22px 60px rgba(201, 168, 76, 0.45), 0 0 55px rgba(242, 160, 123, 0.3)',
              '0 15px 40px rgba(201, 168, 76, 0.25), 0 0 35px rgba(242, 160, 123, 0.15)',
            ],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="relative w-full aspect-[16/10.5] rounded-2xl overflow-visible shadow-2xl transition-transform"
          style={{
            background: 'linear-gradient(145deg, #FAF6EF 0%, #F5E6C8 45%, #EAD4B0 100%)',
            border: '1.5px solid rgba(201, 168, 76, 0.6)',
            boxShadow:
              '0 25px 60px rgba(61, 43, 31, 0.2), 0 8px 22px rgba(201, 168, 76, 0.25)',
          }}
          whileHover={{ scale: openingPhase === 'idle' ? 1.03 : 1 }}
          whileTap={{ scale: openingPhase === 'idle' ? 0.98 : 1 }}
        >
          {/* Inner envelope background watermark & lining */}
          <div className="absolute inset-2 rounded-xl border border-[#C9A84C]/25 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 opacity-12"
              style={{
                backgroundImage: 'radial-gradient(#C9A84C 0.8px, transparent 0.8px)',
                backgroundSize: '12px 12px',
              }}
            />
          </div>

          {/* ── INNER INVITATION LETTER (Tucked inside, slides out ONLY upon opening) ── */}
          <motion.div
            className="absolute inset-x-3 sm:inset-x-4 top-4 rounded-xl p-3 sm:p-5 flex flex-col justify-between items-center text-center shadow-lg pointer-events-none"
            style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FAF6EF 55%, #FDE8DA 100%)',
              border: '1.5px solid rgba(201, 168, 76, 0.55)',
              zIndex: 15,
            }}
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            animate={
              isLetterEmerging
                ? {
                  y: -120,
                  opacity: 1,
                  scale: 1.05,
                  boxShadow: '0 20px 50px rgba(201, 168, 76, 0.55), 0 4px 18px rgba(0,0,0,0.15)',
                }
                : { y: 30, opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Letter fine inner double border */}
            <div className="absolute inset-1.5 sm:inset-2 rounded-lg border border-[#C9A84C]/35 pointer-events-none" />

            <div className="relative z-10 pt-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF6EF] border border-[#C9A84C]/60 flex items-center justify-center mx-auto mb-1 shadow-xs">
                <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A84C]" />
              </div>
              <p className="font-cormorant font-bold italic text-sm sm:text-base text-[#3D2817] leading-tight">
                You Are Cordially Invited
              </p>
              <p className="font-montserrat text-[0.52rem] sm:text-[0.56rem] tracking-[0.2em] text-[#9C7A3C] uppercase font-semibold mt-0.5">
                To Celebrate Our Union
              </p>
            </div>

            <div className="relative z-10 pb-1 w-full">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto my-1" />
              <p className="font-script text-lg sm:text-2xl text-[#3D2817] leading-none">
                Abdulla &amp; Hiba
              </p>
            </div>
          </motion.div>

          {/* ── ENVELOPE FRONT POCKET (Full-Height Seamless Envelope Face with Rounded Corners) ── */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-10">
            <div
              className="w-full h-full"
              style={{
                clipPath: 'polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)',
                background: 'linear-gradient(to top, #EAD4B0 0%, #F5E6C8 60%, #FAF6EF 100%)',
                border: '1.5px solid rgba(201, 168, 76, 0.55)',
                boxShadow: '0 4px 20px rgba(61, 43, 31, 0.1)',
              }}
            >
              {/* Fine inner border following pocket */}
              <div className="absolute inset-2 rounded-xl border border-[#C9A84C]/25 pointer-events-none" />

              {/* Front gold flourish heart badge */}
              <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2 opacity-70">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A84C]" />
                <Heart className="w-3 h-3 text-[#C9A84C] fill-[#C9A84C]/40" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A84C]" />
              </div>
            </div>
          </div>

          {/* ── 3D TOP TRIANGLE FLAP (Rounded-Top Flap, Zero Corner Overflow) ── */}
          <motion.div
            className="absolute top-0 inset-x-0 h-[56%] pointer-events-none rounded-t-2xl overflow-hidden origin-top"
            style={{
              filter: 'drop-shadow(0 6px 12px rgba(61, 43, 31, 0.25))',
              zIndex: isFlapOpen ? 1 : 20,
            }}
            animate={
              isFlapOpen
                ? { rotateX: 180, opacity: [1, 0.85, 0.7] }
                : { rotateX: 0, opacity: 1 }
            }
            transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="w-full h-full"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                background: 'linear-gradient(180deg, #FAF6EF 0%, #DFC06A 65%, #C9A84C 100%)',
              }}
            />
          </motion.div>

          {/* ── WAX SEAL BUTTON (Centered on Apex of Triangle) ─── */}
          <AnimatePresence>
            {!isFlapOpen && (
              <motion.div
                className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.4, opacity: 0, filter: 'blur(6px)' }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenEnvelope(e);
                }}
              >
                {/* Outer pulsing gold halo */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: '2px solid rgba(201, 168, 76, 0.65)' }}
                  animate={{ scale: [1, 1.35, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Wax seal medallion */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-center relative shadow-2xl select-none"
                  style={{
                    background:
                      'radial-gradient(circle at 35% 35%, #FAF6EF 0%, #DFC06A 45%, #9C7A3C 90%, #7A5C28 100%)',
                    border: '2.5px solid #FFFFFF',
                    boxShadow:
                      '0 8px 25px rgba(156, 122, 60, 0.55), inset 0 2px 4px rgba(255,255,255,0.6)',
                  }}
                >
                  <span className="font-cormorant font-bold text-sm sm:text-base text-[#3D2817] tracking-wider leading-none whitespace-nowrap">
                    A &amp; H
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Click prompt instruction */}
        <motion.div
          className="mt-5 flex flex-col items-center justify-center gap-1.5"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EF]/95 border border-[#C9A84C]/50 shadow-md">
            <MailOpen className="w-3.5 h-3.5 text-[#9C7A3C]" />
            <span className="font-montserrat font-bold text-[0.62rem] tracking-[0.2em] uppercase text-[#3D2817]">
              {openingPhase === 'idle' ? 'Tap to Open' : 'Opening Invitation...'}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
