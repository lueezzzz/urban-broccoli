import type { Project } from "@/types/projects";

export type ProjectBrowserProps = {
  projects: readonly Project[];
  technologies: readonly string[];
  initialTechnology?: string;
  limit?: number;
  showSeeAll?: boolean;
};
