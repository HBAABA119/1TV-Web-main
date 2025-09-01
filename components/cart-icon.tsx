"use client"

import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

export default function CartIcon() {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <Link href="/cart" className="text-white no-underline font-bold hover:text-gray-300 transition-colors relative">
      <i className="fas fa-shopping-cart"></i>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  )
}
