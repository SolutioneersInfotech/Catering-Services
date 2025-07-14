"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon, Clock, Users, UtensilsCrossed } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function BookingForm() {
  const [date, setDate] = useState<Date>()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="pt-6 text-center">
          <div className="bg-amber-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <UtensilsCrossed className="h-8 w-8 text-amber-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
          <p className="text-gray-700 mb-6">
            Your booking request has been submitted successfully. Our catering team will contact you within 24 hours to
            discuss your event details and provide a customized quote.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" required />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Event Details</h3>

            <div className="space-y-2">
              <Label htmlFor="eventType">Event Type *</Label>
              <Select required>
                <SelectTrigger id="eventType">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="birthday">Birthday Party</SelectItem>
                  <SelectItem value="anniversary">Anniversary</SelectItem>
                  <SelectItem value="holiday">Holiday Party</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Event Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventTime">Event Time *</Label>
                <div className="relative">
                  <Input id="eventTime" type="time" required />
                  <Clock className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="guestCount">Number of Guests *</Label>
                <div className="relative">
                  <Input id="guestCount" type="number" min="1" required />
                  <Users className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Event Location *</Label>
                <Input id="location" placeholder="Venue or Address" required />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Catering Preferences</h3>

            <div className="space-y-2">
              <Label>Service Type *</Label>
              <RadioGroup defaultValue="buffet" className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="buffet" id="buffet" />
                  <Label htmlFor="buffet" className="cursor-pointer">
                    Buffet Style
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="plated" id="plated" />
                  <Label htmlFor="plated" className="cursor-pointer">
                    Plated Service
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="family" id="family" />
                  <Label htmlFor="family" className="cursor-pointer">
                    Family Style
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="stations" id="stations" />
                  <Label htmlFor="stations" className="cursor-pointer">
                    Food Stations
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Dietary Restrictions (Select all that apply)</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: "vegetarian", label: "Vegetarian" },
                  { id: "vegan", label: "Vegan" },
                  { id: "gluten", label: "Gluten-Free" },
                  { id: "dairy", label: "Dairy-Free" },
                  { id: "nut", label: "Nut Allergies" },
                  { id: "other", label: "Other (Specify below)" },
                ].map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <Checkbox id={item.id} />
                    <Label htmlFor={item.id} className="cursor-pointer">
                      {item.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                placeholder="Please provide any additional details about your event, menu preferences, or special requests."
                className="min-h-[120px]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm cursor-pointer">
                I agree to the terms and conditions, including the cancellation policy and privacy policy.
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
            Submit Booking Request
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
