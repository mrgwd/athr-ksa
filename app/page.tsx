"use client";
import { Readex_Pro } from "next/font/google";
import messages from "@/app/_i18n/messages/ar.json";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import Home from "./_components/home/Home";
import NavBar from "./_components/common/NavBar";
import Contact from "./_components/common/Contact";
import FAQsSection from "./_components/common/FAQsSection";
import Features from "./_components/common/Features";
import Newsletter from "./_components/common/Newsletter";
import ServicesSection from "./_components/common/ServicesSection";
import About from "./_components/home/About";
import BlogSection from "./_components/home/BlogSection";
import Clients from "./_components/home/Clients";
import HowWeWork from "./_components/home/HowWeWork";
import Footer from "./_components/common/Footer";
import FloatingContactButton from "./_components/common/FloatingButtons";
const readex_pro = Readex_Pro({ subsets: ["latin"] });
type Messages = {
  [id: string]: AbstractIntlMessages | string;
};
export default function RootPage() {
  return (
    <html dir="rtl" lang="ar">
      <body className={`${readex_pro.className} bg-slate-50`}>
        <NextIntlClientProvider
          locale="ar"
          messages={messages as typeof messages & Messages}
        >
          <NavBar />
          <Home />
          <About />
          <ServicesSection />
          <Features />
          <BlogSection />
          <HowWeWork />
          <Clients />
          <FAQsSection name="FAQsSection" />
          <Contact />
          <Newsletter /*locale={params.locale}*/ />
          <FloatingContactButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
