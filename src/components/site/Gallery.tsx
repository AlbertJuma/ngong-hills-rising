import { motion } from "framer-motion";
import { useRef, useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import journey from "@/assets/journey.jpg";
import hero from "@/assets/hero-athlete.jpg";
import about from "@/assets/about.jpg";
import caax2 from "@/assets/caaxton-2.jpg";

type Item = { src: string; type: "image" | "video"; alt: string; tall?: boolean };

const initial: Item[] = [
  { src: hero, type: "image", alt: "Athlete sprinting at golden hour", tall: true },
  { src: "/media/hero-video.mp4", type: "video", alt: "Training footage" },
  { src: journey, type: "image", alt: "Sunrise group training" },
  { src: caax2, type: "image", alt: "Choose your pain wisely — Caaxton on the field", tall: true },
  { src: g1, type: "image", alt: "Foundation craftwork", tall: true },
  { src: about, type: "image", alt: "Worn shoes on red soil" },
  { src: g2, type: "image", alt: "Foundation creative work" },
  { src: g3, type: "image", alt: "Foundation creative work" },
];

export function Gallery() {
  const [items, setItems] = useState<Item[]>(initial);
  const inputRef = useRef<HTMLInputElement>(null);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const next = files.map<Item>((f) => ({
      src: URL.createObjectURL(f),
      type: f.type.startsWith("video") ? "video" : "image",
      alt: f.name,
    }));
    setItems((prev) => [...next, ...prev]);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <section id="gallery" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Gallery</p>
            <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.95]">
              Moments <br /><span className="text-stroke">in motion</span>
            </h2>
          </div>
          <div>
            <input
              ref={inputRef}
              id="upload"
              type="file"
              accept="image/*,video/*"
              multiple
              className="hidden"
              onChange={onUpload}
            />
            <label
              htmlFor="upload"
              className="cursor-pointer inline-block px-6 py-3 border border-foreground/40 text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition"
            >
              + Upload photos / videos
            </label>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {items.map((it, i) => (
            <motion.div
              key={`${it.src}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              className="mb-4 break-inside-avoid overflow-hidden bg-card group relative"
            >
              {it.type === "image" ? (
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${it.tall ? "aspect-[3/4]" : "aspect-[4/5]"}`}
                />
              ) : (
                <video
                  src={it.src}
                  className="w-full aspect-video object-cover"
                  muted
                  loop
                  playsInline
                  controls
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs uppercase tracking-widest text-foreground/80">{it.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
