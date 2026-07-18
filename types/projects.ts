import type { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: readonly string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  preview: StaticImageData;
};

export type ProjectFrontmatter = Omit<Project, "slug" | "preview">;
