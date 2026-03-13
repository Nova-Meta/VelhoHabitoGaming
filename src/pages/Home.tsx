import { HeroSection } from '../components/sections/HeroSection'
import { HowItWorksSection } from '../components/sections/HowItWorksSection'
import { FeaturedGames } from '../components/sections/FeaturedGames'
import { Schedule } from '../components/sections/Schedule'
import { CommunitySection } from '../components/sections/CommunitySection'
import { LocationSection } from '../components/sections/LocationSection'
import { MenuPreview } from '../components/sections/MenuPreview'

export function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturedGames />
      <Schedule />
      <CommunitySection />
      <LocationSection />
      <MenuPreview />
    </>
  )
}
