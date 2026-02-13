const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Swift",
  "SwiftUI",
  "React Native",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Python",
  "Claude API",
  "OpenAI",
  "Vercel",
  "AWS",
  "Docker",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          About
        </h2>

        <div className="glass-card p-8 sm:p-12">
          <p className="text-lg text-text-secondary leading-relaxed mb-4">
            I&apos;m Andy — a software engineer who loves building products from
            the ground up. I&apos;ve worked across the stack from databases to
            design systems, shipped iOS apps and web platforms, and integrated AI
            into real products.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Vector Point is my solo practice. I partner with startups, founders,
            and teams who need high-quality engineering without the overhead.
            Whether it&apos;s a greenfield build or shipping features on an
            existing product, I bring the same standard: clean code, fast
            iteration, and real results.
          </p>

          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-text-secondary hover:text-text hover:border-accent/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
