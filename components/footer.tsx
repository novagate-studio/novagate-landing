'use client'

import Logo from '@/assets/logo/PNG_WHITE.png'
import { MailIcon, MapPin } from 'lucide-react'
import { Goldman } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
const goldManFont = Goldman({
  weight: ['400', '700'],
})

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Subscribing email:', email)
      setIsSubscribed(true)
      setEmail('')
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }
  }

  return (
    <footer className='bg-black text-white py-12 px-4 md:px-8 lg:px-12 mt-10 md:mt-16 lg:mt-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-36'>
          {/* Company Info Section */}
          <div className='md:col-span-2'>
            <div className='flex items-center mb-4'>
              <Image src={Logo} alt='NovaGate Logo' width={60} height={60} className='h-26 w-auto mr-3' />
            </div>
            <h2>CÔNG TY CỔ PHẦN NOVAGATE STUDIO</h2>
            <p className='text-gray-300 text-sm leading-relaxed'>
              <MapPin className='inline size-4 mr-0.5' />Số 7, ngõ 1 đường Địa Đạo, Thôn Vệ, Xã Phúc Thịnh, Thành phố Hà Nội, Việt Nam
            </p>
            <Link href='mailto:novagate.studio.vn@gmail.com' className='text-gray-300 mb-6 text-sm leading-relaxed hover:underline'>
              <MailIcon className='inline size-4'/> novagate.studio.vn@gmail.com
            </Link>

            {/* Subscribe Section */}
            <div className='mt-6'>
              <h3 className='md:text-lg font-semibold mb-3 text-primary'>Đăng ký nhận tin tức</h3>
              <form onSubmit={handleSubscribe} className='flex flex-col sm:flex-row gap-3'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Nhập email của bạn...'
                  className='flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors'
                  required
                />
                <button
                  type='submit'
                  className='bg-primary hover:bg-[#d4a951] text-black font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap'>
                  Đăng ký
                </button>
              </form>
              {isSubscribed && (
                <p className='text-green-400 text-sm mt-2'>
                  Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi tin tức mới nhất đến email của bạn.
                </p>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className='md:text-lg font-semibold mb-4 text-primary'>Điều hướng</h3>
            <nav className='flex flex-col space-y-3 text-sm md:text-base'>
              <Link href='/' className='text-gray-300 hover:text-primary transition-colors'>
                Trang chủ
              </Link>
              <Link href='#about-us' className='text-gray-300 hover:text-primary transition-colors'>
                Về chúng tôi
              </Link>
              <Link href='#games' className='text-gray-300 hover:text-primary transition-colors'>
                Trò chơi
              </Link>
              <Link href='#news' className='text-gray-300 hover:text-primary transition-colors'>
                Tin tức
              </Link>
              <Link href='#contact' className='text-gray-300 hover:text-primary transition-colors'>
                Liên hệ
              </Link>
            </nav>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className='md:text-lg font-semibold mb-4 text-primary'>Hỗ trợ</h3>
            <nav className='flex flex-col space-y-3 text-sm md:text-base'>
              <Link href='#support' className='text-gray-300 hover:text-primary transition-colors'>
                Trung tâm hỗ trợ
              </Link>
              <Link href='#privacy' className='text-gray-300 hover:text-primary transition-colors'>
                Chính sách bảo mật
              </Link>
              <Link href='#terms' className='text-gray-300 hover:text-primary transition-colors'>
                Điều khoản sử dụng
              </Link>
              <Link href='#careers' className='text-gray-300 hover:text-primary transition-colors'>
                Tuyển dụng
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-xs md:text-sm'>© 2025 NovaGate Studio. Tất cả quyền được bảo lưu.</p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}