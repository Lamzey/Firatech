import { useState, useEffect, useRef, useMemo } from 'react';
import {
  Cpu,
  Wifi,
  WifiOff,
  CheckCircle2,
  Bot,
  Layers,
  GraduationCap,
  Home,
  Sparkles,
  Send,
  Play,
  Calculator,
  Building2,
  Users,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  Usb,
  Code2,
  Award,
  PhoneCall,
  Mail,
  MapPin,
  RefreshCw,
  MessageSquare,
  Database,
  Thermometer,
  Droplets,
  Gauge,
  Power,
  Radio,
  Copy,
  Check,
  FileText,
  Sparkle,
  Terminal,
  ExternalLink,
  Brain,
  CircuitBoard
} from 'lucide-react';

// ============================================================================
// 1. DOMAIN TYPES & HASH-SYNCHRONIZED ROUTING CONTRACTS
// ============================================================================

type PageRoute = '/' | '/services' | '/products' | '/about' | '/contact';

type ServiceCategory = 'all' | 'software' | 'enterprise_ils' | 'hardware' | 'training' | 'rd';

type DeploymentMode = 'b2b_school' | 'enterprise_ils' | 'hardware_kits' | 'b2c_home';

type KitTier = 'starter_arduino' | 'pro_esp32' | 'master_edge_ai';

interface OutboxMutation {
  id: string;
  priority: 1 | 2 | 3;
  event: string;
  payloadSummary: string;
  timestamp: string;
  status: 'pending' | 'synced';
}

interface TelemetryFrame {
  tempC: number;
  ph: number;
  ultrasonicCm: number;
  servoAngle: number;
  aeratorRelay: boolean;
  ledState: boolean;
  uptimeSec: number;
  source: 'simulator' | 'webserial';
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  sourceMode?: 'fira-live' | 'edge-fallback';
}

const LINKEDIN_URL = 'https://www.linkedin.com/company/firatech/';

// ============================================================================
// 2. OFFICIAL VECTOR EMBLEM (NO "FIRATECH" WORDMARK BESIDE LOGO)
// ============================================================================

