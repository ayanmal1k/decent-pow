'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Check, User, Users } from 'lucide-react'

export default function PackagesSection() {
  return (
    <section className="relative w-full bg-white text-zinc-900 py-16 sm:py-24 lg:py-28 overflow-hidden selection:bg-[#FE7402] selection:text-white">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* ================= SECTION TITLE ================= */}
        <div className="relative inline-flex flex-col items-start mb-12 sm:mb-16 select-none">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-master-victory text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-black tracking-wide uppercase leading-none"
          >
            SIMPLE PACKAGES.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-44 sm:w-56 -mt-1 sm:-mt-2 pointer-events-none origin-left"
          >
            <Image
              src="/underline-stroke.png"
              alt="Stroke"
              width={240}
              height={28}
              className="w-full h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(254,116,2,0.4)]"
            />
          </motion.div>
        </div>


        {/* ================= 2 CARDS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch">
          
          {/* ================= CARD 1: INDIVIDUAL SUPPORT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              
              {/* Left Column Content */}
              <div className="sm:col-span-9 flex flex-col items-start">
                
                {/* Header Icon + Label */}
                <div className="flex items-center gap-3 mb-5 select-none">
                  <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center text-white shadow-sm">
                    <User className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <h3 className="font-sans font-extrabold text-sm sm:text-base md:text-[1.05rem] tracking-wider text-black uppercase">
                    INDIVIDUAL SUPPORT
                  </h3>
                </div>

                {/* Price Badge on Fat Orange Brush SVG */}
                <div className="relative inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 mb-4 select-none">
                  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none drop-shadow-[0_6px_16px_rgba(254,116,2,0.45)]">
                    <svg
                      viewBox="0 0 240 60"
                      className="w-full h-full fill-[#FE7402]"
                      preserveAspectRatio="none"
                    >
                      <path d="M 12 28 C 8 14, 18 6, 38 4 C 80 2, 170 3, 210 5 C 230 7, 235 15, 232 30 C 229 42, 220 50, 200 52 C 160 55, 68 56, 32 53 C 15 51, 14 39, 12 28 Z" />
                      <path d="M 5 26 C 2 29, 1 33, 6 35 C 12 36, 17 34, 14 27 Z" fill="#E66800" />
                      <path d="M 228 20 C 234 22, 238 25, 235 30 C 230 33, 225 32, 227 23 Z" fill="#E66800" />
                    </svg>
                  </div>
                  <span className="relative z-10 font-sans font-black text-2xl sm:text-3xl text-white tracking-wide uppercase italic pt-0.5">
                    $100 / WEEK
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-600 font-medium leading-relaxed mb-6">
                  Dedicated personal support across my Web3 services.
                </p>

                {/* Feature Checklist */}
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-zinc-800">
                    <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FE7402] stroke-[3.5] shrink-0" />
                    <span>Community / moderation support</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-zinc-800">
                    <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FE7402] stroke-[3.5] shrink-0" />
                    <span>Raiding &amp; shilling support</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-zinc-800">
                    <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FE7402] stroke-[3.5] shrink-0" />
                    <span>Growth strategy &amp; execution</span>
                  </li>
                </ul>

              </div>

              {/* Right Column: Floating Black Crown */}
              <div className="sm:col-span-3 flex justify-end items-start pt-2 select-none pointer-events-none">
                <div className="w-12 sm:w-14 opacity-90">
                  <Image
                    src="/crown.png"
                    alt="Crown"
                    width={80}
                    height={65}
                    className="w-full h-auto object-contain brightness-0"
                  />
                </div>
              </div>

            </div>
          </motion.div>


          {/* ================= CARD 2: MASSIVE RAIDER TEAM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              
              {/* Left Column Content */}
              <div className="sm:col-span-8 flex flex-col items-start">
                
                {/* Header Icon + Label */}
                <div className="flex items-center gap-3 mb-5 select-none">
                  <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center text-white shadow-sm">
                    <Users className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <h3 className="font-sans font-extrabold text-sm sm:text-base md:text-[1.05rem] tracking-wider text-black uppercase">
                    MASSIVE RAIDER TEAM
                  </h3>
                </div>

                {/* Price Badge on Fat Orange Brush SVG */}
                <div className="relative inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 mb-4 select-none">
                  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none drop-shadow-[0_6px_16px_rgba(254,116,2,0.45)]">
                    <svg
                      viewBox="0 0 200 60"
                      className="w-full h-full fill-[#FE7402]"
                      preserveAspectRatio="none"
                    >
                      <path d="M 12 28 C 8 14, 18 6, 38 4 C 75 2, 140 3, 175 5 C 192 7, 196 15, 194 30 C 191 42, 182 50, 168 52 C 135 55, 60 56, 30 53 C 14 51, 14 39, 12 28 Z" />
                      <path d="M 5 26 C 2 29, 1 33, 6 35 C 12 36, 17 34, 14 27 Z" fill="#E66800" />
                      <path d="M 190 20 C 196 22, 199 25, 197 30 C 192 33, 188 32, 190 23 Z" fill="#E66800" />
                    </svg>
                  </div>
                  <span className="relative z-10 font-sans font-black text-2xl sm:text-3xl text-white tracking-wide uppercase italic pt-0.5">
                    $200
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-600 font-medium leading-relaxed mb-6">
                  For projects that need a coordinated team for campaign execution.
                </p>

                {/* Feature Checklist */}
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-zinc-800">
                    <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FE7402] stroke-[3.5] shrink-0" />
                    <span>50+ raider team capability</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-zinc-800">
                    <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FE7402] stroke-[3.5] shrink-0" />
                    <span>Verified X accounts</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-zinc-800">
                    <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FE7402] stroke-[3.5] shrink-0" />
                    <span>Coordinated raid execution</span>
                  </li>
                </ul>

              </div>

              {/* Right Column: Crown from Public + BIGGER TEAM BIGGER RESULTS */}
              <div className="sm:col-span-4 flex flex-col items-start sm:items-end justify-start select-none pointer-events-none pt-2 sm:pt-4">
                
                {/* Orange Crown from Public Folder */}
                <div className="w-9 sm:w-11 mb-1 self-start sm:self-end">
                  <Image
                    src="/crown.png"
                    alt="Crown"
                    width={70}
                    height={55}
                    className="w-full h-auto object-contain filter drop-shadow-sm"
                  />
                </div>

                {/* BIGGER TEAM BIGGER RESULTS Text */}
                <div className="flex flex-col items-start text-left">
                  <div className="font-master-victory text-lg sm:text-xl md:text-2xl font-bold text-black tracking-wide flex flex-col space-y-0.5 leading-tight drop-shadow-sm">
                    <span>BIGGER</span>
                    <span className="pl-1">TEAM</span>
                    <span>BIGGER</span>
                    <span className="pl-1">RESULTS</span>
                  </div>
                  {/* Orange Brush Underline */}
                  <div className="w-20 sm:w-24 mt-1.5 -ml-1">
                    <Image
                      src="/underline-stroke.png"
                      alt="Stroke"
                      width={120}
                      height={18}
                      className="w-full h-auto object-contain filter drop-shadow-[0_2px_6px_rgba(254,116,2,0.6)]"
                    />
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
