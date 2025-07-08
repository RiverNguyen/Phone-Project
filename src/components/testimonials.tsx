'use client'

import {useState} from 'react'
import {Star, Quote, ChevronLeft, ChevronRight} from 'lucide-react'
import {Button} from '@/components/ui/button'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Nguyễn Văn An',
    role: 'Giám đốc Marketing',
    company: 'TechCorp',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content:
      'TechStore đã cung cấp cho chúng tôi những sản phẩm chất lượng cao với dịch vụ khách hàng tuyệt vời. Giao hàng nhanh chóng và giá cả rất hợp lý.',
  },
  {
    id: 2,
    name: 'Trần Thị Bình',
    role: 'Nhà thiết kế UI/UX',
    company: 'Design Studio',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content:
      'Tôi rất hài lòng với MacBook Air M2 từ TechStore. Sản phẩm chính hãng, bảo hành tốt và nhân viên tư vấn rất nhiệt tình.',
  },
  {
    id: 3,
    name: 'Lê Hoàng Cường',
    role: 'Lập trình viên',
    company: 'StartupXYZ',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content:
      'Đã mua nhiều sản phẩm từ TechStore và chưa bao giờ thất vọng. Website dễ sử dụng, thanh toán an toàn và giao hàng đúng hẹn.',
  },
  {
    id: 4,
    name: 'Phạm Thị Dung',
    role: 'Sinh viên',
    company: 'Đại học ABC',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content:
      'AirPods Pro từ TechStore thật sự tuyệt vời! Âm thanh chất lượng cao, giao hàng nhanh và giá tốt hơn nhiều nơi khác.',
  },
  {
    id: 5,
    name: 'Vũ Minh Đức',
    role: 'Doanh nhân',
    company: 'Business Solutions',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content:
      'TechStore là đối tác tin cậy của chúng tôi trong việc cung cấp thiết bị công nghệ cho công ty. Dịch vụ chuyên nghiệp và sản phẩm chất lượng.',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className='bg-gray-50 py-16'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Hơn 10,000+ khách hàng đã tin tưởng và lựa chọn TechStore làm đối
            tác công nghệ của mình
          </p>
        </div>

        <div className='relative max-w-4xl mx-auto'>
          {/* Testimonial Card */}
          <div className='bg-white rounded-2xl shadow-lg p-8 md:p-12 relative'>
            <div className='absolute top-6 right-6 text-blue-100'>
              <Quote className='w-12 h-12' />
            </div>

            <div className='flex flex-col items-center text-center'>
              {/* Avatar */}
              <div className='mb-6'>
                <div className='relative'>
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    width={80}
                    height={80}
                    className='rounded-full object-cover'
                  />
                  <div className='absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-1'>
                    <Quote className='w-4 h-4' />
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className='flex items-center mb-4'>
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-5 h-5 text-yellow-400 fill-current'
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className='text-lg text-gray-700 mb-6 leading-relaxed'>
                &ldquo;{currentTestimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div>
                <h4 className='font-semibold text-gray-900 text-lg'>
                  {currentTestimonial.name}
                </h4>
                <p className='text-gray-600'>
                  {currentTestimonial.role} tại {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className='flex justify-center items-center mt-8 space-x-4'>
            <Button
              variant='outline'
              size='icon'
              onClick={prevTestimonial}
              className='w-12 h-12 rounded-full'
            >
              <ChevronLeft className='w-5 h-5' />
            </Button>

            {/* Dots */}
            <div className='flex space-x-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant='outline'
              size='icon'
              onClick={nextTestimonial}
              className='w-12 h-12 rounded-full'
            >
              <ChevronRight className='w-5 h-5' />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-600 mb-2'>10,000+</div>
            <div className='text-gray-600'>Khách hàng hài lòng</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-600 mb-2'>4.9/5</div>
            <div className='text-gray-600'>Đánh giá trung bình</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-600 mb-2'>98%</div>
            <div className='text-gray-600'>Khách hàng quay lại</div>
          </div>
        </div>
      </div>
    </section>
  )
}
