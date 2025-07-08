'use client'

import {useState} from 'react'
import {ArrowRight, Play, Star, Shield, Truck, Zap} from 'lucide-react'
import {Button} from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const features = [
    {
      icon: Shield,
      text: 'Bảo hành chính hãng',
      color: 'text-green-600',
    },
    {
      icon: Truck,
      text: 'Giao hàng miễn phí',
      color: 'text-blue-600',
    },
    {
      icon: Zap,
      text: 'Thanh toán nhanh',
      color: 'text-purple-600',
    },
  ]

  return (
    <section className='relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
        <div className='absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000'></div>
        <div className='absolute bottom-0 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'>
                <Star className='w-4 h-4 mr-2 fill-current' />
                Cửa hàng công nghệ hàng đầu Việt Nam
              </div>

              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 leading-tight'>
                Khám phá thế giới{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                  công nghệ
                </span>{' '}
                mới nhất
              </h1>

              <p className='text-xl text-gray-600 leading-relaxed max-w-lg'>
                TechStore cung cấp các sản phẩm công nghệ chất lượng cao với giá
                cả cạnh tranh. Trải nghiệm mua sắm tuyệt vời cùng dịch vụ khách
                hàng 24/7.
              </p>
            </div>

            {/* Features */}
            <div className='flex flex-wrap gap-6'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='flex items-center space-x-2'
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className='text-gray-700 font-medium'>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold'
              >
                Khám phá ngay
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>

              <Button
                variant='outline'
                size='lg'
                className='px-8 py-4 text-lg font-semibold border-2'
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className='w-5 h-5 mr-2' />
                Xem video giới thiệu
              </Button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-8 pt-8 border-t border-gray-200'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-gray-900'>50K+</div>
                <div className='text-sm text-gray-600'>Sản phẩm</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-gray-900'>100K+</div>
                <div className='text-sm text-gray-600'>Khách hàng</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-gray-900'>4.9★</div>
                <div className='text-sm text-gray-600'>Đánh giá</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className='relative'>
            <div className='relative z-10'>
              <Image
                src='https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=600&fit=crop'
                alt='TechStore Hero'
                width={600}
                height={600}
                className='rounded-2xl shadow-2xl'
              />

              {/* Floating Elements */}
              <div className='absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4'>
                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Shield className='w-6 h-6 text-blue-600' />
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>Bảo hành</div>
                    <div className='text-sm text-gray-600'>12-24 tháng</div>
                  </div>
                </div>
              </div>

              <div className='absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4'>
                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                    <Truck className='w-6 h-6 text-green-600' />
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>Giao hàng</div>
                    <div className='text-sm text-gray-600'>Miễn phí</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-3 scale-105 opacity-10'></div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <div className='relative max-w-4xl w-full mx-4'>
            <button
              onClick={() => setIsVideoPlaying(false)}
              className='absolute -top-10 right-0 text-white text-2xl hover:text-gray-300'
            >
              ✕
            </button>
            <div className='bg-gray-900 rounded-lg aspect-video flex items-center justify-center'>
              <div className='text-white text-center'>
                <Play className='w-16 h-16 mx-auto mb-4' />
                <p>Video giới thiệu sẽ được phát ở đây</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
