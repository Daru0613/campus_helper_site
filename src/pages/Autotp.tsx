import React from 'react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/ui/Navbar'
import { Download } from 'lucide-react'

export default function Autotp() {
  return (
    <div className="min-h-screen bg-gradient-pastel flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center pt-32 p-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-6xl font-bold text-foreground mb-12 tracking-tight leading-tight">
            Instant login with auto
            <br />
            account and OTP
          </h1>

          {/* Download Button */}
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-16 bg-white hover:bg-gray-50 text-gray-800 shadow-lg hover:shadow-xl transition-all mb-16 border border-gray-200"
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1i1HAPxY7z639q700UzFkN7WVkC5hQ0T8/view?usp=drive_link',
                '_blank'
              )
            }
          >
            <Download className="w-6 h-6 mr-3" />
            Download for Windows
          </Button>

          {/* 사전 설정 방법 섹션 */}
          <div
            className="mt-16 text-left"
            style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}
          >
            {/* 첫 번째 박스 - account saving */}
            <div
              className="bg-white/20 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/30"
              style={{ padding: '35px' }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white/30 backdrop-blur-md rounded-[2rem] p-6 border border-white/40">
                  <video
                    className="w-full h-auto rounded-3xl shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/autOTP1.mp4" type="video/mp4" />
                    브라우저가 비디오를 지원하지 않습니다.
                  </video>
                </div>

                {/* 오른쪽: 텍스트 콘텐츠 */}
                <div className="text-foreground">
                  <h3 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                    ACCOUNT
                    <br />
                    SAVING
                    <br />
                    FEATURE
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    사용자의 계정을 keyring에 안전하게 <br />
                    저장하여 자동으로 로그인하고 OTP를 입력합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 두 번째 박스 - dark mode */}
            <div
              className="bg-white/20 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/30"
              style={{ padding: '35px' }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* 왼쪽: 텍스트 콘텐츠 */}
                <div className="text-foreground">
                  <h3 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                    DARK MODE
                    <br />
                    &
                    <br />
                    LIGHT MODE
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    사용자의 취향에 맞춰 다크 모드와 라이트 모드 간에 <br />
                    전환을 통해 더 나은 시각적 경험을 제공합니다.
                  </p>
                </div>

                <div className="bg-white/30 backdrop-blur-md rounded-[2rem] p-6 border border-white/40">
                  <video
                    className="w-full h-auto rounded-3xl shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/autOTP2.mp4" type="video/mp4" />
                    브라우저가 비디오를 지원하지 않습니다.
                  </video>
                </div>
              </div>
            </div>
            {/* 세 번째 박스 - account delete*/}
            <div
              className="bg-white/20 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/30"
              style={{ padding: '35px' }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white/30 backdrop-blur-md rounded-[2rem] p-6 border border-white/40">
                  <video
                    className="w-full h-auto rounded-3xl shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/autOTP3.mp4" type="video/mp4" />
                    브라우저가 비디오를 지원하지 않습니다.
                  </video>
                </div>

                {/* 오른쪽: 텍스트 콘텐츠 */}
                <div className="text-foreground">
                  <h3 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                    ACCOUNT
                    <br />
                    DELETION
                    <br />
                    FEATURE
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    사용자의 계정을 keyring에서 완전히 <br />
                    삭제하여 개인정보 보호를 강화합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 움직이는 텍스트 바 */}
            <div
              className="overflow-hidden py-12"
              style={{
                marginTop: '60px',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                background:
                  'linear-gradient(135deg, hsl(210, 100%, 75%) 0%, hsl(330, 100%, 80%) 50%, hsl(210, 100%, 73%) 100%)',
              }}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                  @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  .animate-scroll {
                    animation: scroll 50s linear infinite;
                  }
                `,
                }}
              />
              <div
                className="flex items-center gap-16 animate-scroll"
                style={{ width: 'max-content' }}
              >
                {[...Array(10)].map((_, i) => (
                  <React.Fragment key={i}>
                    <img
                      src="/autotpicon.png"
                      alt="autOTP"
                      className="w-16 h-16"
                    />
                    <span className="text-white text-6xl font-black uppercase tracking-wider">
                      SETTING
                    </span>
                    <img
                      src="/autotpicon.png"
                      alt="autOTP"
                      className="w-16 h-16"
                    />
                    <span className="text-white text-6xl font-black uppercase tracking-wider">
                      AUTO
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Setting 박스들 */}
            <div
              className="bg-white/20 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/30"
              style={{ padding: '35px' }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white/30 backdrop-blur-md rounded-[2rem] p-6 border border-white/40">
                  <img
                    src="/setting1.png"
                    alt="Setting 1"
                    className="w-full h-auto rounded-3xl shadow-lg"
                  />
                </div>

                <div className="text-foreground">
                  <h3 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                    STEP 1
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    윈도우 설정 - Bluetooth 및 장치 - 모바일 장치 순으로 클릭
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-white/20 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/30"
              style={{ padding: '35px' }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-foreground">
                  <h3 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                    STEP 2
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    휴대폰과 연결기능 활성화 및 절차에 따라 휴대폰과 연결
                  </p>
                </div>

                <div className="bg-white/30 backdrop-blur-md rounded-[2rem] p-6 border border-white/40">
                  <img
                    src="/setting2.png"
                    alt="Setting 2"
                    className="w-full h-auto rounded-3xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div
              className="bg-white/20 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/30"
              style={{ padding: '35px' }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white/30 backdrop-blur-md rounded-[2rem] p-6 border border-white/40">
                  <img
                    src="/setting3.png"
                    alt="Setting 3"
                    className="w-full h-auto rounded-3xl shadow-lg"
                  />
                </div>

                <div className="text-foreground">
                  <h3 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                    STEP 3
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    휴대폰과 연결 창 활성화 후 앱 탭에서 <br /> ISign+ OTP 앱
                    검색 후 시작메뉴에 추가
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bg-white/20 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/30"
              style={{ padding: '35px' }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-foreground">
                  <h3 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                    STEP 4
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    윈도우 검색창에서 ISign+ OTP 앱 검색 후 작업표시줄에 고정
                  </p>
                </div>

                <div className="bg-white/30 backdrop-blur-md rounded-[2rem] p-6 border border-white/40">
                  <img
                    src="/setting4.png"
                    alt="Setting 4"
                    className="w-full h-auto rounded-3xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div
              className="bg-white/20 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/30"
              style={{ padding: '35px' }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white/30 backdrop-blur-md rounded-[2rem] p-6 border border-white/40">
                  <img
                    src="/setting5.png"
                    alt="Setting 5"
                    className="w-full h-auto rounded-3xl shadow-lg"
                  />
                </div>

                <div className="text-foreground">
                  <h3 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                    STEP 5
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    autOTP 앱을 실행하고 학교 계정 등록 및 설정 저장
                    <br />
                    <br />
                    - 오른쪽 상단 위 아이콘으로 테마 설정 가능
                    <br />- 윈도우 시작 시 자동 실행 버튼 클릭시 부팅 이후 자동
                    실행
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
