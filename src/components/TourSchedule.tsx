
import { useRef, useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

// Simplified Spotlight for specific card usage to avoid conflicts
const CardSpotlight = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border-200 dark:border-border-800 bg-background-100 dark:bg-background-900 shadow-sm",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,183,3,0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// Countdown Timer Hook
const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        setTimeLeft({ days, hours, minutes });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

const TourCard = ({ city, date, venue, status }: { city: string; date: string; venue: string; status: "Selling Fast" | "Sold Out" | "Available" }) => {
    // Mock target date for countdown (random future date)
    const target = new Date();
    target.setDate(target.getDate() + Math.floor(Math.random() * 30) + 1);
    const timeLeft = useCountdown(target);

    return (
        <CardSpotlight className="group h-full flex flex-col justify-between p-6 hover:border-primary/50 transition-colors duration-500 bg-background dark:bg-background-900">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-sm text-foreground-500 uppercase tracking-widest">{date}</span>
                    <span className={cn(
                        "px-2 py-0.5 text-xs font-bold uppercase tracking-wider rounded-sm",
                        status === "Selling Fast" && "bg-background-100 text-foreground-700",
                        status === "Sold Out" && "bg-background-100 text-foreground-500",
                        status === "Available" && "bg-background-100 text-foreground-700"
                    )}>
                        {status}
                    </span>
                </div>
                <h3 className="text-3xl font-display font-bold text-foreground-900 dark:text-foreground-100 group-hover:text-primary transition-colors">{city}</h3>
                <p className="text-foreground-600 dark:text-foreground-400 mt-1">{venue}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-border-100 dark:border-border-800 opacity-60 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-y-0 translate-y-2">
                <p className="text-xs font-semibold uppercase text-primary mb-2 tracking-widest">Next Curtain Call</p>
                <div className="flex gap-4 font-mono text-lg">
                    <div className="flex flex-col items-center">
                        <span className="font-bold">{timeLeft.days}</span>
                        <span className="text-[10px] text-foreground-400">DAYS</span>
                    </div>
                    <span>:</span>
                    <div className="flex flex-col items-center">
                        <span className="font-bold">{timeLeft.hours}</span>
                        <span className="text-[10px] text-foreground-400">HRS</span>
                    </div>
                    <span>:</span>
                    <div className="flex flex-col items-center">
                        <span className="font-bold">{timeLeft.minutes}</span>
                        <span className="text-[10px] text-foreground-400">MINS</span>
                    </div>
                </div>
                <button className="mt-4 w-full py-2 bg-background-900 dark:bg-background-100 text-foreground dark:text-foreground-900 rounded font-medium text-sm hover:opacity-90 transition-opacity">
                    Select Seats
                </button>
            </div>
        </CardSpotlight>
    )
}

export default function TourSchedule() {
  const dates = [
    { city: "New York", date: "Oct 12 - Oct 24", venue: "Central Park Big Top", status: "Selling Fast" as const },
    { city: "Chicago", date: "Nov 01 - Nov 14", venue: "Grant Park Arena", status: "Available" as const },
    { city: "Austin", date: "Nov 20 - Dec 02", venue: "Circuit of the Americas", status: "Sold Out" as const },
    { city: "Los Angeles", date: "Dec 10 - Jan 05", venue: "Santa Monica Pier", status: "Selling Fast" as const },
    { city: "Seattle", date: "Jan 12 - Jan 24", venue: "Seattle Center", status: "Available" as const },
    { city: "Miami", date: "Feb 01 - Feb 14", venue: "Bayfront Park", status: "Available" as const },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="tour">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-background-300 dark:via-background-700 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Tour Schedule</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The grand caravan is moving. Hover over your city to see when the magic arrives.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dates.map((item, idx) => (
                <TourCard key={idx} {...item} />
            ))}
        </div>
      </div>
    </section>
  );
}
