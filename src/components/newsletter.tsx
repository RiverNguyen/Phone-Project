'use client'

import {useState} from 'react'
import {Mail, Send} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {toast} from 'sonner'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast.error('Vui lòng nhập email của bạn')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Email không hợp lệ')
      return
    }

    setIsLoading(true)

    // Mô phỏng API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success(
      'Đăng ký thành công! Chúng tôi sẽ gửi tin tức mới nhất đến email của bạn.',
    )
    setEmail('')
    setIsLoading(false)
  }

  return (
    <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
      <div className='max-w-4xl mx-auto px-4 text-center'>
        <div className='mb-8'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4'>
            <Mail className='w-8 h-8' />
          </div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Đăng ký nhận tin tức
          </h2>
          <p className='text-lg text-blue-100 max-w-2xl mx-auto'>
            Nhận thông tin về sản phẩm mới, khuyến mãi đặc biệt và tin tức công
            nghệ mới nhất từ TechStore
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='max-w-md mx-auto'
        >
          <div className='flex flex-col sm:flex-row gap-3'>
            <div className='flex-1'>
              <Input
                type='email'
                placeholder='Nhập email của bạn'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20'
                disabled={isLoading}
              />
            </div>
            <Button
              type='submit'
              disabled={isLoading}
              className='bg-white text-blue-600 hover:bg-blue-50 px-6'
            >
              {isLoading ? (
                <div className='flex items-center space-x-2'>
                  <div className='w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin' />
                  <span>Đang gửi...</span>
                </div>
              ) : (
                <div className='flex items-center space-x-2'>
                  <Send className='w-4 h-4' />
                  <span>Đăng ký</span>
                </div>
              )}
            </Button>
          </div>
        </form>

        <p className='text-sm text-blue-200 mt-4'>
          Chúng tôi cam kết bảo mật thông tin của bạn. Bạn có thể hủy đăng ký
          bất cứ lúc nào.
        </p>
      </div>
    </section>
  )
}
