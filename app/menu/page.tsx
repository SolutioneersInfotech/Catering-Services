import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Utensils, Coffee, Wine, Salad, UtensilsCrossed, Leaf, Wheat } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface MenuItem {
  name: string
  description: string
  price: string
  dietary?: string[]
}

interface MenuCategory {
  id: string
  name: string
  icon: React.ReactNode
  items: MenuItem[]
}

export default function MenuPage() {
  const menuCategories: MenuCategory[] = [
    {
      id: "appetizers",
      name: "Appetizers",
      icon: <Salad className="h-5 w-5" />,
      items: [
        {
          name: "Bruschetta",
          description: "Toasted baguette topped with diced tomatoes, fresh basil, garlic, and extra virgin olive oil",
          price: "$8",
          dietary: ["vegetarian"],
        },
        {
          name: "Shrimp Cocktail",
          description: "Chilled jumbo shrimp served with our signature cocktail sauce",
          price: "$12",
        },
        {
          name: "Stuffed Mushrooms",
          description: "Button mushrooms filled with a savory blend of herbs, breadcrumbs, and parmesan cheese",
          price: "$10",
          dietary: ["vegetarian"],
        },
        {
          name: "Charcuterie Board",
          description: "Selection of premium cured meats, artisanal cheeses, dried fruits, nuts, and crackers",
          price: "$18",
        },
        {
          name: "Spinach Artichoke Dip",
          description: "Creamy blend of spinach, artichokes, and cheeses served with toasted pita points",
          price: "$9",
          dietary: ["vegetarian", "gluten-free"],
        },
      ],
    },
    {
      id: "main-courses",
      name: "Main Courses",
      icon: <UtensilsCrossed className="h-5 w-5" />,
      items: [
        {
          name: "Herb-Roasted Chicken",
          description:
            "Free-range chicken marinated with fresh herbs and roasted to perfection, served with seasonal vegetables",
          price: "$24",
          dietary: ["gluten-free"],
        },
        {
          name: "Grilled Salmon",
          description:
            "Fresh Atlantic salmon fillet grilled with lemon and dill, served with asparagus and wild rice pilaf",
          price: "$28",
          dietary: ["gluten-free"],
        },
        {
          name: "Beef Tenderloin",
          description:
            "Premium beef tenderloin cooked to your preference, served with truffle mashed potatoes and roasted vegetables",
          price: "$36",
          dietary: ["gluten-free"],
        },
        {
          name: "Vegetable Wellington",
          description:
            "Seasonal vegetables and mushroom duxelles wrapped in puff pastry, served with a red pepper coulis",
          price: "$22",
          dietary: ["vegetarian", "vegan"],
        },
        {
          name: "Eggplant Parmesan",
          description: "Layers of breaded eggplant, marinara sauce, and melted mozzarella, served with garlic bread",
          price: "$20",
          dietary: ["vegetarian"],
        },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      icon: <Coffee className="h-5 w-5" />,
      items: [
        {
          name: "Chocolate Mousse",
          description: "Rich and creamy chocolate mousse topped with fresh berries and mint",
          price: "$9",
          dietary: ["vegetarian", "gluten-free"],
        },
        {
          name: "New York Cheesecake",
          description: "Classic New York style cheesecake with a graham cracker crust, served with berry compote",
          price: "$10",
          dietary: ["vegetarian"],
        },
        {
          name: "Tiramisu",
          description: "Traditional Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream",
          price: "$11",
          dietary: ["vegetarian"],
        },
        {
          name: "Fruit Tart",
          description: "Buttery pastry shell filled with vanilla custard and topped with fresh seasonal fruits",
          price: "$9",
          dietary: ["vegetarian"],
        },
        {
          name: "Crème Brûlée",
          description: "Classic French custard with a caramelized sugar crust",
          price: "$10",
          dietary: ["vegetarian", "gluten-free"],
        },
      ],
    },
    {
      id: "beverages",
      name: "Beverages",
      icon: <Wine className="h-5 w-5" />,
      items: [
        {
          name: "Signature Cocktails",
          description: "Selection of handcrafted cocktails made with premium spirits and fresh ingredients",
          price: "$12",
        },
        {
          name: "Wine Selection",
          description: "Curated selection of red, white, and sparkling wines from renowned vineyards",
          price: "$8-15/glass",
        },
        {
          name: "Craft Beer",
          description: "Local and imported craft beers to complement your meal",
          price: "$7",
        },
        {
          name: "Non-Alcoholic Beverages",
          description: "Freshly squeezed juices, artisanal sodas, and mocktails",
          price: "$5",
          dietary: ["vegan", "gluten-free"],
        },
        {
          name: "Coffee & Tea Service",
          description: "Premium coffee and tea selections, including espresso, cappuccino, and herbal teas",
          price: "$4",
          dietary: ["vegan", "gluten-free"],
        },
      ],
    },
  ]

  const dietaryIcons = {
    vegetarian: <Leaf className="h-4 w-4 text-green-600" title="Vegetarian" />,
    vegan: <Leaf className="h-4 w-4 text-green-700" title="Vegan" />,
    "gluten-free": <Wheat className="h-4 w-4 text-amber-600" title="Gluten-Free" />,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="catering-menu.jpg"
          alt="Gourmet food display"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="font-cinzel text-3xl md:text-5xl  text-white mb-4">Our Catering Menu</h1>
          <p className="font-opensans text-xl text-white max-w-2xl">
            Exquisite dishes crafted with the finest ingredients to delight your guests.
          </p>
        </div>
      </section>

      {/* Menu Introduction */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="font-cinzel text-3xl font-bold mb-4">Culinary Excellence for Every Occasion</h2>
          <p className="font-opensans text-gray-600 max-w-3xl mx-auto mb-8">
            Our menu features a diverse selection of gourmet dishes prepared by our expert chefs. We use only the
            freshest, highest-quality ingredients to create memorable dining experiences for your events.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center">
              <Leaf className="h-5 w-5 text-green-600 mr-2" />
              <span>Vegetarian</span>
            </div>
            <div className="flex items-center">
              <Leaf className="h-5 w-5 text-green-700 mr-2" />
              <span>Vegan</span>
            </div>
            <div className="flex items-center">
              <Wheat className="h-5 w-5 text-amber-600 mr-2" />
              <span>Gluten-Free</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 italic">
            Menu items and prices may vary based on seasonality and availability. Custom menus are available upon
            request.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <Tabs defaultValue="appetizers" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-8">
              {menuCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2 px-4 py-2">
                  {category.icon}
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div id={category.id} className="scroll-mt-20">
                  <h3 className="font-cinzel text-2xl font-bold mb-8 text-center">{category.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.items.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-cinzel text-xl font-semibold">{item.name}</h4>
                          <span className="font-medium text-amber-700">{item.price}</span>
                        </div>
                        <p className="font-opensans text-gray-600 mb-2">{item.description}</p>
                        {item.dietary && (
                          <div className="flex gap-2 mt-2">
                            {item.dietary.map((diet) => (
                              <Badge key={diet} variant="outline" className="flex items-center gap-1 text-xs">
                                {dietaryIcons[diet as keyof typeof dietaryIcons]}
                                {diet.charAt(0).toUpperCase() + diet.slice(1)}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Custom Menu Section */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="bg-amber-50 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-cinzel text-2xl font-bold mb-4">Custom Menu Creation</h3>
                <p className="font-opensans text-gray-600 mb-6">
                  Don't see exactly what you're looking for? Our culinary team specializes in creating custom menus
                  tailored to your specific preferences, dietary requirements, and event theme.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Personalized menu consultation with our executive chef",
                    "Accommodation for dietary restrictions and allergies",
                    "Seasonal and locally-sourced ingredients",
                    "Theme-based menu design",
                    "Menu tasting sessions available",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Utensils className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <span className="font-opensans">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white font-lato">
                    <Link href="/contact">Request Custom Menu</Link>
                  </Button>
                  <Button variant="outline" className="font-lato">
                    <Link href="/booking">Schedule Tasting</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="custom-menu.jpg"
                  alt="Chef preparing custom menu"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 md:px-6 bg-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Menu?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to discuss your catering needs and create the perfect menu for your event.
          </p>
          <Button size="lg" className="font-lato bg-white text-amber-700 hover:bg-gray-100" >
            <Link href="/booking">Book Your Catering</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
