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
      
      const welcomeOutput: CommandOutput = {
        id: crypto.randomUUID(),
        command: "",
        output: (
          <div className="space-y-1 fade-in font-mono text-sm">
            <div className="text-terminal-prompt">&gt; Starting portfolio daemon... done.</div>
            <div className="text-terminal-prompt">&gt; Deploying backend containers... build successful!</div>
            <div className="text-terminal-prompt">&gt; Initializing environment variables... success.</div>
            <div className="text-terminal-prompt">&gt; Backend boot sequence complete — portfolio is live.</div>
            <div className="text-terminal-prompt">&gt; Starting services: auth ✅ db ✅ api ✅ portfolio ✅</div>
            <div className="text-terminal-prompt">&gt; Launching backend instance... logs available below.</div>
            <div className="text-terminal-prompt">&gt; Portfolio server online — uptime: 0 days, 0 hrs, infinite passion.</div>
            <div className="text-terminal-prompt">&gt; Compiling experience modules... build passed.</div>
            <div className="text-terminal-prompt">&gt; API routes loaded. Enter a command to explore.</div>
          </div>
        ),
        timestamp: new Date(),
      };
      
      const neofetchOutput: CommandOutput = {
        id: crypto.randomUUID(),
        command: "neofetch",
        output: commands.neofetch.execute(),
        timestamp: new Date(),
      };
      
      setHistory([welcomeOutput, neofetchOutput]);
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
