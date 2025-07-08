'use client'

import {
  Truck,
  Shield,
  CreditCard,
  Headphones,
  RefreshCw,
  Zap,
  CheckCircle,
  Star,
} from 'lucide-react'

interface Feature {
  icon: React.ComponentType<{className?: string}>
  title: string
  description: string
  color: string
}

const features: Feature[] = [
  {
    icon: Truck,
    title: 'Giao hàng miễn phí',
    description:
      'Giao hàng miễn phí cho đơn hàng từ 500K trở lên trên toàn quốc',
    color: 'text-blue-600',
  },
  {
    icon: Shield,
    title: 'Bảo hành chính hãng',
    description: 'Tất cả sản phẩm đều có bảo hành chính hãng từ 12-24 tháng',
    color: 'text-green-600',
  },
  {
    icon: CreditCard,
    title: 'Thanh toán an toàn',
    description: 'Hỗ trợ nhiều phương thức thanh toán với bảo mật cao',
    color: 'text-purple-600',
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ tư vấn viên sẵn sàng hỗ trợ bạn mọi lúc',
    color: 'text-orange-600',
  },
  {
    icon: RefreshCw,
    title: 'Đổi trả dễ dàng',
    description: 'Chính sách đổi trả trong 30 ngày với điều kiện đơn giản',
    color: 'text-red-600',
  },
  {
    icon: Zap,
    title: 'Giao hàng nhanh',
    description: 'Giao hàng trong 2-4 giờ tại TP.HCM và Hà Nội',
    color: 'text-yellow-600',
  },
]

const benefits = [
  'Sản phẩm chính hãng 100%',
  'Giá cả cạnh tranh nhất thị trường',
  'Dịch vụ khách hàng chuyên nghiệp',
  'Giao hàng toàn quốc',
  'Bảo hành tận tâm',
  'Thanh toán linh hoạt',
]

export default function Features() {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Tại sao chọn TechStore?
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Chúng tôi cam kết mang đến trải nghiệm mua sắm tốt nhất với những ưu
            đãi đặc biệt dành cho khách hàng
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='group p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300'
            >
              <div className='flex items-start space-x-4'>
                <div
                  className={`p-3 rounded-lg bg-gray-100 group-hover:bg-blue-50 transition-colors`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div className='flex-1'>
                  <h3 className='font-semibold text-gray-900 text-lg mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>
                Lợi ích khi mua sắm tại TechStore
              </h3>
              <div className='space-y-4'>
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className='flex items-center space-x-3'
                  >
                    <CheckCircle className='w-5 h-5 text-green-600 flex-shrink-0' />
                    <span className='text-gray-700'>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-white rounded-xl p-8 shadow-lg'>
              <div className='text-center'>
                <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4'>
                  <Star className='w-8 h-8 text-blue-600' />
                </div>
                <h4 className='text-xl font-semibold text-gray-900 mb-2'>
                  Khách hàng VIP
                </h4>
                <p className='text-gray-600 mb-6'>
                  Đăng ký thành viên để nhận ưu đãi đặc biệt và tích điểm thưởng
                </p>
                <div className='space-y-3'>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>
                      Tích điểm mỗi đơn hàng
                    </span>
                    <span className='font-semibold text-blue-600'>5%</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Giảm giá sinh nhật</span>
                    <span className='font-semibold text-blue-600'>10%</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Ưu tiên giao hàng</span>
                    <span className='font-semibold text-green-600'>✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16'>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-600 mb-2'>50K+</div>
            <div className='text-gray-600 text-sm'>Sản phẩm</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-600 mb-2'>100K+</div>
            <div className='text-gray-600 text-sm'>Khách hàng</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-600 mb-2'>5+</div>
            <div className='text-gray-600 text-sm'>Năm kinh nghiệm</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-600 mb-2'>24/7</div>
            <div className='text-gray-600 text-sm'>Hỗ trợ</div>
          </div>
        </div>
      </div>
    </section>
  )
}
