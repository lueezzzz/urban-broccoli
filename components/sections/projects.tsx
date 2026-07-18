import * as motion from "motion/react-client";

import { ProjectBrowser } from "@/components/projects/project-browser";
import { ITEM_VARIANTS } from "@/constants/motion";
import { getProjects, getProjectTechnologies } from "@/lib/projects";

export default async function Projects() {
  const projects = await getProjects();
  const technologies = getProjectTechnologies(projects);

  return (
    <>
      <motion.div
        className="py-6"
        variants={ITEM_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="text-4xl">
          <b>Projects</b>
        </h2>
      </motion.div>
      <ProjectBrowser
        projects={projects}
        technologies={technologies}
        limit={4}
        showSeeAll
      />
    </>
  );
}
