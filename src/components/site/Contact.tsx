import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const items = [
  { Icon: MapPin, label: "Based in", value: "Ngong Hills, Kenya" },
  { Icon: Mail, label: "Email", value: "ccaxtomar@gmail.com", href: "mailto:ccaxtomar@gmail.com" },
  { Icon: Phone, label: "Call", value: "+254 733 731 366", href: "tel:+254733731366" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Contact</p>
          <h2 className="font-display uppercase text-6xl md:text-8xl leading-[0.9] mb-12">
            Let's build <br />the next <span className="text-primary">champion.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 border-t border-border pt-12">
          {items.map(({ Icon, label, value, href }, i) => {
            const inner = (
              <div className="flex items-start gap-4 p-6 border border-border hover:border-primary transition group h-full">
                <Icon className="size-6 text-primary mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</div>
                  <div className="text-lg md:text-xl font-display group-hover:text-primary transition">{value}</div>
                </div>
              </div>
            );
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {href ? <a href={href}>{inner}</a> : inner}
              </motion.div>
            );
          })}
        </div>

        <footer className="mt-24 pt-10 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-widest text-muted-foreground">
          <span>© {new Date().getFullYear()} Lifters &amp; Rangers Foundation</span>
          <span>Ngong Hills · Kenya · The World</span>
        </footer>
      </div>
    </section>
  );
}
