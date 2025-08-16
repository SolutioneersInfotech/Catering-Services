import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="mt-12 md:mt-2 md:py-2  md:px-48 bg-white">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-24 items-center ">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/shahi-paneer.jpg"
                  alt="Grilled kebabs with green sauce"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/dessert-about.jpg"
                  alt="Indian cuisine with various dishes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute top-4 right-[3rem] translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-[#a01a42] rounded-full h-28 w-28 flex flex-col items-center justify-center text-white border-4 border-[#f0c088]">
                <div className="text-lg font-medium">Since</div>
                <div className="text-4xl font-bold">2008</div>
              </div>
            </div>
          </div>

          <div className="md:pt-24 md:pb-12">
            <h2 className="font-cinzel text-4xl md:text-5xl mb-6 leading-tight">
              Elevating Your Events with Exceptional Food.
            </h2>
            <p className="font-opensans text-gray-600 mb-10 text-lg">
              Venus is The Place where Food is Celebrated over 25 Years. We Love to Create Unforgettable Culinary
              Experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="text-[#f0a048] w-12 h-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 10h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v-5Z" />
                      <path d="M6 10H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2v-5Z" />
                      <path d="M8 18v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8" />
                      <path d="M10 8V6a2 2 0 0 1 4 0v2" />
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <div className=" text-2xl font-bold">25</div>
                  <div className="font-prata text-gray-600">Years of Experience</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="text-[#f0a048] w-12 h-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2000+</div>
                  <div className="font-prata text-gray-600">Successful Marriages</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="text-[#f0a048] w-12 h-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="font-prata text-gray-600">Repeated Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
