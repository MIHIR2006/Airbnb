import { GlobeIcon } from "@/components/icons";

const COLUMNS = [
  {
    title: "Support",
    links: ["Help Centre", "Get help with a safety issue", "AirCover", "Anti-discrimination", "Disability support", "Cancellation options", "Report neighbourhood concern"],
  },
  {
    title: "Hosting",
    links: ["Airbnb your home", "AirCover for Hosts", "Hosting resources", "Community forum", "Hosting responsibly", "Airbnb-friendly apartments"],
  },
  {
    title: "Airbnb",
    links: ["Newsroom", "New features", "Careers", "Investors", "Airbnb.org emergency stays"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="mx-auto grid max-w-280 grid-cols-1 gap-xl px-lg py-xxl sm:grid-cols-3">
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="mb-base text-title-sm text-ink">{col.title}</h3>
            <ul className="flex flex-col gap-sm">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-body-sm text-ink">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-280 flex-col items-center justify-between gap-base px-lg py-lg text-caption-sm text-muted sm:flex-row">
          <p>© 2026 Airbnb, Inc. · Privacy · Terms · Sitemap</p>
          <div className="flex items-center gap-lg">
            <button type="button" className="flex items-center gap-xs">
              <GlobeIcon className="h-4 w-4" />
              English (US)
            </button>
            <button type="button">₹ INR</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
