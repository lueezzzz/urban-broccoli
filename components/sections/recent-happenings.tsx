import Image from "next/image";
import * as motion from "motion/react-client";

import { Badge } from "@/components/ui/badge";
import { happenings } from "@/content/json/happenings";
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "@/constants/motion";
import type { Happening } from "@/types/happenings";

function renderSummary(happening: Happening) {
  if (!happening.emphasis || !happening.summary.includes(happening.emphasis)) {
    return happening.summary;
  }

  const [before, after] = happening.summary.split(happening.emphasis);

  return (
    <>
      {before}
      <em>{happening.emphasis}</em>
      {after}
    </>
  );
}

export default function RecentHappenings() {
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
          <b>Recently</b>
        </h2>
      </motion.div>
      <motion.section
        className="text-foreground w-full py-4"
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="space-y-4">
          {happenings.map((happening) => (
            <motion.article
              key={happening.title}
              className="border-border bg-card text-card-foreground hover:border-foreground/30 grid gap-4 rounded-lg border p-3 shadow-sm transition-colors sm:grid-cols-[190px_1fr] sm:items-center"
              variants={ITEM_VARIANTS}
            >
              <div className="bg-muted relative flex aspect-[16/9] min-h-28 items-center justify-center overflow-hidden rounded-md">
                {happening.image ? (
                  <Image
                    src={happening.image}
                    alt={happening.imageAlt ?? happening.title}
                    fill
                    sizes="(min-width: 768px) 190px, calc(100vw - 72px)"
                    className="object-cover"
                  />
                ) : (
                  <div className="border-border bg-background/70 text-muted-foreground flex size-full items-center justify-center border border-dashed font-mono text-sm font-semibold">
                    UPV
                  </div>
                )}
              </div>

              <div className="min-w-0 space-y-3">
                <div>
                  <h3 className="text-base leading-6 font-semibold">
                    {happening.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-6">
                    {renderSummary(happening)}
                  </p>
                  <p className="text-muted-foreground/80 mt-2 text-xs">
                    {happening.meta}
                  </p>
                </div>

                {happening.tags && happening.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {happening.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-muted/40 text-muted-foreground rounded-md font-mono text-[11px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </>
  );
}
