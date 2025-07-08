'use client'

import {ArrowRight, ShoppingCart, Star, Users} from 'lucide-react'
import {Button} from '@/components/ui/button'

export default function CTASection() {
  const stats = [
    {
      icon: Users,
      value: '100K+',
      label: 'Khách hàng tin tưởng',
      color: 'text-blue-600',
    },
    {
      icon: ShoppingCart,
      value: '50K+',
      label: 'Đơn hàng thành công',
      color: 'text-green-600',
    },
    {
      icon: Star,
      value: '4.9★',
      label: 'Đánh giá trung bình',
      color: 'text-yellow-600',
    },
  ]

  return (
    <section className='py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Sẵn sàng khám phá thế giới công nghệ?
          </h2>
          <p className='text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed'>
            Tham gia cùng hàng nghìn khách hàng đã tin tưởng TechStore. Khám phá
            các sản phẩm công nghệ mới nhất với giá cả cạnh tranh và dịch vụ
            tuyệt vời.
          </p>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='text-center'
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 ${stat.color}`}
              >
                <stat.icon className='w-8 h-8' />
              </div>
              <div className='text-3xl font-bold mb-2'>{stat.value}</div>
              <div className='text-blue-100'>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Button
            size='lg'
            className='bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold'
          >
            Bắt đầu mua sắm
            <ArrowRight className='w-5 h-5 ml-2' />
          </Button>

          <Button
            variant='outline'
            size='lg'
            className='border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold'
          >
            Liên hệ tư vấn
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className='mt-16 text-center'>
          <p className='text-blue-100 mb-6'>
            Được tin tưởng bởi các thương hiệu hàng đầu
          </p>
          <div className='flex flex-wrap justify-center items-center gap-8 opacity-60'>
            <div className='text-2xl font-bold'>Apple</div>
            <div className='text-2xl font-bold'>Samsung</div>
            <div className='text-2xl font-bold'>Dell</div>
            <div className='text-2xl font-bold'>HP</div>
            <div className='text-2xl font-bold'>Lenovo</div>
            <div className='text-2xl font-bold'>Xiaomi</div>
          </div>
        </div>

        {/* Guarantee */}
        <div className='mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center'>
          <h3 className='text-2xl font-bold mb-4'>Cam kết của chúng tôi</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div>
              <div className='text-3xl font-bold text-yellow-400 mb-2'>
                100%
              </div>
              <div className='text-blue-100'>Sản phẩm chính hãng</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-green-400 mb-2'>30</div>
              <div className='text-blue-100'>Ngày đổi trả</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-purple-400 mb-2'>
                24/7
              </div>
              <div className='text-blue-100'>Hỗ trợ khách hàng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
