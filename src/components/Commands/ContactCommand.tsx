import { Envelope, GithubLogo, LinkedinLogo, Globe } from "phosphor-react";
import { resumeData } from "@/data/resumeData";

const ContactCommand = () => {
  return (
    <div className="space-y-4 fade-in">
      <div className="terminal-prompt font-bold text-lg mb-4">Let's Connect!</div>
      
      <p className="text-terminal-text mb-4">
        Feel free to reach out through any of these channels:
      </p>

      <div className="space-y-3">
        <a 
          href={`mailto:${resumeData.email}`}
          className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
        >
          <Envelope size={24} className="terminal-prompt group-hover:scale-110 transition-transform" />
          <div>
            <div className="text-sm text-muted-foreground">Email</div>
            <div className="terminal-command">{resumeData.email}</div>
          </div>
        </a>

        <a 
          href={`https://${resumeData.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
        >
          <GithubLogo size={24} className="terminal-prompt group-hover:scale-110 transition-transform" />
          <div>
            <div className="text-sm text-muted-foreground">GitHub</div>
            <div className="terminal-command">{resumeData.github}</div>
          </div>
        </a>

        <a 
          href={`https://${resumeData.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
        >
          <LinkedinLogo size={24} className="terminal-prompt group-hover:scale-110 transition-transform" />
          <div>
            <div className="text-sm text-muted-foreground">LinkedIn</div>
            <div className="terminal-command">{resumeData.linkedin}</div>
          </div>
        </a>

        {resumeData.website && (
          <a 
            href={`https://${resumeData.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
          >
            <Globe size={24} className="terminal-prompt group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-sm text-muted-foreground">Website</div>
              <div className="terminal-command">{resumeData.website}</div>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactCommand;
