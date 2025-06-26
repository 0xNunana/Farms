import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PawPrint } from "lucide-react";

const zooAnimals = [
  "Zebras",
  "Ostriches",
  "Peacocks",
  "Antelopes",
  "Tortoises",
  "Camels",
  "Monkeys",
  "Parrots",
  "Ponies",
];

export function ZooSection() {
  return (
    <section id="zoo" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium self-start">
              Zoo & Recreation
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Explore, Learn, and Unwind
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Beyond the fields, Nunana offers a world of discovery. Our
              recreational park and zoo provide a unique opportunity to connect
              with nature, learn about diverse animal species, and enjoy a day
              of family fun.
            </p>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <PawPrint className="h-5 w-5 text-primary" />
                  Meet Our Residents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {zooAnimals.map((animal) => (
                    <div
                      key={animal}
                      className="rounded-full bg-accent/20 px-3 py-1 text-sm text-accent-foreground/80"
                    >
                      {animal}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Plan Your Visit
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-lg">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Map of Nunana Smart Farm Zoo and Recreation Park"
                layout="fill"
                objectFit="cover"
                className="rounded-xl shadow-2xl"
                data-ai-hint="farm map"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-headline text-2xl font-bold">
                  Virtual Farm Tour
                </h3>
                <p className="text-sm">
                  Coming Soon: An interactive 3D exploration!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
