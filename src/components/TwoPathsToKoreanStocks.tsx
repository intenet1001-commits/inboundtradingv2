"use client";

import React, { useState } from "react";
import { Building2, User, TrendingUp, ArrowRight, Landmark, Shield, Globe, Wallet, Languages, Type } from "lucide-react";

// Translations
const translations = {
  en: {
    header: {
      title: "Global Investors: Two Paths to Korean Stocks",
      subtitle: "Choose the investment path that best fits your needs — whether through traditional brokerage channels or direct market access.",
    },
    case1: {
      title: "Indirect Account Open",
      subtitle: "In-app Integration with Global Broker",
      description: "Global investors can invest in Korean stocks through in-app integration with NH namuh via their familiar overseas broker app. All orders are executed on KRX through NH Investment & Securities, with settlement based on omnibus accounts.",
      highlight: "Global Broker",
    },
    case2: {
      title: "Direct Account Open",
      subtitle: "Direct NH namuh Account Opening",
      description: "The overseas broker only provides introductions, and investors open accounts directly with NH namuh. NH Investment & Securities also serves as the custodian, reducing intermediate steps.",
      highlight: "NH namuh",
    },
    comparison: {
      header: "Comparison",
      case1Header: "CASE 1: Indirect Open",
      case2Header: "CASE 2: Direct Open",
      rows: [
        { label: "Account Opening", case1: "Overseas Broker App (In-app Integration)", case2: "Direct NH namuh Opening" },
        { label: "Overseas Broker Role", case1: "In-app Integration (Active)", case2: "Introduction Only (Introducer)" },
        { label: "Custody Structure", case1: "Global Custodian → Local Custodian", case2: "NH Investment Direct Custody" },
        { label: "Settlement Method", case1: "Omnibus Account", case2: "Individual Account" },
        { label: "Recommended For", case1: "Investors wanting to keep existing app", case2: "Investors wanting direct control & lower fees" },
      ],
    },
    bottom: {
      title: "Mutual Benefit for Brokers",
      description: "Both US and Korean brokers benefit from expanded service offerings and cross-border client relationships, creating a win-win ecosystem for international investing.",
    },
    toggles: {
      language: "한국어",
      largeFont: "Large Font",
    },
    flow: {
      case1: {
        section1Title: "Account Opening & In-app Integration",
        section2Title: "Order & Execution Flow",
        section3Title: "Fund & Settlement Flow",
        globalInvestor: "Global Investor",
        globalInvestorSub: "Global Investors",
        overseasBroker: "Overseas Broker",
        overseasBrokerApp: "Overseas Broker App",
        globalCustodian: "Global Custodian",
        localCustodian: "Local Custodian",
        localCustodianSub: "NH Investment LC Role Available",
        nhSecurities: "NH Investment",
        krxSub: "Korea Exchange",
        ksdSub: "Korea Securities Depository",
        step1: "① Apply",
        step2: "② Integration",
        step3: "③ Order",
        step4: "④ Order",
        step5: "⑤ Order",
        step6: "⑥ Exec",
        step7: "⑦ Exec",
        step8: "⑧ Exec",
        fundStep1: "⑦ Fund Transfer",
        fundStep2: "⑧ Local Delegate",
        fundStep3: "⑨ Settlement",
        orderLabel: "Order →",
        execLabel: "← Execution",
        realtimeSync: "Real-time Sync",
        omnibusNote: "Omnibus Settlement:",
        omnibusDesc: "NH Investment sends settlement info to KSD at omnibus level (individual investors not identified)",
      },
      case2: {
        section1Title: "Introduction & Direct Account Opening",
        section2Title: "Order & Execution Flow",
        section3Title: "Fund & Settlement Flow",
        globalInvestor: "Global Investor",
        globalInvestorSub: "Global Investors",
        globalInvestorDirect: "Direct Account Open",
        directTransfer: "Direct Transfer",
        overseasBroker: "Overseas Broker",
        nhSecurities: "NH Investment",
        nhSecuritiesSub: "LC (Local Custodian) Role",
        krxSub: "Korea Exchange",
        ksdSub: "Korea Securities Depository",
        intro: "Intro",
        step1: "① Direct Open",
        step2: "② Order",
        step3: "③ Order",
        step4: "④ Exec",
        step5: "⑤ Exec",
        step6: "⑥ Fund Transfer",
        step7: "⑦ Settlement",
        orderLabel: "Order →",
        execLabel: "← Execution",
        directCustodyNote: "LC Role:",
        directCustodyDesc: "NH Investment serves as Local Custodian → Order processing possible even before CASE1 structure is built",
      },
    },
  },
  ko: {
    header: {
      title: "글로벌 투자자: 한국 주식 투자 2가지 방법",
      subtitle: "기존 브로커 채널을 통하거나 직접 시장 접근을 통해, 투자자에게 가장 적합한 투자 경로를 선택하세요.",
    },
    case1: {
      title: "간접 계좌개설",
      subtitle: "해외 브로커 인앱 연동",
      description: "글로벌 투자자가 익숙한 해외 브로커 앱에서 NH namuh 인앱 연동을 통해 한국 주식에 투자합니다. 모든 주문은 NH투자증권을 통해 KRX에서 체결되며, 옴니버스 계좌 기반으로 결제됩니다.",
      highlight: "글로벌 브로커",
    },
    case2: {
      title: "직접 계좌개설",
      subtitle: "NH namuh 직접 계좌개설",
      description: "해외 브로커는 소개만 하고, 투자자가 NH namuh에 직접 계좌를 개설합니다. NH투자증권이 직접 수탁사 역할을 겸하여 중간 단계가 줄어듭니다.",
      highlight: "NH namuh",
    },
    comparison: {
      header: "비교 항목",
      case1Header: "CASE 1: 간접 개설",
      case2Header: "CASE 2: 직접 개설",
      rows: [
        { label: "계좌 개설", case1: "해외 브로커 앱 (인앱 연동)", case2: "NH namuh 직접 개설" },
        { label: "해외 브로커 역할", case1: "인앱 연동 (Active)", case2: "소개만 (Introducer)" },
        { label: "수탁 구조", case1: "글로벌 수탁사 → 로컬 수탁사", case2: "NH투자증권 직접 수탁" },
        { label: "결제 방식", case1: "옴니버스 계좌", case2: "개별 계좌" },
        { label: "추천 대상", case1: "기존 앱 유지 원하는 투자자", case2: "직접 통제 & 낮은 수수료 원하는 투자자" },
      ],
    },
    bottom: {
      title: "브로커 상호 이익",
      description: "미국과 한국 브로커 모두 서비스 확대와 글로벌 고객 관계를 통해 혜택을 받으며, 국제 투자를 위한 윈-윈 생태계를 구축합니다.",
    },
    toggles: {
      language: "English",
      largeFont: "큰 글씨",
    },
    flow: {
      case1: {
        section1Title: "계좌개설 & 인앱 연동",
        section2Title: "주문 & 체결 흐름",
        section3Title: "자금 & 결제 흐름",
        globalInvestor: "글로벌 투자자",
        globalInvestorSub: "Global Investors",
        overseasBroker: "해외 브로커",
        overseasBrokerApp: "해외 브로커 앱",
        globalCustodian: "글로벌 수탁사",
        localCustodian: "로컬 수탁사",
        localCustodianSub: "NH투자증권 LC역할 가능",
        nhSecurities: "NH투자증권",
        krxSub: "한국거래소",
        ksdSub: "한국예탁결제원",
        step1: "① 거래신청",
        step2: "② 인앱연동",
        step3: "③ 주문",
        step4: "④ 주문",
        step5: "⑤ 주문",
        step6: "⑥ 체결",
        step7: "⑦ 체결",
        step8: "⑧ 체결",
        fundStep1: "⑦ 자금송금",
        fundStep2: "⑧ 로컬위임",
        fundStep3: "⑨ 결제연계",
        orderLabel: "주문 →",
        execLabel: "← 체결",
        realtimeSync: "실시간 Sync",
        omnibusNote: "옴니버스 결제:",
        omnibusDesc: "NH투자증권이 KSD에 옴니버스 레벨로 결제 정보 전송 (개별 투자자 미식별)",
      },
      case2: {
        section1Title: "소개 & 직접 계좌개설",
        section2Title: "주문 & 체결 흐름",
        section3Title: "자금 & 결제 흐름",
        globalInvestor: "글로벌 투자자",
        globalInvestorSub: "Global Investors",
        globalInvestorDirect: "직접 계좌개설",
        directTransfer: "직접 자금이체",
        overseasBroker: "해외 브로커",
        nhSecurities: "NH투자증권",
        nhSecuritiesSub: "LC(로컬수탁사) 역할",
        krxSub: "한국거래소",
        ksdSub: "한국예탁결제원",
        intro: "소개",
        step1: "① 직접개설",
        step2: "② 주문",
        step3: "③ 주문",
        step4: "④ 체결",
        step5: "⑤ 체결",
        step6: "⑥ 자금송금",
        step7: "⑦ 결제연계",
        orderLabel: "주문 →",
        execLabel: "← 체결",
        directCustodyNote: "LC 역할:",
        directCustodyDesc: "NH투자증권이 LC(로컬수탁사) 역할 수행 → CASE1 구조 구축 전에도 주문처리 가능",
      },
    },
  },
};

