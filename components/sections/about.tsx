import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              About Us
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Rooted in Passion, Growing with Purpose
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nunana Smart Farm is more than just a farm; it's a testament to a
              vision of sustainable agriculture and community empowerment. Our
              journey began with a simple goal: to cultivate high-quality,
              nutritious food while nurturing the land we depend on.
            </p>
            <Separator />
            <div className="space-y-2">
              <h3 className="font-headline text-2xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To be a leading provider of sustainable agricultural products
                and a center for agritourism, education, and recreation,
                contributing positively to our community and the environment.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md shadow-lg">
              <CardHeader className="items-center text-center">
                <Image
                  src="/Niunana.jpeg"
                  alt="Founder Kudaya Paul Yao"
                  width={120}
                  height={120}
                  className="rounded-full"
                  data-ai-hint="founder portrait"
                />
                <div className="grid gap-0.5">
                  <CardTitle className="font-headline text-2xl">
                    Kudaya Paul Yao
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Founder & Visionary
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Kudaya Paul Yao, the heart and soul behind Nunana Smart Farm,
                  has dedicated his life to innovative farming. His leadership
                  and commitment to sustainability have transformed a humble
                  beginning into a thriving ecosystem of agricultural excellence
                  and natural harmony.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
