import { resumeData } from "@/data/resumeData";

const SshCommand = () => {
  return (
    <div className="fade-in space-y-3">
      <div className="text-terminal-text">
        <span className="terminal-prompt">➜</span> Establishing SSH connection...
      </div>
      <div className="text-terminal-text ml-4">
        <span className="terminal-command">ssh -i ~/.ssh/personal developer@127.0.0.1</span>
      </div>
      <div className="text-muted-foreground ml-4 mt-3">
        Connection established successfully! ✓
      </div>

      {/* About Section */}
      <div className="mt-4 p-4 border border-terminal-border rounded-md bg-muted/30">
        <div className="text-terminal-prompt font-semibold mb-2">👤 About Me</div>
        <div className="space-y-2 text-sm">
          {resumeData.about.map((paragraph, index) => (
            <p key={index} className="text-terminal-text">{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="p-4 border border-terminal-border rounded-md bg-muted/30">
        <div className="text-terminal-prompt font-semibold mb-2">🛠️ Skills</div>
        <div className="space-y-3 text-sm">
          {resumeData.skills.map((skillGroup, index) => (
            <div key={index}>
              <div className="text-terminal-command font-semibold mb-1">{skillGroup.category}</div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 bg-muted rounded text-xs text-terminal-text border border-terminal-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="p-4 border border-terminal-border rounded-md bg-muted/30">
        <div className="text-terminal-prompt font-semibold mb-2">💼 Work Experience</div>
        <div className="space-y-3 text-sm">
          {resumeData.experience.map((job, index) => (
            <div key={index} className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div className="text-terminal-command font-semibold">{job.title}</div>
                <div className="text-xs text-muted-foreground">{job.period}</div>
              </div>
              <div className="text-terminal-text font-medium">{job.company}</div>
              <ul className="space-y-1 mt-1">
                {job.description.map((desc, descIndex) => (
                  <li key={descIndex} className="flex gap-2 text-muted-foreground text-xs">
                    <span>•</span>
                    <span className="flex-1">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="p-4 border border-terminal-border rounded-md bg-muted/30">
        <div className="text-terminal-prompt font-semibold mb-2">🚀 Projects</div>
        <div className="space-y-3 text-sm">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="space-y-1">
              <div className="text-terminal-command font-semibold">{project.name}</div>
              <p className="text-terminal-text text-xs">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground border border-terminal-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="p-4 border border-terminal-border rounded-md bg-muted/30">
        <div className="text-terminal-prompt font-semibold mb-2">📧 Contact Information</div>
        <div className="space-y-1 text-sm">
          <div className="flex gap-2">
            <span className="text-muted-foreground">Email:</span>
            <span className="text-terminal-text">{resumeData.email}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground">GitHub:</span>
            <span className="text-terminal-text">{resumeData.github}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground">LinkedIn:</span>
            <span className="text-terminal-text">{resumeData.linkedin}</span>
          </div>
          {resumeData.website && (
            <div className="flex gap-2">
              <span className="text-muted-foreground">Website:</span>
              <span className="text-terminal-text">{resumeData.website}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SshCommand;
