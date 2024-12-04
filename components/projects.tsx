import { Code } from 'npm:lucide-preact';

const Projects = () => {
  const projects = [
    {
      title: "quilt-anarchy",
      description: "modern, next-generation minecraft anarchy server made for turkish players.",
      tech: ["mysql", "kotlin", "typescript"],
      github: "https://github.com/0x15d3v2/quilt-monorepo",
      live: "https://www.quiltanarchy.xyz"
    },
    {
      title: "e-commerce",
      description: "my first serverless e-commerce website that i made for a 2b2t kit shop",
      tech: ["tailwind.css", "react", "firebase"],
      github: "https://github.com/0x15d3v2/2b2t-shop-frontend",
      live: "https://shopt2b2t.com/"
    },
    {
      title: "cobblestone-afk",
      description: "afk bots on minecraft that running on cloud",
      tech: ["react.js", "firebase", "homelab"],
      github: "nononono",
      live: "www.cobblestone.com.tr"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-mono mb-12">
          <span className="text-purple-600">&gt; </span>
          projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Code className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-mono text-lg mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.github} className="text-gray-600 hover:text-purple-600 flex items-center">
                  <span className="text-sm">code</span>
                </a>
                <a href={project.live} className="text-gray-600 hover:text-purple-600 flex items-center">
                  <span className="text-sm">demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
