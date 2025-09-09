import PageLayout from "@/components/page-layout"
import type { Metadata } from "next"
import ProductGrid from "@/components/product-grid"

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Discover official ITV merchandise including apparel, accessories, and gaming gear for true esports enthusiasts.",
}

const allProducts = [
  {
    id: 1,
    name: "Zero Tweaks Performance Pack",
    price: 29.99,
    image: "/placeholder.jpg", // Set to placeholder image as requested
    category: "Tweaks",
    description: "Comprehensive PC optimization package to minimize input delay and enhance gaming performance.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 2,
    name: "Gaming Performance T-Shirt",
    price: 24.99,
    image: "/store/tshirt2.png",
    category: "Apparel",
    description: "Premium cotton gaming t-shirt with Zero Tweaks logo.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 3,
    name: "Pro Gamer Hoodie",
    price: 49.99,
    image: "/store/hoodie.png",
    category: "Apparel",
    description: "Comfortable hoodie for gaming sessions with embroidered logo.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 4,
    name: "Network Optimization Package",
    price: 19.99,
    image: "/placeholder.jpg", // Set to placeholder image as requested
    category: "Tweaks",
    description: "Advanced network settings optimization for reduced latency in online gaming.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 5,
    name: "Gaming Mouse Pad",
    price: 15.99,
    image: "/store/mousepad.png",
    category: "Peripherals",
    description: "Professional gaming mouse pad with optimized surface for precision tracking.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 7,
    name: "System Tweaking Guide",
    price: 14.99,
    image: "/placeholder.jpg", // Set to placeholder image as requested
    category: "Tweaks",
    description: "Comprehensive guide for optimizing Windows for gaming performance.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 8,
    name: "Gaming Wristband",
    price: 9.99,
    image: "/store/sleeve.png",
    category: "Accessories",
    description: "Comfortable wristband for extended gaming sessions.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 9,
    name: "Premium Gaming Keyboard",
    price: 89.99,
    image: "/store/jersey.png", // Reusing existing image as placeholder
    category: "Peripherals",
    description: "Mechanical gaming keyboard with customizable RGB lighting.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 10,
    name: "Gaming Stickers Pack",
    price: 7.99,
    image: "/store/sticker2.png",
    category: "Accessories",
    description: "Set of high-quality stickers featuring gaming-themed designs.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 11,
    name: "FPS Boost Package",
    price: 24.99,
    image: "/placeholder.jpg", // Set to placeholder image as requested
    category: "Tweaks",
    description: "Specialized tweaks to maximize frames per second in competitive games.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 12,
    name: "Gaming Mouse",
    price: 59.99,
    image: "/store/sweatpants.png", // Reusing existing image as placeholder
    category: "Peripherals",
    description: "High-precision gaming mouse with adjustable DPI and programmable buttons.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 13,
    name: "Gaming Backpack",
    price: 39.99,
    image: "/store/tanktop.png", // Reusing existing image as placeholder
    category: "Accessories",
    description: "Durable backpack designed for transporting gaming gear safely.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 14,
    name: "Performance Sweatshirt",
    price: 44.99,
    image: "/store/hoodie2.png",
    category: "Apparel",
    description: "Comfortable sweatshirt with Zero Tweaks logo for gaming enthusiasts.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 15,
    name: "Audio Optimization Package",
    price: 17.99,
    image: "/placeholder.jpg", // Set to placeholder image as requested
    category: "Tweaks",
    description: "Advanced audio settings for competitive gaming advantage.",
    link: "https://payhip.com/ZeroTweakss",
  },
  {
    id: 16,
    name: "Gaming Headset",
    price: 79.99,
    image: "/store/CobraTSHIRT.png", // Reusing existing image as placeholder
    category: "Peripherals",
    description: "High-quality gaming headset with surround sound and noise-canceling microphone.",
    link: "https://payhip.com/ZeroTweakss",
  },
]

const products = allProducts.filter(product => product.category === "Tweaks");

export default function ShopPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold gradient-text">SHOP</h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Discover official ITV merchandise including apparel, accessories, and gaming gear for true esports enthusiasts.
          </p>
        </div>
      </section>

      <section className="py-6 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <ProductGrid products={products} itemsPerPage={12} />
        </div>
      </section>
    </PageLayout>
  )
}