type Language = "en" | "ko";

// Entity Icon Component
function EntityIcon({
  icon,
  label,
  sublabel,
  currency,
  color = "teal",
  size = "default",
  largeFont = false,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  currency?: string;
  color?: "teal" | "amber" | "blue" | "slate" | "emerald" | "purple";
  size?: "default" | "small";
  largeFont?: boolean;
}) {
  const colorClasses = {
    teal: "bg-teal-100 text-teal-600",
    amber: "bg-amber-100 text-amber-600",
    blue: "bg-blue-100 text-blue-600",
    slate: "bg-slate-100 text-slate-600",
    emerald: "bg-emerald-100 text-emerald-600",
    purple: "bg-purple-100 text-purple-600",
  };

  const sizeClasses = {
    default: largeFont ? "h-16 w-16" : "h-14 w-14",
    small: largeFont ? "h-12 w-12" : "h-10 w-10",
  };

  const iconSize = size === "small"
    ? (largeFont ? "h-6 w-6" : "h-5 w-5")
    : (largeFont ? "h-8 w-8" : "h-7 w-7");

  const labelSize = size === "small"
    ? (largeFont ? "text-sm" : "text-xs")
    : (largeFont ? "text-base" : "text-sm");

  const sublabelSize = size === "small"
    ? (largeFont ? "text-xs" : "text-[10px]")
    : (largeFont ? "text-sm" : "text-xs");

  const currencySize = size === "small"
    ? (largeFont ? "text-xs" : "text-[10px]")
    : (largeFont ? "text-sm" : "text-xs");

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`flex items-center justify-center rounded-xl ${colorClasses[color]} ${sizeClasses[size]}`}
      >
        <div className={iconSize}>{icon}</div>
      </div>
      <div className="text-center">
        <p className={`font-medium text-zinc-900 ${labelSize}`}>{label}</p>
        {sublabel && (
          <p className={`text-zinc-500 ${sublabelSize}`}>{sublabel}</p>
        )}
        {currency && (
          <span className={`mt-0.5 inline-block rounded-full bg-zinc-100 px-1.5 py-0.5 font-semibold text-zinc-700 ${currencySize}`}>
            {currency}
          </span>
        )}
      </div>
    </div>
  );
}

