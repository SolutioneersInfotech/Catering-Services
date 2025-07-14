import { Star, StarHalf } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating: number
}

export default function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => {
            if (i < Math.floor(rating)) {
              return <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
            } else if (i === Math.floor(rating) && rating % 1 !== 0) {
              return <StarHalf key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
            } else {
              return <Star key={i} className="h-5 w-5 text-gray-300" />
            }
          })}
        </div>
        <blockquote className="text-gray-700 mb-4 italic">"{quote}"</blockquote>
        <div className="mt-4">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}
