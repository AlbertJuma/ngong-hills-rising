import { motion } from "framer-motion";
import heroImg from "@/assets/hero-athlete.jpg";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden grain">
      <video
        className="absolute inset-0 size-full object-cover opacity-60"
        src="/media/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster={heroImg}
      />
      <img
        src={heroImg}
        alt="Young Kenyan athlete sprinting through the Ngong Hills at golden hour"
        className="absolute inset-0 size-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 lg:px-10 flex flex-col justify-end pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-6"
        >
          Lifters &amp; Rangers Foundation · Ngong Hills, Kenya
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="font-display uppercase text-[15vw] md:text-[9vw] leading-[0.9] max-w-6xl"
        >
          From Ngong Hills <br />
          <span className="text-stroke">to the World</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground"
        >
          We believe talent exists everywhere. Opportunity does not.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#story"
            className="px-6 py-3 gradient-ember text-primary-foreground text-sm uppercase tracking-widest font-semibold hover:opacity-90 transition"
          >
            Our Story
          </a>
          <a
            href="#support"
            className="px-6 py-3 border border-foreground/40 text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition"
          >
            Stand With Us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground"
      >
        Scroll
      </motion.div>
    </section>
  );
}
