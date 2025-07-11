'use client'

import {createClient} from '@/lib/client'
import {Button} from '@/components/ui/button'
import {useRouter} from 'next/navigation'

export function LogoutButton() {
  const router = useRouter()

  const logout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <Button
      className='relative z-[50]'
      onClick={logout}
    >
      Đăng xuất
    </Button>
  )
}
