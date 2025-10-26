import { resumeData } from "@/data/resumeData";

const AboutCommand = () => {
  return (
    <div className="space-y-3 fade-in">
      <div className="terminal-prompt font-bold text-lg mb-4">About Me</div>
      <div className="flex items-center gap-2 mb-2">
        <div className="text-2xl font-bold terminal-prompt">{resumeData.name}</div>
      </div>
      <div className="text-muted-foreground mb-2">{resumeData.title}</div>
      <div className="text-sm text-muted-foreground mb-4">📍 {resumeData.location}</div>
      
      <div className="space-y-2 mt-4">
        {resumeData.about.map((paragraph, index) => (
          <p key={index} className="text-terminal-text leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-6 space-y-1 text-sm">
        <div className="flex items-center gap-2">
          <span className="terminal-prompt">→</span>
          <span className="text-muted-foreground">Email:</span>
          <a href={`mailto:${resumeData.email}`} className="terminal-command hover:underline">
            {resumeData.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="terminal-prompt">→</span>
          <span className="text-muted-foreground">GitHub:</span>
          <a 
            href={`https://${resumeData.github}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="terminal-command hover:underline"
          >
            {resumeData.github}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="terminal-prompt">→</span>
          <span className="text-muted-foreground">LinkedIn:</span>
          <a 
            href={`https://${resumeData.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="terminal-command hover:underline"
          >
            {resumeData.linkedin}
          </a>
        </div>
        {resumeData.website && (
          <div className="flex items-center gap-2">
            <span className="terminal-prompt">→</span>
            <span className="text-muted-foreground">Website:</span>
            <a 
              href={`https://${resumeData.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="terminal-command hover:underline"
            >
              {resumeData.website}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutCommand;
