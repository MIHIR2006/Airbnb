import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4.35-4.35" />
    </Base>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z" />
    </Base>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Base>
  );
}

export function HouseIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </Base>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3v12" />
      <path d="M7 8l5-5 5 5" />
      <path d="M5 13v6a2 2 0 002 2h10a2 2 0 002-2v-6" />
    </Base>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 20s-7-4.5-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 11c-2.5 4.5-9.5 9-9.5 9z" />
    </Base>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 6.1 6.7.7-5 4.6 1.4 6.6L12 17l-5.9 3.5 1.3-6.6-5-4.6 6.7-.7z" />
    </svg>
  );
}

export function LaurelLeft(props: IconProps) {
  return (
    <Base strokeWidth={1.2} {...props}>
      <path d="M20 4C14 5 9 9 8 16" />
      <path d="M8 6c2 1 3 3 3 5M6.5 10c2 .5 3.5 2 4 4M5.5 14.5c1.8.2 3.3 1.3 4 3" />
    </Base>
  );
}

export function LaurelRight(props: IconProps) {
  return (
    <Base strokeWidth={1.2} {...props}>
      <path d="M4 4c6 1 11 5 12 12" />
      <path d="M16 6c-2 1-3 3-3 5M17.5 10c-2 .5-3.5 2-4 4M18.5 14.5c-1.8.2-3.3 1.3-4 3" />
    </Base>
  );
}

export function OutdoorIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3l8 7H4z" />
      <path d="M6 10v9h12v-9" />
      <path d="M12 3v7" />
    </Base>
  );
}

export function FanIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="1.6" />
      <path d="M12 10.5C11 7 9 5 6 5.5c-1 2.5 0 5 3 6" />
      <path d="M13.5 12C17 11 19 9 18.5 6c-2.5-1-5 0-6 3" />
      <path d="M13.5 13.5C15 17 17 19 20 18.5c1-2.5 0-5-3-6" />
      <path d="M10.5 12C7 13 5 15 5.5 18c2.5 1 5 0 6-3" />
    </Base>
  );
}

export function DoorIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="6" y="3" width="12" height="18" rx="1" />
      <circle cx="14.5" cy="12" r="0.8" fill="currentColor" />
    </Base>
  );
}

export function KitchenIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7 3v7a2 2 0 002 2v9M7 3v7M9 3v7" />
      <path d="M17 3c-1.7 0-3 1.8-3 4s1.3 4 3 4v10" />
    </Base>
  );
}

export function WifiIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M2 8.5a15 15 0 0120 0" />
      <path d="M5.5 12.5a10 10 0 0113 0" />
      <path d="M9 16.3a5 5 0 016 0" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function WorkspaceIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="12" rx="1" />
      <path d="M3 17l-1.5 3M21 17l1.5 3M8 20h8" />
    </Base>
  );
}

export function ParkingIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 16l1.5-6.5A2 2 0 017.4 8h9.2a2 2 0 011.9 1.5L20 16" />
      <path d="M4 16v3h2v-3M18 16v3h2v-3M4 16h16" />
      <circle cx="7.5" cy="16" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="16" r="1" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function PoolIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M2 15c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0" />
      <path d="M2 19c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0" />
      <circle cx="12" cy="7" r="2.5" />
      <path d="M12 9.5V13" />
    </Base>
  );
}

export function HotTubIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="10" width="18" height="9" rx="2" />
      <path d="M7 10V8a2 2 0 014 0M13 10V8a2 2 0 014 0" />
      <path d="M7 14.5c.6.6 1.2.6 1.8 0s1.2-.6 1.8 0 1.2.6 1.8 0 1.2-.6 1.8 0" />
    </Base>
  );
}

export function PetsIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="7" cy="8" r="1.5" />
      <circle cx="12" cy="6" r="1.5" />
      <circle cx="17" cy="8" r="1.5" />
      <circle cx="19" cy="12.5" r="1.5" />
      <path d="M12 12c-3 0-6 2-6 5a2 2 0 002 2c1 0 1.5-.7 2.5-.7s1.5.7 2.5.7 1.5-.7 2.5-.7 1.5.7 2.5.7a2 2 0 002-2c0-3.3-2.7-5-6-5z" />
    </Base>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="2" y="7" width="14" height="10" rx="2" />
      <circle cx="9" cy="12" r="3" />
      <path d="M16 10.5l5-2.5v8l-5-2.5" />
    </Base>
  );
}

