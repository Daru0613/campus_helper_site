// src/components/Navbar.tsx
import React from 'react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const menuItems = ['autOTP', 'LMS 알리미']

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg border-b border-white/20 shadow-sm flex items-center justify-between px-8 py-3">
      {/* 로고 */}
      <div
        className="font-bold text-xl text-gray-600 cursor-pointer hover:text-gray-800 transition-colors"
        onClick={() => navigate('/')}
      >
        Campus Helper
      </div>
      {/* 메뉴 */}
      <ul className="flex-1 flex justify-center gap-8">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="text-gray-500 text-base font-medium hover:text-accent transition-colors cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        {/* 로그인 버튼 */}
        <Button
          variant="outline"
          className="bg-white/30 text-gray-600 border-white/40 hover:bg-white/50"
        >
          로그인
        </Button>
        {/* 회원가입 버튼 */}
        <Button
          variant="outline"
          className="bg-white/30 text-gray-600 border-white/40 hover:bg-white/50"
        >
          회원가입
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
