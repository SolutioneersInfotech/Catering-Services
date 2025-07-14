import Image from "next/image"
import Link from "next/link"
import { Calendar, Award, Users, Clock, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="About Gourmet Gatherings"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">About Gourmet Gatherings</h1>
          <p className="text-xl text-white max-w-2xl">Crafting exceptional culinary experiences since 2010.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our culinary team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Gourmet Gatherings was founded in 2010 by Chef Michael Reynolds, whose passion for culinary excellence
                and exceptional service inspired him to create a catering company that would elevate events through
                extraordinary food experiences.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small operation catering intimate dinner parties has grown into a premier catering
                service trusted by individuals and corporations throughout the region. Our commitment to quality,
                creativity, and customer satisfaction has remained unwavering throughout our journey.
              </p>
              <p className="text-gray-600 mb-6">
                Today, our team of experienced chefs, event planners, and service staff work together to create
                memorable culinary experiences for weddings, corporate events, and private celebrations of all sizes.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="text-gray-700">Award-winning cuisine</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="text-gray-700">Expert culinary team</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="text-gray-700">13+ years of experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 md:px-6 bg-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Gourmet Gatherings, we're guided by a set of core principles that define who we are and how we operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                description:
                  "To create exceptional culinary experiences that exceed expectations and create lasting memories for our clients and their guests.",
                points: [
                  "Deliver outstanding food quality",
                  "Provide impeccable service",
                  "Create memorable experiences",
                  "Build lasting relationships",
                ],
              },
              {
                title: "Our Vision",
                description:
                  "To be the premier catering service known for culinary innovation, exceptional service, and the ability to transform events into extraordinary experiences.",
                points: [
                  "Lead in culinary innovation",
                  "Set the standard for service excellence",
                  "Grow sustainably and responsibly",
                  "Nurture talent and creativity",
                ],
              },
              {
                title: "Our Values",
                description:
                  "Our core values guide every decision we make and every interaction we have with clients, partners, and team members.",
                points: [
                  "Excellence in everything we do",
                  "Integrity and transparency",
                  "Creativity and innovation",
                  "Sustainability and responsibility",
                ],
              },
            ].map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of culinary professionals is passionate about creating exceptional food and memorable
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Michael Reynolds",
                role: "Founder & Executive Chef",
                bio: "With over 20 years of culinary experience, Chef Michael brings creativity and expertise to every menu.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Johnson",
                role: "Head Chef",
                bio: "Specializing in international cuisine, Sarah creates innovative dishes that delight the senses.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "David Chen",
                role: "Pastry Chef",
                bio: "David's artistic approach to desserts adds a sweet finishing touch to every event.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Williams",
                role: "Event Coordinator",
                bio: "Emily ensures every detail is perfect, from menu planning to day-of execution.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications & Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized through various certifications and awards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-3">
                {[
                  "ServSafe Certified Food Handlers",
                  "Certified Professional Caterer (CPC)",
                  "Health Department A+ Rating",
                  "Sustainable Food Service Certified",
                  "Allergen Awareness Certification",
                ].map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Awards & Recognition</h3>
              <ul className="space-y-3">
                {[
                  "Best Catering Service - City Food Awards 2023",
                  "Top Wedding Caterer - Wedding Industry Awards 2022",
                  "Culinary Excellence Award - Chef's Association 2021",
                  "Best Corporate Catering - Business Excellence Awards 2020",
                  "Sustainable Business Practice Award - Green Business Alliance 2019",
                ].map((award, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Sustainability</h2>
              <p className="text-gray-600 mb-4">
                At Gourmet Gatherings, we believe in responsible catering practices that minimize our environmental
                impact while maximizing the quality of our food and service.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Sourcing ingredients from local farms and suppliers whenever possible",
                  "Using seasonal produce to reduce carbon footprint and ensure freshness",
                  "Implementing waste reduction strategies and composting programs",
                  "Utilizing eco-friendly packaging and serving materials",
                  "Donating excess food to local food banks and community organizations",
                ].map((practice, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600">
                Our sustainable practices not only benefit the environment but also result in fresher, more flavorful
                dishes for our clients and their guests.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Sustainable catering practices"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Catering?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to discuss your event and discover how we can create a memorable culinary experience for
            you and your guests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100">
              <Link href="/booking" className="flex items-center">
                Book Now <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-amber-800">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
