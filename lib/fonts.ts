import localFont from 'next/font/local'
import { Plus_Jakarta_Sans, Permanent_Marker } from 'next/font/google'

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marker',
  display: 'swap',
})

export const masterVictory = localFont({
  src: [
    {
      path: '../public/master-victory-brush-font/Master-Victory-Demo-BF6a4c6fb62cec5.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/master-victory-brush-font/Master-Victory-Italic-Demo-BF6a4c6fb63edbc.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-master-victory',
  display: 'swap',
})

