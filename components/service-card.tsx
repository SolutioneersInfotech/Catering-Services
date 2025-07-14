import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
}

export default function ServiceCard({ title, description, imageSrc, href }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={href} className="text-amber-600 hover:text-amber-700 flex items-center text-sm font-medium">
          Learn More <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
