import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import { PROJECTS_DIRECTORY } from "@/constants/project-paths";
import type { Project, ProjectFrontmatter } from "@/types/projects";

function parseScalar(value: string) {
  const trimmed = value.trim();

  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  return trimmed.replace(/^["']|["']$/g, "");
}

function parseProjectFrontmatter(source: string): ProjectFrontmatter {
  const match = source.match(/^---\n([\s\S]*?)\n---/);

  if (!match) {
    throw new Error("Project MDX file is missing frontmatter.");
  }

  const frontmatter: Record<string, unknown> = {};
  let activeArrayKey: string | null = null;

  for (const line of match[1].split("\n")) {
    const trimmed = line.trim();

    if (!trimmed) {
      continue;
    }

    if (activeArrayKey && trimmed.startsWith("- ")) {
      const currentValue = frontmatter[activeArrayKey];
      const nextValue = parseScalar(trimmed.slice(2));

      frontmatter[activeArrayKey] = Array.isArray(currentValue)
        ? [...currentValue, nextValue]
        : [nextValue];
      continue;
    }

    activeArrayKey = null;

    const [key, ...valueParts] = trimmed.split(":");
    const value = valueParts.join(":").trim();

    if (!key || valueParts.length === 0) {
      continue;
    }

    if (!value) {
      frontmatter[key] = [];
      activeArrayKey = key;
      continue;
    }

    frontmatter[key] = parseScalar(value);
  }

  if (
    typeof frontmatter.title !== "string" ||
    typeof frontmatter.description !== "string" ||
    !Array.isArray(frontmatter.technologies)
  ) {
    throw new Error("Project MDX frontmatter has invalid required fields.");
  }

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    technologies: frontmatter.technologies.filter(
      (technology): technology is string => typeof technology === "string",
    ),
    githubUrl:
      typeof frontmatter.githubUrl === "string"
        ? frontmatter.githubUrl
        : undefined,
    liveUrl:
      typeof frontmatter.liveUrl === "string" ? frontmatter.liveUrl : undefined,
    featured:
      typeof frontmatter.featured === "boolean" ? frontmatter.featured : false,
  };
}

export async function getProjects(): Promise<Project[]> {
  const entries = await readdir(PROJECTS_DIRECTORY, { withFileTypes: true });
  const projectSlugs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const projects = await Promise.all(
    projectSlugs.map(async (slug) => {
      const source = await readFile(
        path.join(PROJECTS_DIRECTORY, slug, "index.mdx"),
        "utf8",
      );
      const metadata = parseProjectFrontmatter(source);
      const preview = await import(`@/content/projects/${slug}/preview.png`);

      return {
        slug,
        ...metadata,
        preview: preview.default,
      };
    }),
  );

  return projects.sort((first, second) => {
    if (first.featured === second.featured) {
      return first.title.localeCompare(second.title);
    }

    return first.featured ? -1 : 1;
  });
}

export function getProjectTechnologies(projects: readonly Project[]) {
  return Array.from(
    new Set(projects.flatMap((project) => project.technologies)),
  ).sort((first, second) => first.localeCompare(second));
}
