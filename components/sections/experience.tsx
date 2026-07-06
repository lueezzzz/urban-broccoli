import { Badge } from "../ui/badge";
import { experiences } from "@/json/experience";

export default function Experience() {
    return (
        <>
            <div className="py-10">
                <h2 className="text-4xl">
                    <b>Experience</b>
                </h2>
            </div>
            <section className="text-foreground mx-auto w-full max-w-3xl px-6 py-4">
                <div className="space-y-12">
                    {experiences.map((experience, index) => (
                        <article
                            key={experience.company}
                            className="grid grid-cols-[48px_1fr] gap-5"
                        >
                            <div className="relative flex justify-center">
                                {index !== experiences.length - 1 && (
                                    <div className="bg-border absolute top-14 bottom-[-3rem] w-px" />
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

                                <div className="mt-6 space-y-8">
                                    {experience.roles.map((role) => (
                                        <div
                                            key={role.title}
                                            className="border-border relative border-l pl-6"
                                        >
                                            <span className="border-border bg-background absolute top-1.5 -left-[5px] size-2 rounded-full border" />

                                            <p className="text-muted-foreground mt-2 text-xs tracking-wide uppercase">
                                                {role.date}
                                            </p>

                                            <div className="text-muted-foreground mt-4 max-w-2xl space-y-4 text-sm leading-7">
                                                {role.description.map(
                                                    (paragraph) => (
                                                        <p key={paragraph}>
                                                            {paragraph}
                                                        </p>
                                                    ),
                                                )}
                                            </div>

                                            {role.skills.length > 0 && (
                                                <div className="mt-5 flex flex-wrap gap-2">
                                                    {role.skills.map(
                                                        (skill) => (
                                                            <Badge
                                                                key={skill}
                                                                variant="outline"
                                                                className="bg-muted/40 text-muted-foreground rounded-md font-mono text-xs"
                                                            >
                                                                {skill}
                                                            </Badge>
                                                        ),
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
