import HeroSection from "@/components/home/HeroSection";
import BgGradient from "@/components/common/BgGradient";
import DemoSection from "@/components/home/DemoSection";
import HowItWorksSection from "@/components/home/HowItWorks";
import PricingSection from "@/components/home/PricingSection";
import CTASection from "@/components/home/CTASection";
import SmoothScroll from "@/components/common/SmoothScroll";

export default function Home() {
  return (
    <div className="relative w-full">
      <SmoothScroll />
      <BgGradient />
      <div className="flex flex-col ">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </div>      
    </div>
  );
}
