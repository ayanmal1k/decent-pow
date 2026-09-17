'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, Flame } from 'lucide-react'
import { FaXTwitter, FaTelegram } from 'react-icons/fa6'

export default function PowSection() {
  return (
    <section className="relative w-full bg-white text-zinc-900 pt-20 sm:pt-28 pb-14 sm:pb-20 overflow-visible selection:bg-[#FE7402] selection:text-white border-t border-zinc-100">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* ========================================================================= */}
        {/* 1. TOP BANNER: FULL WIDTH RECTANGULAR BLACK BANNER                         */}
        {/* ========================================================================= */}
        <div className="relative w-full bg-[#0D0D0F] rounded-2xl sm:rounded-3xl border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)] mb-14 sm:mb-16 select-none overflow-visible">
          
          {/* Character Wrapper: Anchored directly to BOTTOM of rectangle, popping out of TOP */}
          <div className="hidden lg:block absolute bottom-0 left-4 xl:left-8 w-56 xl:w-68 h-[145%] z-20 pointer-events-none">
            {/* Orange Crown */}
            <div className="absolute top-2 -left-2 xl:-left-4 w-9 xl:w-11 z-30 pointer-events-none">
              <Image
                src="/crown.png"
                alt="Crown"
                width={60}
                height={50}
                className="w-full h-auto object-contain [filter:invert(52%)_sepia(95%)_saturate(2520%)_hue-rotate(360deg)_brightness(101%)_contrast(102%)] drop-shadow-md"
              />
            </div>

            {/* Character Image flush with bottom */}
            <div className="w-full h-full relative flex items-end justify-center">
              <Image
                src="/pow-image.png"
                alt="POW Character"
                width={500}
                height={500}
                priority
                className="w-full h-full object-contain object-bottom filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.75)]"
              />
            </div>
          </div>

          {/* Banner Contents Grid/Flex */}
          <div className="relative z-10 w-full min-h-[160px] xl:min-h-[180px] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:pl-64 xl:pl-80 lg:pr-8 xl:pr-12 py-8 lg:py-4 gap-6 xl:gap-8">
            
            {/* Mobile Character Display (Shown only on small screens) */}
            <div className="lg:hidden relative w-44 h-44 -mt-20 mb-2 flex items-end justify-center">
              <div className="absolute top-0 -left-2 w-8 pointer-events-none">
                <Image
                  src="/crown.png"
                  alt="Crown"
                  width={50}
                  height={40}
                  className="w-full h-auto object-contain [filter:invert(52%)_sepia(95%)_saturate(2520%)_hue-rotate(360deg)_brightness(101%)_contrast(102%)]"
                />
              </div>
              <Image
                src="/pow-image.png"
                alt="POW Character"
                width={300}
                height={300}
                className="w-full h-full object-contain object-bottom filter drop-shadow-xl"
              />
            </div>

            {/* Title: JOIN MY ➔ POW CHANNEL */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center shrink-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-master-victory text-xl sm:text-2xl xl:text-3xl font-bold text-[#FE7402] tracking-wider italic">
                  JOIN MY
                </span>
                <span className="font-master-victory text-lg sm:text-xl xl:text-2xl text-[#FE7402] font-bold">➔</span>
              </div>
              <h2 className="font-master-victory text-3xl sm:text-4xl xl:text-5xl font-bold text-white tracking-wider leading-none drop-shadow-md whitespace-nowrap">
                POW CHANNEL
              </h2>
            </div>

            {/* Right Side: Divider + Telegram Info + Orange Pill Button */}
            <div className="flex flex-col sm:flex-row items-center gap-5 xl:gap-7 w-full lg:w-auto justify-center lg:justify-end">
              
              {/* Vertical Divider (Desktop) */}
              <div className="hidden lg:block w-[1.5px] h-12 bg-zinc-700/80 rounded-full shrink-0" />

              {/* Telegram Info */}
              <div className="flex items-center gap-3 max-w-xs text-center sm:text-left">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-zinc-950 shrink-0 shadow-md">
                  <FaTelegram className="w-4 h-4 text-zinc-950" />
                </div>
                <p className="font-sans text-xs xl:text-sm text-zinc-200 leading-snug font-normal">
                  Get the latest updates, alpha, and opportunities straight to your Telegram.
                </p>
              </div>

              {/* Solid Orange Pill CTA Button */}
              <motion.a
                href="https://t.me/decentpow"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#FE7402] text-zinc-950 hover:bg-[#ff841a] font-sans font-black text-sm xl:text-base tracking-wider uppercase shadow-[0_8px_20px_rgba(254,116,2,0.4)] transition-all shrink-0"
              >
                <span>JOIN NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </motion.a>
            </div>

          </div>
        </div>


        {/* ========================================================================= */}
        {/* 2. BOTTOM ROW: "LET'S CONNECT" SOCIAL BAR                                  */}
        {/* ========================================================================= */}
        <div className="relative w-full py-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 select-none">
          
          {/* Item 1: LET'S CONNECT Title */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative flex flex-col items-start">
              <span className="font-master-victory text-2xl sm:text-3xl font-bold text-zinc-950 tracking-wider leading-none">
                LET&apos;S
              </span>
              <div className="relative -mt-1">
                <span className="font-master-victory text-2xl sm:text-3xl font-bold text-zinc-950 tracking-wider leading-none">
                  CONNECT
                </span>
                <div className="absolute -bottom-1.5 left-0 w-full h-1.5 pointer-events-none">
                  <Image
                    src="/underline-stroke.png"
                    alt="Underline"
                    width={120}
                    height={10}
                    className="w-full h-full object-fill [filter:invert(52%)_sepia(95%)_saturate(2520%)_hue-rotate(360deg)_brightness(101%)_contrast(102%)]"
                  />
                </div>
              </div>
            </div>
            <span className="font-master-victory text-2xl sm:text-3xl font-bold text-zinc-950 ml-1">➔</span>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1.5px] h-10 bg-zinc-200" />

          {/* Item 2: X (Twitter) */}
          <a
            href="https://x.com/real_decent1"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3.5 hover:opacity-85 transition-opacity"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center text-white shrink-0 group-hover:bg-[#FE7402] transition-colors shadow-sm">
              <FaXTwitter className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-black text-sm text-zinc-950 tracking-wider uppercase leading-tight">
                X
              </span>
              <span className="font-sans text-xs text-zinc-500 group-hover:text-[#FE7402] transition-colors leading-tight">
                @real_decent1
              </span>
            </div>
          </a>

          {/* Divider */}
          <div className="hidden lg:block w-[1.5px] h-10 bg-zinc-200" />

          {/* Item 3: Telegram (Direct Chat) */}
          <a
            href="https://t.me/real_decent1"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3.5 hover:opacity-85 transition-opacity"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center text-white shrink-0 group-hover:bg-[#FE7402] transition-colors shadow-sm">
              <FaTelegram className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-black text-sm text-zinc-950 tracking-wider uppercase leading-tight">
                TELEGRAM
              </span>
              <span className="font-sans text-xs text-zinc-500 group-hover:text-[#FE7402] transition-colors leading-tight">
                @real_decent1
              </span>
            </div>
          </a>

          {/* Divider */}
          <div className="hidden lg:block w-[1.5px] h-10 bg-zinc-200" />

          {/* Item 4: POW Channel */}
          <a
            href="https://t.me/decentpow"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3.5 hover:opacity-85 transition-opacity"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center text-white shrink-0 group-hover:bg-[#FE7402] transition-colors shadow-sm">
              <Flame className="w-4 h-4 text-[#FE7402] group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-black text-sm text-zinc-950 tracking-wider uppercase leading-tight">
                POW CHANNEL
              </span>
              <span className="font-sans text-xs text-zinc-500 group-hover:text-[#FE7402] transition-colors leading-tight">
                @decentpow
              </span>
            </div>
          </a>

          {/* Divider */}
          <div className="hidden lg:block w-[1.5px] h-10 bg-zinc-200" />

          {/* Item 5: DECENT Brand Stamp on Far Right */}
          <div className="flex flex-col items-center select-none shrink-0">
            <div className="w-8 -mb-1 pointer-events-none">
              <Image
                src="/crown.png"
                alt="Crown"
                width={50}
                height={40}
                className="w-full h-auto object-contain [filter:invert(52%)_sepia(95%)_saturate(2520%)_hue-rotate(360deg)_brightness(101%)_contrast(102%)]"
              />
            </div>
            <div className="relative">
              <span className="font-master-victory text-2xl sm:text-3xl font-bold text-zinc-950 tracking-wider leading-none">
                DECENT
              </span>
              <div className="absolute -bottom-1.5 left-0 w-full h-1.5 pointer-events-none">
                <Image
                  src="/underline-stroke.png"
                  alt="Underline"
                  width={100}
                  height={10}
                  className="w-full h-full object-fill [filter:invert(52%)_sepia(95%)_saturate(2520%)_hue-rotate(360deg)_brightness(101%)_contrast(102%)]"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
