import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, payments, and admin dashboard.",
      image: project1,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time data visualization dashboard with machine learning insights.",
      image: project2,
      tech: ["Next.js", "Python", "TensorFlow", "D3.js"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Social Media App",
      description: "Modern social networking platform with real-time messaging and stories.",
      image: project3,
      tech: ["React Native", "Firebase", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Real Estate Marketplace",
      description: "Property listing platform with advanced search and map integration.",
      image: project4,
      tech: ["Vue.js", "Django", "PostgreSQL", "Mapbox"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Fitness Tracker",
      description: "Health and fitness tracking app with workout plans and progress analytics.",
      image: project5,
      tech: ["Flutter", "Node.js", "GraphQL", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Learning Management System",
      description: "Online education platform with video courses and interactive quizzes.",
      image: project6,
      tech: ["React", "Express", "PostgreSQL", "AWS S3"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Github className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
