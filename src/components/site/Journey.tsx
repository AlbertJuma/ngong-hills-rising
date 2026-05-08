import { motion } from "framer-motion";
import journeyImg from "@/assets/journey.jpg";

const chapters = [
  { n: "01", t: "The Climb", d: "Before the world hears their names, they rise at 4am to chase the hills." },
  { n: "02", t: "The Brotherhood", d: "Trail by trail, they build something money cannot buy — each other." },
  { n: "03", t: "The Stage", d: "From village tracks to international podiums — same heart, bigger lights." },
];

export function Journey() {
  return (
    <section id="journey" className="relative">
      <div className="relative h-[70svh] overflow-hidden">
        <img src={journeyImg} alt="Group of African athletes training at sunrise" loading="lazy" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display uppercase text-center text-5xl md:text-8xl leading-[0.9] max-w-5xl"
          >
            Every athlete is a <span className="text-primary">story</span> <br /> the world has not heard yet.
          </motion.h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-3 gap-10">
        {chapters.map((c, i) => (
          <motion.div
            key={c.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="border-t border-border pt-8 group"
          >
            <div className="font-display text-primary text-2xl mb-4">{c.n}</div>
            <h3 className="font-display uppercase text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">{c.t}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
