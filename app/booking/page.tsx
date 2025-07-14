import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Users, UtensilsCrossed, MapPin, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BookingForm from "@/components/booking-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BookingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Booking your catering service"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Book Your Catering</h1>
          <p className="text-xl text-white max-w-2xl">
            Let us make your next event extraordinary with our exceptional catering services.
          </p>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple Booking Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Booking your catering service with us is easy. Follow these simple steps to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Calendar className="h-10 w-10 text-amber-600" />,
                title: "1. Submit Inquiry",
                description: "Fill out our booking form with your event details and requirements.",
              },
              {
                icon: <UtensilsCrossed className="h-10 w-10 text-amber-600" />,
                title: "2. Menu Consultation",
                description: "Our team will contact you to discuss menu options and customize to your needs.",
              },
              {
                icon: <Users className="h-10 w-10 text-amber-600" />,
                title: "3. Confirmation",
                description: "Review and approve your proposal, make a deposit, and we'll handle the rest.",
              },
            ].map((step, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-amber-100 p-4 rounded-full mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Book Your Catering Service</h2>
              <p className="text-gray-600 mb-8">
                Please fill out the form below with your event details, and our catering team will get back to you
                within 24 hours to discuss your requirements and provide a customized quote.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Why Book With Us</h3>
                <ul className="space-y-3">
                  {[
                    "Customized menus tailored to your event",
                    "Professional and experienced staff",
                    "Flexible packages to fit your budget",
                    "Attention to detail and exceptional service",
                    "Accommodations for dietary restrictions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-amber-600 h-2 w-2 rounded-full"></div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">bookings@gourmetgatherings.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Office Address</p>
                      <p className="text-gray-600">123 Gourmet Street, Culinary District, City, 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How far in advance should I book catering services?",
                answer:
                  "We recommend booking at least 4-6 weeks in advance for most events, and 2-3 months for large events or during peak season (holidays, summer weddings).",
              },
              {
                question: "Is there a minimum guest count requirement?",
                answer:
                  "Our standard packages are designed for events with 20 or more guests. For smaller gatherings, we offer specialized intimate catering options.",
              },
              {
                question: "Do you accommodate dietary restrictions?",
                answer:
                  "Yes, we can accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergies. Please specify these requirements when booking.",
              },
              {
                question: "What is your cancellation policy?",
                answer:
                  "Cancellations made 14 days or more before the event receive a full refund of the deposit. Cancellations within 7-13 days receive a 50% refund. Cancellations less than 7 days before the event are non-refundable.",
              },
              {
                question: "Do you provide staffing for events?",
                answer:
                  "Yes, we offer professional service staff including servers, bartenders, and event coordinators. Staffing is included in some packages and available as an add-on for others.",
              },
              {
                question: "Can I schedule a tasting before booking?",
                answer:
                  "Yes, we offer menu tastings for events over 50 guests. Tastings are scheduled after the initial consultation and may have a nominal fee that is credited toward your final booking.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Have more questions? We're here to help! Contact our catering team for additional information.
            </p>
            <Button variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
