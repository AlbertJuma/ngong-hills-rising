export function Marquee() {
  const words = ["Discipline", "Survival", "Self-Belief", "Ngong Hills", "Kenya", "Rise"];
  const row = [...words, ...words, ...words];
  return (
    <div className="relative border-y border-border py-6 overflow-hidden bg-card">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="font-display uppercase text-3xl md:text-5xl text-foreground/80">
            {w} <span className="text-primary mx-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
