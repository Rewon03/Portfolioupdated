import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Mail, ArrowUpRight } from "lucide-react";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/rewon.shrestha.9" },
  { label: "Instagram", href: "https://www.instagram.com/rewon.shrestha__/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rewon-shrestha/" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-muted/30">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-primary/15 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
        <Reveal>
          <SectionLabel index="06">Contact</SectionLabel>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <h2 style={{ fontWeight: 800, fontSize: "clamp(2.2rem, 6vw, 5rem)", lineHeight: 1.0 }}>
                Let's build
                <br />
                something <span className="text-primary">memorable.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-muted-foreground" style={{ fontSize: "1.15rem", lineHeight: 1.6 }}>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href="mailto:kusangshrestha@gmail.com"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-primary-foreground hover:brightness-110 transition"
                style={{ fontWeight: 600, fontSize: "1.05rem" }}
              >
                <Mail size={20} />
                Send me an email
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.15}>
              <div className="space-y-3">
                <p className="text-muted-foreground uppercase mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", letterSpacing: "0.15em" }}>
                  Elsewhere
                </p>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition hover:border-primary/40 hover:bg-secondary"
                  >
                    <span style={{ fontWeight: 500 }}>{s.label}</span>
                    <ArrowUpRight size={18} className="text-muted-foreground transition group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
