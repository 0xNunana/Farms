"use client";

import { Leaf, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#activities", label: "Our Activities" },
  { href: "#zoo", label: "Zoo & Recreation" },
  { href: "#sustainability", label: "Sustainability" },
  //   { href: "#gallery", label: "Gallery" },
];

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          href="#"
          className="flex items-center gap-2 font-bold"
          onClick={() => setMenuOpen(false)}
        >
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl">Nunana Farm</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-6 p-6">
              <Link
                href="#"
                className="flex items-center gap-2 font-bold"
                onClick={() => setMenuOpen(false)}
              >
                <Leaf className="h-6 w-6 text-primary" />
                <span className="font-headline text-xl">Nunana Farm</span>
              </Link>
              <nav className="grid gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-accent"
                    onClick={() => setMenuOpen(false)}
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
