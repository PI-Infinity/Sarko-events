"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const SmoothScrollWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // ოდნავ შენელებული, მაგრამ არა inertia-იანი
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
