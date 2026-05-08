import { motion } from "framer-motion";
import caaxImg from "@/assets/caaxton.jpg";

export function Caaxton() {
  return (
    <section id="caaxton" className="relative py-32 md:py-44 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 order-2 md:order-1"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Founder · Coach · Mentor</p>
          <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.95] mb-8">
            Meet <br /> Caaxton Sammy
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            A son of the Ngong Hills, Caaxton walked the same dirt paths he now
            trains his athletes on. He founded Lifters &amp; Rangers to break
            the silence around hidden talent — to make sure no young Kenyan
            with fire in their feet is left behind by geography or circumstance.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            His method is simple: show up before the sun, run with them, eat
            with them, fight for them.
          </p>
          <div className="mt-10 flex flex-wrap gap-8 text-sm uppercase tracking-widest">
            <div>
              <div className="font-display text-4xl text-primary">12+</div>
              <div className="text-muted-foreground">Years coaching</div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary">40+</div>
              <div className="text-muted-foreground">Athletes mentored</div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary">∞</div>
              <div className="text-muted-foreground">Belief</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:col-span-5 order-1 md:order-2 relative"
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img src={caaxImg} alt="Caaxton Sammy, founder of Lifters & Rangers Foundation, on the Ngong Hills" loading="lazy" className="size-full object-cover" />
          </div>
          <div className="absolute -top-6 -left-6 size-32 border border-primary/60 -z-0" />
        </motion.div>
      </div>
    </section>
  );
}
