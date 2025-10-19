'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '@/assets/logo/PNG_WHITE.png'
import Image from 'next/image'
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={classNames(
        'fixed top-0 w-full z-50 px-4 md:px-8 lg:px-12',
        'bg-gradient-to-b from-black/70 to-transparent',
        'transition-all duration-300'
      )}>
      <div className="flex h-20 md:h-28 justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-primary transition-colors">
            <Image src={Logo} alt="NovaGate Logo" width={150} height={50} className='h-16 md:h-24 w-auto' />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link 
            href="/" 
            className="text-white text-lg hover:text-primary transition-colors font-medium"
          >
            Trang chủ
          </Link>
          <Link 
            href="#about-us" 
            className="text-white text-lg hover:text-primary transition-colors font-medium"
          >
            Về chúng tôi
          </Link>
          <Link 
            href="#games" 
            className="text-white text-lg hover:text-primary transition-colors font-medium"
          >
            Trò chơi
          </Link>
          <Link 
            href="#news" 
            className="text-white text-lg hover:text-primary transition-colors font-medium"
          >
            Tin tức
          </Link>
        </nav>

        {/* Desktop Contact Button */}
        <button className="hidden md:block bg-primary hover:bg-[#d4a951] text-black font-semibold px-6 py-2 rounded-full transition-colors">
          Tài khoản
        </button>

        {/* Mobile Contact Button and Menu Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <button className="bg-primary hover:bg-[#d4a951] text-black font-semibold px-4 py-2 rounded-full text-sm transition-colors">
            Tài khoản
          </button>
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-8 h-8 text-white"
            aria-label="Toggle mobile menu"
          >
            <span className={classNames(
              'block w-6 h-0.5 bg-white transition-all duration-300',
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            )}></span>
            <span className={classNames(
              'block w-6 h-0.5 bg-white transition-all duration-300 mt-1',
              isMobileMenuOpen ? 'opacity-0' : ''
            )}></span>
            <span className={classNames(
              'block w-6 h-0.5 bg-white transition-all duration-300 mt-1',
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            )}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={classNames(
        'md:hidden w-full',
        'transition-all duration-300 ease-in-out',
        isMobileMenuOpen ? 'opacity-100 visible h-80' : 'opacity-0 invisible h-0'
      )}>
        <nav className="flex flex-col p-4 space-y-4">
          <Link 
            href="/" 
            className="text-white hover:text-primary transition-colors font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Trang chủ
          </Link>
          <Link 
            href="#about-us" 
            className="text-white hover:text-primary transition-colors font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Về chúng tôi
          </Link>
          <Link 
            href="#games" 
            className="text-white hover:text-primary transition-colors font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Trò chơi
          </Link>
          <Link 
            href="#news" 
            className="text-white hover:text-primary transition-colors font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tin tức
          </Link>
        </nav>
      </div>
    </header>
  )
}
