import type { Host } from "@/lib/types";
import { LocationIcon, ShieldIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";

function GraduationCapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

function BalloonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2a6 6 0 00-6 6c0 3.3 2.7 6 6 6s6-2.7 6-6a6 6 0 00-6-6z" />
      <path d="M12 14l-1 2h2z" />
      <path d="M12 16c-.5 1-1.5 2-1 3.5" />
    </svg>
  );
}

function getBioIcon(text: string) {
  if (text.toLowerCase().includes("born")) {
    return <BalloonIcon className="h-5 w-5 shrink-0 text-ink" />;
  }
  if (text.toLowerCase().includes("school") || text.toLowerCase().includes("education") || text.toLowerCase().includes("nicmar")) {
    return <GraduationCapIcon className="h-5 w-5 shrink-0 text-ink" />;
  }
  return <LocationIcon className="h-5 w-5 shrink-0 text-muted" />;
}

export function HostProfile({ host }: { host: Host }) {
  return (
    <div className="flex flex-col gap-lg border-b border-hairline pb-lg">
      <h2 className="text-display-md text-ink">Meet your host</h2>

      <div className="grid grid-cols-1 gap-xl md:grid-cols-[380px_1fr]">
        {/* Left Column: Host Card + Bio lines */}
        <div className="flex flex-col gap-6">
          {/* Host Badge Card */}
          <div className="bg-canvas border border-[#EBEBEB] rounded-[32px] p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] w-full flex items-center justify-between gap-6 h-[220px]">
            {/* Left Column */}
            <div className="flex-1 flex flex-col items-center text-center justify-center">
              <div className="relative h-24 w-24 shrink-0">
                <img src={host.logo.src} alt={host.logo.alt} className="h-full w-full rounded-full object-cover" />
                {host.verified && (
                  <div className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#FF385C] border-2 border-white shadow-md">
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-white stroke-[2.5]">
                      <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <h3 className="text-[24px] font-bold text-[#222222] leading-tight tracking-tight">
                  Mirashya<br />Homes
                </h3>
                <p className="text-[12px] font-normal text-ink mt-0.5">Host</p>
              </div>
            </div>

            {/* Vertical Divider */}
            <span className="h-36 w-px bg-[#EBEBEB] shrink-0" />

            {/* Right Column */}
            <div className="flex-1 flex flex-col justify-between py-1 h-36 pl-4 text-left">
              <div className="flex flex-col">
                <span className="text-[18px] font-bold text-[#222222] leading-none">{host.reviewCount.toLocaleString()}</span>
                <span className="text-[12px] font-semibold text-[#222222] mt-1">Reviews</span>
              </div>
              <span className="h-px w-full bg-[#EBEBEB]" />
              <div className="flex flex-col">
                <span className="text-[18px] font-bold text-[#222222] leading-none">{host.rating}★</span>
                <span className="text-[12px] font-semibold text-[#222222] mt-1">Rating</span>
              </div>
              <span className="h-px w-full bg-[#EBEBEB]" />
              <div className="flex flex-col">
                <span className="text-[18px] font-bold text-[#222222] leading-none">{host.yearsHostingNum}</span>
                <span className="text-[12px] font-semibold text-[#222222] mt-1">Years hosting</span>
              </div>
            </div>
          </div>

          {/* Bio lines with customized icons */}
          <div className="flex flex-col gap-base mt-2">
            {host.bio.map((line) => (
              <p key={line} className="flex items-center gap-md text-[16px] text-ink font-normal">
                {getBioIcon(line)}
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Right Column: Co-hosts / details */}
        <div className="flex flex-col gap-lg">
          <div>
            <h3 className="text-title-sm text-ink">Co-Hosts</h3>
            <div className="mt-base grid grid-cols-2 gap-base sm:grid-cols-3">
              {host.coHosts.map((c) => (
                <div key={c.name} className="flex items-center gap-sm">
                  {c.avatar ? (
                    <img src={c.avatar.src} alt={c.avatar.alt} className="h-9 w-9 rounded-full" />
                  ) : (
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full text-body-sm text-ink"
                      style={{ backgroundColor: c.avatarColor }}
                    >
                      {c.avatarInitial}
                    </span>
                  )}
                  <span className="text-body-sm text-ink">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-title-sm text-ink">Host details</h3>
            <p className="text-body-sm text-ink">Response rate: {host.responseRate}</p>
            <p className="text-body-sm text-ink">{host.responseTime}</p>
          </div>

          <Button variant="secondary" className="w-fit">
            Message host
          </Button>

          <p className="flex items-center gap-sm text-body-sm text-muted">
            <ShieldIcon className="h-4 w-4 shrink-0" />
            To help protect your payment, always use Airbnb to send money and communicate with hosts.
          </p>
        </div>
      </div>
    </div>
  );
}
