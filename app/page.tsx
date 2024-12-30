import Hero from "@/components/shared/canvas/hero";
import Carousel from "@/components/shared/canvas/carousel";
import CTA from "@/components/shared/canvas/cta";
import Pricing from "@/components/shared/canvas/pricing";
import FAQs from "@/components/shared/canvas/faqs";
import Testimonials from "@/components/shared/canvas/testimonials";

export default function Home() {
  return (
    <div>
      <div className='h-screeen'>
        {/* Hero Section */}
        <Hero />
        
        {/* Carousel for Mobile Only */}
        <div className="block lg:hidden">
          <Carousel />
        </div>
        <Pricing />
        <Testimonials />
        <FAQs />
        <CTA />
      </div>
    </div>
  )
}