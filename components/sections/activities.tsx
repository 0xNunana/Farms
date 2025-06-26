import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wheat, Rabbit, Component } from "lucide-react";

const activities = {
  crops: {
    title: "Sustainable Crops",
    description:
      "We cultivate a variety of crops using sustainable methods to ensure soil health and bountiful harvests.",
    items: [
      {
        name: "Corn",
        image: "/corn.jpg",
        hint: "corn field",
      },
      {
        name: "Soybeans",
        image: "/beans.jpg",
        hint: "soybean plant",
      },
      {
        name: "Brachiaria Grass",
        image: "/grass.jpg",
        hint: "tall grass",
      },
    ],
  },
  livestock: {
    title: "Ethical Livestock",
    description:
      "Our animals are raised with care in spacious, natural environments, ensuring their well-being and the quality of our products.",
    items: [
      {
        name: "Cattle",
        image: "/cattle1.jpg",
        hint: "cattle herd",
      },
      {
        name: "Goats",
        image: "/goats1.jpg",
        hint: "goat herd",
      },
      {
        name: "Rabbits",
        image: "/rabbits1.jpg",
        hint: "white rabbit",
      },
      {
        name: "Poultry",
        image: "/chicken.jpg",
        hint: "chicken",
      },
      {
        name: "Catfish Farming",
        image: "/pond.jpg",
        hint: "fish farm",
      },
    ],
  },
  feedProduction: {
    title: "Quality Feed Production",
    description:
      "We produce our own high-quality animal feeds from our farm-grown ingredients, ensuring a nutritious diet for our livestock.",
    items: [
      {
        name: "Ingredient Sourcing",
        image: "/sourcing1.jpg",
        hint: "grain silo",
      },
      {
        name: "Milling Process",
        image: "/milling1.jpg",
        hint: "industrial mill",
      },
      {
        name: "Final Product",
        image: "/final.jpg",
        hint: "animal feed",
      },
    ],
  },
};

export function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium">
            Our Activities
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            The Heartbeat of the Farm
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From field to feed, our integrated approach to farming ensures
            quality and sustainability at every step. Explore the core
            activities that define Nunana Smart Farm.
          </p>
        </div>
        <div className="mx-auto max-w-5xl pt-12">
          <Tabs defaultValue="crops" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="crops">
                <Wheat className="mr-2 h-4 w-4" />
                Crops
              </TabsTrigger>
              <TabsTrigger value="livestock">
                <Rabbit className="mr-2 h-4 w-4" />
                Livestock
              </TabsTrigger>
              <TabsTrigger value="feedProduction">
                <Component className="mr-2 h-4 w-4" />
                Feed Production
              </TabsTrigger>
            </TabsList>
            <TabsContent value="crops" className="mt-6">
              <ActivityContent data={activities.crops} />
            </TabsContent>
            <TabsContent value="livestock" className="mt-6">
              <ActivityContent data={activities.livestock} />
            </TabsContent>
            <TabsContent value="feedProduction" className="mt-6">
              <ActivityContent data={activities.feedProduction} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function ActivityContent({
  data,
}: {
  data: {
    title: string;
    description: string;
    items: { name: string; image: string; hint: string }[];
  };
}) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="font-headline text-2xl font-bold">{data.title}</h3>
        <p className="text-muted-foreground">{data.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) => (
          <Card
            key={item.name}
            className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <CardHeader className="p-0">
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover"
                data-ai-hint={item.hint}
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="font-headline text-lg">
                {item.name}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
