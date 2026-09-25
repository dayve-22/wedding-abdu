'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Music } from 'lucide-react';

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/jhol.mp4');
    audio.loop = true;
    audioRef.current = audio;

    if (autoPlay) {
      playAudio();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Audio autoplay blocked by browser policy:', err);
          setIsPlaying(false);
        });
    }
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      playAudio();
    }
  };

  return (
    <motion.div
      className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-40 select-none"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.button
        onClick={togglePlay}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="group relative flex items-center gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full backdrop-blur-md transition-all shadow-xl cursor-pointer"
        style={{
          background: 'rgba(250, 246, 239, 0.92)',
          border: '1.5px solid rgba(201, 168, 76, 0.55)',
          boxShadow: isPlaying
            ? '0 8px 30px rgba(201, 168, 76, 0.35), 0 2px 10px rgba(0,0,0,0.06)'
            : '0 4px 20px rgba(0, 0, 0, 0.08)',
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.94 }}
        title={isPlaying ? 'Pause music' : 'Play music'}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {/* Subtle pulsing background glow ring when active */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ border: '2px solid rgba(201, 168, 76, 0.6)' }}
            animate={{ scale: [1, 1.14, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        {/* Play/Pause Gold Disc Button */}
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center relative flex-shrink-0 shadow-md transition-transform"
          style={{
            background: 'linear-gradient(135deg, #FAF6EF 0%, #DFC06A 50%, #9C7A3C 100%)',
            color: '#3D2817',
          }}
        >
          {/* Rotating vinyl ring effect when playing */}
          {isPlaying && (
            <motion.div
              className="absolute inset-0 rounded-full border border-amber-800/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
          )}

          {isPlaying ? (
            <Pause className="w-4 h-4 text-[#3D2817]" fill="#3D2817" />
          ) : (
            <Play className="w-4 h-4 ml-0.5 text-[#3D2817]" fill="#3D2817" />
          )}
        </div>

        {/* Text & Waveform Details */}
        <div className="flex flex-col text-left pr-1">
          <div className="flex items-center gap-1.5">
            <Music className="w-3 h-3 text-[#9C7A3C]" />
            <span
              className="font-montserrat font-bold text-[0.55rem] tracking-[0.18em] uppercase text-[#9C7A3C]"
            >
              {isPlaying ? 'Now Playing' : 'Wedding Music'}
            </span>
          </div>

          <span
            className="font-cormorant font-semibold italic text-xs sm:text-sm text-[#3D2817] leading-tight max-w-[130px] sm:max-w-[170px] truncate"
          >
            Jhol
          </span>
        </div>

        {/* Animated Equalizer Bars */}
        <div className="flex items-end gap-[3px] h-4 pl-0.5 flex-shrink-0">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-[2.5px] rounded-full"
              style={{
                background: 'linear-gradient(to top, #9C7A3C, #DFC06A)',
              }}
              animate={
                isPlaying
                  ? {
                      height: [
                        `${6 + (i % 2) * 5}px`,
                        `${16 - (i % 3) * 4}px`,
                        `${4 + (i % 3) * 6}px`,
                        `${6 + (i % 2) * 5}px`,
                      ],
                    }
                  : { height: '3px' }
              }
              transition={{
                duration: 0.9 + i * 0.15,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.12,
              }}
            />
          ))}
        </div>
      </motion.button>
    </motion.div>
  );
}
