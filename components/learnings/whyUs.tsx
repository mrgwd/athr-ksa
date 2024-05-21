import { Airdrop, Moneys, People, Profile, Rank, Timer } from 'iconsax-react'
import Feature from '../Feature'
import Section from '../Section'

export default function WhyUs() {
  return (
    <Section name="learnings.whyUs">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
