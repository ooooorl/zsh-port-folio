import { ArrowSquareOut, GithubLogo } from "phosphor-react";
import { resumeData } from "@/data/resumeData";

const ProjectsCommand = () => {
  return (
    <div className="space-y-6 fade-in">
      <div className="terminal-prompt font-bold text-lg mb-4">Projects</div>
      
      {resumeData.projects.map((project, index) => (
        <div key={index} className="space-y-2 border-l-2 border-terminal-command pl-4">
          <div className="flex items-center gap-2">
            <div className="terminal-command font-semibold text-base">{project.name}</div>
          </div>
          
          <p className="text-terminal-text text-sm">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground border border-terminal-border"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4 mt-3 text-sm">
            {project.link && (
              <a 
                href={`https://${project.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 terminal-command hover:underline"
              >
                <ArrowSquareOut size={16} />
                <span>Live Demo</span>
              </a>
            )}
            {project.github && (
              <a 
                href={`https://${project.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 terminal-command hover:underline"
              >
                <GithubLogo size={16} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCommand;
