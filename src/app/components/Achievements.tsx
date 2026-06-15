import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Award, TrendingUp, Globe, Target, Rocket } from "lucide-react";

const items = [
  { icon: Award, text: "Multiple Employee of the Month awards" },
  { icon: TrendingUp, text: "Generated 100+ customer orders in a single month" },
  { icon: Globe, text: "Built multiple functional websites using only free tools" },
  { icon: Target, text: "Delivered consistent, ROI-focused advertising performance" },
  { icon: Rocket, text: "Led digital transformation across multiple companies" },
];

export function Achievements() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionLabel index="05">Milestones</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
              Moments worth
              <br />
              remembering.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-border border-y border-border">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <Reveal key={it.text} delay={i * 0.06}>
                  <div className="group flex items-center gap-6 py-7 transition">
                    <span className="text-muted-foreground" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
                      0{i + 1}
                    </span>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={20} />
                    </div>
                    <p style={{ fontSize: "1.15rem", fontWeight: 500 }} className="transition group-hover:translate-x-1">
                      {it.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
