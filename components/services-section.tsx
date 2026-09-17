'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

interface ServiceItem {
  id: string
  icon: string
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    id: 'community-management',
    icon: '/icons/Untitled design - 2026-09-17T212645.462.png',
    title: 'COMMUNITY\nMANAGEMENT',
    description: 'Keep communities active, organized and welcoming.',
  },
  {
    id: 'moderation',
    icon: '/icons/Untitled design - 2026-09-17T212704.867.png',
    title: 'MODERATION',
    description: 'Maintain a safe, positive and spam-free environment.',
  },
  {
    id: 'raid-management',
    icon: '/icons/Untitled design - 2026-09-17T212714.828.png',
    title: 'RAID\nMANAGEMENT',
    description: 'Organized raids with real engagement and impact.',
  },
  {
    id: 'shilling',
    icon: '/icons/Untitled design - 2026-09-17T212726.682.png',
    title: 'SHILLING',
    description: 'Spread the word, create hype and build momentum.',
  },
  {
    id: 'growth-strategy',
    icon: '/icons/Untitled design - 2026-09-17T212748.377.png',
    title: 'GROWTH\nSTRATEGY',
    description: 'Data-driven strategies for long-term community growth.',
  },
  {
    id: 'community-growth',
    icon: '/icons/Untitled design - 2026-09-17T212739.872.png',
    title: 'COMMUNITY\nGROWTH',
    description: 'Turn audiences into loyal supporters and holders.',
  },
]

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-white text-zinc-900 py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-zinc-100 selection:bg-[#FE7402] selection:text-white">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-14">
        
        {/* ================= HEADER ROW ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-14 mb-14 sm:mb-20">
          
          {/* "MY SERVICES" Banner in Master Victory */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 select-none self-start"
          >
            {/* Custom Black Paint Stroke SVG */}
            <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]">
              <svg
                viewBox="0 0 320 84"
                className="w-full h-full fill-zinc-950"
                preserveAspectRatio="none"
              >
                {/* Organic thick black brush stroke */}
                <path d="M 14 42 C 10 18, 24 8, 52 6 C 118 3, 238 4, 290 8 C 312 11, 318 24, 314 48 C 310 68, 294 78, 268 80 C 200 84, 88 83, 40 78 C 20 75, 16 60, 14 42 Z" />
                {/* Rough painterly bristle edges */}
                <path d="M 4 38 C 1 42, 0 50, 6 52 C 14 54, 20 48, 16 40 Z" fill="#09090b" />
                <path d="M 10 22 C 6 16, 18 10, 30 12 C 22 16, 16 20, 10 22 Z" fill="#09090b" />
                <path d="M 312 32 C 318 34, 322 42, 316 46 C 310 50, 304 46, 308 36 Z" fill="#09090b" />
                <path d="M 302 14 C 312 12, 318 16, 314 22 C 306 22, 302 18, 304 14 Z" fill="#09090b" />
                <path d="M 26 76 C 18 79, 12 74, 16 68 C 22 69, 28 74, 26 76 Z" fill="#09090b" />
                <path d="M 296 68 C 304 70, 308 64, 302 60 C 296 61, 292 66, 296 68 Z" fill="#09090b" />
              </svg>
            </div>

            {/* Master Victory Text */}
            <span className="font-master-victory text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-white tracking-wider uppercase pt-1 drop-shadow-sm">
              MY SERVICES
            </span>

            {/* Orange Underline Stroke from Public */}
            <div className="absolute -bottom-3 sm:-bottom-4 left-6 sm:left-8 w-[75%] max-w-[240px] pointer-events-none select-none z-10">
              <Image
                src="/underline-stroke.png"
                alt="Underline Stroke"
                width={300}
                height={40}
                className="w-full h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(254,116,2,0.4)]"
              />
            </div>
          </motion.div>

          {/* Subtext Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg md:text-[1.12rem] text-zinc-700 font-semibold leading-relaxed max-w-xl self-center"
          >
            Whether a project needs one dedicated operator or a coordinated raid team,
            I focus on execution, engagement and proof of work.
          </motion.p>

        </div>


        {/* ================= 6 SERVICES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-12 sm:gap-y-10 lg:gap-y-0 lg:divide-x lg:divide-zinc-200">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center text-center px-4 sm:px-6 lg:px-4 xl:px-5 transition-transform duration-300"
            >
              {/* Splatter Icon from Public */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center select-none transition-transform duration-400 group-hover:scale-108 group-hover:rotate-2">
                <Image
                  src={service.icon}
                  alt={service.title.replace('\n', ' ')}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-base sm:text-[1.08rem] font-black uppercase tracking-tight text-black leading-tight min-h-[2.75rem] flex items-center justify-center mb-2.5 whitespace-pre-line">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed max-w-[200px] sm:max-w-[220px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
