import {Navbar, NavBody, NavItems} from '@/components/ui/resizable-navbar'
import Avatar from './avatar'

export function Header() {
  const navItems = [
    {
      name: 'Trang chủ',
      link: '/',
    },
    {
      name: 'Sản phẩm',
      link: '#products',
    },
    {
      name: 'Danh mục',
      link: '#categories',
    },
    {
      name: 'Liên hệ',
      link: '#contact',
    },
  ]

  return (
    <div className='fixed top-0 left-0 w-full z-[99]'>
      <Navbar>
        <NavBody className='bg-white w-full'>
          <div className='flex items-center'>
            <span className='text-xl font-bold text-blue-600 mr-4'>
              TechStore
            </span>
          </div>
          <NavItems items={navItems} />
          <Avatar />
        </NavBody>
      </Navbar>
    </div>
  )
}
