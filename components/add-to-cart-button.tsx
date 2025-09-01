"use client"

import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    price: string
    image?: string
  }
  className?: string
}

export default function AddToCartButton({ product, className = "" }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    addToCart(product)

    // Brief loading state for user feedback
    setTimeout(() => {
      setIsAdding(false)
    }, 300)
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`btn-primary ${className} ${isAdding ? "opacity-75 cursor-not-allowed" : ""}`}
    >
      {isAdding ? "ADDING..." : "ADD TO CART"}
    </button>
  )
}
