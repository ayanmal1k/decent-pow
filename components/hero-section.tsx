'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen bg-white text-zinc-900 pt-20 sm:pt-24 flex flex-col justify-between overflow-hidden selection:bg-[#FE7402] selection:text-white">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Content Grid Container */}
      <div className="relative w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-14 pt-6 sm:pt-10 lg:pt-0 pb-0 flex-1 flex flex-col justify-between lg:justify-center">
        
        {/* ================= LEFT CONTENT AREA ================= */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:max-w-[480px] xl:max-w-[540px] 2xl:max-w-[580px] flex flex-col justify-center z-20 pt-2 lg:py-12"
        >
          {/* Main DECENT Branding / Graphic with Crown and Stroke */}
          <motion.div 
            initial={{ scale: 0.94, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative w-[230px] sm:w-[310px] md:w-[360px] lg:w-[400px] xl:w-[440px] max-w-full -ml-2 sm:-ml-3 mb-3.5 sm:mb-4 select-none"
          >
            <Image
              src="/hero-text.png"
              alt="DECENT"
              width={800}
              height={400}
              priority
              className="w-full h-auto object-contain drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]"
            />
          </motion.div>

          {/* Subtitle - Web3 Community & Growth Specialist */}
          <motion.h1 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.65rem] 2xl:text-[2.9rem] font-black uppercase tracking-tight text-black leading-[1.08] mb-3.5 sm:mb-4"
          >
            WEB3 COMMUNITY &amp;
            <br />
            GROWTH SPECIALIST
          </motion.h1>

          {/* Specialization / Skills Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-[12.5px] md:text-[13.5px] font-bold uppercase tracking-wider text-zinc-800 mb-4 sm:mb-6"
          >
            <span>4 YEARS</span>
            <span className="text-zinc-400 font-normal">|</span>
            <span>COMMUNITY</span>
            <span className="text-zinc-400 font-normal">|</span>
            <span>MODERATION</span>
            <span className="text-zinc-400 font-normal">|</span>
            <span>RAIDS</span>
            <span className="text-zinc-400 font-normal">|</span>
            <span>SHILLING</span>
            <span className="text-zinc-400 font-normal">|</span>
            <span>GROWTH STRATEGY</span>
          </motion.div>

          {/* Bio / Value Proposition Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-[1.05rem] text-zinc-700 font-medium leading-relaxed max-w-lg mb-6 sm:mb-8"
          >
            My approach is simple: understand the project, keep the community active,
            execute consistently and build systems that support growth — not just short-term noise.
          </motion.p>

          {/* Custom Orange Brushstroke CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex items-center"
          >
            <motion.a
              href="https://t.me/real_decent1"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, filter: 'brightness(1.05)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="group relative inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 select-none focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FE7402]/50 rounded-full"
            >
              {/* Custom Organic Fat Orange Brush SVG with #FE7402 */}
              <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none drop-shadow-[0_10px_24px_rgba(254,116,2,0.42)]">
                <svg
                  viewBox="0 0 280 64"
                  className="w-full h-full fill-[#FE7402] transition-transform duration-300 group-hover:scale-[1.03]"
                  preserveAspectRatio="none"
                >
                  {/* Organic painterly brush shape */}
                  <path d="M 14 30 C 10 16, 20 8, 42 6 C 92 2, 198 3, 244 6 C 266 8, 275 16, 272 32 C 269 46, 258 56, 238 58 C 188 62, 78 63, 38 59 C 18 57, 16 44, 14 30 Z" />
                  {/* Left splatter edges */}
                  <path d="M 6 28 C 2 32, 1 36, 7 38 C 14 40, 20 38, 16 30 Z" fill="#E66800" />
                  <path d="M 12 18 C 8 14, 16 10, 26 12 C 20 15, 15 18, 12 18 Z" fill="#FF841A" />
                  <path d="M 22 55 C 16 57, 10 52, 14 48 C 20 48, 24 53, 22 55 Z" fill="#E66800" />
                  {/* Right splatter edges */}
                  <path d="M 268 22 C 274 24, 279 28, 275 34 C 270 38, 264 36, 266 26 Z" fill="#E66800" />
                  <path d="M 260 52 C 268 54, 273 48, 267 44 C 260 45, 256 50, 260 52 Z" fill="#FF841A" />
                  <path d="M 252 10 C 260 8, 268 12, 262 16 C 255 16, 250 12, 252 10 Z" fill="#FF841A" />
                </svg>
              </div>

              {/* Master Victory Button Text & Arrow */}
              <span className="font-master-victory font-bold text-lg sm:text-xl md:text-2xl text-white tracking-wider flex items-center gap-2.5 drop-shadow-sm uppercase pt-0.5">
                LET&apos;S WORK TOGETHER
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ================= MOBILE HERO IMAGE (ATTACHED TO BOTTOM) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:hidden relative w-full max-w-[420px] sm:max-w-[480px] mx-auto mt-6 -mb-1 flex items-end justify-center z-10"
        >
          <Image
            src="/hero-image.png"
            alt="DECENT Web3 Community & Growth Specialist"
            width={900}
            height={900}
            priority
            className="w-full h-auto object-contain object-bottom drop-shadow-xl"
          />
        </motion.div>

      </div>


      {/* ================= DESKTOP FULL-HEIGHT HERO IMAGE (RIGHT SIDE, ATTACHED TO BOTTOM) ================= */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex absolute bottom-0 right-[-3%] xl:right-[1%] 2xl:right-[5%] h-[92vh] xl:h-[96vh] 2xl:h-[98vh] max-h-[1100px] items-end justify-end pointer-events-none z-10"
      >
        <Image
          src="/hero-image.png"
          alt="DECENT Web3 Community & Growth Specialist"
          width={1200}
          height={1200}
          priority
          className="h-full w-auto max-w-none object-contain object-bottom select-none drop-shadow-2xl"
        />
      </motion.div>


      {/* ================= TOP RIGHT CLUSTER (DESKTOP ONLY) ================= */}
      <div className="hidden lg:block absolute top-8 xl:top-12 2xl:top-16 right-8 sm:right-12 xl:right-16 2xl:right-24 z-20 pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-1"
        >
          {/* Orange Crown Graphic */}
          <motion.div 
            animate={{ rotate: [-2, 3, -2], y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="w-12 xl:w-15 mb-1 -ml-1"
          >
            <Image
              src="/crown.png"
              alt="Crown"
              width={130}
              height={110}
              className="w-full h-auto object-contain drop-shadow-sm"
            />
          </motion.div>

          {/* BUILD / ENGAGE / GROW in Master Victory Font */}
          <div className="font-master-victory text-3xl xl:text-4xl 2xl:text-5xl font-bold text-zinc-950 tracking-wide leading-[1.02] flex flex-col items-start">
            <span>BUILD</span>
            <span>ENGAGE</span>
            <span>GROW</span>
          </div>

          {/* Dynamic Orange Brush Underline */}
          <div className="w-24 xl:w-30 mt-1.5 -ml-1">
            <Image
              src="/underline-stroke.png"
              alt="Stroke"
              width={220}
              height={35}
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>

    </section>
  )
}
