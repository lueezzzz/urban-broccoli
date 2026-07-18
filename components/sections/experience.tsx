import * as motion from "motion/react-client";

import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "@/constants/motion";
import { Badge } from "../ui/badge";
import { experiences } from "@/content/json/experience";

export default function Experience() {
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
          <b>Experience</b>
        </h2>
      </motion.div>
      <motion.section
        className="text-foreground mx-auto w-full max-w-3xl px-6 py-4"
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              className="grid grid-cols-[48px_1fr] gap-5"
              variants={ITEM_VARIANTS}
            >
              <div className="relative flex justify-center">
                {index !== experiences.length - 1 && (
                  <div className="bg-border absolute top-14 bottom-12 w-px" />
                )}

                <div className="bg-card text-card-foreground border-border z-10 flex size-12 items-center justify-center rounded-xl border text-xs shadow-sm">
                  {experience.logo}
                </div>
              </div>

              <div>
                <h3 className="text-foreground text-base font-semibold">
                  {experience.company}
                </h3>

                <p className="text-muted-foreground mt-1 text-sm">
                  {experience.type}
                </p>

                {experience.location && (
                  <p className="text-muted-foreground/80 mt-1 text-xs">
                    {experience.location}
                  </p>
                )}

                <div className="mt-4 space-y-6">
                  {experience.roles.map((role) => (
                    <div
                      key={role.title}
                      className="border-border relative border-l pl-6"
                    >
                      <span className="border-border bg-background absolute top-1.5 -left-[5px] size-2 rounded-full border" />

                      <p className="text-muted-foreground mt-2 text-xs tracking-wide uppercase">
                        {role.date}
                      </p>

                      <div className="text-muted-foreground mt-3 space-y-2 text-sm leading-6">
                        {role.description.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      {role.skills.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {role.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="bg-muted/40 text-muted-foreground rounded-md px-2 py-0.5 font-mono text-xs text-[11px]"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </>
  );
}
