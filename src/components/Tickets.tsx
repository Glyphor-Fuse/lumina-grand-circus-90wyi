
import React from 'react';
import { Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Pricing() {
  const tiers = [
    {
      name: "Grandstand",
      price: "$35",
      description: "Great views from the tiered seating area. Perfect for families.",
      features: ["Standard Seating", "Access to Concessions", "Digital Program"],
      cta: "Select Seats",
      popular: false,
    },
    {
      name: "Ringside VIP",
      price: "$85",
      description: "Feel the heat of the fire. The closest you can get to the action.",
      features: ["Front Row Seats", "VIP Lounge Access", "Meet & Greet (Post-show)", "Souvenir Photo", "Complimentary Popcorn"],
      cta: "Get VIP Access",
      popular: true,
    },
    {
      name: "Royal Box",
      price: "$150",
      description: "Private booth experience with luxury service and exclusive perks.",
      features: ["Private Box (Up to 4)", "Champagne Service", "Backstage Tour", "Dedicated Host", "Exclusive Merchandise"],
      cta: "Reserve Box",
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background-50 dark:bg-background-900" id="tickets">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Choose Your Experience</h2>
            <p className="text-muted-foreground text-lg">From the edge of your seat to the lap of luxury.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier) => (
                <Card 
                    key={tier.name} 
                    className={`relative flex flex-col border-2 ${tier.popular ? 'border-primary shadow-2xl scale-105 z-10' : 'border-border-200 dark:border-border-800 hover:border-border-300 dark:hover:border-border-700'} transition-all`}
                >
                    {tier.popular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-foreground text-xs font-bold uppercase py-4 px-3 rounded-full shadow-md tracking-wider">
                            Most Popular
                        </div>
                    )}
                    <CardHeader>
                        <CardTitle className="text-2xl font-display">{tier.name}</CardTitle>
                        <div className="mt-2 flex items-baseline gap-1">
                            <span className="text-4xl font-bold">{tier.price}</span>
                            <span className="text-muted-foreground">/ticket</span>
                        </div>
                        <CardDescription className="mt-2 text-base">{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <ul className="space-y-3 mt-4">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex items-center text-sm">
                                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90 text-foreground' : ''}`} variant={tier.popular ? "default" : "outline"}>
                            {tier.cta}
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
