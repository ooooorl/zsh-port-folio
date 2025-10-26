import { useState, useCallback, useEffect } from "react";
import { CommandOutput } from "@/types/terminal";
import { commands } from "@/utils/commands";

export const useTerminal = () => {
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentCommand, setCurrentCommand] = useState("");

  // Add welcome message on mount
  useEffect(() => {
    const welcomeOutput: CommandOutput = {
      id: crypto.randomUUID(),
      command: "",
      output: (
        <div className="space-y-2 fade-in">
          <div className="text-xl font-bold terminal-prompt mb-2">
            Welcome to my terminal portfolio! 👋
          </div>
          <p className="text-terminal-text">
            Type <span className="terminal-command font-mono">'help'</span> to see available commands.
          </p>
          <p className="text-terminal-text">
            Type <span className="terminal-command font-mono">'about'</span> to learn more about me.
          </p>
        </div>
      ),
      timestamp: new Date(),
    };
    setHistory([welcomeOutput]);
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
  };
};
