"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  CONTAINER_VARIANTS,
  HOVER_TAP_PROPS,
  ITEM_VARIANTS,
} from "@/constants/motion";
import { SITE_AUTHOR_NAME } from "@/constants/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <motion.footer
      className="border-border text-muted-foreground mx-auto flex w-full max-w-3xl flex-col gap-3 border-t px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between"
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.p variants={ITEM_VARIANTS}>
        @{currentYear} {SITE_AUTHOR_NAME}
      </motion.p>

      <motion.div variants={ITEM_VARIANTS} {...HOVER_TAP_PROPS}>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleBackToTop}
          className="w-fit rounded-md font-mono text-xs"
        >
          <ArrowUp className="size-3.5" />
          Back to top
        </Button>
      </motion.div>
    </motion.footer>
  );
}
