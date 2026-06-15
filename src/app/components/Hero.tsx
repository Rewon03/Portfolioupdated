import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute top-1/3 -left-20 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-24 lg:pt-52 lg:pb-32">
        <div className="max-w-5xl pt-2">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontWeight: 800, fontSize: "clamp(2.6rem, 8vw, 6.5rem)", lineHeight: 0.98 }}
          >
            I build brands that
            <br />
            <span className="text-muted-foreground">people actually </span>
            <span className="text-primary">remember.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl text-muted-foreground"
            style={{ fontSize: "clamp(1.05rem, 2vw, 1.3rem)", lineHeight: 1.6 }}
          >
            I'm <span className="text-foreground" style={{ fontWeight: 600 }}>Rewon Shrestha</span> —
            a Digital Manager & Creative Strategist turning strategy, creativity, and
            data into measurable brand growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-primary-foreground hover:brightness-110 transition"
              style={{ fontWeight: 600 }}
            >
              View selected work
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-4 text-foreground hover:bg-card transition"
              style={{ fontWeight: 600 }}
            >
              Read my story
            </a>
          </motion.div>
        </div>

        {/* stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border"
        >
          {[
            { k: "3+", v: "Years of experience" },
            { k: "100+", v: "Monthly orders generated" },
            { k: "5+", v: "Brands transformed" },
            { k: "∞", v: "Ideas in motion" },
          ].map((s) => (
            <div key={s.v} className="bg-background px-6 py-7">
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.8rem,4vw,2.6rem)" }}>
                {s.k}
              </div>
              <div className="text-muted-foreground mt-1" style={{ fontSize: "0.9rem" }}>
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 flex items-center gap-3 text-muted-foreground">
          <ArrowDown size={16} className="animate-bounce" />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>
    </section>
  );
}
