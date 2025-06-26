import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  {
    src: "https://placehold.co/600x400.png",
    alt: "Cattle grazing in the field",
    hint: "grazing cattle",
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "Freshly made yogurt",
    hint: "yogurt pot",
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "A view of the fish ponds",
    hint: "fish pond",
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "A zebra in the zoo area",
    hint: "zebra",
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "Lush cornfields under the sun",
    hint: "corn field",
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "Children enjoying the recreation park",
    hint: "children playing",
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "An ostrich at the farm zoo",
    hint: "ostrich",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium">
            Gallery
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            A Glimpse of Life at Nunana
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore the vibrant life and picturesque landscapes of Nunana Smart
            Farm through our gallery.
          </p>
        </div>
        <div className="mx-auto max-w-6xl pt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                          data-ai-hint={image.hint}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
