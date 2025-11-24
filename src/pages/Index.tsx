import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Navbar from '@/components/ui/Navbar'
import { Cog } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()
  const menuItems = [
    {
      title: 'autOTP',
      description: 'OTP 자동 로그인',
      icon: Cog,
      color: 'from-primary to-accent',
      route: '/Autotp',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-pastel flex flex-col items-center justify-center p-6">
      <Navbar />
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* Main Title */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold text-foreground mb-4 tracking-tight">
            Campus Helper
          </h1>
          <p className="text-xl text-muted-foreground">
            캠퍼스 생활을 더 편리하게
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="flex justify-center w-full">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card key={index} className="group w-full max-w-lg">
                <Button
                  variant="ghost"
                  className="w-full h-48 p-8 bg-gradient-card backdrop-blur-sm border-2 border-white/30 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 rounded-2xl"
                  onClick={() => item.route && navigate(item.route)}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div
                      className={`p-5 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}
                    >
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Button>
              </Card>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-12">
          <p className="text-sm text-muted-foreground/70">
            더 나은 캠퍼스 라이프를 위한 도우미
          </p>
        </div>
      </div>
    </div>
  )
}

export default Index
