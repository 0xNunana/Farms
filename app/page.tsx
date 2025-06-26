import { AboutSection } from "@/components/sections/about";
import { ActivitiesSection } from "@/components/sections/activities";
import { GallerySection } from "@/components/sections/gallery";
import { HeroSection } from "@/components/sections/hero";
import { ProductsSection } from "@/components/sections/products";
import { SustainabilitySection } from "@/components/sections/sustainability";
import { ZooSection } from "@/components/sections/zoo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ActivitiesSection />
      <ZooSection />
      <SustainabilitySection />
      {/* <GallerySection /> */}
    </div>
  );
}
