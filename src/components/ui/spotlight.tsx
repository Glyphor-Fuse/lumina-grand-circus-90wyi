
import { cn } from "@/lib/utils";
import { MotionValue, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent } from "react";

export const Spotlight = ({
  className,
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group/spotlight relative overflow-hidden rounded-xl",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${fill} 0%,
              transparent 80%
            )
          `,
        }}
      />
      {/* Content wrapper */}
      <div className="relative z-10">{/* Children would go here in a slot, but this component is a wrapper overlay usually. 
          Actually, for this specific Aceternity component, it's often used as an overlay *or* a container. 
          I'll adapt it to be a container wrapper in usage. 
      */}</div>
    </div>
  );
};
