import { useState, useCallback, useEffect } from "react";
import { CommandOutput } from "@/types/terminal";
import { commands } from "@/utils/commands";

export const useTerminal = () => {
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isSshActive, setIsSshActive] = useState(false);

  // Add welcome message with neofetch on mount
  useEffect(() => {
    const lastVisit = localStorage.getItem('portfolio-last-visit');
    const now = Date.now();
    const tenMinutes = 10 * 60 * 1000; // 10 minutes in milliseconds
    
    const shouldShowWelcome = !lastVisit || (now - parseInt(lastVisit)) > tenMinutes;
    
    if (shouldShowWelcome) {
      localStorage.setItem('portfolio-last-visit', now.toString());
      
      const welcomeId = crypto.randomUUID();
      const welcomeOutput: CommandOutput = {
        id: welcomeId,
        command: "",
        output: (
          <div key={welcomeId}>
            {/* WelcomeMessage component will be imported dynamically */}
          </div>
        ),
        timestamp: new Date(),
      };
      
      setHistory([welcomeOutput]);
      
      // Start the animated welcome sequence
      const lines = [
        "> Starting portfolio daemon... done.",
        "> Deploying backend containers... build successful!",
        "> Initializing environment variables... success.",
        "> Backend boot sequence complete — portfolio is live.",
        "> Starting services: auth ✅ db ✅ api ✅ portfolio ✅",
        "> Launching backend instance... logs available below.",
        "> Portfolio server online — uptime: 0 days, 0 hrs, infinite passion.",
        "> Compiling experience modules... build passed.",
        "> API routes loaded. Enter a command to explore.",
      ];
      
      let currentLine = 0;
      const displayNextLine = () => {
        if (currentLine < lines.length) {
          const updatedOutput: CommandOutput = {
            id: welcomeId,
            command: "",
            output: (
              <div className="space-y-1 font-mono text-sm">
                {lines.slice(0, currentLine + 1).map((line, index) => (
                  <div key={index} className="text-terminal-prompt fade-in">
                    {line}
                  </div>
                ))}
              </div>
            ),
            timestamp: new Date(),
          };
          
          setHistory([updatedOutput]);
          currentLine++;
          setTimeout(displayNextLine, 1000);
        } else {
          // After all lines, wait 1 second and show neofetch
          setTimeout(() => {
            const neofetchOutput: CommandOutput = {
              id: crypto.randomUUID(),
              command: "neofetch",
              output: commands.neofetch.execute(),
              timestamp: new Date(),
            };
            
            setHistory(prev => [...prev, neofetchOutput]);
          }, 1000);
        }
      };
      
      displayNextLine();
    } else {
      const neofetchOutput: CommandOutput = {
        id: crypto.randomUUID(),
        command: "neofetch",
        output: commands.neofetch.execute(),
        timestamp: new Date(),
      };
      
      setHistory([neofetchOutput]);
    }
  }, []);

  const executeCommand = useCallback((input: string) => {
    const trimmedInput = input.trim().toLowerCase();
    
    if (!trimmedInput) return;

    // Add to command history
    setCommandHistory(prev => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    let output: React.ReactNode;

    if (trimmedInput === "clear") {
      setHistory([]);
      return;
    }

    // Check if SSH command
    if (trimmedInput === "ssh") {
      setIsSshActive(true);
    }

    const command = commands[trimmedInput];
    
    if (command) {
      output = command.execute();
    } else {
      output = (
        <div className="text-destructive fade-in">
          Command not found: <span className="font-mono">{trimmedInput}</span>
          <div className="mt-2 text-muted-foreground text-sm">
            Type <span className="terminal-command font-mono">'help'</span> to see available commands.
          </div>
        </div>
      );
    }

    const newOutput: CommandOutput = {
      id: crypto.randomUUID(),
      command: trimmedInput,
      output,
      timestamp: new Date(),
    };

    setHistory(prev => [...prev, newOutput]);
  }, []);

  const navigateHistory = useCallback((direction: "up" | "down") => {
    if (commandHistory.length === 0) return null;

    let newIndex = historyIndex;

    if (direction === "up") {
      newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
    } else {
      newIndex = historyIndex === -1 ? -1 : Math.min(commandHistory.length - 1, historyIndex + 1);
    }

    setHistoryIndex(newIndex);
    return newIndex === -1 ? "" : commandHistory[newIndex];
  }, [commandHistory, historyIndex]);

  return {
    history,
    executeCommand,
    navigateHistory,
    currentCommand,
    setCurrentCommand,
    isSshActive,
  };
};
