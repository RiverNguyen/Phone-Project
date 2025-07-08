'use client'

import {useState} from 'react'
import {toast} from 'sonner'
import ProductGrid from './product-grid'
import {Product} from './product-card'

// Dữ liệu sản phẩm mẫu
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    price: 29990000,
    originalPrice: 32990000,
    image:
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    description:
      'iPhone 15 Pro Max với chip A17 Pro, camera 48MP, màn hình 6.7 inch Super Retina XDR',
    stock: 15,
    category: 'Điện thoại',
  },
  {
    id: '2',
    name: 'MacBook Air M2 13 inch',
    price: 25990000,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    description:
      'MacBook Air với chip M2, 8GB RAM, 256GB SSD, màn hình 13.6 inch Liquid Retina',
    stock: 8,
    category: 'Laptop',
  },
  {
    id: '3',
    name: 'AirPods Pro 2nd Generation',
    price: 5990000,
    originalPrice: 6990000,
    image:
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
    description:
      'Tai nghe không dây với chống ồn chủ động, âm thanh không gian, sạc không dây',
    stock: 25,
    category: 'Phụ kiện',
  },
  {
    id: '4',
    name: 'iPad Air 5th Generation',
    price: 15990000,
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    description:
      'iPad Air với chip M1, màn hình 10.9 inch Liquid Retina, hỗ trợ Apple Pencil 2',
    stock: 0,
    category: 'Máy tính bảng',
  },
  {
    id: '5',
    name: 'Apple Watch Series 9',
    price: 8990000,
    originalPrice: 9990000,
    image:
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
    description:
      'Đồng hồ thông minh với chip S9, màn hình Always-On, theo dõi sức khỏe nâng cao',
    stock: 12,
    category: 'Đồng hồ',
  },
  {
    id: '6',
    name: 'iMac 24 inch M3',
    price: 35990000,
    image:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
    description:
      'iMac với chip M3, màn hình 24 inch 4.5K Retina, thiết kế mỏng và đẹp mắt',
    stock: 5,
    category: 'Máy tính để bàn',
  },
]

export default function ProductDemo() {
  const [cartItems, setCartItems] = useState<
    Array<{product: Product; quantity: number}>
  >([])

  const handleAddToCart = async (product: Product, quantity: number) => {
    // Mô phỏng API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id)
      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? {...item, quantity: item.quantity + quantity}
            : item,
        )
      } else {
        return [...prev, {product, quantity}]
      }
    })

    toast.success(`Đã thêm ${quantity} ${product.name} vào giỏ hàng!`)
  }

  const handleViewDetail = (product: Product) => {
    toast.info(`Xem chi tiết sản phẩm: ${product.name}`)
    // Có thể navigate đến trang chi tiết sản phẩm ở đây
    // router.push(`/products/${product.id}`)
  }

  return (
    <div className='max-w-[87.5rem] mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>
          Sản phẩm nổi bật
        </h1>
        <p className='text-gray-600'>
          Khám phá các sản phẩm chất lượng cao với giá tốt nhất
        </p>
      </div>

      {/* Thống kê giỏ hàng */}
      {cartItems.length > 0 && (
        <div className='mb-6 p-4 bg-blue-50 rounded-lg'>
          <h3 className='font-semibold text-blue-900 mb-2'>
            Giỏ hàng của bạn:
          </h3>
          <div className='space-y-1'>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className='text-sm text-blue-800'
              >
                {item.product.name} - Số lượng: {item.quantity}
              </div>
            ))}
          </div>
          <div className='mt-2 text-sm font-medium text-blue-900'>
            Tổng: {cartItems.reduce((sum, item) => sum + item.quantity, 0)} sản
            phẩm
          </div>
        </div>
      )}

      {/* Grid sản phẩm */}
      <ProductGrid
        products={sampleProducts}
        onAddToCart={handleAddToCart}
        onViewDetail={handleViewDetail}
      />
    </div>
  )
}
