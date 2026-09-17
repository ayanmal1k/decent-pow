'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/70 shadow-sm py-2 sm:py-2.5'
          : 'bg-transparent border-b border-transparent py-3 sm:py-4'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: Brand Logo (Crown + DECENT) - Compact & Elegant */}
        <a 
          href="#" 
          className="group flex items-center gap-2 select-none focus:outline-none"
        >
          <div className="w-6 sm:w-7 pointer-events-none transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/crown.png"
              alt="Crown Logo"
              width={50}
              height={40}
              priority
              className="w-full h-auto object-contain [filter:invert(52%)_sepia(95%)_saturate(2520%)_hue-rotate(360deg)_brightness(101%)_contrast(102%)] drop-shadow-sm"
            />
          </div>
          <div className="relative">
            <span className="font-master-victory text-xl sm:text-2xl font-bold text-zinc-950 tracking-wider leading-none">
              DECENT
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-1 pointer-events-none">
              <Image
                src="/underline-stroke.png"
                alt="Underline"
                width={70}
                height={6}
                className="w-full h-full object-fill [filter:invert(52%)_sepia(95%)_saturate(2520%)_hue-rotate(360deg)_brightness(101%)_contrast(102%)]"
              />
            </div>
          </div>
        </a>

        {/* Right: "LET'S WORK TOGETHER" CTA Button - Sleek & Compact */}
        <motion.a
          href="https://t.me/real_decent1"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#FE7402] text-zinc-950 hover:bg-[#ff841a] font-sans font-black text-xs sm:text-[13px] tracking-wider uppercase shadow-[0_4px_14px_rgba(254,116,2,0.3)] transition-all select-none"
        >
          <span className="truncate">LET&apos;S WORK TOGETHER</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[3] transition-transform group-hover:translate-x-1 shrink-0" />
        </motion.a>

      </div>
    </header>
  )
}
