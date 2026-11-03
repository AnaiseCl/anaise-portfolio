import { CardHeader } from "@/components/card-header";
import { Section } from "@/components/section";

const skillGroups = [
  {
    title: "Operations & Leadership",
    skills: ["Team leadership", "Process documentation", "Process improvement"],
  },
  {
    title: "Workplace Tools",
    skills: ["SharePoint", "Excel", "Asana", "Power BI (foundational)"],
  },
  {
    title: "Cybersecurity Foundations",
    skills: [
      "Foundational cybersecurity knowledge",
      "Wireshark (coursework)",
      "Cisco Packet Tracer (coursework)",
    ],
  },
];

const projects = [
  {
    title: "SharePoint Mail Workflow",
    description:
      "A mail workflow built in SharePoint, connected to my work coordinating daily office operations.",
  },
  {
    title: "Power BI Mail-Volume Dashboard",
    description:
      "A practice project building a Power BI dashboard to visualize mail volume.",
  },
  {
    title: "Cybersecurity Coursework",
    description:
      "Coursework completed as part of my bachelor’s degree in cybersecurity at Southern New Hampshire University.",
  },
];

export default function Page() {
  return (
    <main className="min-h-dvh px-4 py-10 md:py-20">
      <article className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-gold/40 bg-card shadow-[0_1px_2px_rgba(43,35,38,0.04),0_12px_32px_-12px_rgba(168,86,107,0.18)]">
        <div className="h-1.5 bg-blush" aria-hidden="true" />
        <div className="px-6 py-10 md:px-12 md:py-14">
          <CardHeader />

          <div className="mt-12 flex flex-col gap-8">
            <Section id="about" title="About Me">
              <div className="flex flex-col gap-4 leading-relaxed text-body">
                <p>
                  I am pursuing my bachelor&apos;s degree in cybersecurity at
                  Southern New Hampshire University.
                </p>
                <p>
                  In my role as an Office Clerk Lead, I help coordinate daily
                  operations, document procedures, and improve workflows.
                </p>
                <p>
                  I&apos;m interested in connecting my organizational and
                  problem-solving skills with a career in technology and
                  cybersecurity.
                </p>
              </div>
            </Section>

            <Section id="skills" title="Skills">
              <div className="flex flex-col gap-6">
                {skillGroups.map((group) => (
                  <div
                    key={group.title}
                    className="flex flex-col gap-3 md:flex-row md:gap-6"
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary md:w-44 md:shrink-0 md:pt-2">
                      {group.title}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-primary/15 bg-secondary px-4 py-1.5 text-sm font-medium text-body"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="projects" title="Projects">
              <ul className="flex flex-col gap-4">
                {projects.map((project) => (
                  <li
                    key={project.title}
                    className="rounded-xl border border-border bg-background/60 p-5 border-l-2 border-l-gold"
                  >
                    <h3 className="font-serif text-xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </article>
    </main>
  );
}
