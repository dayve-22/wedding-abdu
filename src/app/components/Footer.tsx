'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, CalendarPlus, Heart, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FloatingItem {
  id: number;
  x: number;
  emoji: string;
  rotation: number;
  scale: number;
}

const LOVE_GREETINGS = [
  'Barakallahu lakuma wa baraka alaikuma! 🤍',
  'May your love story be filled with endless barakah & joy! ✨',
  'Two souls united in love, faith & grace. Mubarak! 💍',
  'Wishing Abdulla & Hiba a lifetime of laughter & bliss! 🌸',
  'Here’s to love, laughter and happily ever after! 🥂',
  'May your home be filled with eternal peace & warmth! 🕊️',
  'May Allah bless your new beginning with boundless happiness! 💖',
];

const BLESSING_EMOJIS = ['💖', '✨', '🤍', '🌸', '💍', '🕊️', '💐', '🥂', '❤️', '⭐'];

export default function Footer() {
  const [blessingCount, setBlessingCount] = useState(101);
  const [activeGreetingIndex, setActiveGreetingIndex] = useState(0);
  const [showGreeting, setShowGreeting] = useState(false);
  const [floatingItems, setFloatingItems] = useState<FloatingItem[]>([]);
  const [copiedToast, setCopiedToast] = useState(false);

  const triggerBlessings = (e?: React.MouseEvent) => {
    setBlessingCount((prev) => prev + 1);
    setActiveGreetingIndex((prev) => (prev + 1) % LOVE_GREETINGS.length);
    setShowGreeting(true);

    // 1. Multi-Stage Gold Confetti Cannons
    const rect = e?.currentTarget?.getBoundingClientRect();
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.7;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#C9A84C', '#F2A07B', '#FAF6EF', '#DFC06A', '#FADADD', '#9C7A3C'],
      ticks: 180,
      gravity: 0.7,
      scalar: 1.2,
      shapes: ['circle'],
    });

    // Left and Right secondary bursts
    setTimeout(() => {
      confetti({
        particleCount: 35,
        angle: 60,
        spread: 55,
        origin: { x: 0.15, y: 0.8 },
        colors: ['#C9A84C', '#F2A07B', '#FAF6EF', '#DFC06A'],
        gravity: 0.8,
      });
      confetti({
        particleCount: 35,
        angle: 120,
        spread: 55,
        origin: { x: 0.85, y: 0.8 },
        colors: ['#C9A84C', '#F2A07B', '#FAF6EF', '#DFC06A'],
        gravity: 0.8,
      });
    }, 150);

    // 2. Spawn Floating Romantic Emojis / Hearts
    const newItems: FloatingItem[] = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      x: (Math.random() - 0.5) * 220,
      emoji: BLESSING_EMOJIS[Math.floor(Math.random() * BLESSING_EMOJIS.length)],
      rotation: (Math.random() - 0.5) * 50,
      scale: 0.8 + Math.random() * 0.5,
    }));

    setFloatingItems((prev) => [...prev.slice(-18), ...newItems]);

    // Clean up floating items
    setTimeout(() => {
      setFloatingItems((prev) => prev.filter((item) => !newItems.find((n) => n.id === item.id)));
    }, 2800);
  };

  const shareWebsite = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Abdulla & Hiba Fathima Wedding',
          text: 'You are cordially invited to the wedding celebration of Abdulla & Hiba Fathima!',
          url: window.location.href,
        })
        .catch(() => { });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    }
  };

  const addToCalendar = () => {
    const title = encodeURIComponent('Abdulla & Hiba Fathima Wedding');
    const details = encodeURIComponent(
      'Celebration of the Wedding of Abdulla & Hiba Fathima at Pookolathur Mahallu Auditorium, Pulpatta'
    );
    const location = encodeURIComponent('Pookolathur Mahallu Auditorium, Pulpatta, Kerala 676123');
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=20260927T060000Z/20260927T090000Z`;
    window.open(url, '_blank');
  };

  return (
    <motion.footer
      className="w-full mt-14 mb-6 pb-24 sm:pb-8 text-center relative z-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* ── ACTION BUTTONS ──────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 px-4">
        <motion.button
          id="add-to-calendar-btn"
          onClick={addToCalendar}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-xs font-montserrat font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #FAF6EF 0%, #F5E6C8 100%)',
            border: '1.5px solid rgba(201, 168, 76, 0.6)',
            color: '#3D2817',
            boxShadow: '0 4px 15px rgba(201, 168, 76, 0.2)',
          }}
          whileHover={{ scale: 1.04, boxShadow: '0 6px 20px rgba(201, 168, 76, 0.35)' }}
          whileTap={{ scale: 0.97 }}
        >
          <CalendarPlus className="w-4 h-4 text-[#9C7A3C]" />
          Add to Google Calendar
        </motion.button>

        <motion.button
          id="share-invitation-btn"
          onClick={shareWebsite}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-xs font-montserrat font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #C9A84C 0%, #9C7A3C 100%)',
            border: '1.5px solid rgba(201, 168, 76, 0.8)',
            color: '#FAF6EF',
            boxShadow: '0 4px 15px rgba(201, 168, 76, 0.3)',
          }}
          whileHover={{ scale: 1.04, boxShadow: '0 6px 22px rgba(156, 122, 60, 0.45)' }}
          whileTap={{ scale: 0.97 }}
        >
          <Share2 className="w-4 h-4 text-[#FAF6EF]" />
          Share Invitation
        </motion.button>
      </div>

      {/* Copy Toast Notification */}
      <AnimatePresence>
        {copiedToast && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#3D2817] text-[#FAF6EF] text-xs font-montserrat flex items-center gap-2 shadow-2xl"
          >
            <Check className="w-3.5 h-3.5 text-[#DFC06A]" />
            Invitation link copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── GRAND ROYAL FINALE CARD ──────────────────────────── */}
      <div className="max-w-xl mx-auto px-4 relative">
        {/* Floating animated hearts/emojis container */}
        <div className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center z-30">
          <AnimatePresence>
            {floatingItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 100,
                  x: item.x,
                  scale: 0.5,
                  rotate: 0,
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: -220,
                  x: item.x + (Math.random() - 0.5) * 60,
                  scale: [0.5, item.scale * 1.2, item.scale, item.scale * 0.8],
                  rotate: item.rotation,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2.5,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="absolute text-2xl select-none"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(201, 168, 76, 0.4))' }}
              >
                {item.emoji}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="relative rounded-3xl p-8 sm:p-12 overflow-hidden text-center"
          style={{
            background:
              'linear-gradient(170deg, rgba(255,255,255,0.88) 0%, rgba(250,246,239,0.95) 50%, rgba(253,232,218,0.75) 100%)',
            border: '1.5px solid rgba(201, 168, 76, 0.45)',
            boxShadow:
              '0 16px 50px rgba(201, 168, 76, 0.18), 0 2px 12px rgba(0,0,0,0.03)',
            backdropFilter: 'blur(12px)',
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.8 }}
        >
          {/* Inner fine gold border frame */}
          <div
            className="absolute inset-2.5 sm:inset-3.5 rounded-2xl pointer-events-none"
            style={{ border: '1px solid rgba(201, 168, 76, 0.28)' }}
          />

          {/* Corner flourish accents */}
          <div className="absolute top-4 left-4 text-[#C9A84C] opacity-50 text-sm font-serif">✦</div>
          <div className="absolute top-4 right-4 text-[#C9A84C] opacity-50 text-sm font-serif">✦</div>
          <div className="absolute bottom-4 left-4 text-[#C9A84C] opacity-50 text-sm font-serif">✦</div>
          <div className="absolute bottom-4 right-4 text-[#C9A84C] opacity-50 text-sm font-serif">✦</div>

          {/* Wax Seal Monogram Emblem */}
          <motion.div
            className="w-20 h-20 sm:w-22 sm:h-22 mx-auto mb-5 rounded-full flex flex-col items-center justify-center relative shadow-lg cursor-pointer select-none"
            style={{
              background: 'linear-gradient(135deg, #FAF6EF 0%, #DFC06A 45%, #9C7A3C 100%)',
              border: '2.5px solid #FFFFFF',
              boxShadow: '0 8px 25px rgba(201, 168, 76, 0.45)',
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            onClick={triggerBlessings}
            title="Tap to shower blessings"
          >
            <div className="flex flex-col items-center justify-center text-center px-1">
              <span className="font-cormorant font-bold text-xl sm:text-2xl text-[#3D2817] tracking-wider leading-none whitespace-nowrap block">
                A &amp; H
              </span>
              <div className="w-6 h-[1px] bg-[#3D2817]/30 my-1 mx-auto" />
              <span className="text-[0.5rem] tracking-[0.25em] font-montserrat uppercase text-[#3D2817]/80 font-bold leading-none whitespace-nowrap block">
                Forever
              </span>
            </div>
          </motion.div>

          {/* Quranic / Romantic Blessing Quote */}
          <p className="font-cormorant italic text-sm sm:text-base text-[#7A624E] max-w-md mx-auto leading-relaxed mb-3">
            &ldquo;And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.&rdquo;
          </p>

          <span className="font-montserrat text-[0.62rem] tracking-[0.25em] uppercase text-[#9C7A3C] font-semibold block mb-4">
            Surah Ar-Rum 30:21
          </span>

          {/* Gold ornament divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <motion.div
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart className="w-4 h-4 text-[#E06D53] fill-[#E06D53]/60" />
            </motion.div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A84C]" />
          </div>

          {/* Couple Calligraphy Signature */}
          <h2
            className="font-script text-3xl sm:text-5xl text-[#3D2817] leading-tight my-2"
            style={{ textShadow: '0 2px 15px rgba(201, 168, 76, 0.2)' }}
          >
            Abdulla &amp; Hiba Fathima
          </h2>

          <p className="font-cormorant italic text-base sm:text-lg text-[#3D2817] font-semibold mt-3">
            We look forward to celebrating our special day with you!
          </p>

          {/* Date & Venue pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5E6C8]/70 border border-[#C9A84C]/40 mt-4 text-[0.68rem] font-montserrat text-[#7A624E] tracking-wider uppercase shadow-xs">
            <span>Sunday, September 27th, 2026</span>

          </div>

          {/* ── INTERACTIVE BLESSINGS SECTION ────────────────── */}
          <div className="mt-8 pt-6 border-t border-[#C9A84C]/25 flex flex-col items-center">
            {/* Animated Love Greeting Card / Banner */}
            <AnimatePresence mode="wait">
              {showGreeting && (
                <motion.div
                  key={activeGreetingIndex}
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-4 px-4 py-2.5 rounded-2xl max-w-sm text-center shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #FAF6EF 0%, #FDE8DA 100%)',
                    border: '1px solid rgba(201, 168, 76, 0.5)',
                  }}
                >
                  <p className="font-cormorant font-bold italic text-sm sm:text-base text-[#3D2817] leading-snug">
                    {LOVE_GREETINGS[activeGreetingIndex]}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glowing Action Button */}
            <motion.button
              onClick={triggerBlessings}
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-montserrat font-bold text-[#3D2817] transition-all cursor-pointer shadow-lg overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #FAF6EF 0%, #DFC06A 60%, #C9A84C 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 6px 25px rgba(201, 168, 76, 0.35)',
              }}
              whileHover={{ scale: 1.06, boxShadow: '0 8px 30px rgba(201, 168, 76, 0.5)' }}
              whileTap={{ scale: 0.94 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 pointer-events-none"
                animate={{ x: ['-200%', '300%'] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              />

              <Sparkles className="w-4 h-4 text-[#FAF6EF] group-hover:rotate-45 transition-transform" />
              <span className="tracking-wide">
                {showGreeting ? 'Shower More Blessings & Love' : 'Send Blessings & Love'}
              </span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-[#B83A24] fill-[#B83A24]" />
              </motion.div>
              <span className="ml-1 text-[0.7rem] px-2 py-0.5 rounded-full bg-white/70 text-[#3D2817] font-extrabold shadow-xs">
                {blessingCount}
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Footer copyright */}
      <p className="mt-8 section-label text-[0.56rem] tracking-[0.22em] text-[#7A624E]/60 uppercase">
        With Gratitude &bull; Ahammed, Fathima &amp; Family &bull; Pulikkottil (H)
      </p>
    </motion.footer>
  );
}
