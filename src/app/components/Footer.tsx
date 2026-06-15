export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>
          © 2026 Rewon Shrestha. All rights reserved.
        </p>
        <p className="text-muted-foreground" style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
          Designed with intent · Kathmandu
        </p>
      </div>
    </footer>
  );
}
