import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          className="w-full h-full object-cover brightness-70"
          src="/herovideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero.jpg" // Optional: fallback image
        />
      </div>
      {/* <div
        className="absolute inset-0 bg-cover bg-center brightness-70"
        style={{ backgroundImage: "url('/herovideo.mp4')" }}
        data-ai-hint="lush farmland"
      ></div> */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Nunana Farms
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-primary-foreground/90 md:text-xl">
            Cultivating a sustainable future through smart agriculture,
            community, and nature.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="#about">Discover Our Story</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className=" hover:bg-accent/90 text-white"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
