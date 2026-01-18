# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Inbound Trading V2 - 글로벌 투자자를 위한 한국 주식 투자 경로 시각화 웹 애플리케이션

**배포 URL**: https://inboundtradingv2.vercel.app
**GitHub**: https://github.com/intenet1001-commits/inboundtradingv2

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Tech Stack

- **Framework**: Next.js 16.1.3 with App Router and React Compiler enabled
- **React**: 19.2.3 with React Compiler (babel-plugin-react-compiler)
- **Styling**: Tailwind CSS 4 with tw-animate-css
- **UI Components**: shadcn/ui (new-york style, lucide icons)
- **TypeScript**: Strict mode enabled

## Project Structure

```
src/
├── app/           # Next.js App Router pages and layouts
│   ├── layout.tsx # Root layout with Geist fonts
│   ├── page.tsx   # Home page (TwoPathsToKoreanStocks 컴포넌트 렌더링)
│   └── globals.css # Tailwind + CSS variables + 플로우 애니메이션
├── components/    # React components (@/components)
│   ├── TwoPathsToKoreanStocks.tsx  # 메인 컴포넌트
│   └── ui/        # shadcn/ui components (@/components/ui)
├── lib/           # Utilities (@/lib)
│   └── utils.ts   # cn() helper for class merging
└── hooks/         # Custom React hooks (@/hooks)
```

## Main Component: TwoPathsToKoreanStocks

### 기능
1. **CASE 1 - 간접 계좌개설**: 해외 브로커 인앱 연동 방식
   - 계좌개설 & 인앱 연동 플로우
   - 주문 & 체결 흐름 (해외 브로커 앱 ⇄ NH namuh ⇄ NH투자증권 ⇄ KRX)
   - 자금 & 결제 흐름 (글로벌 수탁사 → 로컬 수탁사 → KSD)

2. **CASE 2 - 직접 계좌개설**: NH namuh 직접 계좌개설 방식
   - 소개 & 직접 계좌개설 플로우
   - 주문 & 체결 흐름 (NH namuh ⇄ NH투자증권 ⇄ KRX)
   - 자금 & 결제 흐름 (투자자 → NH투자증권 LC역할 → KSD)

3. **언어 토글**: 한국어/English 전환
4. **큰 글씨 모드**: 전체 UI 요소 확대

### 주요 컴포넌트
- `EntityIcon`: 플로우 다이어그램의 엔티티 아이콘 (largeFont 지원)
- `FlowArrow`: 단방향 화살표
- `BidirectionalFlowArrow`: 양방향 주문/체결 애니메이션 화살표
- `CaseCard`: 케이스별 카드 레이아웃
- `Case1DetailedFlow`: CASE 1 상세 플로우
- `Case2DetailedFlow`: CASE 2 상세 플로우

### 번역 구조
```typescript
translations = {
  en: { header, case1, case2, comparison, bottom, toggles, flow },
  ko: { header, case1, case2, comparison, bottom, toggles, flow }
}
```
- `flow.case1` / `flow.case2`: 플로우 다이어그램 내부 텍스트 번역

## Path Aliases

- `@/*` maps to `./src/*`

## Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Components use new-york style preset with neutral base colors and CSS variables for theming.

## Theming

CSS custom properties in `globals.css` define light/dark themes using OKLCH color space. Toggle dark mode by adding `.dark` class to parent element.

### 플로우 애니메이션
`globals.css`에 정의된 CSS 애니메이션:
- `animate-flow-right`: 주문 흐름 (→)
- `animate-flow-left`: 체결 흐름 (←)

## 용어 정리
- **LC (Local Custodian)**: 로컬 수탁사 - NH투자증권이 역할 수행 가능
- **GC (Global Custodian)**: 글로벌 수탁사 - State Street, BNY 등
- **KRX**: 한국거래소
- **KSD**: 한국예탁결제원
