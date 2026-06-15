import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const values = [
  { title: "Strategy first", body: "Every campaign starts with a clear objective. Creativity without direction is just noise." },
  { title: "Data as a compass", body: "I let analytics tell me what's working and the courage to kill what isn't." },
  { title: "Craft over volume", body: "A handful of well-made things will always outperform a flood of forgettable ones." },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
      <Reveal>
        <SectionLabel index="01">About</SectionLabel>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
              I'm a Kathmandu-based digital manager who treats brand growth as a
              craft, not a checklist.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-6 text-muted-foreground" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              <p>
                I specialize in SEO, digital marketing, WordPress development, and
                data-driven brand growth — but what I really do is help service-based
                and corporate brands in Nepal show up with clarity and confidence.
              </p>
              <p>
                Over the last few years I've led digital departments, executed
                high-ROI campaigns, and built modern content strategies from the
                ground up. Today I manage the entire digital ecosystem of the{" "}
                <span className="text-foreground" style={{ fontWeight: 600 }}>Namaste Nepal Group</span>,
                driving innovative solutions through a balance of creativity and analytics.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 space-y-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={0.1 + i * 0.08}>
              <div className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:bg-secondary">
                <div className="flex items-baseline gap-3">
                  <span className="text-primary" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                    0{i + 1}
                  </span>
                  <h3 style={{ fontWeight: 600, fontSize: "1.15rem" }}>{v.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground" style={{ lineHeight: 1.6 }}>
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
