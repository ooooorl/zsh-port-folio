const HelpCommand = () => {
  const commands = [
    { name: "about", description: "Learn more about me" },
    { name: "skills", description: "View my technical skills" },
    { name: "experience", description: "See my work experience" },
    { name: "education", description: "View my educational background" },
    { name: "projects", description: "Check out my projects" },
    { name: "contact", description: "Get in touch with me" },
    { name: "ssh", description: "SSH connection - To retrieve all my information" },
    { name: "neofetch", description: "Display system information" },
    { name: "clear", description: "Clear the terminal" },
    { name: "help", description: "Show this help message" },
  ];

  return (
    <div className="space-y-4 fade-in">
      <div className="terminal-prompt font-bold text-lg mb-4">Available Commands</div>
      
      <div className="space-y-2">
        {commands.map((cmd, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="terminal-command font-mono text-sm min-w-[120px]">
              {cmd.name}
            </div>
            <div className="text-muted-foreground text-sm flex-1">
              {cmd.description}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-terminal-border">
        <p className="text-sm text-muted-foreground">
          <span className="terminal-prompt">Tip:</span> Type any command and press Enter to execute it.
        </p>
      </div>
    </div>
  );
};

export default HelpCommand;