// Flow Arrow Component
function FlowArrow({ dashed = false, label, color = "zinc" }: {
  dashed?: boolean;
  label?: string;
  color?: "zinc" | "blue" | "green" | "amber";
}) {
  const colorClasses = {
    zinc: dashed ? "border-zinc-300" : "bg-zinc-400",
    blue: dashed ? "border-blue-300" : "bg-blue-400",
    green: dashed ? "border-green-300" : "bg-green-400",
    amber: dashed ? "border-amber-300" : "bg-amber-400",
  };

  const arrowColor = {
    zinc: dashed ? "text-zinc-300" : "text-zinc-400",
    blue: dashed ? "text-blue-300" : "text-blue-400",
    green: dashed ? "text-green-300" : "text-green-400",
    amber: dashed ? "text-amber-300" : "text-amber-400",
  };

  return (
    <div className="flex flex-col items-center justify-center px-1">
      <div className="flex items-center">
        <div
          className={`h-0.5 w-6 ${dashed ? `border-t-2 border-dashed ${colorClasses[color]}` : colorClasses[color]}`}
        />
        <ArrowRight className={`h-3 w-3 ${arrowColor[color]}`} />
      </div>
      {label && (
        <span className="text-[9px] text-zinc-500 mt-0.5 whitespace-nowrap">{label}</span>
      )}
    </div>
  );
}

