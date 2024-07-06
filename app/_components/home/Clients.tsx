"use client";
import Image from "next/image";
import Section from "../common/Section";
import { useRef } from "react";
const logos = [
  require("@/public/images/Clients/logo1.webp"),
  require("@/public/images/Clients/logo2.webp"),
  require("@/public/images/Clients/logo3.webp"),
  require("@/public/images/Clients/logo4.webp"),
  require("@/public/images/Clients/logo5.webp"),
  require("@/public/images/Clients/logo6.webp"),
  require("@/public/images/Clients/logo7.webp"),
  require("@/public/images/Clients/logo8.webp"),
  require("@/public/images/Clients/logo9.webp"),
  require("@/public/images/Clients/logo10.webp"),
  require("@/public/images/Clients/logo11.webp"),
  require("@/public/images/Clients/logo12.webp"),
  require("@/public/images/Clients/logo13.webp"),
  require("@/public/images/Clients/logo14.webp"),
  require("@/public/images/Clients/logo15.webp"),
  // Add other logos dynamically here
];
export default function Clients() {
  const slider = useRef<HTMLDivElement>(null);
  return (
    <Section name="clients">
      <div className="overflow-hidden">
        <div
          ref={slider}
          className="slider no-scrollbar flex grid-cols-3 flex-nowrap items-end gap-2 scroll-smooth child:inline-block child:child:h-16 child:child:w-auto child:min-w-max child:rounded-md child:border child:border-slate-200 child:bg-slate-100 child:child:object-cover child:p-2 child:child:opacity-70 child:grayscale child:transition-all child:delay-100 child-hover:bg-slate-50 child-hover:grayscale-0 sm:flex-wrap sm:justify-center md:child:child:h-16 md:child:p-4"
        >
          {logos.map((logo, index) => (
            <div key={index}>
              <Image src={logo} loading="lazy" alt={`client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
