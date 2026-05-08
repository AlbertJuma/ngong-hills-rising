import { motion } from "framer-motion";

const ways = [
  { t: "Sponsor an Athlete", d: "Cover monthly training, gear and nutrition for one young runner." },
  { t: "Donate Equipment", d: "Shoes, watches, kits — every piece extends a career by months." },
  { t: "Partner With Us", d: "Brands, federations, NGOs — let's build the pipeline together." },
];

export function Support() {
  return (
    <section id="support" className="relative py-32 md:py-44 bg-card overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Support &amp; Collaboration</p>
          <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.95] mb-8">
            Stand on <br /><span className="text-primary">the start line</span> with us.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Every contribution becomes a kilometre run, a meal earned, a dream
            kept alive. There is no small support — only the courage to give.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {ways.map((w, i) => (
            <motion.div
              key={w.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-border p-8 hover:border-primary transition-colors group"
            >
              <div className="text-primary font-display text-2xl mb-6">0{i + 1}</div>
              <h3 className="font-display uppercase text-2xl mb-4 group-hover:text-primary transition">{w.t}</h3>
              <p className="text-muted-foreground">{w.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <a href="mailto:ccaxtomar@gmail.com" className="px-8 py-4 gradient-ember text-primary-foreground text-sm uppercase tracking-widest font-semibold">
            Become a Partner
          </a>
          <a href="#contact" className="px-8 py-4 border border-foreground/40 text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition">
            Talk to Caaxton
          </a>
        </div>
      </div>
    </section>
  );
}
