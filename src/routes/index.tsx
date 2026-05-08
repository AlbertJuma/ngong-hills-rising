import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Caaxton } from "@/components/site/Caaxton";
import { Journey } from "@/components/site/Journey";
import { Gallery } from "@/components/site/Gallery";
import { Support } from "@/components/site/Support";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Caaxton />
      <Journey />
      <Gallery />
      <Support />
      <Contact />
    </main>
  );
}
