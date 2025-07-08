'use client'

import {useState} from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {toast} from 'sonner'

interface ContactMethod {
  icon: React.ComponentType<{className?: string}>
  title: string
  value: string
  description: string
  color: string
}

const contactMethods: ContactMethod[] = [
  {
    icon: MapPin,
    title: 'Địa chỉ',
    value: '123 Đường ABC, Quận 1, TP.HCM',
    description: 'Trụ sở chính của TechStore',
    color: 'text-blue-600',
  },
  {
    icon: Phone,
    title: 'Điện thoại',
    value: '1900-1234',
    description: 'Hỗ trợ khách hàng 24/7',
    color: 'text-green-600',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@techstore.vn',
    description: 'Liên hệ qua email',
    color: 'text-purple-600',
  },
  {
    icon: Clock,
    title: 'Giờ làm việc',
    value: '8:00 - 22:00',
    description: 'Thứ 2 - Chủ nhật',
    color: 'text-orange-600',
  },
]

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Vui lòng điền đầy đủ thông tin bắt buộc')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Email không hợp lệ')
      return
    }

    setIsSubmitting(true)

    // Mô phỏng API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast.success(
      'Gửi tin nhắn thành công! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.',
    )
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    setIsSubmitting(false)
  }

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Liên hệ với chúng tôi
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Bạn có câu hỏi hoặc cần hỗ trợ? Hãy liên hệ với chúng tôi ngay hôm
            nay
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div>
            <h3 className='text-2xl font-bold text-gray-900 mb-8'>
              Thông tin liên hệ
            </h3>

            <div className='space-y-6'>
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className='flex items-start space-x-4'
                >
                  <div
                    className={`p-3 rounded-lg bg-gray-100 ${method.color} bg-opacity-10`}
                  >
                    <method.icon className={`w-6 h-6 ${method.color}`} />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      {method.title}
                    </h4>
                    <p className='text-lg text-gray-700 mb-1'>{method.value}</p>
                    <p className='text-sm text-gray-500'>
                      {method.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className='mt-8'>
              <div className='bg-gray-200 rounded-lg h-64 flex items-center justify-center'>
                <div className='text-center'>
                  <MapPin className='w-12 h-12 text-gray-400 mx-auto mb-2' />
                  <p className='text-gray-500'>Bản đồ sẽ được hiển thị ở đây</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className='text-2xl font-bold text-gray-900 mb-8'>
              Gửi tin nhắn cho chúng tôi
            </h3>

            <form
              onSubmit={handleSubmit}
              className='space-y-6'
            >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Họ và tên *
                  </label>
                  <Input
                    id='name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Nhập họ và tên'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email *
                  </label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='Nhập email'
                    required
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Số điện thoại
                  </label>
                  <Input
                    id='phone'
                    name='phone'
                    type='tel'
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder='Nhập số điện thoại'
                  />
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Chủ đề
                  </label>
                  <Input
                    id='subject'
                    name='subject'
                    type='text'
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder='Nhập chủ đề'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Nội dung tin nhắn *
                </label>
                <Textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='Nhập nội dung tin nhắn...'
                  rows={6}
                  required
                />
              </div>

              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3'
              >
                {isSubmitting ? (
                  <div className='flex items-center space-x-2'>
                    <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
                    <span>Đang gửi...</span>
                  </div>
                ) : (
                  <div className='flex items-center space-x-2'>
                    <Send className='w-4 h-4' />
                    <span>Gửi tin nhắn</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Quick Contact */}
            <div className='mt-8 p-6 bg-blue-50 rounded-lg'>
              <h4 className='font-semibold text-gray-900 mb-3 flex items-center'>
                <MessageCircle className='w-5 h-5 mr-2 text-blue-600' />
                Liên hệ nhanh
              </h4>
              <div className='space-y-2 text-sm text-gray-600'>
                <div className='flex items-center'>
                  <CheckCircle className='w-4 h-4 text-green-600 mr-2' />
                  Phản hồi trong 24 giờ
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='w-4 h-4 text-green-600 mr-2' />
                  Hỗ trợ miễn phí
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='w-4 h-4 text-green-600 mr-2' />
                  Bảo mật thông tin
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
