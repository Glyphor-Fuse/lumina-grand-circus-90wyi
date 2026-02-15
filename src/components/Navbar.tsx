
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tent } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg text-foreground">
                <Tent className="h-5 w-5" />
            </div>
            <span className={cn(
                "font-display font-bold text-xl tracking-tight transition-colors",
                scrolled ? "text-foreground" : "text-foreground"
            )}>
                Lumina
            </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
            {['Tour', 'Acts', 'Tickets', 'FAQ'].map((item) => (
                <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        scrolled ? "text-muted-foreground" : "text-foreground-300"
                    )}
                >
                    {item}
                </a>
            ))}
        </div>

        <Button size="sm" className="bg-primary text-foreground hover:bg-primary/90 rounded-full px-6 font-semibold shadow-lg shadow-primary/20">
            Buy Tickets
        </Button>
      </div>
    </nav>
  );
}
