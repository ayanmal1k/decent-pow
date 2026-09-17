'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, Check, Users } from 'lucide-react'
import { FaXTwitter, FaTelegram } from 'react-icons/fa6'

export default function TeamSection() {
  return (
    <section className="relative w-full bg-white text-zinc-900 py-12 sm:py-20 lg:py-28 overflow-hidden selection:bg-[#FE7402] selection:text-white">
      <div className="w-full max-w-[1620px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= DESKTOP VIEW (AUTHENTIC BRUSH STROKE BANNER) ================= */}
        <div className="hidden lg:flex relative w-full min-h-[460px] items-center justify-center">
          
          {/* Authentic Black Paintbrush Stroke with Brush Edges on BOTH Sides */}
          <div className="absolute inset-0 w-full h-full -z-0 pointer-events-none select-none drop-shadow-[0_16px_36px_rgba(0,0,0,0.22)]">
            <svg
              viewBox="0 0 1600 500"
              className="w-full h-full"
              preserveAspectRatio="none"
              fill="#0D0D0F"
            >
              <path d="M 90 75 C 240 50, 600 42, 920 44 C 1220 46, 1440 58, 1510 75 C 1535 84, 1545 100, 1540 135 C 1530 200, 1535 310, 1525 375 C 1515 425, 1470 450, 1370 458 C 1080 470, 620 468, 300 460 C 170 456, 85 435, 65 375 C 45 310, 50 190, 70 120 C 76 95, 82 80, 90 75 Z" />

              {/* Left Brush Stroke Bristles */}
              <path d="M 100 85 C 50 90, 15 100, 0 115 C 30 122, 75 116, 105 108 Z" fill="#0D0D0F" />
              <path d="M 90 130 C 40 138, 5 150, 0 168 C 35 174, 75 162, 100 150 Z" fill="#0D0D0F" />
              <path d="M 80 180 C 35 186, 10 200, 15 224 C 45 228, 70 215, 90 200 Z" fill="#0D0D0F" />
              <path d="M 85 245 C 35 252, 0 268, 5 292 C 40 298, 70 285, 95 270 Z" fill="#0D0D0F" />
              <path d="M 95 310 C 45 320, 10 336, 15 360 C 50 368, 80 352, 105 335 Z" fill="#0D0D0F" />
              <path d="M 110 375 C 60 390, 25 410, 30 435 C 65 438, 95 422, 125 402 Z" fill="#0D0D0F" />
              <path d="M 140 438 C 90 452, 50 470, 60 488 C 95 490, 125 474, 155 458 Z" fill="#0D0D0F" />
              <circle cx="20" cy="140" r="3.5" fill="#0D0D0F" />
              <circle cx="8" cy="215" r="4.5" fill="#0D0D0F" />
              <circle cx="18" cy="310" r="3.5" fill="#0D0D0F" />
              <circle cx="42" cy="460" r="4" fill="#0D0D0F" />

              {/* Right Brush Stroke Bristles */}
              <path d="M 1500 85 C 1550 88, 1585 98, 1600 110 C 1570 118, 1525 112, 1495 105 Z" fill="#0D0D0F" />
              <path d="M 1510 128 C 1560 132, 1595 145, 1600 162 C 1565 170, 1525 158, 1495 148 Z" fill="#0D0D0F" />
              <path d="M 1520 178 C 1568 182, 1595 198, 1590 222 C 1555 226, 1525 212, 1505 198 Z" fill="#0D0D0F" />
              <path d="M 1515 242 C 1565 248, 1598 262, 1600 288 C 1560 296, 1530 282, 1500 268 Z" fill="#0D0D0F" />
              <path d="M 1505 308 C 1558 318, 1592 332, 1595 358 C 1555 366, 1525 352, 1490 332 Z" fill="#0D0D0F" />
              <path d="M 1490 372 C 1545 388, 1580 408, 1575 432 C 1540 436, 1505 420, 1470 400 Z" fill="#0D0D0F" />
              <path d="M 1450 438 C 1505 452, 1545 470, 1535 488 C 1495 490, 1460 472, 1420 458 Z" fill="#0D0D0F" />
              <circle cx="1580" cy="135" r="4" fill="#0D0D0F" />
              <circle cx="1592" cy="210" r="5" fill="#0D0D0F" />
              <circle cx="1585" cy="310" r="3.5" fill="#0D0D0F" />
              <circle cx="1555" cy="460" r="4.5" fill="#0D0D0F" />

              {/* Top & Bottom Jagged Edges */}
              <path d="M 240 54 C 360 40, 500 36, 640 40 C 600 48, 440 48, 320 56 Z" fill="#0D0D0F" />
              <path d="M 760 38 C 930 32, 1110 34, 1290 44 C 1210 50, 1050 48, 890 48 Z" fill="#0D0D0F" />
              <path d="M 1350 48 C 1430 50, 1500 62, 1550 86 C 1520 90, 1450 78, 1390 70 Z" fill="#0D0D0F" />
              <path d="M 290 468 C 430 480, 600 482, 790 478 C 710 468, 530 466, 390 458 Z" fill="#0D0D0F" />
              <path d="M 890 476 C 1050 482, 1230 478, 1390 462 C 1300 458, 1130 460, 990 466 Z" fill="#0D0D0F" />
            </svg>
          </div>

          {/* Desktop Content Grid */}
          <div className="relative z-10 w-full grid grid-cols-12 items-center px-10 xl:px-14 py-4">
            
            {/* 1. LEFT: CHARACTER (Pop from top) */}
            <div className="col-span-4 xl:col-span-3.5 flex items-end justify-start -mt-28 -mb-6 -ml-10 select-none z-30 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[460px] xl:w-[510px] aspect-square flex items-end justify-center"
              >
                <Image
                  src="/team-image.png"
                  alt="Web3 Raider Team Leader"
                  width={700}
                  height={700}
                  priority
                  className="w-full h-full object-contain drop-shadow-[0_16px_36px_rgba(254,116,2,0.35)]"
                />
              </motion.div>
            </div>

            {/* 2. CENTER: HEADLINE & BADGES */}
            <div className="col-span-5 xl:col-span-5.5 flex flex-col justify-center py-6 pl-2 xl:pl-4">
              <div className="relative inline-flex flex-col items-start self-start mb-2 select-none">
                <span className="font-master-victory text-2xl lg:text-[1.85rem] font-bold text-[#FE7402] tracking-wider italic">
                  NEED A TEAM?
                </span>
                <div className="w-28 -mt-1 pointer-events-none select-none">
                  <Image
                    src="/underline-stroke.png"
                    alt="Stroke"
                    width={180}
                    height={20}
                    className="w-full h-auto object-contain filter drop-shadow-[0_2px_6px_rgba(254,116,2,0.6)]"
                  />
                </div>
              </div>

              <h2 className="font-sans font-black text-[2.3rem] xl:text-[2.75rem] text-white tracking-tight uppercase leading-[1.08] mb-3.5 select-none drop-shadow-md">
                DEPLOY A COORDINATED
                <br />
                WEB3 RAIDER TEAM.
              </h2>

              <p className="text-[0.95rem] text-zinc-300 font-normal leading-relaxed max-w-lg mb-5">
                For projects that need more than one operator, I can coordinate a massive
                raider team with verified X accounts for campaign execution.
              </p>

              <div className="flex items-center gap-6 select-none">
                <div className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#FE7402]">
                  <div className="w-7 h-7 rounded-full bg-[#FE7402] flex items-center justify-center text-zinc-950">
                    <Users className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span>50+ RAIDERS</span>
                </div>

                <span className="text-zinc-600 font-light text-lg">|</span>

                <div className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#FE7402]">
                  <div className="w-7 h-7 rounded-full bg-[#FE7402] flex items-center justify-center text-zinc-950">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span>VERIFIED X</span>
                </div>

                <span className="text-zinc-600 font-light text-lg">|</span>

                <div className="flex items-center gap-2">
                  <a
                    href="https://x.com/real_decent1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X / Twitter"
                    className="w-8 h-8 rounded-full bg-zinc-800/90 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-[#FE7402] hover:border-[#FE7402] transition-colors"
                  >
                    <FaXTwitter className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://t.me/real_decent1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Telegram"
                    className="w-8 h-8 rounded-full bg-zinc-800/90 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-[#FE7402] hover:border-[#FE7402] transition-colors"
                  >
                    <FaTelegram className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3. RIGHT: CROWN + MORE HANDS + CTA BUTTON */}
            <div className="col-span-3 xl:col-span-3 flex flex-col justify-between items-end gap-8 pr-2 xl:pr-4">
              <div className="relative flex flex-col items-start select-none">
                <div className="w-12 -mb-1 -ml-1 pointer-events-none">
                  <Image
                    src="/crown.png"
                    alt="Crown"
                    width={80}
                    height={65}
                    className="w-full h-auto object-contain brightness-0 invert drop-shadow-sm"
                  />
                </div>

                <div className="flex flex-col items-start text-left">
                  <div className="font-master-victory text-2xl xl:text-[1.85rem] font-bold text-white tracking-wider flex flex-col space-y-1 drop-shadow-md">
                    <span className="block leading-tight">MORE</span>
                    <span className="block pl-1 leading-tight">HANDS</span>
                    <span className="block leading-tight">BIGGER</span>
                    <span className="block pl-1 leading-tight">IMPACT</span>
                  </div>
                  <div className="w-28 mt-2 -ml-1 pointer-events-none">
                    <Image
                      src="/underline-stroke.png"
                      alt="Stroke"
                      width={140}
                      height={20}
                      className="w-full h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(254,116,2,0.7)]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <motion.a
                  href="https://t.me/real_decent1"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, filter: 'brightness(1.06)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="group relative inline-flex items-center justify-center px-10 py-3.5 select-none focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FE7402]/60 rounded-full"
                >
                  <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none drop-shadow-[0_8px_20px_rgba(254,116,2,0.45)]">
                    <svg
                      viewBox="0 0 280 64"
                      className="w-full h-full fill-[#FE7402] transition-transform duration-300 group-hover:scale-[1.02]"
                      preserveAspectRatio="none"
                    >
                      <path d="M 14 30 C 10 16, 20 8, 42 6 C 92 2, 198 3, 244 6 C 266 8, 275 16, 272 32 C 269 46, 258 56, 238 58 C 188 62, 78 63, 38 59 C 18 57, 16 44, 14 30 Z" />
                      <path d="M 6 28 C 2 32, 1 36, 7 38 C 14 40, 20 38, 16 30 Z" fill="#E66800" />
                      <path d="M 12 18 C 8 14, 16 10, 26 12 C 20 15, 15 18, 12 18 Z" fill="#FF841A" />
                      <path d="M 268 22 C 274 24, 279 28, 275 34 C 270 38, 264 36, 266 26 Z" fill="#E66800" />
                      <path d="M 260 52 C 268 54, 273 48, 267 44 C 260 45, 256 50, 260 52 Z" fill="#FF841A" />
                    </svg>
                  </div>

                  <span className="font-sans font-black text-[1.05rem] text-white tracking-wider flex items-center gap-2.5 uppercase whitespace-nowrap">
                    WORK WITH ME
                    <motion.span className="inline-block" initial={{ x: 0 }} whileHover={{ x: 4 }}>
                      <ArrowRight className="w-5 h-5 stroke-[3]" />
                    </motion.span>
                  </span>
                </motion.a>
              </div>
            </div>

          </div>

        </div>


        {/* ================= MOBILE & TABLET VIEW (SOLID RECTANGULAR CARD DESIGN) ================= */}
        <div className="lg:hidden relative w-full bg-[#0E0E10] border border-zinc-800/70 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col justify-between overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FE7402]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FE7402]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top: Tagline & Main Headline */}
          <div className="relative z-10 flex flex-col items-start mb-6">
            <div className="relative inline-flex flex-col items-start mb-2 select-none">
              <span className="font-master-victory text-2xl sm:text-3xl font-bold text-[#FE7402] tracking-wider italic">
                NEED A TEAM?
              </span>
              <div className="w-28 -mt-1 pointer-events-none">
                <Image
                  src="/underline-stroke.png"
                  alt="Stroke"
                  width={180}
                  height={20}
                  className="w-full h-auto object-contain filter drop-shadow-[0_2px_6px_rgba(254,116,2,0.6)]"
                />
              </div>
            </div>

            <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase leading-[1.08] mb-3">
              DEPLOY A COORDINATED
              <br />
              WEB3 RAIDER TEAM.
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-xl">
              For projects that need more than one operator, I can coordinate a massive
              raider team with verified X accounts for campaign execution.
            </p>
          </div>

          {/* Middle: Character Image & Badges */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 my-4 py-2 border-y border-zinc-800/60">
            {/* Character */}
            <div className="w-48 sm:w-56 aspect-square flex items-center justify-center select-none">
              <Image
                src="/team-image.png"
                alt="Web3 Raider Team Leader"
                width={500}
                height={500}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_12px_28px_rgba(254,116,2,0.3)]"
              />
            </div>

            {/* Badges & Socials */}
            <div className="flex flex-col items-center sm:items-start gap-4">
              <div className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#FE7402]">
                <div className="w-7 h-7 rounded-full bg-[#FE7402] flex items-center justify-center text-zinc-950">
                  <Users className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span>50+ RAIDERS</span>
              </div>

              <div className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#FE7402]">
                <div className="w-7 h-7 rounded-full bg-[#FE7402] flex items-center justify-center text-zinc-950">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span>VERIFIED X</span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://x.com/real_decent1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X / Twitter"
                  className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-[#FE7402] hover:border-[#FE7402] transition-colors"
                >
                  <FaXTwitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://t.me/real_decent1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-[#FE7402] hover:border-[#FE7402] transition-colors"
                >
                  <FaTelegram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom: Stamp & CTA Button */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
            <div className="flex items-center gap-3 select-none">
              <div className="w-8 pointer-events-none">
                <Image
                  src="/crown.png"
                  alt="Crown"
                  width={60}
                  height={50}
                  className="w-full h-auto object-contain brightness-0 invert"
                />
              </div>
              <div className="font-master-victory text-xl font-bold text-white tracking-wider flex items-center gap-2">
                <span>MORE HANDS</span>
                <span className="text-[#FE7402]">•</span>
                <span>BIGGER IMPACT</span>
              </div>
            </div>

            <motion.a
              href="https://t.me/real_decent1"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto text-center relative inline-flex items-center justify-center px-8 py-3.5 rounded-full select-none"
            >
              <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none drop-shadow-[0_8px_20px_rgba(254,116,2,0.45)]">
                <svg viewBox="0 0 280 64" className="w-full h-full fill-[#FE7402]" preserveAspectRatio="none">
                  <path d="M 14 30 C 10 16, 20 8, 42 6 C 92 2, 198 3, 244 6 C 266 8, 275 16, 272 32 C 269 46, 258 56, 238 58 C 188 62, 78 63, 38 59 C 18 57, 16 44, 14 30 Z" />
                </svg>
              </div>
              <span className="font-sans font-black text-sm sm:text-base text-white tracking-wider flex items-center gap-2 uppercase">
                WORK WITH ME
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </span>
            </motion.a>
          </div>

        </div>

      </div>
    </section>
  )
}