export function AlarmIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="13" r="7" />
      <path d="M9 13a3 3 0 016 0" />
      <path d="M12 9v1" />
      <path d="M8 4l2 2M16 4l-2 2" />
    </Base>
  );
}

export function SlashOverlay(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 3l18 18" />
    </Base>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M15 5l-7 7 7 7" />
    </Base>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 5l7 7-7 7" />
    </Base>
  );
}

export function CleanlinessIcon(props: IconProps) {
  return (
    <Base {...props}>
      {/* Spray nozzle & trigger */}
      <path d="M8 8h7v2.5H8z" />
      <path d="M11 8V5.5a1.5 1.5 0 00-1.5-1.5H8" />
      <path d="M12 5.5l1.5-1.5" />
      {/* Bottle neck & body */}
      <path d="M9.5 10.5h4L15 13v7a2 2 0 01-2 2h-3a2 2 0 01-2-2v-7l1.5-2.5z" />
      {/* Spray mist */}
      <circle cx="17.5" cy="4" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="19" cy="5.5" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="7" r="0.5" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function AccuracyIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.3 2.3L16 10" />
    </Base>
  );
}

export function CheckinIcon(props: IconProps) {
  return (
    <Base {...props}>
      {/* Key head */}
      <circle cx="8" cy="15" r="4" />
      {/* Key shaft & teeth */}
      <path d="M11 12l9-9M17 6l2 2M14 9l2 2" />
    </Base>
  );
}

export function CommunicationIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 018.5-8.5h.5a8.5 8.5 0 018.5 8.5z" />
    </Base>
  );
}

export function LocationIcon(props: IconProps) {
  return (
    <Base {...props}>
      {/* Unfolded map panels */}
      <path d="M3 6l6-3 6 3 6-3v12l-6 3-6-3-6 3V6z" />
      <path d="M9 3v12M15 6v12" />
    </Base>
  );
}

export function ValueIcon(props: IconProps) {
  return (
    <Base {...props}>
      {/* Price tag */}
      <path d="M8.5 4.5l8.5 8.5-6 6-8.5-8.5v-6z" />
      <circle cx="6.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function ComfortIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 12v6M21 12v6" />
      <path d="M3 14a2 2 0 012-2h14a2 2 0 012 2v1H3z" />
      <path d="M4 12V9a2 2 0 012-2h12a2 2 0 012 2v3" />
    </Base>
  );
}

export function ConditionIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="8" width="18" height="13" rx="1" />
      <path d="M3 12h18" />
      <path d="M12 8v13" />
      <path d="M8 8c0-2.5 1.5-4 4-4s4 1.5 4 4" />
    </Base>
  );
}

export function HospitalityIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M8 12h2a2 2 0 000-4H7l-4 3v5l4 2h6l5-2" />
      <path d="M16 10l4 1" />
    </Base>
  );
}

export function AmenitiesTagIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 5l7-2 9 9-9 9-9-9z" />
      <circle cx="8" cy="9" r="1.2" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 5v14M5 12h14" />
    </Base>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 12h14" />
    </Base>
  );
}

export function PinHomeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3l8 6v11a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1V9z" />
    </svg>
  );
}

export function CalendarXIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M9 14l6 4M15 14l-6 4" />
    </Base>
  );
}

export function KeyIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l9-9M17 6l2 2M14 9l2 2" />
    </Base>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6z" />
    </Base>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M11 3l9 9-8 8-9-9V4a1 1 0 011-1z" />
      <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function FlagIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 3v18" />
      <path d="M5 4h13l-3 4 3 4H5" />
    </Base>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Base>
  );
}

export function CheckBadgeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l2.4 1.6 2.8-.5 1.3 2.5 2.5 1.3-.5 2.8L22 12l-1.6 2.4.5 2.8-2.5 1.3-1.3 2.5-2.8-.5L12 22l-2.4-1.6-2.8.5-1.3-2.5-2.5-1.3.5-2.8L2 12l1.6-2.4-.5-2.8 2.5-1.3 1.3-2.5 2.8.5z" />
      <path d="M8.5 12.2l2.2 2.2 4.3-4.4" fill="none" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function KeyboardIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 15h12" />
    </Base>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </Base>
  );
}
