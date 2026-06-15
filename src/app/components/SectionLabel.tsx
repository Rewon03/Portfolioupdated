export function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="text-primary"
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.1em" }}
      >
        {index}
      </span>
      <span className="h-px w-8 bg-primary/50" />
      <span
        className="text-muted-foreground uppercase"
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.18em" }}
      >
        {children}
      </span>
    </div>
  );
}
