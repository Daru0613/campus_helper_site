// src/components/Navbar.tsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

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
      {/* autOTP 버튼 - 가운데 정렬 */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => navigate('/Autotp')}
          className="text-gray-500 text-base font-medium hover:text-accent transition-colors cursor-pointer"
        >
          autOTP
        </button>
      </div>
      {/* 오른쪽 공간 확보 */}
      <div className="w-[120px]"></div>
    </nav>
  )
}

export default Navbar
