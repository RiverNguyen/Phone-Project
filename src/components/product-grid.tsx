'use client'

import ProductCard, {Product} from './product-card'

interface ProductGridProps {
  products: Product[]
  onAddToCart?: (product: Product, quantity: number) => void
  onViewDetail?: (product: Product) => void
  className?: string
}

export default function ProductGrid({
  products,
  onAddToCart,
  onViewDetail,
  className = '',
}: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-12 text-center'>
        <div className='text-gray-500 text-lg mb-2'>Không có sản phẩm nào</div>
        <p className='text-gray-400'>
          Vui lòng thử lại sau hoặc kiểm tra bộ lọc của bạn
        </p>
      </div>
    )
  }

  return (
    <div className={`grid gap-4 grid-cols-4 ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onViewDetail={onViewDetail}
        />
      ))}
    </div>
  )
}
