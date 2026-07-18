export type ThemeMode = "light" | "dark" | "system";

export type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    ready: Promise<void>;
  };
};
