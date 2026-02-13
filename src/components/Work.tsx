const projects = [
  {
    name: "Don",
    description:
      "AI-powered personal finance app. Chat with your financial data, track spending, and get intelligent insights.",
    tags: ["Next.js", "SwiftUI", "PostgreSQL", "Claude API", "Plaid"],
    link: "https://don.financial",
  },
  {
    name: "Client Project — Fintech Dashboard",
    description:
      "Real-time analytics dashboard for a fintech startup. Built from zero to production in 6 weeks.",
    tags: ["React", "Node.js", "WebSockets", "D3.js"],
    link: null,
  },
  {
    name: "Client Project — AI Workflow Tool",
    description:
      "Internal tool automating document review with LLMs. Reduced manual review time by 80%.",
    tags: ["Python", "FastAPI", "React", "OpenAI", "RAG"],
    link: null,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Work
        </h2>
        <p className="text-text-secondary text-center max-w-xl mx-auto mb-16">
          Selected projects I&apos;ve built and shipped.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.name} className="glass-card p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent-hover transition-colors"
                >
                  View project &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
