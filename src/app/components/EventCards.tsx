'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Sparkles, Heart } from 'lucide-react';
import Image from 'next/image';
import FloralDecorations from './FloralDecorations';

export default function EventCards() {
  const openMap = (address: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="w-full py-6 md:py-14">
      {/* Section heading */}
      <motion.div
        className="text-center mb-7 md:mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p className="section-label mb-2" style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}>The Event</p>
        <h2
          className="font-cinzel font-bold"
          style={{ fontSize: 'clamp(1.4rem, 5vw, 3.2rem)', color: 'var(--brown-dark)', letterSpacing: '0.1em' }}
        >
          THE WEDDING CEREMONY
        </h2>
        <motion.div
          className="mx-auto mt-3"
          style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
          initial={{ width: 0 }}
          whileInView={{ width: '40%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, ease: 'easeOut' }}
        />
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:gap-10 max-w-lg mx-auto">

        {/* WEDDING CEREMONY */}
        <motion.div
          className="card-luxury relative overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ y: -4, boxShadow: '0 28px 70px rgba(61, 43, 31, 0.14)' }}
        >
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, var(--gold-deep), var(--gold-light), var(--gold-deep))' }} />

          <div className="flex flex-col items-center pt-6 pb-6 px-4 relative">
            <FloralDecorations position="top-right" size="sm" opacity={0.35} />

            {/* Framed Couple Photo */}
            <motion.div
              className="relative mb-6"
              whileHover={{ rotate: 0, scale: 1.02 }}
              style={{ rotate: -1.2 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="bg-white p-2.5 pb-3.5 rounded-xl shadow-lg"
                style={{
                  border: '1.5px solid rgba(201, 168, 76, 0.45)',
                  boxShadow: '0 12px 35px rgba(61, 43, 31, 0.15)',
                }}
              >
                <div
                  className="relative overflow-hidden rounded-lg aspect-[16/9.5]"
                  style={{ width: 'clamp(240px, 68vw, 360px)' }}
                >
                  <Image
                    src="/newabdu.png"
                    alt="Abdulla & Hiba Fathima - Save The Date"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p
                  className="font-script mt-2 text-center text-lg sm:text-xl"
                  style={{ color: 'var(--brown-dark)' }}
                >
                  Save The Date
                </p>
              </div>
            </motion.div>

            <div className="flex items-center gap-2 mb-1.5">
              <Heart className="w-4 h-4" style={{ color: 'var(--gold)' }} />
              <h3 className="font-cinzel font-bold tracking-widest" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.15rem)', color: 'var(--brown-dark)' }}>
                WEDDING CEREMONY
              </h3>
            </div>

            <p className="font-cormorant italic font-semibold text-center" style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.35rem)', color: 'var(--brown-dark)' }}>
              Pookolathur Mahallu Auditorium
            </p>
            <p className="font-semibold text-center text-xs sm:text-sm mt-0.5 text-[#9C7A3C]">
              പൂക്കൊളത്തൂർ മഹല്ല് ഓഡിറ്റോറിയം
            </p>
            <p className="mt-1 mb-4 text-center" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              Karaparamba - Pookolathur Rd, Pulpatta, Kerala 676123
            </p>

            <button
              id="ceremonia-map-btn"
              onClick={() => window.open('https://maps.app.goo.gl/B1TBWgD1LcGpLVok9?g_st=aw', '_blank')}
              className="btn-gold"
            >
              <MapPin className="w-3.5 h-3.5" />
              VIEW LOCATION ON MAP
            </button>

            <div className="mt-4 pt-3 w-full flex items-center justify-center gap-2" style={{ borderTop: '1px solid rgba(201, 168, 76, 0.2)' }}>
              <Clock className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
              <span className="font-montserrat font-bold" style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--brown-mid)' }}>
                SUNDAY, SEPT 27 · 11:30 AM ONWARDS
              </span>
            </div>
          </div>
        </motion.div>



      </div>
    </section>
  );
}