// Bidirectional Flow Arrow Component - 양방향 주문/체결 애니메이션
function BidirectionalFlowArrow({
  orderLabel,
  executionLabel
}: {
  orderLabel: string;
  executionLabel: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center px-1 py-1">
      {/* 상단: 주문 흐름 (오른쪽 →) */}
      <div className="flex items-center gap-0.5">
        <svg width="40" height="8" className="overflow-visible">
          <line
            x1="0"
            y1="4"
            x2="32"
            y2="4"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-flow-right"
          />
          <polygon points="32,0 40,4 32,8" fill="#3b82f6" />
        </svg>
        <span className="text-[8px] text-blue-500 whitespace-nowrap ml-0.5">{orderLabel}</span>
      </div>

      {/* 하단: 체결 흐름 (왼쪽 ←) */}
      <div className="flex items-center gap-0.5 mt-1">
        <span className="text-[8px] text-green-500 whitespace-nowrap mr-0.5">{executionLabel}</span>
        <svg width="40" height="8" className="overflow-visible">
          <polygon points="8,0 0,4 8,8" fill="#22c55e" />
          <line
            x1="8"
            y1="4"
            x2="40"
            y2="4"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-flow-left"
          />
        </svg>
      </div>
    </div>
  );
}

// CASE 1: Indirect Trading - 상세 플로우
function Case1DetailedFlow({ lang, largeFont = false }: { lang: Language; largeFont?: boolean }) {
  const t = translations[lang].flow.case1;
  return (
    <div className="flex flex-col gap-4">
      {/* 계좌개설 & 인앱 연동 섹션 */}
      <div className="rounded-xl bg-zinc-50 p-3 border border-zinc-200">
        <div className={`font-medium text-zinc-600 mb-2 flex items-center gap-1 ${largeFont ? "text-sm" : "text-xs"}`}>
          <span>🤝</span> {t.section1Title}
        </div>
        <div className="flex items-center justify-center overflow-x-auto pb-2">
          <EntityIcon
            icon={<User className="h-full w-full" />}
            label={t.globalInvestor}
            sublabel={t.globalInvestorSub}
            color="slate"
            size="small"
            largeFont={largeFont}
          />
          <FlowArrow label={t.step1} color="blue" />
          <EntityIcon
            icon={<Globe className="h-full w-full" />}
            label={t.overseasBroker}
            sublabel="Robinhood, Webull..."
            currency="$"
            color="slate"
            size="small"
            largeFont={largeFont}
          />
          <FlowArrow label={t.step2} color="blue" />
          <EntityIcon
            icon={<Building2 className="h-full w-full" />}
            label="NH namuh"
            sublabel="NH Global App"
            color="emerald"
            size="small"
            largeFont={largeFont}
          />
        </div>
      </div>

      {/* 주문 & 체결 흐름 (양방향 애니메이션) */}
      <div className="rounded-xl bg-blue-50/50 p-3 border border-blue-100">
        <div className={`font-medium text-blue-600 mb-2 flex items-center gap-1 ${largeFont ? "text-sm" : "text-xs"}`}>
          <span>📝</span> {t.section2Title}
        </div>
        <div className="flex items-center justify-center overflow-x-auto pb-2">
          <EntityIcon
            icon={<Globe className="h-full w-full" />}
            label={t.overseasBrokerApp}
            sublabel="Robinhood, Webull..."
            currency="$"
            color="slate"
            size="small"
            largeFont={largeFont}
          />
          <BidirectionalFlowArrow orderLabel={t.step3} executionLabel={t.step8} />
          <EntityIcon
            icon={<Building2 className="h-full w-full" />}
            label="NH namuh"
            sublabel="NH Global App"
            color="emerald"
            size="small"
            largeFont={largeFont}
          />
          <BidirectionalFlowArrow orderLabel={t.step4} executionLabel={t.step7} />
          <EntityIcon
            icon={<Landmark className="h-full w-full" />}
            label={t.nhSecurities}
            sublabel="Korean Securities"
            currency="₩"
            color="amber"
            size="small"
            largeFont={largeFont}
          />
          <BidirectionalFlowArrow orderLabel={t.step5} executionLabel={t.step6} />
          <EntityIcon
            icon={<TrendingUp className="h-full w-full" />}
            label="KRX"
            sublabel={t.krxSub}
            color="blue"
            size="small"
            largeFont={largeFont}
          />
        </div>
        <div className={`mt-2 text-zinc-500 bg-white/50 rounded-lg p-2 flex items-center justify-between ${largeFont ? "text-xs" : "text-[10px]"}`}>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1"><span className="inline-block w-3 h-0.5 bg-blue-500"></span> {t.orderLabel}</span>
            <span className="flex items-center gap-1"><span className="inline-block w-3 h-0.5 bg-green-500"></span> {t.execLabel}</span>
          </div>
          <span className="font-medium text-blue-600">🔄 {t.realtimeSync}</span>
        </div>
      </div>

      {/* 자금 & 결제 흐름 */}
      <div className="rounded-xl bg-emerald-50/50 p-3 border border-emerald-100">
        <div className={`font-medium text-emerald-600 mb-2 flex items-center gap-1 ${largeFont ? "text-sm" : "text-xs"}`}>
          <span>💰</span> {t.section3Title}
        </div>
        <div className="flex items-center justify-center overflow-x-auto pb-2">
          <EntityIcon
            icon={<Globe className="h-full w-full" />}
            label={t.overseasBroker}
            sublabel="Global Broker"
            currency="$"
            color="slate"
            size="small"
            largeFont={largeFont}
          />
          <FlowArrow label={t.fundStep1} color="green" />
          <EntityIcon
            icon={<Wallet className="h-full w-full" />}
            label={t.globalCustodian}
            sublabel="State Street, BNY..."
            color="purple"
            size="small"
            largeFont={largeFont}
          />
          <FlowArrow label={t.fundStep2} color="amber" />
          <EntityIcon
            icon={<Building2 className="h-full w-full" />}
            label={t.localCustodian}
            sublabel={t.localCustodianSub}
            currency="₩"
            color="emerald"
            size="small"
            largeFont={largeFont}
          />
          <FlowArrow label={t.fundStep3} color="amber" />
          <EntityIcon
            icon={<Shield className="h-full w-full" />}
            label="KSD"
            sublabel={t.ksdSub}
            color="slate"
            size="small"
            largeFont={largeFont}
          />
        </div>
        <div className={`mt-2 text-zinc-500 bg-white/50 rounded-lg p-2 ${largeFont ? "text-xs" : "text-[10px]"}`}>
          <span className="font-medium text-emerald-600">💡 {t.omnibusNote}</span> {t.omnibusDesc}
        </div>
      </div>
    </div>
  );
}

