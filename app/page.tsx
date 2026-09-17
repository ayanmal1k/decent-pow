import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import TeamSection from '@/components/team-section'
import PackagesSection from '@/components/packages-section'
import PowSection from '@/components/pow-section'

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <PackagesSection />
      <PowSection />
    </main>
  )
}
