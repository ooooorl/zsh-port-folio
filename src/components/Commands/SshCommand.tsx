import { resumeData } from "@/data/resumeData";

const SshCommand = () => {
  return (
    <div className="fade-in space-y-2">
      <div className="text-terminal-text">
        <span className="terminal-prompt">➜</span> Establishing SSH connection...
      </div>
      <div className="text-terminal-text ml-4">
        <span className="terminal-command">ssh</span> {resumeData.name.toLowerCase().replace(/\s+/g, '')}@portfolio
      </div>
      <div className="text-muted-foreground ml-4 mt-3">
        Connection established successfully! ✓
      </div>
      <div className="mt-4 p-4 border border-terminal-border rounded-md bg-muted/30">
        <div className="text-terminal-prompt font-semibold mb-2">📧 Contact Information:</div>
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
      <div className="text-muted-foreground text-sm mt-3">
        Type <span className="terminal-command font-mono">'contact'</span> for more ways to reach out.
      </div>
    </div>
  );
};

export default SshCommand;
