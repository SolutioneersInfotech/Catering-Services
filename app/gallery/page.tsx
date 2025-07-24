import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface GalleryImage {
  src: string
  alt: string
  category: string
}

export default function GalleryPage() {
  const galleryImages: GalleryImage[] = [
    // Wedding Images
    {
      src: "/placeholder.svg?height=400&width=600&text=Wedding+1",
      alt: "Elegant wedding reception setup",
      category: "weddings",
    },
    { src: "/placeholder.svg?height=400&width=600&text=Wedding+2", alt: "Wedding cocktail hour", category: "weddings" },
    { src: "/placeholder.svg?height=400&width=600&text=Wedding+3", alt: "Wedding dessert table", category: "weddings" },
    {
      src: "/placeholder.svg?height=400&width=600&text=Wedding+4",
      alt: "Wedding dinner service",
      category: "weddings",
    },
    { src: "/placeholder.svg?height=400&width=600&text=Wedding+5", alt: "Wedding appetizers", category: "weddings" },
    { src: "/placeholder.svg?height=400&width=600&text=Wedding+6", alt: "Wedding cake display", category: "weddings" },

    // Corporate Images
    {
      src: "/placeholder.svg?height=400&width=600&text=Corporate+1",
      alt: "Corporate lunch buffet",
      category: "corporate",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Corporate+2",
      alt: "Corporate event catering",
      category: "corporate",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Corporate+3",
      alt: "Business meeting refreshments",
      category: "corporate",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Corporate+4",
      alt: "Corporate gala dinner",
      category: "corporate",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Corporate+5",
      alt: "Conference catering setup",
      category: "corporate",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Corporate+6",
      alt: "Corporate cocktail reception",
      category: "corporate",
    },

    // Private Party Images
    { src: "/placeholder.svg?height=400&width=600&text=Party+1", alt: "Birthday party catering", category: "private" },
    { src: "/placeholder.svg?height=400&width=600&text=Party+2", alt: "Anniversary celebration", category: "private" },
    {
      src: "/placeholder.svg?height=400&width=600&text=Party+3",
      alt: "Holiday party food display",
      category: "private",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Party+4",
      alt: "Graduation party catering",
      category: "private",
    },
    { src: "/placeholder.svg?height=400&width=600&text=Party+5", alt: "Baby shower food setup", category: "private" },
    {
      src: "/placeholder.svg?height=400&width=600&text=Party+6",
      alt: "Retirement party catering",
      category: "private",
    },

    // Food Images
    { src: "/placeholder.svg?height=400&width=600&text=Food+1", alt: "Gourmet appetizers", category: "food" },
    { src: "/placeholder.svg?height=400&width=600&text=Food+2", alt: "Main course presentation", category: "food" },
    { src: "/placeholder.svg?height=400&width=600&text=Food+3", alt: "Dessert selection", category: "food" },
    { src: "/placeholder.svg?height=400&width=600&text=Food+4", alt: "Seafood platter", category: "food" },
    { src: "/placeholder.svg?height=400&width=600&text=Food+5", alt: "Vegetarian options", category: "food" },
    { src: "/placeholder.svg?height=400&width=600&text=Food+6", alt: "Signature cocktails", category: "food" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Gallery of catering events"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4">Our Catering Gallery</h1>
          <p className="font-opensans text-xl text-white max-w-2xl">Browse our portfolio of past events and culinary creations.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold mb-4">Showcasing Our Finest Work</h2>
            <p className="font-opensans text-gray-600 max-w-2xl mx-auto">
              Explore our gallery to see examples of our catering services for various events and occasions.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-8">
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="weddings">Weddings</TabsTrigger>
              <TabsTrigger value="corporate">Corporate</TabsTrigger>
              <TabsTrigger value="private">Private Parties</TabsTrigger>
              <TabsTrigger value="food">Food & Beverages</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-md group">
                    <div className="relative h-64">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {["weddings", "corporate", "private", "food"].map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages
                    .filter((image) => image.category === category)
                    .map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-lg shadow-md group">
                        <div className="relative h-64">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 md:px-6 bg-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="font-opensans text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our catering services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The presentation was absolutely stunning, and the food was delicious. Our wedding guests couldn't stop talking about the catering!",
                author: "Emily & David",
                event: "Wedding Reception",
              },
              {
                quote:
                  "Professional, punctual, and the food was exceptional. Our corporate event was a huge success thanks to The Halwai.",
                author: "Michael Thompson",
                event: "Annual Corporate Gala",
              },
              {
                quote:
                  "The attention to detail was impressive. From the menu planning to the execution, everything was perfect for our anniversary celebration.",
                author: "Jennifer Wilson",
                event: "25th Anniversary Party",
              },
              {
                quote:
                  "The team went above and beyond to accommodate our last-minute requests. The service was impeccable and the food was outstanding.",
                author: "Robert Johnson",
                event: "Product Launch Event",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <blockquote className="text-gray-700 mb-4 italic">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="bg-amber-100 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-amber-700 font-semibold">
                      {testimonial.author.split(" ")[0][0]}
                      {testimonial.author.split(" ")[1] ? testimonial.author.split(" ")[1][0] : ""}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 md:px-6 bg-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-cinzel text-3xl font-bold mb-4">Ready to Create Your Own Memorable Event?</h2>
          <p className="font-opensans max-w-2xl mx-auto mb-8">
            Contact us today to discuss your catering needs and let us help you create a memorable experience for your
            guests.
          </p>
          <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 font-lato">
            <Link href="/booking" className="flex items-center">
              Book Your Catering <Calendar className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
