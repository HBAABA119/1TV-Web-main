'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
  link: string
}

interface ProductGridProps {
  products: Product[]
  itemsPerPage?: number
}

export default function ProductGrid({ products, itemsPerPage = 12 }: ProductGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [sortBy, setSortBy] = useState<string>('name')

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)))
    return ['All', ...unique]
  }, [products])

  const processedProducts = useMemo(() => {
    const filtered = selectedCategory === 'All' ? [...products] : products.filter((p) => p.category === selectedCategory)

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [products, selectedCategory, sortBy])

  const totalPages = Math.ceil(processedProducts.length / itemsPerPage) || 1
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProducts = processedProducts.slice(startIndex, startIndex + itemsPerPage)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handleSortChange = (sort: string) => {
    setSortBy(sort)
    setCurrentPage(1)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-white/60 mr-2 self-center">Filter:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-black/40 text-white/70 border border-white/10 hover:bg-black/60 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white/60">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="bg-black/40 border border-white/10 text-white rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 hover:border-white/30"
            aria-label="Sort products by"
          >
            <option value="name">Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-xl overflow-hidden relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-soft"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image src={product.image} alt={product.name} fill className="object-contain transition-transform duration-500 group-hover:scale-105 p-4" />
              <div className="absolute top-3 right-3 bg-black/80 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                ${product.price.toFixed(2)}
              </div>
            </div>

            <div className="p-6 space-y-3">
              <div className="flex justify-between items-start gap-2 mb-2">
                <span className="px-3 py-1.5 bg-white/10 rounded-full text-white text-xs font-medium shadow-sm">
                  {product.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-white/80 transition-colors duration-300 mb-0">
                {product.name}
              </h3>

              <p className="text-white/70 text-sm mb-0">{product.description}</p>

              <button
                className="w-full bg-black/40 hover:bg-black/60 text-white text-center py-3 px-4 rounded-lg transition-all duration-300 mt-4 font-medium hover:shadow-lg transform hover:scale-[1.02]"
                onClick={() => window.open(product.link, '_blank')}
              >
                Buy Now - ${product.price.toFixed(2)}
              </button>
            </div>
          </div>
        ))}
        {currentProducts.length === 0 && (
          <div className="col-span-full text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-white/60 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Products Found</h3>
              <p className="text-white/70">No products match your current filters. Try adjusting your selection.</p>
            </div>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex flex-col items-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          <div className="text-center text-sm text-white/70 mt-4">
            Showing {Math.min((currentPage - 1) * itemsPerPage + 1, processedProducts.length)}-
            {Math.min(currentPage * itemsPerPage, processedProducts.length)} of {processedProducts.length} results
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
          </div>
        </div>
      )}
    </div>
  )
}

function Pagination({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) {
  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex items-center px-4 py-2 bg-white/10 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Previous
      </button>

      <div className="flex items-center space-x-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-md transition-all duration-300 ${
              currentPage === page ? 'bg-white text-black font-bold' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center px-4 py-2 bg-white/10 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white/20"
      >
        Next
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}

