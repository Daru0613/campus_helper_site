import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, BookOpen, Utensils, Bell } from "lucide-react";

const Index = () => {
  const menuItems = [
    {
      title: "시간표",
      description: "내 강의 시간표 확인",
      icon: Calendar,
      color: "from-primary to-accent"
    },
    {
      title: "도서관",
      description: "도서 검색 및 예약",
      icon: BookOpen,
      color: "from-secondary to-primary"
    },
    {
      title: "식당",
      description: "학식 메뉴 및 시간",
      icon: Utensils,
      color: "from-accent to-secondary"
    },
    {
      title: "공지사항",
      description: "학교 소식 및 알림",
      icon: Bell,
      color: "from-primary to-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-pastel flex flex-col items-center justify-center p-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="group">
                <Button
                  variant="ghost"
                  className="w-full h-32 p-6 bg-gradient-card backdrop-blur-sm border border-white/20 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 rounded-lg"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} shadow-md`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Button>
              </Card>
            );
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
  );
};

export default Index;