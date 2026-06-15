import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "WordPress + WooCommerce",
    title: "Punching Bag E-Commerce Website",
    body: "Built a complete demo e-commerce store using only free tools — in just three days. Product catalog, cart, and checkout, fully functional.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    meta: "3-day build",
  },
  {
    tag: "Excel Automation",
    title: "Automated Student Marksheet",
    body: "A self-updating system that auto-fetches roll numbers, calculates marks and rank, and generates clean reporting — no manual entry.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    meta: "Zero manual entry",
  },
  {
    tag: "Academic Project",
    title: "Personal Portfolio Website",
    body: "Designed and developed a clean, functional portfolio from scratch using free tools — the foundation of my web craft.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    meta: "Built from scratch",
  },
  {
    tag: "Digital Marketing",
    title: "Social Media Campaigns",
    body: "Created high-engagement campaigns for the cleaning and service industry that turned attention into a steady stream of real orders.",
    image:
      "https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    meta: "High engagement",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <Reveal>
              <SectionLabel index="04">Selected work</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
                Things I've made
                <br />
                with intent.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted-foreground" style={{ lineHeight: 1.6 }}>
              A curated set of projects — each one a small proof that good tools and
              clear thinking beat big budgets.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition hover:border-primary/40">
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <ImageWithFallback
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-border bg-background/80 px-3 py-1.5 text-foreground backdrop-blur" style={{ fontSize: "0.78rem", fontWeight: 500 }}>
                    {p.tag}
                  </span>
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 style={{ fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.2 }}>{p.title}</h3>
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  <p className="mt-3 text-muted-foreground" style={{ lineHeight: 1.6 }}>
                    {p.body}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                    <span className="h-px w-6 bg-primary/50" />
                    {p.meta}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