// CASE 2: Direct Access - 상세 플로우
function Case2DetailedFlow({ lang, largeFont = false }: { lang: Language; largeFont?: boolean }) {
  const t = translations[lang].flow.case2;
  return (
    <div className="flex flex-col gap-4">
      {/* 소개 & 직접 계좌개설 */}
      <div className="rounded-xl bg-zinc-50 p-3 border border-zinc-200">
        <div className={`font-medium text-zinc-600 mb-2 flex items-center gap-1 ${largeFont ? "text-sm" : "text-xs"}`}>
          <span>🤝</span> {t.section1Title}
        </div>
        <div className="flex items-center justify-center overflow-x-auto pb-2">
          <EntityIcon
            icon={<User className="h-full w-full" />}
            label={t.globalInvestor}
            sublabel={t.globalInvestorSub}
            color="teal"
            size="small"
            largeFont={largeFont}
          />
          <FlowArrow dashed label={t.intro} color="zinc" />
          <EntityIcon
            icon={<Globe className="h-full w-full" />}
            label={t.overseasBroker}
            sublabel="Introducer Only"
            currency="$"
            color="slate"
            size="small"
            largeFont={largeFont}
          />
          <div className="px-2 text-zinc-300">|</div>
          <EntityIcon
            icon={<User className="h-full w-full" />}
            label={t.globalInvestor}
            sublabel={t.globalInvestorDirect}
            color="teal"
            size="small"
            largeFont={largeFont}
          />
          <FlowArrow label={t.step1} color="blue" />
          <EntityIcon
            icon={<Building2 className="h-full w-full" />}
            label="NH namuh"
            sublabel="NH Global App"
            color="emerald"
            size="small"
            largeFont={largeFont}
          />
        </div>
      </div>

      {/* 주문 & 체결 흐름 (양방향 애니메이션) */}
      <div className="rounded-xl bg-blue-50/50 p-3 border border-blue-100">
        <div className={`font-medium text-blue-600 mb-2 flex items-center gap-1 ${largeFont ? "text-sm" : "text-xs"}`}>
          <span>📝</span> {t.section2Title}
        </div>
        <div className="flex items-center justify-center overflow-x-auto pb-2">
          <EntityIcon
            icon={<Building2 className="h-full w-full" />}
            label="NH namuh"
            sublabel="NH Global App"
            color="emerald"
            size="small"
            largeFont={largeFont}
          />
          <BidirectionalFlowArrow orderLabel={t.step2} executionLabel={t.step5} />
          <EntityIcon
            icon={<Landmark className="h-full w-full" />}
            label={t.nhSecurities}
            sublabel="Korean Securities"
            currency="₩"
            color="amber"
            size="small"
            largeFont={largeFont}
          />
          <BidirectionalFlowArrow orderLabel={t.step3} executionLabel={t.step4} />
          <EntityIcon
            icon={<TrendingUp className="h-full w-full" />}
            label="KRX"
            sublabel={t.krxSub}
            color="blue"
            size="small"
            largeFont={largeFont}
          />
        </div>
        <div className={`mt-2 text-zinc-500 bg-white/50 rounded-lg p-2 flex items-center gap-2 ${largeFont ? "text-xs" : "text-[10px]"}`}>
          <span className="flex items-center gap-1"><span className="inline-block w-3 h-0.5 bg-blue-500"></span> {t.orderLabel}</span>
          <span className="flex items-center gap-1"><span className="inline-block w-3 h-0.5 bg-green-500"></span> {t.execLabel}</span>
        </div>
      </div>

      {/* 자금 & 결제 흐름 */}
      <div className="rounded-xl bg-emerald-50/50 p-3 border border-emerald-100">
        <div className={`font-medium text-emerald-600 mb-2 flex items-center gap-1 ${largeFont ? "text-sm" : "text-xs"}`}>
          <span>💰</span> {t.section3Title}
        </div>
        <div className="flex items-center justify-center overflow-x-auto pb-2">
          <EntityIcon
            icon={<User className="h-full w-full" />}
            label={t.globalInvestor}
            sublabel={t.directTransfer}
            currency="$"
            color="teal"
            size="small"
            largeFont={largeFont}
          />
          <FlowArrow label={t.step6} color="green" />
          <EntityIcon
            icon={<Building2 className="h-full w-full" />}
            label={t.nhSecurities}
            sublabel={t.nhSecuritiesSub}
            currency="₩"
            color="amber"
            size="small"
            largeFont={largeFont}
          />
          <FlowArrow label={t.step7} color="amber" />
          <EntityIcon
            icon={<Shield className="h-full w-full" />}
            label="KSD"
            sublabel={t.ksdSub}
            color="slate"
            size="small"
            largeFont={largeFont}
          />
        </div>
        <div className={`mt-2 text-zinc-500 bg-white/50 rounded-lg p-2 ${largeFont ? "text-xs" : "text-[10px]"}`}>
          <span className="font-medium text-teal-600">💡 {t.directCustodyNote}</span> {t.directCustodyDesc}
        </div>
      </div>
    </div>
  );
}

