import type { Variants } from "motion/react";

export const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: "easeOut",
    },
  },
};

export const HOVER_TAP_PROPS = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.96 },
};
