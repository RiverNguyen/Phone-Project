'use client'

import {useState} from 'react'
import {
  ChevronRight,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Tablet,
  Monitor,
} from 'lucide-react'
import {Button} from '@/components/ui/button'
import Image from 'next/image'

interface Category {
  id: string
  name: string
  description: string
  icon: React.ComponentType<{className?: string}>
  image: string
  productCount: number
  color: string
}

const categories: Category[] = [
  {
    id: 'smartphones',
    name: 'Điện thoại',
    description: 'iPhone, Samsung, Xiaomi và nhiều thương hiệu khác',
    icon: Smartphone,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    productCount: 1250,
    color: 'bg-blue-500',
  },
  {
    id: 'laptops',
    name: 'Laptop',
    description: 'MacBook, Dell, HP, Lenovo và các dòng gaming',
    icon: Laptop,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
    productCount: 890,
    color: 'bg-green-500',
  },
  {
    id: 'accessories',
    name: 'Phụ kiện',
    description: 'Tai nghe, sạc dự phòng, ốp lưng và nhiều hơn nữa',
    icon: Headphones,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    productCount: 2100,
    color: 'bg-purple-500',
  },
  {
    id: 'smartwatches',
    name: 'Đồng hồ thông minh',
    description: 'Apple Watch, Samsung Galaxy Watch, Garmin',
    icon: Watch,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    productCount: 450,
    color: 'bg-orange-500',
  },
  {
    id: 'tablets',
    name: 'Máy tính bảng',
    description: 'iPad, Samsung Galaxy Tab, Xiaomi Pad',
    icon: Tablet,
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
    productCount: 320,
    color: 'bg-red-500',
  },
  {
    id: 'monitors',
    name: 'Màn hình',
    description: 'Màn hình gaming, công việc và thiết kế',
    icon: Monitor,
    image:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
    productCount: 180,
    color: 'bg-yellow-500',
  },
]

export default function Categories() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Khám phá theo danh mục
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Tìm kiếm sản phẩm theo danh mục yêu thích của bạn
          </p>
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categories.map((category) => (
            <div
              key={category.id}
              className='group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer'
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Image */}
              <div className='relative h-48 overflow-hidden'>
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors' />

                {/* Icon */}
                <div
                  className={`absolute top-4 left-4 p-3 rounded-lg ${category.color} text-white`}
                >
                  <category.icon className='w-6 h-6' />
                </div>

                {/* Product Count */}
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full'>
                  <span className='text-sm font-medium text-gray-700'>
                    {category.productCount.toLocaleString()} sản phẩm
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                  {category.name}
                </h3>
                <p className='text-gray-600 text-sm mb-4 leading-relaxed'>
                  {category.description}
                </p>

                {/* Action Button */}
                <div className='flex items-center justify-between'>
                  <Button
                    variant='ghost'
                    className='text-blue-600 hover:text-blue-700 p-0 h-auto font-medium'
                  >
                    Xem tất cả
                    <ChevronRight className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform' />
                  </Button>

                  {/* Hover Effect */}
                  {hoveredCategory === category.id && (
                    <div className='absolute inset-0 border-2 border-blue-500 rounded-xl pointer-events-none' />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className='text-center mt-12'>
          <Button
            size='lg'
            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3'
          >
            Xem tất cả danh mục
          </Button>
        </div>

        {/* Quick Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16'>
          <div className='bg-white rounded-lg p-6 text-center shadow-sm'>
            <div className='text-2xl font-bold text-blue-600 mb-2'>
              {categories
                .reduce((sum, cat) => sum + cat.productCount, 0)
                .toLocaleString()}
            </div>
            <div className='text-gray-600 text-sm'>Tổng sản phẩm</div>
          </div>
          <div className='bg-white rounded-lg p-6 text-center shadow-sm'>
            <div className='text-2xl font-bold text-green-600 mb-2'>
              {categories.length}
            </div>
            <div className='text-gray-600 text-sm'>Danh mục</div>
          </div>
          <div className='bg-white rounded-lg p-6 text-center shadow-sm'>
            <div className='text-2xl font-bold text-purple-600 mb-2'>50+</div>
            <div className='text-gray-600 text-sm'>Thương hiệu</div>
          </div>
          <div className='bg-white rounded-lg p-6 text-center shadow-sm'>
            <div className='text-2xl font-bold text-orange-600 mb-2'>24/7</div>
            <div className='text-gray-600 text-sm'>Hỗ trợ</div>
          </div>
        </div>
      </div>
    </section>
  )
}
