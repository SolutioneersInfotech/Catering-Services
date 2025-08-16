"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Calendar, Award, Users, UtensilsCrossed } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import AboutSection from "@/components/about-section"



export default function Home() {

  const images = [ "/image-2.jpg", "/image-3.jpg"];

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }) // change delay as needed
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Carousel plugins={[plugin.current]} opts={{ loop: true }} className="h-full w-full overflow-hidden">
          <CarouselContent className="flex h-full">
            {images.map((src, index) => (
              <CarouselItem key={index} className="relative h-[600px] w-full min-w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover brightness-[0.7] blur-sm"
                  priority={index === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-2xl md:text-6xl font-cinzel text-white mb-4">EXQUISITE CATERING FOR MEMORABLE EVENTS</h1>
          <p className="font-opensans text-xl text-white mb-8 max-w-2xl">
            Elevate your gatherings with our premium catering services, tailored to your unique taste and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-lato bg-amber-600 hover:bg-amber-700 text-white">
              <Link href="/booking" className="flex items-center">
                Book Now <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-lato bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
            >
              <Link href="/menu" className="flex items-center">
                Explore Our Menu <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
       <AboutSection />

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12">Why Choose Our Catering Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-amber-100 p-3 rounded-full mb-4">
                    <UtensilsCrossed className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-baloo mb-2">Gourmet Cuisine</h3>
                  <p className="font-opensans text-gray-600 text-lg">
                    Our expert chefs craft exquisite dishes using only the freshest, highest-quality ingredients.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-amber-100 p-3 rounded-full mb-4">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-baloo mb-2">Award-Winning Service</h3>
                  <p className="font-opensans text-gray-600 text-lg">
                    With over 15+ years of experience, our professional staff ensures flawless execution.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-amber-100 p-3 rounded-full mb-4">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-baloo mb-2">Customized Experience</h3>
                  <p className="font-opensans text-gray-600 text-lg">
                    We tailor our menus and services to match your event's unique requirements and vision.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair mb-4">Our Catering Services</h2>
            <p className="font-opensans text-lg text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we offer a range of catering services to make your event
              unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Wedding Catering"
              description="Make your special day memorable with our elegant wedding catering packages."
              imageSrc="/wedding.jpg"
              href="/services#weddings"
            />
            <ServiceCard
              title="Corporate Events"
              description="Impress your clients and colleagues with our professional corporate catering."
              imageSrc="/corporate.jpg"
              href="/services#corporate"
            />
            <ServiceCard
              title="Private Parties"
              description="Celebrate birthdays, anniversaries, and special occasions with customized menus."
              imageSrc="/birthday.jpg"
              href="/services#private"
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild className="font-lato">
              <Link href="/services" className="flex items-center">
                View All Services <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair mb-4">Sample Our Menu</h2>
            <p className="font-opensans text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse menu options featuring gourmet appetizers, entrées, and desserts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Appetizers", "Main Courses", "Desserts", "Beverages"].map((category) => (
              <Card key={category} className="overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={`/${category.toLowerCase().replace(" ", "-")}.jpg`}
                    alt={category}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{category}</h3>
                  <Link
                    href={`/menu#${category.toLowerCase().replace(" ", "-")}`}
                    className="text-amber-600 hover:text-amber-700 text-sm flex items-center mt-2"
                  >
                    View Options <ChevronRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="font-lato">
              <Link href="/menu" className="flex items-center">
                View Full Menu <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="bg-amber-600 text-white py-2 px-4 overflow-hidden whitespace-nowrap">
  <marquee behavior="scroll" direction="left" scrollamount="5" className="text-sm">
    🎉 Grand opening! | 🍲 New menu items launched! | 📅 Book your event today! | 🧁 Free dessert with every order! | 🎁 Special Diwali discounts available!
  </marquee>
</div>


      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 bg-amber-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-playfair text-center mb-12">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The food was absolutely delicious and the service was impeccable. Our wedding guests couldn't stop raving about the catering!"
              author="Sarah & Michael"
              role="Wedding Clients"
              rating={5}
            />
            <TestimonialCard
              quote="Professional, punctual, and the presentation was stunning. Our corporate event was a huge success thanks to their attention to detail."
              author="James Wilson"
              role="Marketing Director"
              rating={5}
            />
            <TestimonialCard
              quote="The menu options were diverse and accommodated all our guests' dietary restrictions. The staff was friendly and efficient."
              author="Emily Rodriguez"
              role="Birthday Celebration"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-4">Ready to Plan Your Event?</h2>
          <p className="font-opensans text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss your catering needs and receive a customized quote for your upcoming event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100">
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-amber-700 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
