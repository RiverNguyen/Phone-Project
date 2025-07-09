import {redirect} from 'next/navigation'

import {LogoutButton} from '@/components/logout-button'
import {createClient} from '@/lib/server'
import {NavbarButton} from '@/components/ui/resizable-navbar'

const Avatar = async () => {
  const supabase = await createClient()

  const {data, error} = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth/login')
  }

  if (data?.user) {
    return (
      <div className='flex items-center gap-4'>
        <p>
          <span>{data.user.email}</span>
        </p>
        {data.user.email === 'admin@gmail.com' && (
          <NavbarButton
            variant='dark'
            href='/dashboard'
          >
            Admin
          </NavbarButton>
        )}
        <LogoutButton />
      </div>
    )
  }

  return (
    <div className='flex items-center gap-4'>
      <NavbarButton
        variant='dark'
        href='/auth/login'
      >
        Đăng nhập
      </NavbarButton>
    </div>
  )
}
export default Avatar
