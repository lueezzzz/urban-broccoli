"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { ALL_TECHNOLOGIES } from "@/constants/projects";
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "@/constants/motion";
import { cn } from "@/lib/utils";
import type { ProjectBrowserProps } from "@/types/project-browser";

export function ProjectBrowser({
  projects,
  technologies,
  initialTechnology,
  limit,
  showSeeAll = false,
}: ProjectBrowserProps) {
  const [selectedTechnology, setSelectedTechnology] = useState(
    initialTechnology && technologies.includes(initialTechnology)
      ? initialTechnology
      : ALL_TECHNOLOGIES,
  );

  const filteredProjects = useMemo(() => {
    if (selectedTechnology === ALL_TECHNOLOGIES) {
      return projects;
    }

    return projects.filter((project) =>
      project.technologies.includes(selectedTechnology),
    );
  }, [projects, selectedTechnology]);

  const visibleProjects =
    typeof limit === "number"
      ? filteredProjects.slice(0, limit)
      : filteredProjects;

  const seeAllHref =
    selectedTechnology === ALL_TECHNOLOGIES
      ? "/projects"
      : `/projects?tech=${encodeURIComponent(selectedTechnology)}`;

  return (
    <motion.section
      className="text-foreground w-full py-4"
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div className="flex flex-wrap gap-2" variants={ITEM_VARIANTS}>
        {[ALL_TECHNOLOGIES, ...technologies].map((technology) => {
          const isSelected = selectedTechnology === technology;

          return (
            <Button
              key={technology}
              type="button"
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTechnology(technology)}
              aria-pressed={isSelected}
              className="rounded-md font-mono text-xs"
            >
              {technology}
            </Button>
          );
        })}
      </motion.div>

      <motion.div className="mt-6 grid gap-4 sm:grid-cols-2" layout>
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              key={project.slug}
              layout
              variants={ITEM_VARIANTS}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 8, transition: { duration: 0.18 } }}
              className="border-border bg-card text-card-foreground hover:border-foreground/30 overflow-hidden rounded-lg border shadow-sm transition-colors"
            >
              <div className="bg-muted relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.preview}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 768px) 336px, calc(100vw - 48px)"
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 p-4">
                <div>
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      variant="outline"
                      className="bg-muted/40 text-muted-foreground rounded-md font-mono text-[11px]"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>

                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "sm" }),
                          "px-2",
                        )}
                      >
                        <FaGithub className="size-3.5" />
                        Code
                      </Link>
                    )}

                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "sm" }),
                          "px-2",
                        )}
                      >
                        <ExternalLink className="size-3.5" />
                        Live
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {visibleProjects.length === 0 && (
        <motion.p
          className="text-muted-foreground mt-6 text-sm"
          variants={ITEM_VARIANTS}
          initial="hidden"
          animate="visible"
        >
          No projects match this technology yet.
        </motion.p>
      )}

      {showSeeAll && projects.length > 0 && (
        <motion.div className="mt-6" variants={ITEM_VARIANTS}>
          <Link
            href={seeAllHref}
            className={buttonVariants({ variant: "outline", size: "default" })}
          >
            See all projects
          </Link>
        </motion.div>
      )}
    </motion.section>
  );
}
