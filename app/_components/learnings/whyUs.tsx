import { Airdrop, Moneys, People, Profile, Rank, Timer } from "iconsax-react";
import Feature from "../common/Feature";
import Section from "../common/Section";

export default async function WhyUs() {
  return (
    <Section name="learnings.whyUs">
      <div className="mx-auto flex max-w-screen-md flex-wrap justify-center gap-4 md:gap-x-20 md:gap-y-12">
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
  );
}
