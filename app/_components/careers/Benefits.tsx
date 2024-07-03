import { Briefcase, Happyemoji, Moneys } from "iconsax-react";
import Feature from "../common/Feature";
import Section from "../common/Section";

export default function Benefits() {
  return (
    <Section name="careers.benefits">
      <div className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-4 sm:grid-cols-3 lg:gap-y-12 xl:gap-y-16">
        <Feature feature="careers.benefits.1">
          <Moneys variant="Bulk" />
        </Feature>
        <Feature feature="careers.benefits.2">
          <Happyemoji variant="Bulk" />
        </Feature>
        <Feature feature="careers.benefits.3">
          <Briefcase variant="Bulk" />
        </Feature>
      </div>
    </Section>
  );
}