// Case Card Component
function CaseCard({
  caseNumber,
  title,
  subtitle,
  description,
  highlight,
  children,
  largeFont = false,
}: {
  caseNumber: number;
  title: string;
  subtitle: string;
  description: string;
  highlight?: string;
  children: React.ReactNode;
  largeFont?: boolean;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      {/* Header */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className={`rounded-full bg-zinc-900 px-3 py-1 font-semibold text-white ${largeFont ? "text-sm" : "text-xs"}`}>
            CASE {caseNumber}
          </span>
          {highlight && (
            <span className={`rounded-full bg-teal-100 px-3 py-1 font-semibold text-teal-700 ${largeFont ? "text-sm" : "text-xs"}`}>
              {highlight}
            </span>
          )}
        </div>
        <h3 className={`font-semibold text-zinc-900 ${largeFont ? "text-xl" : "text-lg"}`}>{title}</h3>
        <p className={`text-zinc-500 ${largeFont ? "text-base" : "text-sm"}`}>{subtitle}</p>
      </div>

      {/* Flow Diagram */}
      <div className="mb-4 flex-1">
        {children}
      </div>

      {/* Description */}
      <p className={`leading-relaxed text-zinc-600 border-t border-zinc-100 pt-4 ${largeFont ? "text-base" : "text-sm"}`}>{description}</p>
    </div>
  );
}

export default function TwoPathsToKoreanStocks() {
  const [lang, setLang] = useState<Language>("ko");
  const [largeFont, setLargeFont] = useState(false);
  const t = translations[lang];

  return (
    <section className="w-full bg-zinc-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Toggle Buttons */}
        <div className="mb-6 flex justify-end gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ko" : "en")}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 font-medium transition-all ${
              lang === "ko"
                ? "bg-teal-500 text-white shadow-md"
                : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50"
            } ${largeFont ? "text-base" : "text-sm"}`}
          >
            <Languages className={largeFont ? "h-5 w-5" : "h-4 w-4"} />
            {t.toggles.language}
          </button>
          <button
            onClick={() => setLargeFont(!largeFont)}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 font-medium transition-all ${
              largeFont
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50"
            } ${largeFont ? "text-base" : "text-sm"}`}
          >
            <Type className={largeFont ? "h-5 w-5" : "h-4 w-4"} />
            {t.toggles.largeFont}
          </button>
        </div>

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className={`mb-3 font-bold tracking-tight text-zinc-900 ${largeFont ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"}`}>
            {t.header.title}
          </h2>
          <p className={`mx-auto max-w-2xl text-zinc-600 ${largeFont ? "text-xl" : "text-lg"}`}>
            {t.header.subtitle}
          </p>
        </div>

        {/* Case Cards */}
        <div className="mb-10 grid gap-6 lg:grid-cols-2">
          <CaseCard
            caseNumber={1}
            title={t.case1.title}
            subtitle={t.case1.subtitle}
            description={t.case1.description}
            highlight={t.case1.highlight}
            largeFont={largeFont}
          >
            <Case1DetailedFlow lang={lang} largeFont={largeFont} />
          </CaseCard>

          <CaseCard
            caseNumber={2}
            title={t.case2.title}
            subtitle={t.case2.subtitle}
            description={t.case2.description}
            highlight={t.case2.highlight}
            largeFont={largeFont}
          >
            <Case2DetailedFlow lang={lang} largeFont={largeFont} />
          </CaseCard>
        </div>

        {/* Comparison Table */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className={`grid grid-cols-3 ${largeFont ? "text-base" : "text-sm"}`}>
            <div className="bg-zinc-50 p-4 font-medium text-zinc-700 border-b border-zinc-200">{t.comparison.header}</div>
            <div className="bg-zinc-50 p-4 font-medium text-zinc-700 border-b border-l border-zinc-200 text-center">{t.comparison.case1Header}</div>
            <div className="bg-zinc-50 p-4 font-medium text-zinc-700 border-b border-l border-zinc-200 text-center">{t.comparison.case2Header}</div>

            {t.comparison.rows.map((row, index) => (
              <React.Fragment key={index}>
                <div className={`p-4 text-zinc-600 ${index < t.comparison.rows.length - 1 ? "border-b border-zinc-100" : ""}`}>
                  {row.label}
                </div>
                <div className={`p-4 text-zinc-900 border-l text-center ${index < t.comparison.rows.length - 1 ? "border-b border-zinc-100" : "border-zinc-100"}`}>
                  {row.case1}
                </div>
                <div className={`p-4 text-zinc-900 border-l text-center ${index < t.comparison.rows.length - 1 ? "border-b border-zinc-100" : "border-zinc-100"}`}>
                  {row.case2}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 p-8 text-center text-white">
          <h3 className={`mb-2 font-semibold ${largeFont ? "text-2xl" : "text-xl"}`}>{t.bottom.title}</h3>
          <p className={`mx-auto max-w-2xl text-white/90 ${largeFont ? "text-base" : "text-sm"}`}>
            {t.bottom.description}
          </p>
        </div>
      </div>
    </section>
  );
}
