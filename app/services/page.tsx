import Image from "next/image"
import Link from "next/link"
import { Calendar, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="catering-services.png"
          alt="Catering services"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-4">Our Catering Services</h1>
          <p className="text-xl text-white font-opensans max-w-2xl">
            Tailored catering solutions for every occasion, delivered with excellence.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold mb-4">Comprehensive Catering Solutions</h2>
            <p className="text-gray-600 font-opensans max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we offer a range of catering services to make your event
              unforgettable.
            </p>
          </div>

          {/* Wedding Catering */}
          <div id="weddings" className="mb-20 scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <Image
                  src="wedding-catering.jpg"
                  alt="Wedding catering"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-playfair text-2xl mb-4">Wedding Catering</h3>
                <p className="font-opensans text-gray-600 mb-6">
                  Your wedding day deserves exceptional cuisine. Our wedding catering services are designed to create a
                  memorable culinary experience for you and your guests, with customized menus that reflect your taste
                  and style.
                </p>
                <ul className="space-y-2 mb-6 font-opensans">
                  {[
                    "Customized wedding menus",
                    "Cocktail hour appetizers and hors d'oeuvres",
                    "Plated dinners or elegant buffets",
                    "Wedding cake and dessert tables",
                    "Bar service and signature cocktails",
                    "Professional service staff",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <span className="font-opensans">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/booking" className="flex items-center font-lato">
                    Book Wedding Catering <Calendar className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Corporate Events */}
          <div id="corporate" className="mb-20 scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-playfair mb-4">Corporate Event Catering</h3>
                <p className="text-gray-600 font-opensans mb-6">
                  Impress your clients, partners, and team members with our professional corporate catering services.
                  From business lunches to company galas, we deliver exceptional food and service.
                </p>
                <ul className="space-y-2 mb-6 font-opensans">
                  {[
                    "Breakfast and lunch meetings",
                    "Corporate galas and award ceremonies",
                    "Product launches and client events",
                    "Conference and seminar catering",
                    "Team building events",
                    "Holiday parties and celebrations",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <span className="font-opensans">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white font-lato">
                  <Link href="/booking" className="flex items-center">
                    Book Corporate Catering <Calendar className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[400px] order-1 lg:order-2">
                <Image
                  src="corporate-event-catering.jpg"
                  alt="Corporate catering"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Private Parties */}
          <div id="private" className="mb-20 scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <Image
                  src="private-party.jpg"
                  alt="Private party catering"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-playfair mb-4">Private Party Catering</h3>
                <p className="text-gray-600 font-opensans mb-6">
                  Celebrate life's special moments with our private party catering services. From birthdays and
                  anniversaries to holiday gatherings, we'll help you create a memorable event.
                </p>
                <ul className="space-y-2 mb-6 font-opensans">
                  {[
                    "Birthday and anniversary celebrations",
                    "Holiday parties and family gatherings",
                    "Graduation parties",
                    "Baby and bridal showers",
                    "Retirement parties",
                    "Intimate dinner parties",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <span className="font-opensans">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white font-lato">
                  <Link href="/booking" className="flex items-center">
                    Book Private Party Catering <Calendar className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div id="additional" className="scroll-mt-20">
            <h3 className="text-2xl font-playfair font-bold mb-8 text-center">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Menu Customization",
                  desc: "Work with our chefs to create a custom menu tailored to your preferences, dietary requirements, and event theme.",
                },
                {
                  title: "Staffing Services",
                  desc: "Professional servers, bartenders, and event staff to ensure your event runs smoothly from start to finish.",
                },
                {
                  title: "Equipment Rental",
                  desc: "Tables, chairs, linens, tableware, and serving equipment to complement your catering service.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-playfair font-semibold mb-3">{item.title}</h4>
                    <p className="text-gray-600 font-opensans mb-4">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold mb-4">Ready to Elevate Your Event?</h2>
          <p className="max-w-2xl mx-auto mb-8 font-opensans">
            Contact us today to discuss your catering needs and receive a customized quote for your upcoming event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 font-lato">
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-amber-700 hover:bg-gray-100 font-lato">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
