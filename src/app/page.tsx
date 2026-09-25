'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PetalsBackground from './components/PetalsBackground';
import EnvelopeIntro from './components/EnvelopeIntro';
import HeaderBadge from './components/HeaderBadge';
import MusicPlayer from './components/MusicPlayer';
import EventCards from './components/EventCards';
import CountdownTimer from './components/CountdownTimer';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';
import FloralDivider from './components/FloralDivider';
import AnimatedFloralFrame from './components/AnimatedFloralFrame';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  // Auto-scroll smoothly to the bottom after envelope opens
  useEffect(() => {
    if (!isOpened) return;

    let animationFrameId: number;
    let isCancelled = false;

    // Only cancel if user intentionally tries to scroll manually
    const handleUserScroll = () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener('wheel', handleUserScroll);
      window.removeEventListener('touchmove', handleUserScroll);
      window.removeEventListener('keydown', handleUserKey);
    };

    const handleUserKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', 'Home', 'End'].includes(e.code)) {
        handleUserScroll();
      }
    };

    window.addEventListener('wheel', handleUserScroll, { passive: true });
    window.addEventListener('touchmove', handleUserScroll, { passive: true });
    window.addEventListener('keydown', handleUserKey, { passive: true });

    // Wait 5 seconds after opening, then scroll down very slowly
    const timer = setTimeout(() => {
      if (isCancelled) return;

      const getTargetY = () =>
        Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;

      let lastTime = performance.now();
      const pixelsPerSecond = 40; // Gentle, smooth reading pace (~35px/sec)

      const animateScroll = (now: number) => {
        if (isCancelled) return;

        const deltaTime = (now - lastTime) / 1000;
        lastTime = now;

        const targetY = getTargetY();
        if (window.scrollY < targetY - 2) {
          const nextY = window.scrollY + pixelsPerSecond * deltaTime;
          window.scrollTo({
            top: nextY,
            left: 0,
            behavior: 'instant' as ScrollBehavior,
          });
          animationFrameId = requestAnimationFrame(animateScroll);
        } else {
          cleanup();
        }
      };

      animationFrameId = requestAnimationFrame(animateScroll);
    }, 5000);

    return () => {
      clearTimeout(timer);
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
      cleanup();
    };
  }, [isOpened]);

  return (
    <main
      className="min-h-screen w-full relative overflow-x-hidden"
      style={{
        background: 'linear-gradient(160deg, #FAF6EF 0%, #FDE8DA 30%, #FAF6EF 60%, #F5E6C8 100%)',
        color: 'var(--text-primary)',
      }}
    >
      {/* Three.js Floating Petals Background */}
      <PetalsBackground />

      {/* Ambient radial glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(242,160,123,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-16 pt-8 pb-20 sm:pb-12 md:py-16 min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.7 } }}
            >
              <EnvelopeIntro
                onOpen={() => setIsOpened(true)}
                guestName="Jane Smith"
                guestCount={1}
              />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-0 relative"
            >
              {/* Luxury Animated Corner Floral Frame around borders */}
              <AnimatedFloralFrame />

              {/* Floating Music Widget */}
              <MusicPlayer autoPlay={true} />

              {/* Hero: Couple Names */}
              <HeaderBadge />

              <FloralDivider className="my-4 sm:my-6" />

              {/* Events */}
              <EventCards />

              <FloralDivider className="my-6" />

              {/* Countdown Timer */}
              <CountdownTimer />



              {/* RSVP */}
              <div className="max-w-xl mx-auto w-full">
                <RSVPForm />
              </div>

              {/* Footer */}
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
