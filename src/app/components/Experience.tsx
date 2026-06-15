import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const roles = [
  {
    period: "Sept 2024 — Present",
    role: "Digital Manager & Team Lead",
    company: "Namaste Nepal Cleaning Services & Suppliers Pvt. Ltd.",
    current: true,
    points: [
      "Leads the entire digital department end to end",
      "Owns branding for the Namaste Nepal Group",
      "Improves SEO, local ranking, and website performance",
      "Drives content creation and creative direction",
      "Develops B2B opportunities and digital growth strategies",
    ],
  },
  {
    period: "Dec 2022 — Sept 2024",
    role: "Digital Manager",
    company: "Royal Cleaning Services",
    current: false,
    points: [
      "Managed SEO, website, and analytics",
      "Ran Meta & Google Ads campaigns",
      "Implemented AI automation tools",
      "Built customer funnel & lead tracking",
      "Boosted brand visibility and generated 100+ monthly orders",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
      <Reveal>
        <SectionLabel index="03">The journey</SectionLabel>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-16" style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
          Where I've grown.
        </h2>
      </Reveal>

      <div className="relative">
        {/* timeline line */}
        <div className="absolute left-0 md:left-[200px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-14">
          {roles.map((r, i) => (
            <Reveal key={r.company} delay={i * 0.1}>
              <div className="relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 pl-8 md:pl-0">
                {/* node */}
                <div className="absolute left-[-5px] md:left-[195px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />

                <div className="md:text-right md:pr-12">
                  <span
                    className="text-muted-foreground"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", letterSpacing: "0.04em" }}
                  >
                    {r.period}
                  </span>
                  {r.current && (
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-primary md:ml-auto" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> CURRENT
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border border-border bg-card p-7 transition hover:border-primary/40">
                  <h3 style={{ fontWeight: 700, fontSize: "1.4rem" }}>{r.role}</h3>
                  <p className="text-primary mt-1" style={{ fontWeight: 500 }}>{r.company}</p>
                  <ul className="mt-5 space-y-2.5">
                    {r.points.map((p) => (
                      <li key={p} className="flex gap-3 text-muted-foreground" style={{ lineHeight: 1.5 }}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
