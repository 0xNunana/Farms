"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Category = "all" | "dairy" | "meat" | "produce" | "feed";

const products = [
  {
    name: "Fresh Yogurt",
    category: "dairy",
    image: "/yogurt.jpg",
    hint: "yogurt pot",
  },
  {
    name: "Lorianne Sausages",
    category: "meat",
    image: "/sausage.jpg",
    hint: "sausages",
  },
  {
    name: "Free-Range Eggs",
    category: "produce",
    image: "/eggs.jpg",
    hint: "egg carton",
  },
  {
    name: "Organic Milk",
    category: "dairy",
    image: "/freshmilk.jpg",
    hint: "milk bottle",
  },
  {
    name: "Catfish",
    category: "meat",
    image: "/catfish.jpg",
    hint: "smoked fish",
  },
  {
    name: "Premium Animal Feeds",
    category: "feed",
    image: "/feed.jpg",
    hint: "animal feed",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Products", value: "all" },
  { label: "Dairy", value: "dairy" },
  { label: "Meat & Fish", value: "meat" },
  { label: "Produce", value: "produce" },
  { label: "Animal Feeds", value: "feed" },
];

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section
      id="products"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            Our Products
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            From Our Farm to Your Table
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover the fresh, wholesome, and delicious products grown and
            crafted with care at Nunana Smart Farm.
          </p>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <div className="flex justify-center flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                className={cn(
                  "transition-all",
                  activeFilter === filter.value &&
                    "bg-primary text-primary-foreground"
                )}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <Card
              key={product.name}
              className="group overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="p-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={product.hint}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="font-headline text-xl">
                  {product.name}
                </CardTitle>
                <Badge variant="secondary" className="mt-2 capitalize">
                  {product.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
