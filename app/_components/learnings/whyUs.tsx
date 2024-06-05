import { Airdrop, Moneys, People, Profile, Rank, Timer } from 'iconsax-react'
import Feature from '../Feature'
import Section from '../Section'

export default async function WhyUs() {
  return (
    <Section name="learnings.whyUs">
      <div className="flex flex-wrap gap-4 md:gap-y-12 md:gap-x-20 justify-center max-w-screen-md mx-auto">
        <Feature feature="learnings.whyUs.1">
          <Rank variant="Bulk" />
        </Feature>
        <Feature feature="learnings.whyUs.2">
          <People variant="Bulk" />
        </Feature>
        <Feature feature="learnings.whyUs.3">
          <Moneys variant="Bulk" />
        </Feature>
        <Feature feature="learnings.whyUs.4">
          <Airdrop variant="Bulk" />
        </Feature>
      </div>
    </Section>
  )
}
