
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-24 bg-background dark:bg-background text-foreground" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">Safety & Information</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-semibold">Is the show suitable for young children?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutely! Lumina Grand Circus is designed for all ages. We do have some loud music and flashing lights, so we recommend ear protection for infants.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-semibold">What is the refund policy?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Tickets are non-refundable but can be exchanged for a different date up to 48 hours before showtime, subject to availability.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-semibold">How long is the performance?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              The show runs approximately 2 hours and 15 minutes, including a 20-minute intermission.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-semibold">Are there strobe lights used?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, strobe lights and atmospheric fog are used during the performance. Please consult our staff if you have specific sensitivities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-semibold">Is the Big Top climate controlled?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, our modern Big Top is fully air-conditioned in summer and heated in winter to ensure comfort year-round.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
