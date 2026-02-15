
import React from 'react';
import { FocusCards } from '@/components/ui/focus-cards';

export default function Performers() {
  const cards = [
    {
      title: "The Aether Aerialists",
      description: "High-flying defying gravity with elegance and danger.",
      src: "/images/performer-aerial.jpg",
    },
    {
      title: "Ignis the Firebreather",
      description: "Taming the wildest flames in a spectacular display of heat.",
      src: "/images/performer-fire.jpg",
    },
    {
      title: "The Silent Mime Troupe",
      description: "Comedy without words that speaks to the soul.",
      src: "/images/performer-clown.jpg",
    },
    {
        title: "Madame Fortune",
        description: "Gazing into the crystal ball of tomorrow.",
        src: "/images/performer-fortune.jpg",
    },
    {
        title: "Atlas & The Titans",
        description: "Feats of strength that will leave you breathless.",
        src: "/images/performer-strongman.jpg",
    },
    {
        title: "The Velocity Brothers",
        description: "Precision juggling at breakneck speeds.",
        src: "/images/performer-juggler.jpg",
    },
  ];

  return (
    <section className="py-24 bg-background-950 text-foreground-100" id="acts">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Star Performers</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold mt-2 text-foreground">Meet the Legends</h2>
                <p className="text-foreground-400 mt-4 text-lg">
                    Our troupe comprises the world's most talented artists, gathered from the four corners of the globe to bring you the impossible.
                </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-background-800 mx-8 mb-4" />
        </div>
        
        <FocusCards cards={cards} />
      </div>
    </section>
  );
}
