import { HeroSection } from '../components/sections/HeroSection'
import { FeaturedGames } from '../components/sections/FeaturedGames'
import { CommunitySection } from '../components/sections/CommunitySection'
import { Schedule } from '../components/sections/Schedule'
import { MenuPreview } from '../components/sections/MenuPreview'

export function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedGames />
      <Schedule />
      <CommunitySection />
      <MenuPreview />
    </>
  )
}
