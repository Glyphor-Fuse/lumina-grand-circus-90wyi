
import React from 'react';
import { Tent } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background-950 text-foreground-400 py-12 border-t border-border-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
                <Tent className="h-8 w-8 text-primary" />
                <span className="text-2xl font-display font-bold text-foreground">Lumina</span>
            </div>
            <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                <a href="#" className="hover:text-foreground transition-colors">Press</a>
                <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
        </div>
        <div className="text-center md:text-left text-xs text-foreground-600">
            &copy; 2025 Lumina Grand Circus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
