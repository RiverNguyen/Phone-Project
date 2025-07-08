'use client'

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      {name: 'Về chúng tôi', href: '/about'},
      {name: 'Tuyển dụng', href: '/careers'},
      {name: 'Tin tức', href: '/news'},
      {name: 'Liên hệ', href: '/contact'},
    ],
    support: [
      {name: 'Trung tâm hỗ trợ', href: '/support'},
      {name: 'Hướng dẫn mua hàng', href: '/guide'},
      {name: 'Chính sách bảo hành', href: '/warranty'},
      {name: 'FAQ', href: '/faq'},
    ],
    legal: [
      {name: 'Điều khoản sử dụng', href: '/terms'},
      {name: 'Chính sách bảo mật', href: '/privacy'},
      {name: 'Chính sách hoàn tiền', href: '/refund'},
      {name: 'Chính sách vận chuyển', href: '/shipping'},
    ],
  }

  const socialLinks = [
    {name: 'Facebook', icon: Facebook, href: 'https://facebook.com'},
    {name: 'Instagram', icon: Instagram, href: 'https://instagram.com'},
    {name: 'Twitter', icon: Twitter, href: 'https://twitter.com'},
    {name: 'Youtube', icon: Youtube, href: 'https://youtube.com'},
  ]

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div>
              <h3 className='text-xl font-bold mb-2'>TechStore</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Cửa hàng công nghệ hàng đầu Việt Nam, cung cấp các sản phẩm chất
                lượng cao với giá cả hợp lý.
              </p>
            </div>

            {/* Contact Info */}
            <div className='space-y-2'>
              <div className='flex items-center space-x-2 text-sm text-gray-400'>
                <MapPin className='w-4 h-4' />
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
              <div className='flex items-center space-x-2 text-sm text-gray-400'>
                <Phone className='w-4 h-4' />
                <span>1900-1234</span>
              </div>
              <div className='flex items-center space-x-2 text-sm text-gray-400'>
                <Mail className='w-4 h-4' />
                <span>info@techstore.vn</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Công ty</h4>
            <ul className='space-y-2'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Hỗ trợ</h4>
            <ul className='space-y-2'>
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Pháp lý</h4>
            <ul className='space-y-2'>
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-800 mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-sm text-gray-400'>
              © {currentYear} TechStore. Tất cả quyền được bảo lưu.
            </div>

            {/* Social Links */}
            <div className='flex space-x-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-colors'
                  aria-label={social.name}
                >
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
