import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Wheat, HeartPulse, Recycle, CloudSun, Leaf } from "lucide-react";

const sdgData = [
  {
    value: "sdg-2",
    icon: Wheat,
    title: "SDG 2: Zero Hunger",
    content:
      "We contribute to food security by producing high-quality, nutritious food for our local community. Our efficient farming practices aim to increase productivity and reduce post-harvest losses, ensuring a stable food supply.",
  },
  {
    value: "sdg-3",
    icon: HeartPulse,
    title: "SDG 3: Good Health and Well-being",
    content:
      "Our commitment to organic and sustainable farming means our products are free from harmful pesticides, promoting healthier lifestyles. The recreational park also offers a space for physical activity and mental well-being.",
  },
  {
    value: "sdg-12",
    icon: Recycle,
    title: "SDG 12: Responsible Consumption and Production",
    content:
      "We practice a circular economy on the farm by converting waste into valuable resources, such as producing our own animal feed from crop residues. This minimizes waste and promotes sustainable production cycles.",
  },
  {
    value: "sdg-13",
    icon: CloudSun,
    title: "SDG 13: Climate Action",
    content:
      "Our agroforestry practices and sustainable land management help sequester carbon from the atmosphere. We are dedicated to reducing our carbon footprint through renewable energy and water conservation techniques.",
  },
  {
    value: "sdg-15",
    icon: Leaf,
    title: "SDG 15: Life on Land",
    content:
      "The farm serves as a sanctuary for diverse flora and fauna. Our zoo and conservation efforts help protect biodiversity and educate the public about the importance of preserving terrestrial ecosystems.",
  },
];

export function SustainabilitySection() {
  return (
    <section
      id="sustainability"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              Sustainability
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Farming for a Better Planet
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Our commitment to sustainability is woven into everything we do.
              We actively contribute to several UN Sustainable Development Goals
              (SDGs), striving to create a positive impact on the environment
              and society.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <Accordion type="single" collapsible className="w-full">
              {sdgData.map((sdg) => (
                <AccordionItem key={sdg.value} value={sdg.value}>
                  <AccordionTrigger className="text-lg font-headline hover:no-underline">
                    <div className="flex items-center gap-4">
                      <sdg.icon className="h-6 w-6 text-primary" />
                      {sdg.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {sdg.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
