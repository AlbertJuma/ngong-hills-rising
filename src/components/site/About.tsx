import { motion } from "framer-motion";
import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section id="story" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 relative"
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img src={aboutImg} alt="Worn running shoes on red Kenyan soil" loading="lazy" className="size-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 size-32 border border-primary/60 -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-7"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">About the Foundation</p>
          <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.95] mb-8">
            Built on red soil. <br />
            <span className="text-stroke">Forged in altitude.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Lifters &amp; Rangers Foundation is a grassroots collective rooted in the
            highlands of Ngong, Kenya. We discover, train and protect the next
            generation of African athletes — runners, climbers, fighters,
            dreamers — by giving them the tools, mentorship and platform their
            talent deserves.
          </p>
          <p className="text-lg italic text-foreground/80 border-l-2 border-primary pl-5">
            "Training is more than competition. It is survival, discipline, and self-belief."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
