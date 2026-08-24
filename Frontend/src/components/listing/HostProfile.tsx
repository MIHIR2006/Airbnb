import type { Host } from "@/lib/types";
import { CheckBadgeIcon, LocationIcon, ShieldIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";

export function HostProfile({ host }: { host: Host }) {
  return (
    <div className="flex flex-col gap-lg border-b border-hairline pb-lg">
      <h2 className="text-display-md text-ink">Meet your host</h2>

      <div className="grid grid-cols-1 gap-xl md:grid-cols-[minmax(0,320px)_1fr]">
        <div className="flex flex-col items-center gap-base rounded-md border border-hairline p-lg">
          <div className="flex items-center gap-lg">
            <div className="relative shrink-0">
              <img src={host.logo.src} alt={host.logo.alt} className="h-20 w-20 rounded-full" />
              {host.verified && (
                <CheckBadgeIcon className="absolute -bottom-1 -right-1 h-6 w-6 text-primary" />
              )}
            </div>
            <span className="h-16 w-px shrink-0 bg-hairline" />
            <div className="divide-y divide-hairline text-center">
              <div className="px-md py-xs">
                <p className="text-title-md text-ink">{host.reviewCount.toLocaleString()}</p>
                <p className="text-caption-sm text-muted">Reviews</p>
              </div>
              <div className="px-md py-xs">
                <p className="text-title-md text-ink">{host.rating}★</p>
                <p className="text-caption-sm text-muted">Rating</p>
              </div>
              <div className="px-md py-xs">
                <p className="text-title-md text-ink">{host.yearsHostingNum}</p>
                <p className="text-caption-sm text-muted">Years hosting</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-display-sm text-ink">{host.name}</p>
            <p className="text-caption-sm text-muted">Host</p>
          </div>
        </div>

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

      <div className="flex flex-col gap-sm">
        {host.bio.map((line) => (
          <p key={line} className="flex items-center gap-sm text-body-md text-ink">
            <LocationIcon className="h-4 w-4 shrink-0 text-muted" />
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
