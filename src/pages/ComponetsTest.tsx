import React from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export default function ComponetsTest() {
  return (
    <div>
      <Button
        variant="outline"
        size="sm"
        className="mb-4 bg-blue-500 text-white"
        onClick={() => alert('버튼이 클릭되었습니다!')}
      >
        버튼입니당.
      </Button>
      {/* 컴포넌트 사용법 variant = 형태, size = lg, sm 등으로 가능, style 시트로 일반 css 처럼 크기 조정 가능, classname으로 색상, 글씨체 크기 정하기 가능, 자바스크립트 기능도 사용 가능*/}
      <Calendar></Calendar>
      <Card>dsadsa</Card>
      <Label>라벨</Label>
    </div>
  )
}
