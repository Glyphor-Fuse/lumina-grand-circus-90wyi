
import React from 'react';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full">
      <HeroHighlight containerClassName="h-[90vh] bg-background-950">
        <div className="relative z-20 flex flex-col items-center justify-center px-4 max-w-5xl mx-auto text-center">
            
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
             <span className="px-3 py-4 text-sm font-semibold tracking-wider text-foreground-400 uppercase border border-border-500/30 rounded-full bg-background-500/10 backdrop-blur-sm">
                The 2025 World Tour
             </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground-100 max-w-4xl leading-tight font-display"
          >
            Where Magic <br />
            <Highlight className="text-foreground from-primary to-background-600">
              Comes Alive
            </Highlight>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-foreground-300 max-w-2xl mx-auto leading-relaxed"
          >
            Step under the Grand Big Top for an evening of gravity-defying stunts, spectacular artistry, and heart-pounding excitement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground px-8 py-6 text-lg rounded-full font-semibold shadow-[0_0_20px_rgba(220,20,60,0.5)] transition-all hover:scale-105">
              <Star className="mr-2 h-5 w-5" />
              Book Tickets
            </Button>
            <Button variant="outline" size="lg" className="border-border-700 text-foreground-300 hover:bg-background-800 hover:text-foreground px-8 py-6 text-lg rounded-full">
              View Tour Dates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </HeroHighlight>
      
      {/* Decorative gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-30" />
    </section>
  );
}
