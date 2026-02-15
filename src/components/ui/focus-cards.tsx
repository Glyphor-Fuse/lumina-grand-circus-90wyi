
"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const FocusCards = ({
  cards,
}: {
  cards: {
    title: string;
    description: string;
    src: string;
  }[];
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <div
          key={card.title}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={cn(
            "rounded-lg relative bg-neutral-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
          )}
        >
          <img
            src={card.src}
            alt={card.title}
            className="object-cover absolute inset-0 size-full"
          />
          <div
            className={cn(
              "absolute inset-0 bg-black/50 flex flex-col justify-end py-8 px-4 transition-opacity duration-300",
              hovered === index ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 font-display">
              {card.title}
            </div>
            <p className="text-neutral-300 mt-2 text-sm">{card.description}</p>
          </div>
          {/* Default visible label for mobile or when not hovered (optional, keeping clean for now) */}
          <div className={cn(
              "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300",
               hovered === index ? "opacity-0" : "opacity-100"
          )}>
               <div className="text-xl font-bold text-white font-display">{card.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
