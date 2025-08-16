"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-400 ${
        isScrolled ? "bg-white shadow-md" : "bg-gray-900"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-40 h-10 sm:w-48 sm:h-16 my-2">
            <Image
              src="/main-logo.png"
              alt="Our culinary team"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-lato transition-colors ${
                pathname === item.href
                  ? isScrolled
                    ? "text-amber-700"
                    : "text-amber-300"
                  : isScrolled
                  ? "text-gray-700 hover:text-amber-700"
                  : "text-white hover:text-amber-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="font-lato bg-amber-600 hover:bg-amber-700 text-white ml-2">
            <Link href="/booking">Book Now</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className={isScrolled ? "text-gray-700" : "text-white"} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium ${
                    pathname === item.href
                      ? "text-amber-700"
                      : "text-gray-700 hover:text-amber-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-amber-600 hover:bg-amber-700 text-white mt-4">
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