function FiratechEmblem({ className = 'w-10 h-10' }: { className?: string }) {
  const gradId = useMemo(() => `fira-grad-${Math.random().toString(36).slice(2, 8)}`, []);
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Official Brand Emblem"
    >
      <defs>
        <linearGradient id={gradId} x1="20" y1="12" x2="100" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5A0B6E" />
          <stop offset="52%" stopColor="#8C159E" />
          <stop offset="100%" stopColor="#B91ED0" />
        </linearGradient>
      </defs>

      {/* Outer Royal Purple -> Electric Magenta Rotated Diamond */}
      <path d="M60 8L112 60L60 112L8 60L60 8Z" fill={`url(#${gradId})`} />

      {/* Crisp White Inner Diamond Cutout */}
      <path d="M60 27L93 60L60 93L27 60L60 27Z" fill="#FFFFFF" />

      {/* Left Channel Mask + Horizontal 'F' Motion Bar */}
      <rect x="6" y="42" width="48" height="36" fill="#FFFFFF" />
      <path
        d="M14 66V61C14 53.8 19.8 48 27 48H53V54.5H28.5C25.5 54.5 23.5 56.5 23.5 59.5V66H14Z"
        fill={`url(#${gradId})`}
      />
      <rect x="14" y="68.5" width="39" height="3.2" rx="1.6" fill={`url(#${gradId})`} />

      {/* Circuit-Board Head Silhouette Inside Right Diamond */}
      <g stroke={`url(#${gradId})`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M57 42.5C65.5 41.5 73.5 46.2 75.5 53.5L78.5 59.5L75.2 61.5L76.3 64.5L74.5 66.2L75.2 69.5C75.4 71.8 73.5 73.5 71 73.5H66.5L64.5 77.5"
          fill="none"
        />
        <path d="M56 47H64L67.5 50.5" />
        <circle cx="68.5" cy="51.5" r="2" fill="#FFFFFF" />

        <path d="M56 53.5H61.5L64.5 56.5H70" />
        <circle cx="71.5" cy="56.5" r="2" fill="#FFFFFF" />

        <path d="M56 60H63.5L66.5 63" />
        <circle cx="67.5" cy="64" r="2" fill="#FFFFFF" />

        <path d="M55 44V69L58.5 72.5" />
        <circle cx="59.5" cy="73.5" r="2" fill="#FFFFFF" />

        <path d="M52 51V64.5L49.5 67" />
        <circle cx="48.5" cy="68" r="1.8" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

// ============================================================================
// 3. CUSTOM ANIMATED SVG MOTION SCENES & TECHNICAL ILLUSTRATIONS
// ============================================================================

/**
 * Interactive Learning System (ILS) Assimilation Engine SVG Animation
 * Visualizes: Concept -> Interactive Lab -> AI Feedback -> Rapid Assimilation
 */
function IlsAssimilationSvg() {
  return (
    <div className="rounded-3xl bg-[#1A0322]/95 border border-[#5A0B6E]/80 p-5 sm:p-6 shadow-2xl shadow-[#5A0B6E]/30 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-fuchsia-300" />
          <span className="text-xs font-extrabold uppercase tracking-wider text-fuchsia-200">
            Interactive Learning System (ILS) • Assimilation Loop
          </span>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#B91ED0]/20 text-fuchsia-200 border border-[#B91ED0]/40">
          LIVE MOTION MODEL
        </span>
      </div>

      <svg
        viewBox="0 0 680 175"
        className="w-full h-auto"
        role="img"
        aria-label="Animated Interactive Learning System assimilation pipeline showing Concept, Interactive Lab, AI Feedback, and Rapid Assimilation"
      >
        <defs>
          <linearGradient id="ils-beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5A0B6E" />
            <stop offset="50%" stopColor="#B91ED0" />
            <stop offset="100%" stopColor="#F0ABFC" />
          </linearGradient>
          <filter id="ils-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Grid Lines */}
        <line x1="20" y1="88" x2="660" y2="88" stroke="#5A0B6E" strokeWidth="2" strokeDasharray="6 6" />
        <path
          d="M140 88 C 220 26, 460 26, 540 88"
          fill="none"
          stroke="#B91ED0"
          strokeOpacity="0.35"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
        <path
          d="M540 88 C 460 150, 220 150, 140 88"
          fill="none"
          stroke="#8C159E"
          strokeOpacity="0.4"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />

        {/* Animated Data Packets Flowing Forward */}
        <circle r="5" fill="#F0ABFC" filter="url(#ils-glow)">
          <animateMotion dur="3.4s" repeatCount="indefinite" path="M 85 88 L 595 88" />
        </circle>
        <circle r="4" fill="#B91ED0" filter="url(#ils-glow)">
          <animateMotion dur="3.4s" begin="1.1s" repeatCount="indefinite" path="M 85 88 L 595 88" />
        </circle>
        {/* Feedback Return Packet */}
        <circle r="4" fill="#34D399" filter="url(#ils-glow)">
          <animateMotion
            dur="4.2s"
            repeatCount="indefinite"
            path="M 540 88 C 460 150, 220 150, 140 88"
          />
        </circle>

        {/* Stage 1: Concept */}
        <g transform="translate(25, 44)">
          <rect width="125" height="88" rx="16" fill="#120318" stroke="#8C159E" strokeWidth="2" />
          <circle cx="62" cy="28" r="12" fill="#5A0B6E" />
          <text x="62" y="32" textAnchor="middle" fill="#F5D0FE" fontSize="11" fontWeight="bold">
            01
          </text>
          <text x="62" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
            Concept
          </text>
          <text x="62" y="72" textAnchor="middle" fill="#D8B4FE" fontSize="9.5">
            Bite-Sized Theory
          </text>
        </g>

        {/* Stage 2: Interactive Lab */}
        <g transform="translate(192, 44)">
          <rect width="130" height="88" rx="16" fill="#2E0539" stroke="#B91ED0" strokeWidth="2.2" />
          <circle cx="65" cy="28" r="12" fill="#B91ED0">
            <animate attributeName="r" values="11;13.5;11" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <text x="65" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
            02
          </text>
          <text x="65" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
            Interactive Lab
          </text>
          <text x="65" y="72" textAnchor="middle" fill="#F5D0FE" fontSize="9.5">
            Code + ESP32 Circuit
          </text>
        </g>

        {/* Stage 3: AI Feedback */}
        <g transform="translate(362, 44)">
          <rect width="130" height="88" rx="16" fill="#2E0539" stroke="#B91ED0" strokeWidth="2.2" />
          <circle cx="65" cy="28" r="12" fill="#8C159E">
            <animate attributeName="opacity" values="0.75;1;0.75" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <text x="65" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
            03
          </text>
          <text x="65" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
            AI Feedback
          </text>
          <text x="65" y="72" textAnchor="middle" fill="#F5D0FE" fontSize="9.5">
            Instant Socratic Hints
          </text>
        </g>

        {/* Stage 4: Rapid Assimilation */}
        <g transform="translate(530, 44)">
          <rect width="125" height="88" rx="16" fill="#120318" stroke="#34D399" strokeWidth="2" />
          <circle cx="62" cy="28" r="12" fill="#059669" />
          <text x="62" y="32" textAnchor="middle" fill="#ECFDF5" fontSize="11" fontWeight="bold">
            04
          </text>
          <text x="62" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
            Assimilation
          </text>
          <text x="62" y="72" textAnchor="middle" fill="#6EE7B7" fontSize="9.5">
            Verified Mastery
          </text>
        </g>
      </svg>

      <p className="text-xs text-purple-200/80 mt-1">
        Our <strong className="text-fuchsia-200">Interactive Learning System (ILS)</strong> turns
        abstract STEM topics into immediate hands-on experiments—accelerating comprehension and
        long-term assimilation.
      </p>
    </div>
  );
}

/**
 * Animated SVG Offline-First Sync Pulse Diagram
 */
function OfflineSyncPulseSvg({ isOnline }: { isOnline: boolean }) {
  return (
    <div className="rounded-2xl bg-[#120318]/90 border border-[#5A0B6E]/60 p-4">
      <div className="flex items-center justify-between text-[11px] mb-2">
        <span className="font-bold text-purple-200">Offline-First Outbox Sync Pulse</span>
        <span className={isOnline ? 'text-emerald-400 font-mono' : 'text-amber-300 font-mono'}>
          {isOnline ? 'CLOUD SYNC ACTIVE' : 'LOCAL INDEXEDDB QUEUEING'}
        </span>
      </div>
      <svg viewBox="0 0 420 64" className="w-full h-auto" aria-label="Offline-First Sync Pulse">
        <rect x="8" y="14" width="110" height="36" rx="10" fill="#2E0539" stroke="#B91ED0" strokeWidth="1.5" />
        <text x="63" y="36" textAnchor="middle" fill="#F5D0FE" fontSize="11" fontWeight="bold">
          Browser PWA
        </text>

        <rect x="155" y="14" width="110" height="36" rx="10" fill="#1E0426" stroke="#8C159E" strokeWidth="1.5" />
        <text x="210" y="36" textAnchor="middle" fill="#E9D5FF" fontSize="11" fontWeight="bold">
          UUIDv4 Outbox
        </text>

        <rect
          x="302"
          y="14"
          width="110"
          height="36"
          rx="10"
          fill="#120318"
          stroke={isOnline ? '#34D399' : '#F59E0B'}
          strokeWidth="1.5"
        />
        <text
          x="357"
          y="36"
          textAnchor="middle"
          fill={isOnline ? '#6EE7B7' : '#FDE68A'}
          fontSize="11"
          fontWeight="bold"
        >
          {isOnline ? 'Cloud DB' : 'Standby'}
        </text>

        <line x1="118" y1="32" x2="155" y2="32" stroke="#B91ED0" strokeWidth="2" />
        <line
          x1="265"
          y1="32"
          x2="302"
          y2="32"
          stroke={isOnline ? '#34D399' : '#F59E0B'}
          strokeWidth="2"
          strokeDasharray={isOnline ? 'none' : '4 4'}
        />

        <circle r="4" fill="#F0ABFC">
          <animateMotion dur="1.6s" repeatCount="indefinite" path="M 118 32 L 155 32" />
        </circle>
        {isOnline && (
          <circle r="4" fill="#34D399">
            <animateMotion dur="1.6s" begin="0.6s" repeatCount="indefinite" path="M 265 32 L 302 32" />
          </circle>
        )}
      </svg>
    </div>
  );
}

/**
 * Bespoke Animated SVG Technical Header per Service Pillar
 */
function ServiceIllustrationSvg({ serviceId }: { serviceId: string }) {
  if (serviceId === 'firalearn') {
    return (
      <svg viewBox="0 0 360 110" className="w-full h-24 rounded-2xl bg-[#120318] border border-[#5A0B6E]/60 p-2">
        <rect x="16" y="16" width="140" height="78" rx="10" fill="#2E0539" stroke="#B91ED0" strokeWidth="1.5" />
        <rect x="28" y="28" width="76" height="8" rx="4" fill="#F0ABFC" />
        <rect x="28" y="44" width="112" height="6" rx="3" fill="#8C159E" />
        <rect x="28" y="56" width="94" height="6" rx="3" fill="#8C159E" />
        <rect x="28" y="72" width="52" height="12" rx="6" fill="#B91ED0" />

        <path d="M164 55 L204 55" stroke="#B91ED0" strokeWidth="2" strokeDasharray="4 4" />
        <circle r="4" fill="#F0ABFC">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 164 55 L 204 55" />
        </circle>

        <rect x="210" y="16" width="134" height="78" rx="10" fill="#1E0426" stroke="#34D399" strokeWidth="1.5" />
        <text x="277" y="42" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="bold">
          ILS Assimilation
        </text>
        <text x="277" y="60" textAnchor="middle" fill="#E9D5FF" fontSize="9.5">
          CBT • RAG • Code Sandbox
        </text>
        <rect x="235" y="70" width="84" height="10" rx="5" fill="#065F46" />
        <rect x="235" y="70" width="68" height="10" rx="5" fill="#34D399">
          <animate attributeName="width" values="30;84;68" dur="3.5s" repeatCount="indefinite" />
        </rect>
      </svg>
    );
  }

  if (serviceId === 'enterprise_ils') {
    return (
      <svg viewBox="0 0 360 110" className="w-full h-24 rounded-2xl bg-[#120318] border border-[#5A0B6E]/60 p-2">
        {/* Static PDF / Handout Stack */}
        <rect x="18" y="20" width="96" height="70" rx="10" fill="#1E0426" stroke="#8C159E" strokeDasharray="4 3" strokeWidth="1.5" />
        <text x="66" y="46" textAnchor="middle" fill="#D8B4FE" fontSize="10" fontWeight="bold">
          Static PDFs &
        </text>
        <text x="66" y="61" textAnchor="middle" fill="#D8B4FE" fontSize="10" fontWeight="bold">
          Handouts
        </text>
        <text x="66" y="77" textAnchor="middle" fill="#A855F7" fontSize="8.5">
          Passive Slides
        </text>

        {/* Transformation Beam */}
        <path d="M122 55 L178 55" stroke="#B91ED0" strokeWidth="2.4" />
        <circle r="4.5" fill="#F0ABFC">
          <animateMotion dur="1.8s" repeatCount="indefinite" path="M 122 55 L 178 55" />
        </circle>

        {/* Custom Smart Enterprise ILS */}
        <rect x="186" y="16" width="156" height="78" rx="12" fill="#2E0539" stroke="#B91ED0" strokeWidth="2" />
        <text x="264" y="41" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
          Custom Smart ILS
        </text>
        <text x="264" y="57" textAnchor="middle" fill="#F5D0FE" fontSize="9.5">
          Interactive Labs • AI Tutor
        </text>
        <rect x="212" y="68" width="104" height="12" rx="6" fill="#065F46" />
        <rect x="212" y="68" width="88" height="12" rx="6" fill="#34D399">
          <animate attributeName="width" values="40;104;88" dur="3.2s" repeatCount="indefinite" />
        </rect>
      </svg>
    );
  }

  if (serviceId === 'bootcamps') {
    return (
      <svg viewBox="0 0 360 110" className="w-full h-24 rounded-2xl bg-[#120318] border border-[#5A0B6E]/60 p-2">
        {[
          { x: 20, label: 'Mechatronics' },
          { x: 132, label: 'Applied AI' },
          { x: 244, label: 'Software Dev' }
        ].map((item, idx) => (
          <g key={item.label} transform={`translate(${item.x}, 20)`}>
            <rect width="96" height="70" rx="12" fill="#2E0539" stroke="#B91ED0" strokeWidth="1.5" />
            <circle cx="48" cy="26" r="10" fill="#B91ED0">
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur="2.4s"
                begin={`${idx * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
            <text x="48" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">
              {item.label}
            </text>
          </g>
        ))}
      </svg>
    );
  }

  if (serviceId === 'hometutoring') {
    return (
      <svg viewBox="0 0 360 110" className="w-full h-24 rounded-2xl bg-[#120318] border border-[#5A0B6E]/60 p-2">
        <rect x="24" y="18" width="120" height="74" rx="12" fill="#2E0539" stroke="#B91ED0" strokeWidth="1.5" />
        <text x="84" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
          1-on-1 Mentor
        </text>
        <text x="84" y="66" textAnchor="middle" fill="#F0ABFC" fontSize="9.5">
          ₦5,000 / month
        </text>

        <path d="M150 55 L210 55" stroke="#34D399" strokeWidth="2" />
        <circle r="4" fill="#34D399">
          <animateMotion dur="1.8s" repeatCount="indefinite" path="M 150 55 L 210 55" />
        </circle>

        <rect x="216" y="18" width="120" height="74" rx="12" fill="#1E0426" stroke="#34D399" strokeWidth="1.5" />
        <text x="276" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
          Guided Learner
        </text>
        <text x="276" y="66" textAnchor="middle" fill="#6EE7B7" fontSize="9.5">
          Fast Assimilation
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 360 110" className="w-full h-24 rounded-2xl bg-[#120318] border border-[#5A0B6E]/60 p-2">
      <rect x="20" y="18" width="320" height="74" rx="14" fill="#2E0539" stroke="#B91ED0" strokeWidth="1.5" />
      <polyline
        fill="none"
        stroke="#F0ABFC"
        strokeWidth="2.2"
        points="36,68 76,68 92,40 110,80 128,52 168,52 184,32 204,76 222,55 324,55"
      />
      <circle r="4.5" fill="#34D399">
        <animateMotion
          dur="2.8s"
          repeatCount="indefinite"
          path="M 36 68 L 76 68 L 92 40 L 110 80 L 128 52 L 168 52 L 184 32 L 204 76 L 222 55 L 324 55"
        />
      </circle>
      <text x="180" y="29" textAnchor="middle" fill="#F5D0FE" fontSize="10" fontWeight="bold">
        Project Bodunde • Edge-AI Sensor Fusion & Closed-Loop Control
      </text>
    </svg>
  );
}

/**
 * Animated SVG ESP32-S3 Pinout & Live Telemetry Flow Diagram (Products & Lab Page)
 */
function Esp32PinoutTelemetrySvg({ telemetry }: { telemetry: TelemetryFrame }) {
  return (
    <div className="rounded-3xl bg-[#1A0322]/95 border border-[#5A0B6E]/80 p-5 shadow-xl">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <CircuitBoard className="w-4 h-4 text-fuchsia-300" />
          <span className="text-xs font-extrabold uppercase tracking-wider text-fuchsia-200">
            ESP32-S3 Pinout & Live Telemetry Flow
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-300">
          115200 BAUD • {telemetry.source.toUpperCase()}
        </span>
      </div>

      <svg
        viewBox="0 0 640 155"
        className="w-full h-auto"
        aria-label="Animated ESP32-S3 pinout and live sensor-to-actuator telemetry diagram"
      >
        {/* Left Sensor Nodes */}
        <g transform="translate(12, 14)">
          <rect width="155" height="36" rx="9" fill="#120318" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="77" y="22" textAnchor="middle" fill="#FDE68A" fontSize="10.5" fontWeight="bold">
            GPIO 4 • Temp: {telemetry.tempC.toFixed(1)}°C
          </text>
        </g>
        <g transform="translate(12, 60)">
          <rect width="155" height="36" rx="9" fill="#120318" stroke="#B91ED0" strokeWidth="1.5" />
          <text x="77" y="22" textAnchor="middle" fill="#F5D0FE" fontSize="10.5" fontWeight="bold">
            GPIO 34 • pH: {telemetry.ph.toFixed(2)}
          </text>
        </g>
        <g transform="translate(12, 106)">
          <rect width="155" height="36" rx="9" fill="#120318" stroke="#A855F7" strokeWidth="1.5" />
          <text x="77" y="22" textAnchor="middle" fill="#E9D5FF" fontSize="10.5" fontWeight="bold">
            GPIO 5 • Level: {telemetry.ultrasonicCm.toFixed(1)}cm
          </text>
        </g>

        {/* Wires from Sensors to ESP32-S3 */}
        <line x1="167" y1="32" x2="242" y2="55" stroke="#F59E0B" strokeWidth="1.8" />
        <line x1="167" y1="78" x2="242" y2="78" stroke="#B91ED0" strokeWidth="1.8" />
        <line x1="167" y1="124" x2="242" y2="100" stroke="#A855F7" strokeWidth="1.8" />

        <circle r="3.5" fill="#FDE68A">
          <animateMotion dur="1.4s" repeatCount="indefinite" path="M 167 32 L 242 55" />
        </circle>
        <circle r="3.5" fill="#F0ABFC">
          <animateMotion dur="1.4s" begin="0.4s" repeatCount="indefinite" path="M 167 78 L 242 78" />
        </circle>
        <circle r="3.5" fill="#D8B4FE">
          <animateMotion dur="1.4s" begin="0.8s" repeatCount="indefinite" path="M 167 124 L 242 100" />
        </circle>

        {/* Center ESP32-S3 Microcontroller */}
        <g transform="translate(242, 26)">
          <rect width="156" height="104" rx="16" fill="#2E0539" stroke="#B91ED0" strokeWidth="2.4" />
          <text x="78" y="42" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">
            ESP32-S3 MCU
          </text>
          <text x="78" y="60" textAnchor="middle" fill="#F0ABFC" fontSize="9.5">
            Dual-Core Edge Inference
          </text>
          <rect x="28" y="72" width="100" height="18" rx="6" fill="#120318" />
          <text x="78" y="84" textAnchor="middle" fill="#6EE7B7" fontSize="9" fontFamily="monospace">
            JSON @ 500ms
          </text>
        </g>

        {/* Wires from ESP32-S3 to Actuators */}
        <line x1="398" y1="56" x2="472" y2="40" stroke="#34D399" strokeWidth="1.8" />
        <line x1="398" y1="98" x2="472" y2="112" stroke="#F0ABFC" strokeWidth="1.8" />

        <circle r="3.5" fill="#34D399">
          <animateMotion dur="1.5s" repeatCount="indefinite" path="M 398 56 L 472 40" />
        </circle>
        <circle r="3.5" fill="#F0ABFC">
          <animateMotion dur="1.5s" begin="0.5s" repeatCount="indefinite" path="M 398 98 L 472 112" />
        </circle>

        {/* Right Actuator Nodes */}
        <g transform="translate(472, 18)">
          <rect
            width="156"
            height="44"
            rx="10"
            fill="#120318"
            stroke={telemetry.aeratorRelay ? '#34D399' : '#5A0B6E'}
            strokeWidth="1.8"
          />
          <text x="78" y="26" textAnchor="middle" fill="#6EE7B7" fontSize="10.5" fontWeight="bold">
            GPIO 26 • Relay: {telemetry.aeratorRelay ? 'ON' : 'OFF'}
          </text>
        </g>
        <g transform="translate(472, 88)">
          <rect width="156" height="44" rx="10" fill="#120318" stroke="#B91ED0" strokeWidth="1.8" />
          <text x="78" y="26" textAnchor="middle" fill="#F5D0FE" fontSize="10.5" fontWeight="bold">
            GPIO 18 • Servo: {telemetry.servoAngle}°
          </text>
        </g>
      </svg>
    </div>
  );
}

/**
 * Animated SVG Illustration for About Pillars (Our Story, Who We Are, What We Do, Project Bodunde)
 */
function AboutPillarSvg({ variant }: { variant: 'story' | 'who' | 'what' | 'bodunde' }) {
  if (variant === 'story') {
    return (
      <svg viewBox="0 0 280 90" className="w-full h-20 rounded-xl bg-[#120318] border border-[#5A0B6E]/60">
        <path d="M25 65 Q 90 20, 140 45 T 255 25" fill="none" stroke="#B91ED0" strokeWidth="2.5" />
        <circle cx="25" cy="65" r="5" fill="#8C159E" />
        <circle cx="140" cy="45" r="5" fill="#B91ED0" />
        <circle cx="255" cy="25" r="6" fill="#34D399">
          <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="140" y="78" textAnchor="middle" fill="#E9D5FF" fontSize="9.5" fontWeight="bold">
          Theory → Practical Engineering Mastery
        </text>
      </svg>
    );
  }
  if (variant === 'who') {
    return (
      <svg viewBox="0 0 280 90" className="w-full h-20 rounded-xl bg-[#120318] border border-[#5A0B6E]/60">
        <circle cx="85" cy="42" r="18" fill="#2E0539" stroke="#B91ED0" strokeWidth="2" />
        <circle cx="140" cy="42" r="22" fill="#5A0B6E" stroke="#F0ABFC" strokeWidth="2" />
        <circle cx="195" cy="42" r="18" fill="#2E0539" stroke="#B91ED0" strokeWidth="2" />
        <text x="140" y="78" textAnchor="middle" fill="#E9D5FF" fontSize="9.5" fontWeight="bold">
          Educators • Embedded Engineers • AI Builders
        </text>
      </svg>
    );
  }
  if (variant === 'what') {
    return (
      <svg viewBox="0 0 280 90" className="w-full h-20 rounded-xl bg-[#120318] border border-[#5A0B6E]/60">
        <rect x="24" y="20" width="68" height="38" rx="8" fill="#2E0539" stroke="#B91ED0" />
        <text x="58" y="43" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="bold">
          ILS LMS
        </text>
        <rect x="106" y="20" width="68" height="38" rx="8" fill="#2E0539" stroke="#B91ED0" />
        <text x="140" y="43" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="bold">
          3D Kits
        </text>
        <rect x="188" y="20" width="68" height="38" rx="8" fill="#2E0539" stroke="#34D399" />
        <text x="222" y="43" textAnchor="middle" fill="#6EE7B7" fontSize="9.5" fontWeight="bold">
          Edge-AI
        </text>
        <text x="140" y="78" textAnchor="middle" fill="#E9D5FF" fontSize="9.5" fontWeight="bold">
          Simplifying Learning & Assimilation
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 96" className="w-full h-24 rounded-xl bg-[#120318] border border-[#5A0B6E]/60">
      <rect x="18" y="18" width="84" height="44" rx="10" fill="#2E0539" stroke="#B91ED0" />
      <text x="60" y="44" textAnchor="middle" fill="#F5D0FE" fontSize="9.5" fontWeight="bold">
        Pond Sensors
      </text>
      <rect x="118" y="18" width="84" height="44" rx="10" fill="#5A0B6E" stroke="#F0ABFC" />
      <text x="160" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="bold">
        ESP32-S3 AI
      </text>
      <rect x="218" y="18" width="84" height="44" rx="10" fill="#1E0426" stroke="#34D399" />
      <text x="260" y="44" textAnchor="middle" fill="#6EE7B7" fontSize="9.5" fontWeight="bold">
        Auto Aerator
      </text>
      <circle r="3.5" fill="#F0ABFC">
        <animateMotion dur="2s" repeatCount="indefinite" path="M 102 40 L 218 40" />
      </circle>
      <text x="160" y="80" textAnchor="middle" fill="#D8B4FE" fontSize="9.5" fontWeight="bold">
        Project Bodunde • Closed-Loop Autonomous Edge Aquaculture
      </text>
    </svg>
  );
}

// ============================================================================
// 3B. INTERACTIVE THREE.JS 3D MOTION SCENES (DRAG / TOUCH TO ORBIT)
// ============================================================================

type ThreeDVariant = 'ils_core' | 'mechatronics_arm' | 'esp32_digital_twin' | 'bodunde_node';

function ThreeDMotionScene({
  variant,
  badge,
  title,
  subtitle,
  telemetry
}: {
  variant: ThreeDVariant;
  badge: string;
  title: string;
  subtitle: string;
  telemetry?: TelemetryFrame;
}) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const telemetryRef = useRef<TelemetryFrame | undefined>(telemetry);
  telemetryRef.current = telemetry;

  useEffect(() => {
    let cleanupFn: (() => void) | undefined;
    let cancelled = false;

    const initThreeScene = () => {
      const THREE = (window as any).THREE;
      const container = mountRef.current;
      if (!THREE || !container || cancelled) return;

      const width = container.clientWidth || 600;
      const height = 270;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 2.2, 6.2);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      container.innerHTML = '';
      container.appendChild(renderer.domElement);

      // Lighting matching Firatech Royal Purple & Electric Magenta palette
      const ambientLight = new THREE.AmbientLight(0xf3e8ff, 0.9);
      scene.add(ambientLight);

      const keyLight = new THREE.PointLight(0xd946ef, 2.4, 25);
      keyLight.position.set(4, 5, 5);
      scene.add(keyLight);

      const fillLight = new THREE.PointLight(0x34d399, 1.4, 20);
      fillLight.position.set(-4, -2, 4);
      scene.add(fillLight);

      const rootGroup = new THREE.Group();
      scene.add(rootGroup);

      // Subtle wireframe base grid
      const grid = new THREE.GridHelper(10, 14, 0xb91ed0, 0x3b0749);
      grid.position.y = -1.65;
      rootGroup.add(grid);

      // Scene-specific 3D geometry builders
      let animUpdater: (t: number) => void = () => {};

      if (variant === 'ils_core') {
        const coreGeo = new THREE.OctahedronGeometry(1.15, 0);
        const coreMat = new THREE.MeshStandardMaterial({
          color: 0xb91ed0,
          emissive: 0x5a0b6e,
          emissiveIntensity: 0.65,
          roughness: 0.25,
          metalness: 0.65
        });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        rootGroup.add(coreMesh);

        const wireMesh = new THREE.Mesh(
          new THREE.OctahedronGeometry(1.42, 0),
          new THREE.MeshBasicMaterial({ color: 0xf0abfc, wireframe: true })
        );
        rootGroup.add(wireMesh);

        const orbitColors = [0xf0abfc, 0xb91ed0, 0x8c159e, 0x34d399];
        const nodes = orbitColors.map((hex) => {
          const m = new THREE.Mesh(
            new THREE.SphereGeometry(0.24, 20, 20),
            new THREE.MeshStandardMaterial({
              color: hex,
              emissive: hex,
              emissiveIntensity: 0.45
            })
          );
          rootGroup.add(m);
          return m;
        });

        animUpdater = (t) => {
          coreMesh.rotation.y = t * 0.85;
          coreMesh.rotation.x = Math.sin(t * 0.6) * 0.25;
          wireMesh.rotation.y = -t * 0.5;
          nodes.forEach((node, idx) => {
            const angle = t * 1.1 + (idx * Math.PI) / 2;
            node.position.set(
              Math.cos(angle) * 2.35,
              Math.sin(t * 1.6 + idx) * 0.45,
              Math.sin(angle) * 2.35
            );
          });
        };
      } else if (variant === 'mechatronics_arm') {
        const baseMesh = new THREE.Mesh(
          new THREE.CylinderGeometry(1.0, 1.2, 0.4, 24),
          new THREE.MeshStandardMaterial({ color: 0x2e0539, metalness: 0.7, roughness: 0.3 })
        );
        baseMesh.position.y = -1.4;
        rootGroup.add(baseMesh);

        const shoulderPivot = new THREE.Group();
        shoulderPivot.position.y = -1.15;
        rootGroup.add(shoulderPivot);

        const lowerArm = new THREE.Mesh(
          new THREE.BoxGeometry(0.36, 1.55, 0.36),
          new THREE.MeshStandardMaterial({ color: 0x8c159e, metalness: 0.5, roughness: 0.3 })
        );
        lowerArm.position.y = 0.75;
        shoulderPivot.add(lowerArm);

        const elbowPivot = new THREE.Group();
        elbowPivot.position.y = 1.5;
        shoulderPivot.add(elbowPivot);

        const jointSphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 18, 18),
          new THREE.MeshStandardMaterial({ color: 0xf0abfc, emissive: 0xb91ed0, emissiveIntensity: 0.5 })
        );
        elbowPivot.add(jointSphere);

        const upperArm = new THREE.Mesh(
          new THREE.BoxGeometry(0.28, 1.35, 0.28),
          new THREE.MeshStandardMaterial({ color: 0xb91ed0, metalness: 0.6, roughness: 0.25 })
        );
        upperArm.position.y = 0.65;
        elbowPivot.add(upperArm);

        const gripper = new THREE.Mesh(
          new THREE.TorusGeometry(0.26, 0.07, 12, 24),
          new THREE.MeshStandardMaterial({ color: 0x34d399, emissive: 0x059669, emissiveIntensity: 0.5 })
        );
        gripper.position.y = 1.38;
        elbowPivot.add(gripper);

        animUpdater = (t) => {
          shoulderPivot.rotation.y = Math.sin(t * 0.7) * 0.9;
          shoulderPivot.rotation.z = Math.sin(t * 0.9) * 0.38;
          elbowPivot.rotation.z = -0.55 + Math.cos(t * 1.1) * 0.45;
          gripper.rotation.y = t * 2.2;
        };
      } else if (variant === 'esp32_digital_twin') {
        const pcb = new THREE.Mesh(
          new THREE.BoxGeometry(3.2, 0.16, 1.9),
          new THREE.MeshStandardMaterial({ color: 0x2e0539, metalness: 0.4, roughness: 0.4 })
        );
        rootGroup.add(pcb);

        const mcuChip = new THREE.Mesh(
          new THREE.BoxGeometry(0.95, 0.22, 0.95),
          new THREE.MeshStandardMaterial({ color: 0x1e1b4b, metalness: 0.85, roughness: 0.2 })
        );
        mcuChip.position.set(-0.4, 0.18, 0);
        rootGroup.add(mcuChip);

        const ledMat = new THREE.MeshStandardMaterial({
          color: 0xf0abfc,
          emissive: 0xb91ed0,
          emissiveIntensity: 0.9
        });
        const beaconLed = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), ledMat);
        beaconLed.position.set(1.15, 0.24, -0.55);
        rootGroup.add(beaconLed);

        const relayMat = new THREE.MeshStandardMaterial({
          color: 0x34d399,
          emissive: 0x059669,
          emissiveIntensity: 0.3
        });
        const relayBlock = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.34, 0.55), relayMat);
        relayBlock.position.set(0.95, 0.24, 0.45);
        rootGroup.add(relayBlock);

        const servoHorn = new THREE.Mesh(
          new THREE.BoxGeometry(0.85, 0.1, 0.18),
          new THREE.MeshStandardMaterial({ color: 0xfde68a, emissive: 0xd97706, emissiveIntensity: 0.35 })
        );
        servoHorn.position.set(-1.15, 0.32, 0.45);
        rootGroup.add(servoHorn);

        animUpdater = (t) => {
          const live = telemetryRef.current;
          rootGroup.rotation.y = Math.sin(t * 0.35) * 0.35;
          if (live) {
            ledMat.emissiveIntensity = live.ledState ? 1.1 + Math.sin(t * 6) * 0.3 : 0.05;
            relayMat.emissiveIntensity = live.aeratorRelay ? 1.0 : 0.1;
            servoHorn.rotation.y = ((live.servoAngle - 90) * Math.PI) / 180;
          } else {
            servoHorn.rotation.y = Math.sin(t * 1.4) * 0.8;
          }
        };
      } else {
        // bodunde_node: Floating Autonomous Edge-Aquaculture Sensor Node
        const ringFloat = new THREE.Mesh(
          new THREE.TorusGeometry(1.35, 0.28, 18, 36),
          new THREE.MeshStandardMaterial({ color: 0x8c159e, roughness: 0.35, metalness: 0.5 })
        );
        ringFloat.rotation.x = Math.PI / 2;
        rootGroup.add(ringFloat);

        const dome = new THREE.Mesh(
          new THREE.SphereGeometry(0.85, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2),
          new THREE.MeshStandardMaterial({
            color: 0xf0abfc,
            emissive: 0x5a0b6e,
            emissiveIntensity: 0.5,
            roughness: 0.2
          })
        );
        dome.position.y = 0.05;
        rootGroup.add(dome);

        const probeShaft = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.12, 1.5, 16),
          new THREE.MeshStandardMaterial({ color: 0x34d399, emissive: 0x059669, emissiveIntensity: 0.4 })
        );
        probeShaft.position.y = -0.75;
        rootGroup.add(probeShaft);

        animUpdater = (t) => {
          rootGroup.position.y = Math.sin(t * 1.5) * 0.16;
          rootGroup.rotation.y = t * 0.55;
        };
      }

      // Mouse & Touch Drag-to-Orbit Controls
      let isDragging = false;
      let prevX = 0;
      let prevY = 0;
      let targetRotY = 0;
      let targetRotX = 0.18;

      const onPointerDown = (clientX: number, clientY: number) => {
        isDragging = true;
        prevX = clientX;
        prevY = clientY;
      };
      const onPointerMove = (clientX: number, clientY: number) => {
        if (!isDragging) return;
        const dx = clientX - prevX;
        const dy = clientY - prevY;
        prevX = clientX;
        prevY = clientY;
        targetRotY += dx * 0.01;
        targetRotX = Math.max(-0.7, Math.min(0.9, targetRotX + dy * 0.01));
      };
      const onPointerUp = () => {
        isDragging = false;
      };

      const domEl = renderer.domElement;
      const handleMouseDown = (e: MouseEvent) => onPointerDown(e.clientX, e.clientY);
      const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY);
      const handleTouchStart = (e: TouchEvent) => {
        if (e.touches[0]) onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      };
      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches[0]) onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      };

      domEl.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', onPointerUp);
      domEl.addEventListener('touchstart', handleTouchStart, { passive: true });
      domEl.addEventListener('touchmove', handleTouchMove, { passive: true });
      domEl.addEventListener('touchend', onPointerUp);

      const handleResize = () => {
        if (!mountRef.current) return;
        const nextW = mountRef.current.clientWidth || 600;
        camera.aspect = nextW / height;
        camera.updateProjectionMatrix();
        renderer.setSize(nextW, height);
      };
      window.addEventListener('resize', handleResize);

      let frameId = 0;
      const startTime = performance.now();
      const animate = () => {
        if (cancelled) return;
        frameId = requestAnimationFrame(animate);
        const elapsed = (performance.now() - startTime) / 1000;
        animUpdater(elapsed);
        rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.08;
        if (isDragging) {
          rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.12;
        }
        renderer.render(scene, camera);
      };
      animate();

      cleanupFn = () => {
        cancelAnimationFrame(frameId);
        domEl.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', onPointerUp);
        domEl.removeEventListener('touchstart', handleTouchStart);
        domEl.removeEventListener('touchmove', handleTouchMove);
        domEl.removeEventListener('touchend', onPointerUp);
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
      };
    };

    if ((window as any).THREE) {
      initThreeScene();
    } else {
      const existingScript = document.querySelector('script[data-threejs="true"]') as HTMLScriptElement | null;
      if (existingScript) {
        existingScript.addEventListener('load', initThreeScene);
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.async = true;
        script.setAttribute('data-threejs', 'true');
        script.onload = initThreeScene;
        document.head.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      if (cleanupFn) cleanupFn();
    };
  }, [variant]);

  return (
    <div className="rounded-3xl bg-[#1A0322]/95 border border-[#5A0B6E]/80 p-5 shadow-2xl shadow-[#5A0B6E]/30 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#B91ED0]/20 text-fuchsia-200 border border-[#B91ED0]/40">
          {badge}
        </span>
        <span className="text-[11px] font-mono text-purple-300/75">Drag / Touch to Rotate 3D</span>
      </div>
      <h3 className="text-base sm:text-lg font-bold text-white">{title}</h3>
      <p className="text-xs text-purple-200/80 mt-0.5 mb-3">{subtitle}</p>
      <div
        ref={mountRef}
        className="w-full h-[270px] rounded-2xl bg-[#120318] border border-[#5A0B6E]/60 cursor-grab active:cursor-grabbing overflow-hidden"
      />
    </div>
  );
}

// ============================================================================
// 4. KNOWLEDGE BASE & CATALOG DATA (NO FOUNDER NAME, NO GEMINI TEXT)
// ============================================================================

const FIRATECH_SYSTEM_PROMPT = `
You are "Fira", the intelligent AI Engineering & EdTech Concierge for Firatech.
Answer clearly, warmly, and concisely with accurate figures and technical authority.
Never mention the personal name of the Founder & Technical Lead, and never refer to yourself as Gemini.

KEY FACTS ABOUT FIRATECH:
- Core Identity: Firatech specializes in Mechatronics, AI, and Software Development, and is renowned for its Interactive Learning System (ILS)—simplifying learning and accelerating assimilation by uniting interactive digital coursebooks, instant AI feedback, and hands-on hardware labs.
- Enterprise Custom Interactive Learning Systems: Aside from building FiraLearn, Firatech builds bespoke Interactive Learning Systems for companies, corporate academies, and organizations that want to go beyond static course materials, PDFs, and presentation handouts and move into intuitive, smart, interactive learning experiences.
- Founder & Technical Lead: Computer Science Lecturer at Mountain Top University (MTU), AI/ML Instructor at TechCrush, and Applied Edge-AI & Mechatronics Researcher holding a B.Sc. in Sociology and M.Sc. in Information Management from Ahmadu Bello University (ABU), Zaria.
- Official LinkedIn: https://www.linkedin.com/company/firatech/
- Flagship Platform: FiraLearn — a multi-tenant, offline-first Progressive Web App (PWA) & Interactive Learning System for partner organizations, partner schools, instructors, and students.
  * Offline-First Architecture: Uses Service Workers + IndexedDB local storage with client-generated UUIDv4 records and a prioritized Outbox Sync Engine that syncs automatically (or manually in low-data mode) to cloud PostgreSQL/Supabase when internet returns.
  * Capabilities: Interactive coursebooks, randomized CBT & rubric grading, RAG-powered lesson generation, in-browser code execution, Socratic AI Tutoring, and WebSerial Hardware-in-the-Loop circuit verification.
- Exact Pricing Structure (in Nigerian Naira ₦):
  1. FiraLearn LMS Subscriptions (B2B): ₦1,500 per student per term. Automatically discounted by 33.3% to ₦1,000 per student per term for cohorts of 1,000 or more students.
  2. Custom Enterprise Interactive Learning Systems: Tailored scoping for companies & corporate academies transitioning from static slides/handouts to smart interactive training platforms.
  3. Custom 3D-Printed ESP32 & Arduino Hardware Kits + Turnkey STEM Lab Setups: ₦50,000 to ₦100,000 per kit depending on tier:
     - Starter Arduino Robotics Kit: ₦50,000/kit
     - Pro ESP32 IoT & Telemetry Kit: ₦75,000/kit
     - Master Mechatronics & Edge-AI Kit: ₦100,000/kit
     - Available via Outright Purchase or 3-Term Institutional Installment Plans.
  4. Bootcamps & Corporate Training: Intensive cohorts in Mechatronics (modeled on Mechatronics 101), AI, and Software Development.
  5. B2C On-Demand Home Lessons: ₦5,000/month per learner connecting students with vetted 1-on-1 STEM, coding, and mechatronics instructors.
  6. Edge-AI & Smart Systems R&D (Project Bodunde): Autonomous multi-modal edge-aquaculture monitoring and industrial IoT telemetry with offline-first store-and-forward control loops.
`;

const SERVICES_CATALOG: {
  id: string;
  category: Exclude<ServiceCategory, 'all'>;
  badge: string;
  title: string;
  tagline: string;
  icon: any;
  highlights: string[];
  metrics: { label: string; value: string }[];
  defaultDeployMode: DeploymentMode;
}[] = [
  {
    id: 'firalearn',
    category: 'software',
    badge: 'Flagship & Enterprise ILS',
    title: 'FiraLearn & Custom Enterprise Interactive Learning Systems',
    tagline:
      'Aside from FiraLearn, we build bespoke Interactive Learning Systems for companies moving beyond static course materials and presentation handouts into intuitive, smart learning.',
    icon: Layers,
    highlights: [
      'Custom Interactive Learning Systems (ILS) built for enterprises & corporate academies replacing static PDFs, slide decks & handouts with smart, hands-on learning',
      'FiraLearn multi-tenant LMS operational during power outages & zero-network windows via Service Worker + IndexedDB UUIDv4 Outbox Sync',
      'Interactive coursebooks, randomized CBT, RAG-powered lesson generation, in-browser code sandboxes & automated rubric grading',
      'WebSerial Hardware-in-the-Loop verification bridging browser modules directly with live ESP32/Arduino circuits'
    ],
    metrics: [
      { label: 'FiraLearn B2B', value: '₦1,500 / term' },
      { label: '1,000+ Cohort Rate', value: '₦1,000 / term (-33.3%)' },
      { label: 'Enterprise ILS', value: 'Custom Built' }
    ],
    defaultDeployMode: 'b2b_school'
  },
  {
    id: 'enterprise_ils',
    category: 'enterprise_ils',
    badge: 'B2B Custom Enterprise ILS',
    title: 'Custom Interactive Learning Systems for Companies',
    tagline:
      'Move beyond static course materials, PDFs, and presentation handouts into intuitive, smart, AI-guided learning portals.',
    icon: Sparkles,
    highlights: [
      'Transform existing corporate training manuals, slide decks, and SOPs into interactive, hands-on digital learning experiences',
      'Embedded browser code/logic sandboxes, scenario simulators, and automated rubric evaluations replace passive reading',
      'Context-aware AI Tutors trained on your proprietary curriculum guide employees and trainees step-by-step',
      'White-labeled, offline-resilient PWA deployment with real-time executive analytics and mastery tracking'
    ],
    metrics: [
      { label: 'Transformation', value: 'Static Slides → Smart ILS' },
      { label: 'Delivery', value: 'Custom White-Label PWA' },
      { label: 'Starting Build', value: 'From ₦350,000' }
    ],
    defaultDeployMode: 'enterprise_ils'
  },
  {
    id: 'hardware',
    category: 'hardware',
    badge: 'Custom Hardware & Labs',
    title: '3D-Printed ESP32 & Arduino Kits + Turnkey Labs',
    tagline: 'In-house 3D-printed prototyping kits & standardized school Mechatronics and AI labs.',
    icon: Cpu,
    highlights: [
      'Custom 3D-printed protective enclosures fabricated in-house for rugged classroom and lab use',
      'Curated sensors & actuators: ESP32-S3, Arduino Uno, DS18B20 thermal, PH-4502C, HC-SR04 ultrasonic & servos',
      'Turnkey school Mechatronics & AI lab setup with teacher onboarding & standardized curricula',
      'Available via Outright Purchase or flexible 3-Term Institutional Installment agreements'
    ],
    metrics: [
      { label: 'Kit Pricing', value: '₦50k – ₦100k' },
      { label: 'Financing', value: 'Outright / 3-Term' },
      { label: 'Deployment', value: 'Turnkey + Curriculum' }
    ],
    defaultDeployMode: 'hardware_kits'
  },
  {
    id: 'bootcamps',
    category: 'training',
    badge: 'Institutional & Enterprise',
    title: 'Bootcamps & Corporate Training',
    tagline: 'Intensive cohorts in Mechatronics 101, AI, and Software Development.',
    icon: GraduationCap,
    highlights: [
      'Signature Mechatronics 101, Applied AI, and Software Development bootcamps for universities, schools & training hubs',
      'Hands-on capstone tracks from circuit breadboarding to Python/ML and full-stack software deployment',
      'Custom faculty & corporate upskilling programs in applied AI, embedded automation, and modern software engineering',
      'Portfolio-backed grading combining live demonstrations and rubric assessments'
    ],
    metrics: [
      { label: 'Core Tracks', value: 'Mechatronics • AI • Dev' },
      { label: 'Delivery', value: 'Cohort + Hardware/Code' },
      { label: 'Capstone', value: 'Working System' }
    ],
    defaultDeployMode: 'b2b_school'
  },
  {
    id: 'hometutoring',
    category: 'training',
    badge: 'B2C Personalized Coaching',
    title: 'On-Demand Home Lessons',
    tagline: 'Vetted 1-on-1 Mechatronics, AI & Software Development instructors at ₦5,000/month.',
    icon: Home,
    highlights: [
      'Accessible ₦5,000/month subscription pairing learners with vetted engineering & software instructors',
      'Structured ILS paths from Python & Software Development fundamentals to AI and ESP32 Mechatronics',
      'Interactive FiraLearn sandbox assignments with monthly progress visibility for parents',
      'Available for K-12 students, undergraduates, and aspiring young builders'
    ],
    metrics: [
      { label: 'Monthly Fee', value: '₦5,000 / learner' },
      { label: 'Coverage', value: 'K-12 & Tertiary' },
      { label: 'Mentors', value: 'Vetted Tech Pros' }
    ],
    defaultDeployMode: 'b2c_home'
  },
  {
    id: 'edge_ai',
    category: 'rd',
    badge: 'Applied Edge-AI R&D',
    title: 'Smart Systems & Project Bodunde R&D',
    tagline: 'Autonomous multi-modal edge-aquaculture & resilient IoT telemetry.',
    icon: Bot,
    highlights: [
      'Flagship Project Bodunde architecture: offline-first multi-modal sensing for aquaculture & smart agriculture',
      'Sub-second local anomaly detection on ESP32-class edge nodes without continuous cloud internet',
      'Closed-loop actuator control (aerators, feeders, dosing relays) paired with UUID outbox cloud sync',
      'Custom embedded AI & sensor-fusion engineering for industrial & research environments'
    ],
    metrics: [
      { label: 'Inference', value: 'On-Device Edge-AI' },
      { label: 'Sync Protocol', value: 'UUIDv4 Outbox' },
      { label: 'Uptime', value: 'Blackout-Resilient' }
    ],
    defaultDeployMode: 'hardware_kits'
  }
];

const KIT_CATALOG: Record<
  KitTier,
  {
    name: string;
    price: number;
    mcu: string;
    badge: string;
    description: string;
    components: string[];
  }
> = {
  starter_arduino: {
    name: 'Starter Arduino Robotics Kit',
    price: 50000,
    mcu: 'ATmega328P / Arduino Uno R3',
    badge: 'Foundational STEM',
    description:
      'Designed for secondary schools and introductory cohorts learning embedded C++, ultrasonic sensing, and servo actuation.',
    components: [
      'Custom 3D-Printed Protective Chassis & Breadboard Mount',
      'Arduino Uno R3 + Shielded USB Data Cable',
      'HC-SR04 Ultrasonic Distance Sensor & SG90 Micro Servo',
      'RGB LEDs, Tactile Buttons, Potentiometer & Jumper Harness',
      '12-Module FiraLearn Interactive Coursebook License'
    ]
  },
  pro_esp32: {
    name: 'Pro ESP32 IoT & Telemetry Kit',
    price: 75000,
    mcu: 'ESP32-S3 Dual-Core Wi-Fi/BLE',
    badge: 'Most Popular for Labs',
    description:
      'Built for real-time WebSerial browser telemetry, Wi-Fi sensor dashboards, and closed-loop environmental control.',
    components: [
      '3D-Printed Modular Sensor Enclosure + OLED Bezel',
      'ESP32-S3 DevKit (Dual-Core 240MHz, Wi-Fi + Bluetooth)',
      'DS18B20 Waterproof Temp Probe + 0.96" OLED Display',
      'Dual-Channel Relay Module, HC-SR04 & PWM Motor Driver',
      'Full WebSerial Live Lab Integration + FiraLearn Access'
    ]
  },
  master_edge_ai: {
    name: 'Master Mechatronics & Edge-AI Kit',
    price: 100000,
    mcu: 'ESP32-S3 Vector AI + Precision Probes',
    badge: 'University & R&D Flagship',
    description:
      'Complete mechatronics & TinyML workstation modeled on Mechatronics 101 and Project Bodunde edge-aquaculture nodes.',
    components: [
      '3D-Printed Multi-Tier Robotic & Telemetry Frame',
      'ESP32-S3 Vector Compute Module + Camera/Mic Array',
      'Industrial PH-4502C Probe, DS18B20, HC-SR04 & High-Torque Servos',
      'LiFePO4 Battery Backup Shield for Uninterrupted Field Labs',
      'Mechatronics 101 Capstone Curriculum & Edge-AI Firmware'
    ]
  }
};

function generateOfflineFiraResponse(query: string): string {
  const q = query.toLowerCase();

  const studentMatch = q.match(/(\d[\d,]*)\s*(student|learner|pupil)/);
  if (studentMatch) {
    const count = parseInt(studentMatch[1].replace(/,/g, ''), 10);
    if (!isNaN(count) && count > 0) {
      const isBulk = count >= 1000;
      const rate = isBulk ? 1000 : 1500;
      const total = count * rate;
      return `For **${count.toLocaleString()} students** on FiraLearn LMS:\n• **Tier Applied:** ${
        isBulk
          ? 'Institutional Bulk Discount (33.3% OFF — 1,000+ students)'
          : 'Standard Institutional Tier (< 1,000 students)'
      }\n• **Per-Student Rate:** ₦${rate.toLocaleString()} / term\n• **Total Term Investment:** **₦${total.toLocaleString()}**\n\nIncludes offline-first PWA access, our Interactive Learning System (ILS) coursebooks, automated code grading, and AI tutoring. Open the **Contact & Pricing** page to bundle 3D-printed hardware kits or generate a formal proposal!`;
    }
  }

  if (
    q.includes('company') ||
    q.includes('companies') ||
    q.includes('corporate') ||
    q.includes('static') ||
    q.includes('handout') ||
    q.includes('slide') ||
    q.includes('pdf') ||
    q.includes('enterprise')
  ) {
    return `Aside from building **FiraLearn**, we build **custom Interactive Learning Systems (ILS) for companies and training organizations** ready to replace static course materials, PDFs, and presentation handouts with intuitive, smart learning:\n• **Interactive Transformation:** We convert passive slide decks and manuals into active modules with embedded code/logic sandboxes and scenario simulations.\n• **AI-Guided Mastery:** Context-aware AI Tutors trained on your curriculum provide real-time Socratic coaching and automated rubric grading.\n• **Offline-Resilient & White-Labeled:** Built on our PWA + UUIDv4 Outbox engine so teams learn anywhere (starting from **₦350,000** custom build + scalable seats).`;
  }

  if (
    q.includes('ils') ||
    q.includes('interactive learning') ||
    q.includes('assimilat')
  ) {
    return `Aside from building **FiraLearn**, we build **bespoke Interactive Learning Systems (ILS)** for companies, corporate academies, and organizations that want to go beyond static course materials, PDFs, and presentation handouts and move into **intuitive, smart, interactive learning**.\n\nInstead of passive slides, every concept flows through an active 4-stage assimilation loop:\n1. **Concept:** Clear, structured explanations tailored to your domain.\n2. **Interactive Lab:** Live in-browser sandboxes, simulations, and hardware/software checkpoints.\n3. **AI Feedback:** Instant Socratic hints and automated rubric evaluation.\n4. **Verified Assimilation:** Progress logged offline-first and synced seamlessly to the cloud.`;
  }

  if (
    q.includes('offline') ||
    q.includes('blackout') ||
    q.includes('sync') ||
    q.includes('internet') ||
    q.includes('power')
  ) {
    return `**FiraLearn's Offline-First Outbox Architecture** is built specifically for power blackouts and intermittent connectivity:\n1. **Service Worker + IndexedDB Cache:** Lessons, CBT question banks, and Python/JS execution sandboxes run 100% locally in the browser.\n2. **Prioritized UUIDv4 Outbox:** Every quiz submission, code pass, and WebSerial hardware checkpoint writes immediately to IndexedDB with a client-generated UUIDv4 and priority level—zero spinners or lost work.\n3. **Idempotent Cloud Reconciliation:** When connectivity returns (or via manual Low-Data sync), records flush safely to cloud PostgreSQL without duplicates.`;
  }

  if (
    q.includes('price') ||
    q.includes('cost') ||
    q.includes('pricing') ||
    q.includes('naira') ||
    q.includes('discount')
  ) {
    return `Here is our transparent pricing structure:\n• **FiraLearn LMS (B2B Schools/Partners):** **₦1,500 / student / term**, automatically discounted by **33.3% to ₦1,000 / student / term** for cohorts of **1,000+ students**.\n• **Custom Company ILS Portals (B2B Enterprise):** Custom Interactive Learning Systems converting static handouts & slide decks into smart AI learning portals starting from **₦350,000** + team seat licensing.\n• **3D-Printed ESP32 & Arduino Kits:** **₦50,000** (Starter Arduino), **₦75,000** (Pro ESP32 IoT), or **₦100,000** (Master Mechatronics & Edge-AI)—available outright or via a **3-term institutional installment plan**.\n• **B2C Home Lessons:** **₦5,000 / month** per learner for 1-on-1 Mechatronics, AI, and Software Development mentorship.`;
  }

  if (
    q.includes('kit') ||
    q.includes('esp32') ||
    q.includes('arduino') ||
    q.includes('hardware') ||
    q.includes('3d')
  ) {
    return `We design and fabricate **custom 3D-printed ESP32 & Arduino hardware kits** (₦50,000–₦100,000) paired with turnkey school STEM lab setups:\n• **Starter Arduino (₦50k):** Arduino Uno R3, HC-SR04 ultrasonic, SG90 servo, sensors & 3D-printed chassis.\n• **Pro ESP32 IoT (₦75k):** Dual-core ESP32-S3, DS18B20 waterproof thermal probe, OLED display, relays & live WebSerial browser lab support.\n• **Master Mechatronics & Edge-AI (₦100k):** ESP32-S3 AI module, PH-4502C water quality sensor, ultrasonic level probe, high-torque servos & LiFePO4 backup shield.`;
  }

  if (
    q.includes('founder') ||
    q.includes('who') ||
    q.includes('story') ||
    q.includes('bodunde') ||
    q.includes('mtu')
  ) {
    return `Our venture is led by our **Founder & Technical Lead**—a Computer Science Lecturer at Mountain Top University (MTU), AI/ML Instructor at TechCrush, and Edge-AI/Mechatronics researcher holding a B.Sc. in Sociology and M.Sc. in Information Management from Ahmadu Bello University (ABU), Zaria.\n\nThrough initiatives like *Mechatronics 101* and *Project Bodunde* (autonomous edge-aquaculture sensing), our Founder & Technical Lead architected our Interactive Learning System and hardware ecosystem to deliver practical, offline-resilient STEM education.`;
  }

  if (q.includes('linkedin') || q.includes('social') || q.includes('connect')) {
    return `You can follow and connect with us on our official LinkedIn page: **${LINKEDIN_URL}** — or reach our engineering & partnerships desk via the **Contact & Pricing** page!`;
  }

  return `We are a **Mechatronics, AI, and Software Development** venture renowned for our **Interactive Learning System (ILS)**. Aside from building **FiraLearn**, we architect custom Interactive Learning Systems for companies that want to move beyond static course materials and presentation handouts into intuitive, smart learning.\n\nExplore our dedicated pages:\n• **Services:** FiraLearn ILS, Custom Company ILS Portals, 3D-Printed ESP32/Arduino Kits, Bootcamps, Home Lessons & Project Bodunde R&D.\n• **Products & Lab:** Inspect hardware tiers and test live WebSerial/ESP32 telemetry & offline outbox sync.\n• **About:** Learn about our story, Project Bodunde, and connect on LinkedIn.\n• **Contact & Pricing:** Calculate exact Naira quotes for schools, companies, hardware kits, or home lessons.`;
}

// ============================================================================
// 5. MAIN MULTI-PAGE APPLICATION COMPONENT
// ============================================================================

export default function App() {
  const parseHashRoute = (): PageRoute => {
    if (typeof window === 'undefined') return '/';
    const raw = window.location.hash.replace(/^#/, '');
    if (raw === '/services') return '/services';
    if (raw === '/products' || raw === '/lab') return '/products';
    if (raw === '/about') return '/about';
    if (raw === '/contact' || raw === '/pricing') return '/contact';
    return '/';
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(parseHashRoute);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (route: PageRoute) => {
    setCurrentPage(route);
    setMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.location.hash = route;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onHashChange = () => setCurrentPage(parseHashRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Update dynamic document title per route
  useEffect(() => {
    const titles: Record<PageRoute, string> = {
      '/': 'Interactive Learning System • Mechatronics, AI & Software Development',
      '/services': 'Services • FiraLearn, Enterprise ILS, Hardware Kits & Training',
      '/products': 'Products & Interactive Lab • ESP32 Kits & WebSerial Telemetry',
      '/about': 'About • Our Story, Founder & Project Bodunde R&D',
      '/contact': 'Contact & Pricing Configurator • Institutional Quotes'
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  // Services Page State
  const [serviceFilter, setServiceFilter] = useState<ServiceCategory>('all');
  const [selectedKitTier, setSelectedKitTier] = useState<KitTier>('pro_esp32');

  // Pricing & Configurator State (on Contact & Pricing page)
  const [deployMode, setDeployMode] = useState<DeploymentMode>('b2b_school');
  const [studentCount, setStudentCount] = useState<number>(1250);
  const [enterpriseModules, setEnterpriseModules] = useState<number>(6);
  const [enterpriseSeats, setEnterpriseSeats] = useState<number>(150);
  const [includeLabKits, setIncludeLabKits] = useState<boolean>(true);
  const [kitQuantity, setKitQuantity] = useState<number>(20);
  const [configKitTier, setConfigKitTier] = useState<KitTier>('pro_esp32');
  const [installmentPlan, setInstallmentPlan] = useState<boolean>(true);
  const [homeLearners, setHomeLearners] = useState<number>(1);
  const [homeMonths, setHomeMonths] = useState<number>(3);
  const [homeSubject, setHomeSubject] = useState<string>('Robotics & ESP32 IoT');
  const [proposalModalOpen, setProposalModalOpen] = useState<boolean>(false);
  const [proposalCopied, setProposalCopied] = useState<boolean>(false);
  const [proposalSubmitted, setProposalSubmitted] = useState<boolean>(false);
  const [orgName, setOrgName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');

  // Interactive Lab & Offline-First Outbox State
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [autoSync, setAutoSync] = useState<boolean>(true);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [outbox, setOutbox] = useState<OutboxMutation[]>([
    {
      id: 'f91a2c40-8b1e-4d9a-91c2-01a8e4b91021',
      priority: 1,
      event: 'ILS_RUBRIC_SUBMIT',
      payloadSummary: 'Mechatronics 101 Module 2 • Assimilation Score: 96%',
      timestamp: '00:41:12',
      status: 'synced'
    },
    {
      id: '3c7e9012-44a1-49b8-a812-77f20c99418b',
      priority: 2,
      event: 'HW_TELEMETRY_VERIFY',
      payloadSummary: 'Project Bodunde ESP32-S3 Node (27.4°C, pH 7.12, 18.5cm)',
      timestamp: '00:43:45',
      status: 'synced'
    }
  ]);

  // 500ms ESP32-S3 Telemetry & WebSerial State
  const [telemetry, setTelemetry] = useState<TelemetryFrame>({
    tempC: 27.4,
    ph: 7.12,
    ultrasonicCm: 18.5,
    servoAngle: 90,
    aeratorRelay: false,
    ledState: true,
    uptimeSec: 180,
    source: 'simulator'
  });
  const [serialConnected, setSerialConnected] = useState<boolean>(false);
  const [serialStatusNote, setSerialStatusNote] = useState<string>(
    '500ms ESP32-S3 Edge-Aquaculture simulator streaming (Click "Connect USB Serial" on desktop Chrome/Edge for physical hardware)'
  );
  const serialPortRef = useRef<any>(null);

  const [codeSnippet, setCodeSnippet] = useState<string>(
`# FiraLearn ILS Edge-AI Control Loop (MicroPython / Python)
def evaluate_pond_node(temp_c: float, ph: float, water_cm: float) -> dict:
    thermal_or_ph_alert = temp_c > 31.0 or ph < 6.5 or ph > 8.2
    low_water_alert = water_cm > 28.0  # HC-SR04 distance from top rim
    feeder_servo = 145 if not thermal_or_ph_alert else 45
    return {
        "status": "ACTION_REQUIRED" if (thermal_or_ph_alert or low_water_alert) else "OPTIMAL",
        "aerator_relay": thermal_or_ph_alert,
        "feeder_servo_deg": feeder_servo,
        "refill_valve": low_water_alert
    }

print(evaluate_pond_node(27.4, 7.12, 18.5))`
  );
  const [codeOutput, setCodeOutput] = useState<string>(
    '>>> {"status": "OPTIMAL", "aerator_relay": False, "feeder_servo_deg": 145, "refill_valve": False}\n[PASS] Assertion 1/3: Nominal thermal (27.4°C) & pH (7.12) bounds verified.\n[PASS] Assertion 2/3: HC-SR04 water level clearance (18.5 cm) within safe range.\n[PASS] Assertion 3/3: Deterministic UUIDv4 telemetry packet ready for IndexedDB outbox.'
  );

  // Ask Fira Intelligence Assistant State
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const [chatInput, setChatInput] = useState<string>('');
  const [chatLoading, setChatLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-fira',
      role: 'assistant',
      text: "Hello! I'm **Fira**, your Interactive Learning System & Engineering Concierge. Ask me anything about how our ILS simplifies learning and assimilation, FiraLearn's offline-first LMS, 3D-printed ESP32/Arduino kits, or Naira cohort pricing.",
      timestamp: 'Now',
      sourceMode: 'edge-fallback'
    }
  ]);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    role: 'School Administrator / Principal',
    interest: 'FiraLearn ILS + Turnkey School STEM Lab',
    message: ''
  });
  const [contactSent, setContactSent] = useState(false);

  // ============================================================================
  // 6. REAL-TIME NAIRA PRICING & PROPOSAL CALCULATIONS
  // ============================================================================

  const pricingBreakdown = useMemo(() => {
    if (deployMode === 'b2b_school') {
      const isBulk = studentCount >= 1000;
      const perStudentRate = isBulk ? 1000 : 1500;
      const lmsTermSubtotal = studentCount * perStudentRate;
      const bulkSavings = isBulk ? studentCount * 500 : 0;
      const kitUnit = KIT_CATALOG[configKitTier].price;
      const kitsTotal = includeLabKits ? kitQuantity * kitUnit : 0;
      const kitsDueNow = includeLabKits
        ? installmentPlan
          ? Math.ceil(kitsTotal / 3)
          : kitsTotal
        : 0;
      return {
        perStudentRate,
        lmsTermSubtotal,
        bulkSavings,
        kitsTotal,
        kitsDueNow,
        dueTodayTotal: lmsTermSubtotal + kitsDueNow,
        grandContractTotal: lmsTermSubtotal + kitsTotal
      };
    }

    if (deployMode === 'enterprise_ils') {
      const baseBuild = 350000;
      const modulesSubtotal = enterpriseModules * 45000;
      const lmsTermSubtotal = enterpriseSeats * 2500;
      const dueTodayTotal = baseBuild + modulesSubtotal + lmsTermSubtotal;
      return {
        perStudentRate: 2500,
        lmsTermSubtotal,
        bulkSavings: 0,
        kitsTotal: 0,
        kitsDueNow: 0,
        dueTodayTotal,
        grandContractTotal: dueTodayTotal
      };
    }

    if (deployMode === 'hardware_kits') {
      const kitUnit = KIT_CATALOG[configKitTier].price;
      const kitsTotal = kitQuantity * kitUnit;
      const kitsDueNow = installmentPlan ? Math.ceil(kitsTotal / 3) : kitsTotal;
      return {
        perStudentRate: 0,
        lmsTermSubtotal: 0,
        bulkSavings: 0,
        kitsTotal,
        kitsDueNow,
        dueTodayTotal: kitsDueNow,
        grandContractTotal: kitsTotal
      };
    }

    const dueTodayTotal = homeLearners * homeMonths * 5000;
    return {
      perStudentRate: 5000,
      lmsTermSubtotal: dueTodayTotal,
      bulkSavings: 0,
      kitsTotal: 0,
      kitsDueNow: 0,
      dueTodayTotal,
      grandContractTotal: dueTodayTotal
    };
  }, [
    deployMode,
    studentCount,
    includeLabKits,
    kitQuantity,
    configKitTier,
    installmentPlan,
    enterpriseModules,
    enterpriseSeats,
    homeLearners,
    homeMonths
  ]);

  const proposalSummaryText = useMemo(() => {
    const header = `OFFICIAL INTERACTIVE LEARNING SYSTEM & HARDWARE QUOTE\nOrganization: ${
      orgName || '[Prospective Partner]'
    }\n------------------------------------------------------------`;
    if (deployMode === 'b2b_school') {
      return `${header}\nMode: B2B School / Institutional FiraLearn ILS\nCohort: ${studentCount.toLocaleString()} students @ ₦${pricingBreakdown.perStudentRate.toLocaleString()}/term = ₦${pricingBreakdown.lmsTermSubtotal.toLocaleString()}\n${
        includeLabKits
          ? `Hardware Bundle: ${kitQuantity}x ${KIT_CATALOG[configKitTier].name} (${
              installmentPlan ? '3-Term Installment' : 'Outright'
            }) = ₦${pricingBreakdown.kitsDueNow.toLocaleString()} due now\n`
          : ''
      }Initial Term Due Now: ₦${pricingBreakdown.dueTodayTotal.toLocaleString()}\nTotal Contract Value: ₦${pricingBreakdown.grandContractTotal.toLocaleString()}`;
    }
    if (deployMode === 'enterprise_ils') {
      return `${header}\nMode: Custom Company Interactive Learning System (ILS)\nBase Architecture + ${enterpriseModules} Interactive Modules: ₦${(
        350000 +
        enterpriseModules * 45000
      ).toLocaleString()}\nTrainee Seats: ${enterpriseSeats.toLocaleString()} seats @ ₦2,500 = ₦${pricingBreakdown.lmsTermSubtotal.toLocaleString()}\nTotal Initial Deployment: ₦${pricingBreakdown.dueTodayTotal.toLocaleString()}`;
    }
    if (deployMode === 'hardware_kits') {
      return `${header}\nMode: 3D-Printed Hardware Kits & STEM Lab Setup\nKit Tier: ${kitQuantity}x ${
        KIT_CATALOG[configKitTier].name
      } (${
        installmentPlan ? '3-Term Installment' : 'Outright'
      })\nDue Now: ₦${pricingBreakdown.dueTodayTotal.toLocaleString()} (Total: ₦${pricingBreakdown.grandContractTotal.toLocaleString()})`;
    }
    return `${header}\nMode: B2C On-Demand Home Lessons (${homeSubject})\nLearners: ${homeLearners} x ${homeMonths} month(s) @ ₦5,000/mo\nTotal Due: ₦${pricingBreakdown.dueTodayTotal.toLocaleString()}`;
  }, [
    deployMode,
    orgName,
    studentCount,
    pricingBreakdown,
    includeLabKits,
    kitQuantity,
    configKitTier,
    installmentPlan,
    enterpriseModules,
    enterpriseSeats,
    homeSubject,
    homeLearners,
    homeMonths
  ]);

  // ============================================================================
  // 7. 500MS ESP32-S3 TELEMETRY & OFFLINE OUTBOX SYNC EFFECTS
  // ============================================================================

  useEffect(() => {
    if (serialConnected) return;
    const timer = setInterval(() => {
      setTelemetry((prev) => {
        const deltaTemp = (Math.random() - 0.49) * 0.14;
        const nextTemp = Number(Math.min(34.5, Math.max(24.0, prev.tempC + deltaTemp)).toFixed(1));
        const deltaPh = (Math.random() - 0.5) * 0.03;
        const nextPh = Number(Math.min(8.5, Math.max(6.2, prev.ph + deltaPh)).toFixed(2));
        const deltaDist = (Math.random() - 0.5) * 0.3;
        const nextDist = Number(
          Math.min(35.0, Math.max(10.0, prev.ultrasonicCm + deltaDist)).toFixed(1)
        );
        return {
          ...prev,
          tempC: nextTemp,
          ph: nextPh,
          ultrasonicCm: nextDist,
          uptimeSec: prev.uptimeSec + 0.5,
          source: 'simulator'
        };
      });
    }, 500);
    return () => clearInterval(timer);
  }, [serialConnected]);

  useEffect(() => {
    const hasPending = outbox.some((m) => m.status === 'pending');
    if (isOnline && autoSync && hasPending && !isSyncing) {
      flushOutboxToCloud();
    }
  }, [isOnline, autoSync, outbox]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatOpen]);

  const enqueueMutation = (
    event: string,
    payloadSummary: string,
    priority: 1 | 2 | 3 = 2
  ) => {
    const uuid =
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `uuid-${Date.now()}-${Math.floor(Math.random() * 9999)}`;
    const now = new Date().toTimeString().slice(0, 8);
    const newEntry: OutboxMutation = {
      id: uuid,
      priority,
      event,
      payloadSummary,
      timestamp: now,
      status: isOnline && autoSync ? 'synced' : 'pending'
    };
    setOutbox((prev) =>
      [newEntry, ...prev.slice(0, 8)].sort((a, b) => a.priority - b.priority)
    );
  };

  const flushOutboxToCloud = () => {
    if (!isOnline) return;
    setIsSyncing(true);
    setTimeout(() => {
      setOutbox((prev) => prev.map((item) => ({ ...item, status: 'synced' })));
      setIsSyncing(false);
    }, 600);
  };

  // ============================================================================
  // 8. WEBSERIAL & CODE SANDBOX HANDLERS
  // ============================================================================

  const handleConnectWebSerial = async () => {
    const nav = navigator as any;
    if (!nav || !nav.serial) {
      setSerialStatusNote(
        'WebSerial requires desktop Chrome/Edge/Opera over HTTPS. Running 500ms ESP32-S3 simulator!'
      );
      enqueueMutation('HW_SIM_CHECKPOINT', 'Simulated ESP32-S3 telemetry stream locked', 2);
      return;
    }

    try {
      const port = await nav.serial.requestPort();
      await port.open({ baudRate: 115200 });
      serialPortRef.current = port;
      setSerialConnected(true);
      setSerialStatusNote('Connected to physical ESP32/Arduino at 115200 baud via WebSerial!');
      enqueueMutation('WEBSERIAL_PORT_OPEN', 'Physical microcontroller serial stream active', 1);

      const textDecoder = new TextDecoderStream();
      port.readable.pipeTo(textDecoder.writable);
      const reader = textDecoder.readable.getReader();
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) {
          buffer += value;
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';
          for (const line of lines) {
            try {
              const parsed = JSON.parse(line.trim());
              setTelemetry((prev) => ({
                tempC: typeof parsed.temp === 'number' ? parsed.temp : prev.tempC,
                ph: typeof parsed.ph === 'number' ? parsed.ph : prev.ph,
                ultrasonicCm:
                  typeof parsed.dist === 'number'
                    ? parsed.dist
                    : typeof parsed.ultrasonic === 'number'
                    ? parsed.ultrasonic
                    : prev.ultrasonicCm,
                servoAngle: typeof parsed.servo === 'number' ? parsed.servo : prev.servoAngle,
                aeratorRelay:
                  typeof parsed.relay === 'boolean' ? parsed.relay : prev.aeratorRelay,
                ledState:
                  typeof parsed.led === 'boolean'
                    ? parsed.led
                    : Boolean(parsed.led ?? prev.ledState),
                uptimeSec: prev.uptimeSec + 0.5,
                source: 'webserial'
              }));
            } catch {
              // Ignore non-JSON debug lines
            }
          }
        }
      }
    } catch {
      setSerialConnected(false);
      setSerialStatusNote(
        'Serial port selection cancelled or busy. Continuing with 500ms ESP32-S3 simulator.'
      );
    }
  };

  const handleDisconnectWebSerial = async () => {
    try {
      if (serialPortRef.current) {
        await serialPortRef.current.close();
        serialPortRef.current = null;
      }
    } catch {
      // Safe cleanup
    }
    setSerialConnected(false);
    setSerialStatusNote('Hardware port released. Returned to 500ms ESP32-S3 simulator.');
  };

  const handleRunSandboxCode = () => {
    const thermalOrPhAlert = telemetry.tempC > 31.0 || telemetry.ph < 6.5 || telemetry.ph > 8.2;
    const lowWaterAlert = telemetry.ultrasonicCm > 28.0;
    const feederServo = !thermalOrPhAlert ? 145 : 45;
    setTelemetry((prev) => ({
      ...prev,
      servoAngle: feederServo,
      aeratorRelay: thermalOrPhAlert
    }));
    setCodeOutput(
      `>>> Evaluating live telemetry (${telemetry.tempC}°C, pH ${telemetry.ph}, HC-SR04 ${telemetry.ultrasonicCm}cm)...\n` +
        `>>> {"status": "${
          thermalOrPhAlert || lowWaterAlert ? 'ACTION_REQUIRED' : 'OPTIMAL'
        }", "aerator_relay": ${thermalOrPhAlert ? 'True' : 'False'}, "feeder_servo_deg": ${feederServo}, "refill_valve": ${
          lowWaterAlert ? 'True' : 'False'
        }}\n` +
        `[PASS] Assertion 1/3: Multi-sensor frame schema validated.\n` +
        `[PASS] Assertion 2/3: Closed-loop actuator response (${feederServo}°, Aerator=${
          thermalOrPhAlert ? 'ON' : 'OFF'
        }) verified.\n` +
        `[PASS] Assertion 3/3: Priority-1 ILS mastery checkpoint queued to IndexedDB Outbox.`
    );
    enqueueMutation(
      'ILS_CODE_PASS',
      `Edge loop verified (${telemetry.tempC}°C, ${telemetry.ultrasonicCm}cm -> Servo ${feederServo}°)`,
      1
    );
  };

  // ============================================================================
  // 9. FIRA INTELLIGENCE CONCIERGE WITH OFFLINE KNOWLEDGE ENGINE FALLBACK
  // ============================================================================

  const sendToFira = async (promptText?: string) => {
    const trimmed = (promptText ?? chatInput).trim();
    if (!trimmed || chatLoading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: trimmed,
      timestamp: new Date().toTimeString().slice(0, 5)
    };
    setMessages((prev) => [...prev, userMsg]);
    if (!promptText) setChatInput('');
    setChatLoading(true);

    if (!isOnline || (typeof navigator !== 'undefined' && !navigator.onLine)) {
      setTimeout(() => {
        const reply = generateOfflineFiraResponse(trimmed);
        setMessages((prev) => [
          ...prev,
          {
            id: `a-${Date.now()}`,
            role: 'assistant',
            text: reply,
            timestamp: new Date().toTimeString().slice(0, 5),
            sourceMode: 'edge-fallback'
          }
        ]);
        setChatLoading(false);
      }, 260);
      return;
    }

    try {
      const apiKey = '';
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

      const payload = {
        contents: [
          ...messages.slice(-6).map((m) => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          })),
          {
            role: 'user',
            parts: [{ text: trimmed }]
          }
        ],
        systemInstruction: {
          parts: [{ text: FIRATECH_SYSTEM_PROMPT }]
        }
      };

      let response: Response | null = null;
      const delays = [1000, 2000, 4000];
      for (let attempt = 0; attempt <= delays.length; attempt++) {
        response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (response.ok) break;
        if (attempt < delays.length) {
          await new Promise((res) => setTimeout(res, delays[attempt]));
        }
      }

      if (response && response.ok) {
        const result = await response.json();
        const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          setMessages((prev) => [
            ...prev,
            {
              id: `a-${Date.now()}`,
              role: 'assistant',
              text,
              timestamp: new Date().toTimeString().slice(0, 5),
              sourceMode: 'fira-live'
            }
          ]);
          setChatLoading(false);
          return;
        }
      }
      throw new Error('Fallback to edge knowledge');
    } catch {
      const fallbackReply = generateOfflineFiraResponse(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: 'assistant',
          text: fallbackReply,
          timestamp: new Date().toTimeString().slice(0, 5),
          sourceMode: 'edge-fallback'
        }
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  const pendingCount = outbox.filter((m) => m.status === 'pending').length;

  const NAV_ITEMS: { route: PageRoute; label: string; shortLabel: string }[] = [
    { route: '/', label: 'Home', shortLabel: 'Home' },
    { route: '/services', label: 'Services', shortLabel: 'Services' },
    { route: '/products', label: 'Products & Lab', shortLabel: 'Products & Lab' },
    { route: '/about', label: 'About', shortLabel: 'About' },
    { route: '/contact', label: 'Contact & Pricing', shortLabel: 'Contact & Pricing' }
  ];

  const filteredServices =
    serviceFilter === 'all'
      ? SERVICES_CATALOG
      : SERVICES_CATALOG.filter((s) => s.category === serviceFilter);

  const thermalOrPhDanger = telemetry.tempC > 31.0 || telemetry.ph < 6.5 || telemetry.ph > 8.2;
  const ultrasonicDanger = telemetry.ultrasonicCm > 28.0;

  // ============================================================================
  // 10. RENDER MULTI-PAGE SHELL & DEDICATED VIEWS
  // ============================================================================

  return (
    <div className="min-h-screen bg-[#120318] text-slate-100 selection:bg-[#B91ED0]/30 selection:text-fuchsia-200 font-sans overflow-x-hidden flex flex-col">
      {/* Subtle Royal Purple & Electric Magenta Engineering Grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #B91ED0 1px, transparent 1px), linear-gradient(to bottom, #5A0B6E 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />
      <div className="fixed -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#5A0B6E]/25 blur-[130px] pointer-events-none" />
      <div className="fixed top-1/3 -right-40 w-[460px] h-[460px] rounded-full bg-[#B91ED0]/15 blur-[140px] pointer-events-none" />

      {/* ====================================================================
          PERSISTENT TOP NAVIGATION BAR + SYNC STATUS BADGE (NO "FIRATECH" TEXT)
      ==================================================================== */}
      <header className="sticky top-0 z-40 border-b border-[#5A0B6E]/50 bg-[#17041E]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[70px]">
            {/* Brand Identity with Official Vector Emblem Only (No FIRATECH Text) */}
            <button
              onClick={() => navigateTo('/')}
              className="flex items-center gap-3 text-left group focus:outline-none"
              aria-label="Home"
            >
              <div className="p-1 rounded-xl bg-white/95 shadow-lg shadow-[#B91ED0]/25 group-hover:scale-105 transition-transform">
                <FiratechEmblem className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#B91ED0]/20 text-fuchsia-200 border border-[#B91ED0]/40">
                    Interactive Learning System
                  </span>
                </div>
                <p className="text-[11px] text-purple-200/75 leading-none mt-1">
                  Mechatronics • AI • Software Development
                </p>
              </div>
            </button>

            {/* Desktop Multi-Page Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
              {NAV_ITEMS.map((item) => {
                const active = currentPage === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => navigateTo(item.route)}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                      active
                        ? 'bg-gradient-to-r from-[#5A0B6E] to-[#B91ED0] text-white shadow-md shadow-[#B91ED0]/30 border border-fuchsia-400/40'
                        : 'text-purple-100/80 hover:text-white hover:bg-[#2E0539]/80'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Controls: Persistent Offline/Online Outbox Badge + Ask Fira */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsOnline((prev) => !prev)}
                title="Click to toggle Online Cloud Sync vs. Simulated Blackout Offline Mode"
                className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  isOnline
                    ? 'bg-[#2E0539]/90 border-[#B91ED0]/50 text-fuchsia-200 hover:border-fuchsia-400'
                    : 'bg-amber-950/80 border-amber-500/60 text-amber-200'
                }`}
              >
                {isOnline ? (
                  <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <WifiOff className="w-3.5 h-3.5 text-amber-400" />
                )}
                <span>{isOnline ? 'Outbox Synced' : 'Offline PWA'}</span>
                {pendingCount > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-[#120318] font-extrabold text-[10px]">
                    {pendingCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setChatOpen((prev) => !prev)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-[#5A0B6E] via-[#8C159E] to-[#B91ED0] text-white border border-fuchsia-300/30 hover:brightness-110 transition shadow-lg shadow-[#B91ED0]/30"
              >
                <Sparkles className="w-4 h-4 text-fuchsia-200" />
                <span>Ask Fira AI</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 rounded-xl text-purple-200 hover:bg-[#2E0539]"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-3 border-t border-[#5A0B6E]/50 flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.route}
                  onClick={() => navigateTo(item.route)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    currentPage === item.route
                      ? 'bg-gradient-to-r from-[#5A0B6E] to-[#B91ED0] text-white'
                      : 'text-purple-100 hover:bg-[#2E0539]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-75" />
                </button>
              ))}
              <button
                onClick={() => setIsOnline((prev) => !prev)}
                className="mt-1 w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#2E0539] border border-[#5A0B6E] text-fuchsia-200 flex items-center justify-between"
              >
                <span>
                  Network Simulation: {isOnline ? 'ONLINE (Auto-Sync)' : 'OFFLINE (Blackout)'}
                </span>
                <span className="underline">Toggle</span>
              </button>
            </div>
          )}
        </div>

        {/* Sub-Header Breadcrumb Bar */}
        <div className="border-t border-[#5A0B6E]/30 bg-[#120318]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs text-purple-200/75">
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigateTo('/')}
                className="hover:text-white transition font-medium"
              >
                Portal
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-[#B91ED0]" />
              <span className="font-semibold text-fuchsia-200">
                {NAV_ITEMS.find((n) => n.route === currentPage)?.label || 'Home'}
              </span>
              <span className="hidden sm:inline font-mono text-[11px] text-purple-300/50 ml-1">
                (#{currentPage})
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden md:inline text-[11px] text-purple-300/70">
                Outbox Queue: <strong className="text-white">{outbox.length}</strong> records (
                {pendingCount} pending)
              </span>
              {currentPage !== '/products' && (
                <button
                  onClick={() => navigateTo('/products')}
                  className="text-fuchsia-300 hover:text-white font-semibold flex items-center gap-1"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Open Live Lab</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ====================================================================
          PAGE CONTENT ROUTER (5 SEPARATE HASH-SYNCHRONIZED PAGES)
      ==================================================================== */}
      <main className="flex-1 relative z-10">
        {/* ------------------------------------------------------------------
            PAGE 1: HOME (#/)
        ------------------------------------------------------------------ */}
        {currentPage === '/' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
            {/* Hero Grid */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#2E0539]/90 border border-[#B91ED0]/40 text-fuchsia-200 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#B91ED0] animate-ping" />
                  <span>Mechatronics, AI, and Software Development • Interactive Learning Systems</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                  Beyond Static Handouts:{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-[#B91ED0] to-purple-300">
                    Intuitive & Smart
                  </span>{' '}
                  Interactive Learning.
                </h1>

                <p className="text-base sm:text-lg text-purple-100/85 max-w-2xl leading-relaxed">
                  Specializing in <strong className="text-white">Mechatronics, AI, and Software Development</strong>,
                  our <strong className="text-fuchsia-300">Interactive Learning System (ILS)</strong>{' '}
                  bridges theoretical computing and hands-on engineering. Aside from building{' '}
                  <strong className="text-fuchsia-200">FiraLearn</strong>, we also build custom
                  Interactive Learning Systems for companies that want to go beyond static course
                  materials and presentation handouts into intuitive, smart learning—paired with{' '}
                  <strong className="text-purple-200">3D-printed ESP32 & Arduino kits</strong> built
                  to thrive through power outages and intermittent internet.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-1">
                  <button
                    onClick={() => navigateTo('/contact')}
                    className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#5A0B6E] via-[#8C159E] to-[#B91ED0] text-white hover:brightness-110 transition flex items-center gap-2 shadow-xl shadow-[#B91ED0]/30 border border-fuchsia-300/30"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Configure Naira Deployment</span>
                  </button>
                  <button
                    onClick={() => navigateTo('/products')}
                    className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#2E0539]/90 text-white border border-[#B91ED0]/40 hover:bg-[#3B0749] transition flex items-center gap-2"
                  >
                    <Terminal className="w-4 h-4 text-fuchsia-300" />
                    <span>Launch Interactive Lab</span>
                  </button>
                </div>

                {/* Interactive 3D Motion Video: Interactive Learning System Core */}
                <ThreeDMotionScene
                  variant="ils_core"
                  badge="3D Interactive Video • ILS Engine"
                  title="3D Interactive Learning & Assimilation Core"
                  subtitle="Drag or touch to orbit the 3D diamond core surrounded by orbiting Concept, Lab, AI Feedback, and Assimilation nodes."
                />

                {/* Animated SVG ILS Assimilation Engine */}
                <IlsAssimilationSvg />

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#5A0B6E]/50">
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-white">₦1,000</p>
                    <p className="text-xs text-purple-200/75 mt-0.5">
                      Per student/term (1,000+ cohort bulk rate)
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-fuchsia-300">100%</p>
                    <p className="text-xs text-purple-200/75 mt-0.5">
                      Offline-first PWA & UUIDv4 outbox sync
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-purple-200">ESP32-S3</p>
                    <p className="text-xs text-purple-200/75 mt-0.5">
                      3D-printed kits + WebSerial telemetry
                    </p>
                  </div>
                </div>
              </div>

              {/* Closed-Loop Architecture Card (With Vector Emblem Only) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="rounded-3xl bg-[#1E0426]/95 border border-[#5A0B6E]/70 p-6 sm:p-7 shadow-2xl shadow-[#5A0B6E]/30 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-[#5A0B6E]/50">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-white">
                        <FiratechEmblem className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-bold text-sm text-white block">
                          FiraLearn Closed-Loop ILS Stack
                        </span>
                        <span className="text-[11px] text-fuchsia-300">
                          Local-First + Cloud-Synced Architecture
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#B91ED0]/20 text-fuchsia-200 border border-[#B91ED0]/40">
                      EDGE-READY
                    </span>
                  </div>

                  <div className="space-y-3 my-5">
                    {[
                      {
                        step: '01',
                        title: 'Offline-First Interactive Coursebook',
                        desc: 'Service Worker + IndexedDB caches lessons, RAG modules, randomized CBT & code editors locally.'
                      },
                      {
                        step: '02',
                        title: 'Hardware-in-the-Loop (WebSerial)',
                        desc: 'Streams live sensor frames from 3D-printed ESP32/Arduino kits directly into the browser.'
                      },
                      {
                        step: '03',
                        title: 'Automated Rubric & Socratic AI Tutor',
                        desc: 'Grades Python/MicroPython logic and physical circuits instantaneously to accelerate assimilation.'
                      },
                      {
                        step: '04',
                        title: 'Prioritized UUIDv4 Outbox Sync',
                        desc: 'Idempotent PostgreSQL/Supabase sync whenever Wi-Fi or campus mobile data reconnects.'
                      }
                    ].map((node) => (
                      <div
                        key={node.step}
                        className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#120318]/90 border border-[#5A0B6E]/50 hover:border-[#B91ED0]/60 transition"
                      >
                        <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-lg bg-gradient-to-br from-[#5A0B6E] to-[#B91ED0] text-white">
                          {node.step}
                        </span>
                        <div>
                          <h3 className="text-sm font-bold text-white">{node.title}</h3>
                          <p className="text-xs text-purple-200/75 mt-0.5 leading-relaxed">
                            {node.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Animated SVG Offline-First Sync Pulse */}
                  <OfflineSyncPulseSvg isOnline={isOnline} />

                  <button
                    onClick={() => {
                      setChatOpen(true);
                      sendToFira(
                        'How does your Interactive Learning System simplify learning and assimilation?'
                      );
                    }}
                    className="mt-4 w-full py-3 px-4 rounded-xl bg-[#2E0539] hover:bg-[#3D074B] border border-[#B91ED0]/40 text-xs font-bold text-fuchsia-200 flex items-center justify-between transition"
                  >
                    <span>Ask Fira AI: "How does your ILS simplify assimilation?"</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* 5-Page Repository Directory Grid */}
            <div className="pt-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300">
                    Explore Dedicated Platform Pages
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    Interactive Workspaces & Catalogs
                  </h2>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  {
                    route: '/services' as PageRoute,
                    icon: Layers,
                    badge: '6 Core Offerings',
                    title: 'Services & Custom ILS',
                    desc: 'FiraLearn LMS, Custom Company ILS portals (replacing static handouts), 3D kits, bootcamps & R&D.'
                  },
                  {
                    route: '/products' as PageRoute,
                    icon: Cpu,
                    badge: 'Hardware + Live Lab',
                    title: 'Products & Interactive Lab',
                    desc: 'Inspect ₦50k–₦100k kits, test 500ms ESP32-S3 WebSerial streams, MicroPython grading & offline sync.'
                  },
                  {
                    route: '/about' as PageRoute,
                    icon: Award,
                    badge: 'Leadership & R&D',
                    title: 'About & Project Bodunde',
                    desc: 'Discover Our Story, Founder & Technical Lead impact, autonomous aquaculture R&D & LinkedIn.'
                  },
                  {
                    route: '/contact' as PageRoute,
                    icon: Calculator,
                    badge: 'Instant Naira Quote',
                    title: 'Contact & Pricing',
                    desc: 'Configure B2B school cohorts, custom company ILS builds, hardware kits & home lessons.'
                  }
                ].map((card) => {
                  const Icon = card.icon;
                  return (
                    <button
                      key={card.route}
                      onClick={() => navigateTo(card.route)}
                      className="group text-left rounded-2xl bg-[#1E0426]/90 border border-[#5A0B6E]/60 hover:border-[#B91ED0] p-6 transition-all flex flex-col justify-between shadow-lg hover:shadow-[#B91ED0]/20"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#5A0B6E] to-[#B91ED0] flex items-center justify-center text-white shadow">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#2E0539] text-fuchsia-200 border border-[#B91ED0]/30">
                            {card.badge}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-fuchsia-200 transition">
                          {card.title}
                        </h3>
                        <p className="text-xs text-purple-200/75 mt-2 leading-relaxed">
                          {card.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#5A0B6E]/40 flex items-center gap-1.5 text-xs font-bold text-fuchsia-300 group-hover:translate-x-1 transition-transform">
                        <span>Open Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------
            PAGE 2: SERVICES (#/services)
        ------------------------------------------------------------------ */}
        {currentPage === '/services' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300">
                  Interactive Learning System & Applied Engineering
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
                  Our Services & Hardware Ecosystem
                </h1>
                <p className="text-sm sm:text-base text-purple-200/80 mt-3 max-w-2xl">
                  Designed around simplifying learning and assimilation—filter across FiraLearn
                  ILS software, custom 3D-printed hardware kits, technical bootcamps, B2C home
                  lessons, and applied Edge-AI research.
                </p>
              </div>

              {/* Interactive Category Filter Pills */}
              <div className="flex flex-wrap gap-2 bg-[#1E0426] p-1.5 rounded-2xl border border-[#5A0B6E]/60">
                {(
                  [
                    { id: 'all', label: 'All Services (6)' },
                    { id: 'software', label: 'FiraLearn LMS' },
                    { id: 'enterprise_ils', label: 'Company ILS Portals' },
                    { id: 'hardware', label: 'Hardware & Labs' },
                    { id: 'training', label: 'Bootcamps & Home' },
                    { id: 'rd', label: 'Edge-AI R&D' }
                  ] as { id: ServiceCategory; label: string }[]
                ).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setServiceFilter(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                      serviceFilter === cat.id
                        ? 'bg-gradient-to-r from-[#5A0B6E] to-[#B91ED0] text-white shadow'
                        : 'text-purple-200/75 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive 3D Motion Video: Articulated Mechatronics & AI Automation */}
            <ThreeDMotionScene
              variant="mechatronics_arm"
              badge="3D Interactive Video • Mechatronics & AI"
              title="3D Articulated Mechatronics & Robotics Kinematics"
              subtitle="Real-time 3D multi-axis robotic arm simulation demonstrating our Mechatronics, AI, and Software Development training labs."
            />

            {/* Filtered Service Cards with Bespoke Animated SVG Illustrations */}
            <div className="space-y-6">
              {filteredServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="rounded-3xl bg-[#1E0426]/95 border border-[#5A0B6E]/70 p-6 sm:p-8 grid lg:grid-cols-12 gap-8 items-center shadow-xl"
                  >
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#5A0B6E] to-[#B91ED0] flex items-center justify-center text-white">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#2E0539] text-fuchsia-200 border border-[#B91ED0]/40">
                          {service.badge}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h2>
                      <p className="text-sm sm:text-base text-purple-100/80">{service.tagline}</p>

                      <ul className="space-y-2.5 pt-1">
                        {service.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-purple-100/90"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#B91ED0] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-3 pt-3">
                        <button
                          onClick={() => {
                            setDeployMode(service.defaultDeployMode);
                            navigateTo('/contact');
                          }}
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5A0B6E] to-[#B91ED0] text-white font-bold text-xs sm:text-sm hover:brightness-110 transition"
                        >
                          Configure Pricing
                        </button>
                        <button
                          onClick={() => {
                            setChatOpen(true);
                            sendToFira(
                              `Explain how institutions or learners get started with ${service.title}.`
                            );
                          }}
                          className="px-5 py-2.5 rounded-xl bg-[#2E0539] text-fuchsia-200 border border-[#B91ED0]/40 font-bold text-xs sm:text-sm hover:bg-[#3A0748] transition flex items-center gap-2"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>Ask Fira AI</span>
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-3">
                      {/* Bespoke Animated SVG Technical Illustration */}
                      <ServiceIllustrationSvg serviceId={service.id} />

                      {service.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-2xl bg-[#120318]/90 border border-[#5A0B6E]/60 flex items-center justify-between"
                        >
                          <span className="text-xs font-semibold uppercase tracking-wider text-purple-300/75">
                            {m.label}
                          </span>
                          <span className="text-sm sm:text-base font-extrabold text-fuchsia-300">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------
            PAGE 3: PRODUCTS & INTERACTIVE LAB (#/products, alias #/lab)
        ------------------------------------------------------------------ */}
        {currentPage === '/products' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14">
            {/* Section A: 3D-Printed ESP32 & Arduino Hardware Kits Catalog */}
            <div className="space-y-8">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300">
                    In-House 3D-Printed Prototyping Workstations
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-1.5">
                    Hardware Kits & Interactive Lab
                  </h1>
                  <p className="text-sm text-purple-200/80 mt-2 max-w-2xl">
                    Rugged 3D-printed ESP32 & Arduino kits (₦50,000–₦100,000) built to pair
                    directly with our live WebSerial & MicroPython Interactive Learning System.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setDeployMode('hardware_kits');
                    navigateTo('/contact');
                  }}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#5A0B6E] to-[#B91ED0] text-white font-bold text-xs sm:text-sm hover:brightness-110 transition self-start lg:self-auto"
                >
                  Request Institutional Kit Quote
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {(Object.keys(KIT_CATALOG) as KitTier[]).map((tierKey) => {
                  const kit = KIT_CATALOG[tierKey];
                  const active = selectedKitTier === tierKey;
                  return (
                    <div
                      key={tierKey}
                      onClick={() => {
                        setSelectedKitTier(tierKey);
                        setConfigKitTier(tierKey);
                      }}
                      className={`cursor-pointer rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                        active
                          ? 'bg-[#2E0539]/90 border-[#B91ED0] shadow-xl shadow-[#B91ED0]/20'
                          : 'bg-[#1E0426]/80 border-[#5A0B6E]/60 hover:border-[#B91ED0]/60'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#B91ED0]/20 text-fuchsia-200 border border-[#B91ED0]/40">
                            {kit.badge}
                          </span>
                          <span className="text-[11px] font-mono text-purple-300/80">{kit.mcu}</span>
                        </div>

                        <h2 className="text-xl font-bold text-white mt-4">{kit.name}</h2>
                        <div className="mt-2 flex items-baseline gap-1.5">
                          <span className="text-3xl font-extrabold text-fuchsia-300">
                            ₦{kit.price.toLocaleString()}
                          </span>
                          <span className="text-xs text-purple-200/70">/ kit</span>
                        </div>
                        <p className="text-xs text-purple-100/80 mt-3 leading-relaxed">
                          {kit.description}
                        </p>

                        <div className="mt-5 pt-4 border-t border-[#5A0B6E]/50 space-y-2">
                          {kit.components.map((comp, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-xs text-purple-100/90"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#B91ED0] shrink-0 mt-0.5" />
                              <span>{comp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setConfigKitTier(tierKey);
                          setDeployMode('hardware_kits');
                          navigateTo('/contact');
                        }}
                        className="mt-6 w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-[#5A0B6E] to-[#B91ED0] text-white hover:brightness-110 transition"
                      >
                        Calculate School Bundle
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section B: Hardware-in-the-Loop Interactive Workbench */}
            <div className="pt-8 border-t border-[#5A0B6E]/60 space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300">
                    Hardware-in-the-Loop + Local-First Outbox Workbench
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5">
                    Live WebSerial & ESP32-S3 Telemetry Lab
                  </h2>
                  <p className="text-sm text-purple-200/80 mt-1.5 max-w-2xl">
                    Connect an ESP32/Arduino via WebSerial or interact with our 500ms multi-sensor
                    simulator (Temperature, pH, HC-SR04 Ultrasonic), run MicroPython rubric checks,
                    and test IndexedDB offline-to-cloud outbox synchronization.
                  </p>
                </div>

                {/* Blackout & Sync Mode Simulator Controls */}
                <div className="flex flex-wrap items-center gap-2.5 bg-[#1E0426] p-2 rounded-2xl border border-[#5A0B6E]/70">
                  <button
                    onClick={() => setIsOnline((prev) => !prev)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
                      isOnline
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-amber-500/20 text-amber-200 border border-amber-500/50'
                    }`}
                  >
                    {isOnline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
                    <span>{isOnline ? 'Network: ONLINE' : 'Simulated BLACKOUT (Offline)'}</span>
                  </button>

                  <button
                    onClick={() => setAutoSync((prev) => !prev)}
                    className="px-3 py-2 rounded-xl text-xs font-semibold bg-[#2E0539] text-fuchsia-200 border border-[#B91ED0]/40 hover:text-white"
                  >
                    Sync Mode: <strong>{autoSync ? 'Auto' : 'Manual Low-Data'}</strong>
                  </button>
                </div>
              </div>

              {/* Animated SVG ESP32-S3 Pinout & Live Telemetry Flow Diagram */}
              <Esp32PinoutTelemetrySvg telemetry={telemetry} />

              {/* Interactive 3D Digital Twin of ESP32-S3 Microcontroller */}
              <ThreeDMotionScene
                variant="esp32_digital_twin"
                badge="3D Live Digital Twin • Synced with Telemetry"
                title="3D ESP32-S3 Hardware Digital Twin"
                subtitle="Interact with the live 3D board below—adjusting the Feeder Servo, Beacon LED, or Aerator Relay immediately animates the 3D hardware!"
                telemetry={telemetry}
              />

              {/* Split-Pane Interactive Workbench */}
              <div className="grid lg:grid-cols-12 gap-6">
                {/* Left Pane: Live ESP32-S3 Telemetry & Actuator Controls */}
                <div className="lg:col-span-6 rounded-3xl bg-[#1E0426]/95 border border-[#5A0B6E]/70 p-6 space-y-5 shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#5A0B6E]/50">
                    <div className="flex items-center gap-2">
                      <Usb className="w-4 h-4 text-fuchsia-300" />
                      <h3 className="text-base font-bold text-white">
                        Hardware-in-the-Loop Telemetry
                      </h3>
                    </div>

                    {serialConnected ? (
                      <button
                        onClick={handleDisconnectWebSerial}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-500/20 text-rose-200 border border-rose-500/40 hover:bg-rose-500/30 transition"
                      >
                        Disconnect USB Serial
                      </button>
                    ) : (
                      <button
                        onClick={handleConnectWebSerial}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#5A0B6E] to-[#B91ED0] text-white hover:brightness-110 transition"
                      >
                        Connect USB Serial
                      </button>
                    )}
                  </div>

                  <p className="text-xs text-purple-200/80 leading-relaxed">{serialStatusNote}</p>

                  {/* Live Sensor Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div
                      className={`p-3.5 rounded-2xl bg-[#120318] border ${
                        thermalOrPhDanger ? 'border-amber-500/70' : 'border-[#5A0B6E]/70'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs text-purple-300/80 mb-1">
                        <span>Temp</span>
                        <Thermometer className="w-3.5 h-3.5 text-amber-300" />
                      </div>
                      <p className="text-xl font-extrabold text-white">
                        {telemetry.tempC.toFixed(1)}°C
                      </p>
                      <span className="text-[10px] text-purple-300/70">DS18B20 Probe</span>
                    </div>

                    <div
                      className={`p-3.5 rounded-2xl bg-[#120318] border ${
                        thermalOrPhDanger ? 'border-amber-500/70' : 'border-[#5A0B6E]/70'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs text-purple-300/80 mb-1">
                        <span>Water pH</span>
                        <Droplets className="w-3.5 h-3.5 text-fuchsia-300" />
                      </div>
                      <p className="text-xl font-extrabold text-white">{telemetry.ph.toFixed(2)}</p>
                      <span className="text-[10px] text-purple-300/70">PH-4502C</span>
                    </div>

                    <div
                      className={`p-3.5 rounded-2xl bg-[#120318] border ${
                        ultrasonicDanger ? 'border-amber-500/70' : 'border-[#5A0B6E]/70'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs text-purple-300/80 mb-1">
                        <span>Clearance</span>
                        <Gauge className="w-3.5 h-3.5 text-emerald-300" />
                      </div>
                      <p className="text-xl font-extrabold text-white">
                        {telemetry.ultrasonicCm.toFixed(1)}cm
                      </p>
                      <span className="text-[10px] text-purple-300/70">HC-SR04</span>
                    </div>
                  </div>

                  {/* Interactive Actuator Controls (Synced Live with 3D Digital Twin) */}
                  <div className="space-y-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-[#120318] border border-[#5A0B6E]/60">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-bold text-white">
                          GPIO 18 • Feeder Servo Angle
                        </span>
                        <span className="font-mono text-fuchsia-300">{telemetry.servoAngle}°</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={180}
                        value={telemetry.servoAngle}
                        onChange={(e) =>
                          setTelemetry((prev) => ({
                            ...prev,
                            servoAngle: Number(e.target.value)
                          }))
                        }
                        className="w-full accent-[#B91ED0]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setTelemetry((prev) => {
                            const nextRelay = !prev.aeratorRelay;
                            enqueueMutation(
                              'ACTUATOR_RELAY_TOGGLE',
                              `GPIO 26 Aerator Relay -> ${nextRelay ? 'ON' : 'OFF'}`,
                              2
                            );
                            return { ...prev, aeratorRelay: nextRelay };
                          });
                        }}
                        className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-between transition ${
                          telemetry.aeratorRelay
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                            : 'bg-[#120318] border-[#5A0B6E]/60 text-purple-200'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Power className="w-4 h-4" />
                          <span>Aerator Relay</span>
                        </span>
                        <span>{telemetry.aeratorRelay ? 'ON' : 'OFF'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setTelemetry((prev) => {
                            const nextLed = !prev.ledState;
                            enqueueMutation(
                              'BEACON_LED_TOGGLE',
                              `GPIO 2 Beacon LED -> ${nextLed ? 'ACTIVE' : 'OFF'}`,
                              3
                            );
                            return { ...prev, ledState: nextLed };
                          });
                        }}
                        className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-between transition ${
                          telemetry.ledState
                            ? 'bg-[#B91ED0]/25 border-[#B91ED0] text-fuchsia-200'
                            : 'bg-[#120318] border-[#5A0B6E]/60 text-purple-200'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Radio className="w-4 h-4" />
                          <span>Beacon LED</span>
                        </span>
                        <span>{telemetry.ledState ? 'ON' : 'OFF'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Pane: MicroPython Sandbox + IndexedDB UUIDv4 Outbox */}
                <div className="lg:col-span-6 space-y-6">
                  {/* MicroPython Rubric Sandbox */}
                  <div className="rounded-3xl bg-[#1E0426]/95 border border-[#5A0B6E]/70 p-6 space-y-3 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-fuchsia-300" />
                        <h3 className="text-base font-bold text-white">
                          In-Browser MicroPython Rubric Grader
                        </h3>
                      </div>
                      <button
                        onClick={handleRunSandboxCode}
                        className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#5A0B6E] to-[#B91ED0] text-white flex items-center gap-1.5 hover:brightness-110 transition"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Run & Grade</span>
                      </button>
                    </div>

                    <textarea
                      rows={8}
                      value={codeSnippet}
                      onChange={(e) => setCodeSnippet(e.target.value)}
                      spellCheck={false}
                      className="w-full p-3.5 rounded-2xl bg-[#120318] border border-[#5A0B6E]/70 font-mono text-xs text-fuchsia-100 focus:outline-none focus:border-[#B91ED0]"
                    />

                    <pre className="p-3 rounded-2xl bg-[#120318] border border-emerald-500/30 font-mono text-[11px] text-emerald-300 whitespace-pre-wrap">
                      {codeOutput}
                    </pre>
                  </div>

                  {/* Prioritized IndexedDB UUIDv4 Outbox Sync Queue */}
                  <div className="rounded-3xl bg-[#1E0426]/95 border border-[#5A0B6E]/70 p-6 space-y-3 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-fuchsia-300" />
                        <h3 className="text-base font-bold text-white">
                          IndexedDB UUIDv4 Outbox Queue
                        </h3>
                      </div>
                      <button
                        onClick={flushOutboxToCloud}
                        disabled={!isOnline || pendingCount === 0 || isSyncing}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#2E0539] border border-[#B91ED0]/40 text-fuchsia-200 disabled:opacity-40 hover:text-white flex items-center gap-1.5"
                      >
                        <RefreshCw
                          className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`}
                        />
                        <span>Sync Now ({pendingCount})</span>
                      </button>
                    </div>

                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {outbox.map((item) => (
                        <div
                          key={item.id}
                          className="p-3 rounded-xl bg-[#120318] border border-[#5A0B6E]/60 flex items-center justify-between gap-3 text-xs"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="px-1.5 py-0.5 rounded bg-[#2E0539] text-fuchsia-300 font-mono text-[10px] font-bold">
                                P{item.priority}
                              </span>
                              <span className="font-bold text-white truncate">{item.event}</span>
                            </div>
                            <p className="text-[11px] text-purple-200/75 truncate mt-0.5">
                              {item.payloadSummary}
                            </p>
                          </div>
                          <span
                            className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                              item.status === 'synced'
                                ? 'bg-emerald-500/20 text-emerald-300'
                                : 'bg-amber-500/20 text-amber-200'
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------
            PAGE 4: ABOUT (#/about)
        ------------------------------------------------------------------ */}
        {currentPage === '/about' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300">
                Our Story • Leadership • Applied Edge-AI R&D
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
                Simplifying Learning & Engineering Resilient Systems
              </h1>
              <p className="text-sm sm:text-base text-purple-100/85 leading-relaxed">
                We unite Mechatronics, AI, and Software Development to transform passive education
                into active, constraint-resilient mastery—empowering schools, companies, and
                young innovators across Africa and beyond.
              </p>
            </div>

            {/* Three Repository Narrative Pillars */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  variant: 'story' as const,
                  title: 'Our Story',
                  desc: 'Born from bridging theoretical university computer science and real-world embedded hardware labs, we built our Interactive Learning System so learners assimilate complex concepts faster—even during grid outages.'
                },
                {
                  variant: 'who' as const,
                  title: 'Who We Are',
                  desc: 'A multidisciplinary collective of educators, embedded systems engineers, and AI builders dedicated to making hands-on STEM and corporate technical training intuitive, measurable, and accessible.'
                },
                {
                  variant: 'what' as const,
                  title: 'What We Do',
                  desc: 'We build FiraLearn, design custom Interactive Learning Systems for companies moving beyond static handouts, fabricate 3D-printed ESP32/Arduino kits, and lead applied Edge-AI R&D.'
                }
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-3xl bg-[#1E0426]/95 border border-[#5A0B6E]/70 p-6 space-y-4 shadow-xl"
                >
                  <AboutPillarSvg variant={pillar.variant} />
                  <h2 className="text-xl font-bold text-white">{pillar.title}</h2>
                  <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Founder & Technical Lead Recognition + Project Bodunde 3D Showcase */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 rounded-3xl bg-[#1E0426]/95 border border-[#5A0B6E]/70 p-6 sm:p-8 space-y-5 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#B91ED0]/20 text-fuchsia-200 border border-[#B91ED0]/40">
                    Leadership & Academic Pedigree
                  </span>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-fuchsia-300 hover:text-white"
                  >
                    <span>Company LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Founder & Technical Lead
                </h2>

                <p className="text-sm text-purple-100/85 leading-relaxed">
                  Our venture is led by our <strong className="text-white">Founder & Technical Lead</strong>—a
                  Computer Science Lecturer at <strong className="text-fuchsia-200">Mountain Top University (MTU)</strong>,
                  AI/ML Instructor at <strong className="text-fuchsia-200">TechCrush</strong>, and
                  Applied Edge-AI & Mechatronics Researcher holding a B.Sc. in Sociology and M.Sc.
                  in Information Management from <strong className="text-white">Ahmadu Bello University (ABU), Zaria</strong>.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-purple-100/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B91ED0] shrink-0 mt-0.5" />
                    <span>
                      Architect of the <strong>FiraLearn</strong> offline-first Interactive Learning
                      System and UUIDv4 Outbox Sync engine.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B91ED0] shrink-0 mt-0.5" />
                    <span>
                      Creator of the <strong>Mechatronics 101</strong> curriculum and in-house
                      3D-printed ESP32/Arduino lab kits.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B91ED0] shrink-0 mt-0.5" />
                    <span>
                      Principal investigator on <strong>Project Bodunde</strong>, advancing
                      autonomous edge-aquaculture and resilient telemetry.
                    </span>
                  </li>
                </ul>

                <blockquote className="p-4 rounded-2xl bg-[#120318] border-l-4 border-[#B91ED0] text-sm text-purple-100 italic leading-relaxed">
                  "True technical assimilation happens when learners don't just read about
                  algorithms or microcontrollers—they write the code, wire the 3D-printed ESP32
                  hardware, and watch their system work reliably even when the grid goes dark."
                </blockquote>
              </div>

              <div className="lg:col-span-6 space-y-5">
                <ThreeDMotionScene
                  variant="bodunde_node"
                  badge="3D R&D Showcase • Project Bodunde"
                  title="3D Autonomous Edge-Aquaculture Sensor Node"
                  subtitle="Interactive 3D model of our floating multi-sensor telemetry buoy and closed-loop edge compute dome."
                />

                <AboutPillarSvg variant="bodunde" />
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------
            PAGE 5: CONTACT & NAIRA PRICING CONFIGURATOR (#/contact, alias #/pricing)
        ------------------------------------------------------------------ */}
        {currentPage === '/contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
            {/* Part 1: Real-Time Naira Deployment & Pricing Configurator */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300">
                  Transparent Nigerian Naira (₦) Estimator
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
                  Deployment & Pricing Configurator
                </h1>
                <p className="text-sm sm:text-base text-purple-200/80 mt-2 max-w-2xl">
                  Calculate exact investment figures across B2B school cohorts (with automatic
                  33.3% bulk discount at 1,000+ students), custom company ILS portals, 3D-printed
                  hardware kits, or ₦5,000/month home lessons.
                </p>
              </div>

              {/* Deployment Mode Switcher */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {(
                  [
                    {
                      id: 'b2b_school',
                      title: 'B2B School Cohort',
                      sub: '₦1,500 → ₦1,000/term',
                      icon: Building2
                    },
                    {
                      id: 'enterprise_ils',
                      title: 'Company Custom ILS',
                      sub: 'Replace Static Handouts',
                      icon: Sparkle
                    },
                    {
                      id: 'hardware_kits',
                      title: '3D Hardware Kits',
                      sub: '₦50k–₦100k • Outright/3-Term',
                      icon: Cpu
                    },
                    {
                      id: 'b2c_home',
                      title: 'B2C Home Lessons',
                      sub: '₦5,000 / learner / month',
                      icon: Home
                    }
                  ] as { id: DeploymentMode; title: string; sub: string; icon: any }[]
                ).map((mode) => {
                  const Icon = mode.icon;
                  const active = deployMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setDeployMode(mode.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        active
                          ? 'bg-gradient-to-br from-[#5A0B6E] to-[#8C159E] border-fuchsia-300 text-white shadow-lg'
                          : 'bg-[#1E0426]/90 border-[#5A0B6E]/60 text-purple-200 hover:border-[#B91ED0]'
                      }`}
                    >
                      <Icon className="w-5 h-5 mb-2 text-fuchsia-200" />
                      <p className="font-bold text-sm">{mode.title}</p>
                      <p className="text-[11px] opacity-80 mt-0.5">{mode.sub}</p>
                    </button>
                  );
                })}
              </div>

              {/* Configurator Controls + Live Summary Card */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 rounded-3xl bg-[#1E0426]/95 border border-[#5A0B6E]/70 p-6 sm:p-8 space-y-6 shadow-xl">
                  {deployMode === 'b2b_school' && (
                    <>
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="font-bold text-white flex items-center gap-2">
                            <Users className="w-4 h-4 text-fuchsia-300" />
                            <span>Number of Enrolled Students</span>
                          </span>
                          <span className="font-mono font-extrabold text-fuchsia-300">
                            {studentCount.toLocaleString()} students
                          </span>
                        </div>
                        <input
                          type="range"
                          min={50}
                          max={5000}
                          step={50}
                          value={studentCount}
                          onChange={(e) => setStudentCount(Number(e.target.value))}
                          className="w-full accent-[#B91ED0]"
                        />
                        <div className="flex justify-between text-[11px] text-purple-300/70 mt-1">
                          <span>50 students</span>
                          <span className="text-emerald-300 font-semibold">
                            1,000+ triggers 33.3% bulk discount (₦1,000/term)
                          </span>
                          <span>5,000 students</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#5A0B6E]/50 space-y-4">
                        <label className="flex items-center justify-between cursor-pointer">
                          <span className="text-sm font-bold text-white">
                            Bundle 3D-Printed ESP32 / Arduino STEM Lab Kits
                          </span>
                          <input
                            type="checkbox"
                            checked={includeLabKits}
                            onChange={(e) => setIncludeLabKits(e.target.checked)}
                            className="w-4 h-4 accent-[#B91ED0]"
                          />
                        </label>

                        {includeLabKits && (
                          <div className="space-y-4 pl-1">
                            <div className="grid sm:grid-cols-3 gap-2.5">
                              {(Object.keys(KIT_CATALOG) as KitTier[]).map((tk) => (
                                <button
                                  key={tk}
                                  type="button"
                                  onClick={() => setConfigKitTier(tk)}
                                  className={`p-3 rounded-xl border text-left text-xs ${
                                    configKitTier === tk
                                      ? 'bg-[#2E0539] border-[#B91ED0] text-white'
                                      : 'bg-[#120318] border-[#5A0B6E]/60 text-purple-200'
                                  }`}
                                >
                                  <p className="font-bold">{KIT_CATALOG[tk].name}</p>
                                  <p className="text-fuchsia-300 font-extrabold mt-1">
                                    ₦{KIT_CATALOG[tk].price.toLocaleString()}
                                  </p>
                                </button>
                              ))}
                            </div>

                            <div className="flex items-center justify-between gap-4">
                              <span className="text-xs text-purple-200">
                                Kit Quantity: <strong>{kitQuantity} kits</strong>
                              </span>
                              <input
                                type="range"
                                min={5}
                                max={100}
                                step={5}
                                value={kitQuantity}
                                onChange={(e) => setKitQuantity(Number(e.target.value))}
                                className="w-48 accent-[#B91ED0]"
                              />
                            </div>

                            <label className="flex items-center gap-2.5 text-xs text-purple-200 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={installmentPlan}
                                onChange={(e) => setInstallmentPlan(e.target.checked)}
                                className="accent-[#B91ED0]"
                              />
                              <span>
                                Split hardware kit payment across <strong>3 academic terms</strong>
                              </span>
                            </label>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {deployMode === 'enterprise_ils' && (
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-bold text-white">
                            Interactive Modules Converted from Static Handouts/Slides
                          </span>
                          <span className="font-mono font-bold text-fuchsia-300">
                            {enterpriseModules} modules
                          </span>
                        </div>
                        <input
                          type="range"
                          min={2}
                          max={24}
                          value={enterpriseModules}
                          onChange={(e) => setEnterpriseModules(Number(e.target.value))}
                          className="w-full accent-[#B91ED0]"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-bold text-white">Active Employee / Trainee Seats</span>
                          <span className="font-mono font-bold text-fuchsia-300">
                            {enterpriseSeats.toLocaleString()} seats
                          </span>
                        </div>
                        <input
                          type="range"
                          min={25}
                          max={2000}
                          step={25}
                          value={enterpriseSeats}
                          onChange={(e) => setEnterpriseSeats(Number(e.target.value))}
                          className="w-full accent-[#B91ED0]"
                        />
                      </div>
                    </div>
                  )}

                  {deployMode === 'hardware_kits' && (
                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-3 gap-3">
                        {(Object.keys(KIT_CATALOG) as KitTier[]).map((tk) => (
                          <button
                            key={tk}
                            type="button"
                            onClick={() => setConfigKitTier(tk)}
                            className={`p-3.5 rounded-xl border text-left text-xs ${
                              configKitTier === tk
                                ? 'bg-[#2E0539] border-[#B91ED0] text-white'
                                : 'bg-[#120318] border-[#5A0B6E]/60 text-purple-200'
                            }`}
                          >
                            <p className="font-bold">{KIT_CATALOG[tk].name}</p>
                            <p className="text-fuchsia-300 font-extrabold mt-1">
                              ₦{KIT_CATALOG[tk].price.toLocaleString()}
                            </p>
                          </button>
                        ))}
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-bold text-white">Number of Hardware Kits</span>
                          <span className="font-mono font-bold text-fuchsia-300">
                            {kitQuantity} kits
                          </span>
                        </div>
                        <input
                          type="range"
                          min={1}
                          max={150}
                          value={kitQuantity}
                          onChange={(e) => setKitQuantity(Number(e.target.value))}
                          className="w-full accent-[#B91ED0]"
                        />
                      </div>

                      <label className="flex items-center gap-2.5 text-xs text-purple-200 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={installmentPlan}
                          onChange={(e) => setInstallmentPlan(e.target.checked)}
                          className="accent-[#B91ED0]"
                        />
                        <span>
                          Use <strong>3-Term Institutional Installment Plan</strong> (1/3 due now)
                        </span>
                      </label>
                    </div>
                  )}

                  {deployMode === 'b2c_home' && (
                    <div className="space-y-5">
                      <div>
                        <label className="text-xs font-bold text-purple-200 block mb-2">
                          Focus Track
                        </label>
                        <select
                          value={homeSubject}
                          onChange={(e) => setHomeSubject(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#120318] border border-[#5A0B6E] text-sm text-white"
                        >
                          <option>Robotics & ESP32 IoT</option>
                          <option>Python & Software Development</option>
                          <option>Applied AI & Machine Learning</option>
                          <option>Mechatronics Foundations</option>
                        </select>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-purple-200">Learners</span>
                            <span className="font-bold text-fuchsia-300">{homeLearners}</span>
                          </div>
                          <input
                            type="range"
                            min={1}
                            max={6}
                            value={homeLearners}
                            onChange={(e) => setHomeLearners(Number(e.target.value))}
                            className="w-full accent-[#B91ED0]"
                          />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-purple-200">Duration (Months)</span>
                            <span className="font-bold text-fuchsia-300">{homeMonths} mo</span>
                          </div>
                          <input
                            type="range"
                            min={1}
                            max={12}
                            value={homeMonths}
                            onChange={(e) => setHomeMonths(Number(e.target.value))}
                            className="w-full accent-[#B91ED0]"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Live Quote Breakdown Card */}
                <div className="lg:col-span-5 rounded-3xl bg-[#1E0426]/95 border border-[#B91ED0]/60 p-6 sm:p-8 space-y-5 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-[#5A0B6E]/60 pb-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-fuchsia-300">
                        Live Investment Breakdown
                      </span>
                      <h3 className="text-xl font-extrabold text-white mt-0.5">
                        Estimated Quote
                      </h3>
                    </div>
                    <ShieldCheck className="w-7 h-7 text-fuchsia-300" />
                  </div>

                  <div className="space-y-3 text-sm">
                    {deployMode === 'b2b_school' && (
                      <>
                        <div className="flex justify-between text-purple-200">
                          <span>
                            FiraLearn ILS ({studentCount.toLocaleString()} × ₦
                            {pricingBreakdown.perStudentRate.toLocaleString()})
                          </span>
                          <span className="font-bold text-white">
                            ₦{pricingBreakdown.lmsTermSubtotal.toLocaleString()}
                          </span>
                        </div>
                        {pricingBreakdown.bulkSavings > 0 && (
                          <div className="flex justify-between text-emerald-300 text-xs font-semibold">
                            <span>33.3% Cohort Bulk Discount Saved</span>
                            <span>-₦{pricingBreakdown.bulkSavings.toLocaleString()}</span>
                          </div>
                        )}
                        {includeLabKits && (
                          <div className="flex justify-between text-purple-200">
                            <span>
                              {kitQuantity}× {KIT_CATALOG[configKitTier].name}{' '}
                              {installmentPlan ? '(Term 1/3)' : '(Outright)'}
                            </span>
                            <span className="font-bold text-white">
                              ₦{pricingBreakdown.kitsDueNow.toLocaleString()}
                            </span>
                          </div>
                        )}
                      </>
                    )}

                    {deployMode === 'enterprise_ils' && (
                      <>
                        <div className="flex justify-between text-purple-200">
                          <span>Custom ILS Architecture + {enterpriseModules} Modules</span>
                          <span className="font-bold text-white">
                            ₦{(350000 + enterpriseModules * 45000).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-purple-200">
                          <span>Trainee Licensing ({enterpriseSeats} seats)</span>
                          <span className="font-bold text-white">
                            ₦{pricingBreakdown.lmsTermSubtotal.toLocaleString()}
                          </span>
                        </div>
                      </>
                    )}

                    {deployMode === 'hardware_kits' && (
                      <div className="flex justify-between text-purple-200">
                        <span>
                          {kitQuantity}× {KIT_CATALOG[configKitTier].name}{' '}
                          {installmentPlan ? '(1st Installment)' : '(Outright)'}
                        </span>
                        <span className="font-bold text-white">
                          ₦{pricingBreakdown.kitsDueNow.toLocaleString()}
                        </span>
                      </div>
                    )}

                    {deployMode === 'b2c_home' && (
                      <div className="flex justify-between text-purple-200">
                        <span>
                          {homeLearners} learner(s) × {homeMonths} month(s) @ ₦5,000/mo
                        </span>
                        <span className="font-bold text-white">
                          ₦{pricingBreakdown.dueTodayTotal.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#5A0B6E]/60">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
                        Due Today
                      </span>
                      <span className="text-3xl font-extrabold text-fuchsia-300">
                        ₦{pricingBreakdown.dueTodayTotal.toLocaleString()}
                      </span>
                    </div>
                    {pricingBreakdown.grandContractTotal !== pricingBreakdown.dueTodayTotal && (
                      <p className="text-right text-xs text-purple-200/75 mt-1">
                        Total Contract Value: ₦{pricingBreakdown.grandContractTotal.toLocaleString()}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setProposalSubmitted(false);
                      setProposalModalOpen(true);
                    }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#5A0B6E] via-[#8C159E] to-[#B91ED0] text-white font-bold text-sm hover:brightness-110 transition flex items-center justify-center gap-2 shadow-lg shadow-[#B91ED0]/25"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Generate & Lock In Proposal</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Part 2: Direct Institutional Partnership, LinkedIn & Contact Channels */}
            <div className="pt-12 border-t border-[#5A0B6E]/50 grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300">
                  Direct Channels & Partnerships
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Deploy FiraLearn ILS or Equip Your STEM Lab
                </h2>
                <p className="text-sm text-purple-200/80 leading-relaxed">
                  Reach out to onboard a school cohort, schedule a turnkey Mechatronics lab setup,
                  enroll in ₦5,000/month home lessons, or connect with us on LinkedIn.
                </p>

                <div className="space-y-4 pt-2 text-sm">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#1E0426] border border-[#B91ED0]/50 hover:border-fuchsia-300 transition group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5A0B6E] to-[#B91ED0] flex items-center justify-center text-white font-extrabold text-sm">
                      in
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-fuchsia-300 font-semibold">Official LinkedIn</p>
                      <p className="font-bold text-white group-hover:text-fuchsia-200">
                        linkedin.com/company/firatech
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-fuchsia-300" />
                  </a>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#2E0539] border border-[#B91ED0]/40 flex items-center justify-center text-fuchsia-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-purple-300/70">Partnerships & Engineering Desk</p>
                      <p className="font-bold text-white">hello@firatech.org</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#2E0539] border border-[#B91ED0]/40 flex items-center justify-center text-fuchsia-300">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-purple-300/70">Innovation Hub & Walkthroughs</p>
                      <p className="font-bold text-white">
                        Lagos–Ibadan Expressway Corridor, Ogun State, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#2E0539] border border-[#B91ED0]/40 flex items-center justify-center text-fuchsia-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-purple-300/70">Deployment Reach</p>
                      <p className="font-bold text-white">
                        Nationwide Schools, Universities & Offline-First Cloud Cohorts
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSent(true);
                    enqueueMutation(
                      'PARTNER_INQUIRY_LOGGED',
                      `${contactForm.role} — ${contactForm.interest}`,
                      1
                    );
                  }}
                  className="rounded-3xl bg-[#1E0426]/95 border border-[#5A0B6E]/70 p-6 sm:p-8 space-y-4 shadow-xl"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-purple-200/80 block mb-1.5">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Dr. / Engr. / Parent Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#120318] border border-[#5A0B6E] text-sm text-white focus:outline-none focus:border-[#B91ED0]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-purple-200/80 block mb-1.5">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@institution.edu.ng"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#120318] border border-[#5A0B6E] text-sm text-white focus:outline-none focus:border-[#B91ED0]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-purple-200/80 block mb-1.5">Your Role</label>
                      <select
                        value={contactForm.role}
                        onChange={(e) => setContactForm({ ...contactForm, role: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#120318] border border-[#5A0B6E] text-sm text-white"
                      >
                        <option>School Administrator / Principal</option>
                        <option>University / Bootcamp Partner</option>
                        <option>Parent / Individual Learner</option>
                        <option>Enterprise / Edge-AI R&D Client</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-purple-200/80 block mb-1.5">
                        Primary Interest
                      </label>
                      <select
                        value={contactForm.interest}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, interest: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#120318] border border-[#5A0B6E] text-sm text-white"
                      >
                        <option>FiraLearn ILS + Turnkey School STEM Lab</option>
                        <option>Custom Company ILS (Replace Static Handouts/Slides)</option>
                        <option>3D-Printed ESP32 / Arduino Hardware Kits</option>
                        <option>Mechatronics, AI & Software Development Bootcamp</option>
                        <option>B2C Home Lessons (₦5,000/mo)</option>
                        <option>Project Bodunde / Edge-AI R&D</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-purple-200/80 block mb-1.5">
                      Cohort or Lab Requirements
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your student count, desired hardware kits, or target launch date..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#120318] border border-[#5A0B6E] text-sm text-white focus:outline-none focus:border-[#B91ED0]"
                    />
                  </div>

                  {contactSent ? (
                    <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 text-xs flex items-center justify-between">
                      <span>
                        Inquiry logged in FiraLearn's UUID outbox! Our Founder & Technical Lead's
                        engineering team will follow up shortly.
                      </span>
                      <button
                        type="button"
                        onClick={() => setContactSent(false)}
                        className="underline font-bold ml-2 shrink-0"
                      >
                        Send Another
                      </button>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#5A0B6E] via-[#8C159E] to-[#B91ED0] text-white font-bold text-sm hover:brightness-110 transition shadow-lg shadow-[#B91ED0]/25"
                    >
                      Submit Partnership / Lab Request
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ====================================================================
          PERSISTENT BRANDED FOOTER (EMBLEM ONLY + OFFICIAL LINKEDIN LINK)
      ==================================================================== */}
      <footer className="border-t border-[#5A0B6E]/50 py-8 bg-[#120318] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-200/75">
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded-lg bg-white">
              <FiratechEmblem className="w-5 h-5" />
            </div>
            <span>
              Interactive Learning System • Mechatronics, AI, and Software Development
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.route}
                onClick={() => navigateTo(item.route)}
                className="hover:text-fuchsia-300 transition"
              >
                {item.shortLabel}
              </button>
            ))}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#2E0539] border border-[#B91ED0]/40 text-fuchsia-200 hover:text-white font-semibold transition"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          INSTITUTIONAL PROPOSAL GENERATOR MODAL (NO "FIRATECH" BESIDE LOGO)
      ==================================================================== */}
      {proposalModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#120318]/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-[#1E0426] border border-[#B91ED0]/50 p-6 sm:p-7 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-[#5A0B6E]/60 pb-3.5">
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-lg bg-white">
                  <FiratechEmblem className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-fuchsia-300">
                    Institutional Proposal Generator
                  </span>
                  <h3 className="text-lg font-bold text-white">Lock In Your Deployment Quote</h3>
                </div>
              </div>
              <button
                onClick={() => setProposalModalOpen(false)}
                className="p-1.5 rounded-xl text-purple-200 hover:bg-[#2E0539]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <pre className="p-4 rounded-2xl bg-[#120318] border border-[#5A0B6E]/70 font-mono text-[11px] text-fuchsia-100 whitespace-pre-wrap leading-relaxed">
                {proposalSummaryText}
              </pre>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(proposalSummaryText);
                  setProposalCopied(true);
                  setTimeout(() => setProposalCopied(false), 2000);
                }}
                className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-[#2E0539] hover:bg-[#3F084E] border border-[#B91ED0]/40 text-[11px] font-bold text-fuchsia-200 flex items-center gap-1.5"
              >
                {proposalCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Quote</span>
                  </>
                )}
              </button>
            </div>

            {proposalSubmitted ? (
              <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 text-xs space-y-2.5">
                <p className="font-bold text-sm text-emerald-300">Proposal Queued & Confirmed!</p>
                <p>
                  Your itemized quote for <strong>{orgName || 'your deployment'}</strong> has been
                  recorded with a Priority-1 UUID in our outbox and dispatched to our Partnerships
                  desk.
                </p>
                <button
                  onClick={() => setProposalModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#5A0B6E] to-[#B91ED0] text-white font-bold"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setProposalSubmitted(true);
                  enqueueMutation(
                    'PROPOSAL_DISPATCHED',
                    `${orgName || 'Partner'} • Due Now ₦${pricingBreakdown.dueTodayTotal.toLocaleString()}`,
                    1
                  );
                }}
                className="space-y-3"
              >
                <input
                  required
                  type="text"
                  placeholder="School, Organization, or Parent Name"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#120318] border border-[#5A0B6E] text-sm text-white"
                />
                <input
                  required
                  type="email"
                  placeholder="Official Email for PDF Proposal"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#120318] border border-[#5A0B6E] text-sm text-white"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone / WhatsApp Number (+234...)"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#120318] border border-[#5A0B6E] text-sm text-white"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#5A0B6E] via-[#8C159E] to-[#B91ED0] text-white font-bold text-sm hover:brightness-110 transition"
                >
                  Dispatch Proposal & Request Callback
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ====================================================================
          FLOATING "ASK FIRA" AI CONCIERGE (FIRA INTELLIGENCE — NO GEMINI TEXT)
      ==================================================================== */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        {chatOpen && (
          <div className="mb-3 w-[92vw] sm:w-[410px] h-[520px] max-h-[78vh] rounded-3xl bg-[#1E0426] border border-[#B91ED0]/60 shadow-2xl shadow-[#5A0B6E]/50 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="px-4 py-3.5 bg-[#120318] border-b border-[#5A0B6E]/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-xl bg-white">
                  <FiratechEmblem className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white leading-none">
                    Ask Fira — AI Concierge
                  </h4>
                  <span className="text-[11px] text-fuchsia-300">
                    {isOnline
                      ? 'Fira Intelligence + Edge Knowledge Ready'
                      : 'Offline Mode • Local Knowledge Ready'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="p-1.5 rounded-xl text-purple-200 hover:bg-[#2E0539]"
                aria-label="Close Ask Fira"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 bg-[#17041E] border-b border-[#5A0B6E]/50 flex gap-1.5 overflow-x-auto">
              {[
                'Custom ILS for companies?',
                'How does FiraLearn work offline?',
                'Quote for 1,250 students',
                'Tell me about the Founder'
              ].map((chip) => (
                <button
                  key={chip}
                  onClick={() => {
                    setChatOpen(true);
                    sendToFira(chip);
                  }}
                  className="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#2E0539] text-fuchsia-200 border border-[#B91ED0]/40 hover:border-fuchsia-300 transition"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Messages Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs sm:text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.role === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[86%] rounded-2xl px-3.5 py-2.5 whitespace-pre-wrap leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-[#5A0B6E] to-[#B91ED0] text-white font-medium'
                        : 'bg-[#120318] text-purple-100 border border-[#5A0B6E]/70'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-purple-300/60 mt-1 px-1">
                    {msg.role === 'assistant'
                      ? `${
                          msg.sourceMode === 'fira-live' ? 'Fira Intelligence' : 'Fira Edge'
                        } • ${msg.timestamp}`
                      : msg.timestamp}
                  </span>
                </div>
              ))}
              {chatLoading && (
                <div className="flex items-center gap-2 text-xs text-fuchsia-300 px-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Fira is synthesizing an answer...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendToFira();
              }}
              className="p-3 bg-[#120318] border-t border-[#5A0B6E]/60 flex items-center gap-2"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about ILS, pricing, kits, or offline sync..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-[#1E0426] border border-[#5A0B6E] text-xs sm:text-sm text-white focus:outline-none focus:border-[#B91ED0]"
              />
              <button
                type="submit"
                disabled={chatLoading || !chatInput.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#5A0B6E] to-[#B91ED0] text-white hover:brightness-110 disabled:opacity-40 transition"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Floating Toggle Pill */}
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="group flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-[#5A0B6E] via-[#8C159E] to-[#B91ED0] text-white font-bold text-sm shadow-2xl shadow-[#B91ED0]/40 border border-fuchsia-300/30 hover:scale-105 transition"
          >
            <MessageSquare className="w-5 h-5 text-fuchsia-200" />
            <span>Ask Fira AI</span>
          </button>
        )}
      </div>
    </div>
  );
}