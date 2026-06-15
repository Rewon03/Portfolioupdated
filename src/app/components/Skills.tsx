import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Megaphone, Sparkles, LineChart } from "lucide-react";

const groups = [
  {
    icon: Megaphone,
    title: "Core Digital",
    skills: [
      "SEO",
      "WordPress Management",
      "Digital Marketing",
      "Meta Ads",
      "Google Ads",
      "Google Business Optimization",
      "Email Marketing",
      "AI Automation",
    ],
  },
  {
    icon: Sparkles,
    title: "Creative Media",
    skills: [
      "Photo Editing",
      "Video Editing",
      "Copywriting",
      "Scriptwriting",
      "Brand Storytelling",
      "Social Media Strategy",
    ],
  },
  {
    icon: LineChart,
    title: "Technical",
    skills: [
      "Data Management",
      "Marketing Analytics",
      "Performance Optimization",
      "UX Improvements",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="02">Capabilities</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
                A full-stack
                <br />
                marketing toolkit.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <Reveal delay={0.1}>
              <p className="text-muted-foreground" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                From the technical foundations of a website to the story it tells, I
                work across the entire growth stack — so strategy, creative, and data
                never live in separate silos.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal key={g.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition hover:border-primary/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontWeight: 600, fontSize: "1.3rem" }} className="mb-5">
                    {g.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-muted-foreground"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
