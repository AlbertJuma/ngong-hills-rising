import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
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
  { src: "/media/athlete-2.mp4", type: "video", alt: "Athlete in motion" },
  { src: journey, type: "image", alt: "Sunrise group training" },
  { src: caax2, type: "image", alt: "Choose your pain wisely — Caaxton on the field", tall: true },
  { src: g1, type: "image", alt: "Foundation craftwork", tall: true },
  { src: about, type: "image", alt: "Worn shoes on red soil" },
  { src: g2, type: "image", alt: "Foundation creative work" },
  { src: g3, type: "image", alt: "Foundation creative work" },
];

export function Gallery() {
  const [items, setItems] = useState<Item[]>(initial);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((files: File[]) => {
    const valid = files.filter((f) => f.type.startsWith("image") || f.type.startsWith("video"));
    if (!valid.length) return;
    const next = valid.map<Item>((f) => ({
      src: URL.createObjectURL(f),
      type: f.type.startsWith("video") ? "video" : "image",
      alt: f.name.replace(/\.[^.]+$/, ""),
    }));
    setItems((prev) => [...next, ...prev]);
  }, []);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    addFiles(Array.from(e.target.files ?? []));
    if (inputRef.current) inputRef.current.value = "";
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    addFiles(Array.from(e.dataTransfer.files ?? []));
  };

  return (
    <section id="gallery" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Gallery</p>
            <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.95]">
              Moments <br /><span className="text-stroke">in motion</span>
            </h2>
          </div>
        </div>

        <label
          htmlFor="upload"
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={onDrop}
          className={`mb-10 flex flex-col items-center justify-center text-center cursor-pointer border border-dashed transition px-6 py-10 md:py-14 ${
            dragActive ? "border-primary bg-primary/5" : "border-foreground/25 hover:border-primary/70 hover:bg-foreground/[0.02]"
          }`}
        >
          <input
            ref={inputRef}
            id="upload"
            type="file"
            accept="image/*,video/*"
            multiple
            className="hidden"
            onChange={onUpload}
          />
          <span className="font-display uppercase text-2xl md:text-3xl tracking-wide">
            Drop photos or videos
          </span>
          <span className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
            or click to browse — JPG, PNG, MP4, MOV
          </span>
          <span className="mt-4 inline-block px-5 py-2 border border-primary text-primary text-xs uppercase tracking-widest">
            + Add to gallery
          </span>
        </label>

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
