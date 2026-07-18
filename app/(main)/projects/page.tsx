import { ArrowLeft } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";

import { ProjectBrowser } from "@/components/projects/project-browser";
import { buttonVariants } from "@/components/ui/button";
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "@/constants/motion";
import { getProjects, getProjectTechnologies } from "@/lib/projects";
import type { ProjectsPageProps } from "@/types/pages";

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const projects = await getProjects();
  const technologies = getProjectTechnologies(projects);
  const { tech } = await searchParams;
  const initialTechnology = Array.isArray(tech) ? tech[0] : tech;

  return (
    <>
      <motion.div
        className="py-6"
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={ITEM_VARIANTS}>
          <Link
            href="/"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "mb-6 -ml-2",
            })}
          >
            <ArrowLeft className="size-3.5" />
            Back to home
          </Link>
        </motion.div>
        <motion.h1 className="text-4xl" variants={ITEM_VARIANTS}>
          <b>Projects</b>
        </motion.h1>
      </motion.div>
      <ProjectBrowser
        projects={projects}
        technologies={technologies}
        initialTechnology={initialTechnology}
      />
    </>
  );
}
