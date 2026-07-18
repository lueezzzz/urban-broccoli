"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { motion } from "motion/react";
import { type MouseEvent } from "react";
import { flushSync } from "react-dom";
import {
  CONTAINER_VARIANTS,
  HOVER_TAP_PROPS,
  ITEM_VARIANTS,
} from "@/constants/motion";
import type { ThemeMode, ViewTransitionDocument } from "@/types/topbar";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

export default function TopBar() {
  const currentYear = new Date().getFullYear();
  const { setTheme } = useTheme();

  function getResolvedTheme(theme: ThemeMode) {
    if (theme !== "system") {
      return theme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyThemeClass(theme: ThemeMode) {
    const resolvedTheme = getResolvedTheme(theme);
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
    root.style.colorScheme = resolvedTheme;
  }

  function handleThemeChange(
    theme: ThemeMode,
    event: MouseEvent<HTMLButtonElement>,
  ) {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const viewTransitionDocument = document as ViewTransitionDocument;

    if (!viewTransitionDocument.startViewTransition || reducedMotion) {
      setTheme(theme);
      applyThemeClass(theme);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = viewTransitionDocument.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme);
        applyThemeClass(theme);
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 520,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        } as KeyframeAnimationOptions & { pseudoElement: string },
      );
    });
  }

  return (
    <>
      <motion.div
        className="flex w-full justify-between"
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={ITEM_VARIANTS}>
          <h1 className="">
            <b>Full Stack Developer</b>
          </h1>
          <h2 className="flex items-center gap-2">
            <span
              className="size-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20"
              aria-hidden="true"
            />
            {currentYear} Open to work
            <span className="sr-only">Online</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex items-center gap-2"
          variants={ITEM_VARIANTS}
        >
          <motion.div {...HOVER_TAP_PROPS}>
            <Button
              variant="outline"
              size="icon"
              aria-label="Light mode"
              onClick={(event) => handleThemeChange("light", event)}
            >
              <Sun className="h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div {...HOVER_TAP_PROPS}>
            <Button
              variant="outline"
              size="icon"
              aria-label="Dark mode"
              onClick={(event) => handleThemeChange("dark", event)}
            >
              <Moon className="h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div {...HOVER_TAP_PROPS}>
            <Button
              variant="outline"
              size="icon"
              aria-label="System mode"
              onClick={(event) => handleThemeChange("system", event)}
            >
              <Monitor className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
