import { useState, useRef, useEffect, KeyboardEvent } from "react";
import CommandHistory from "./CommandHistory";
import { CommandOutput } from "@/types/terminal";
import { getCommandSuggestions } from "@/utils/commands";

interface TerminalBodyProps {
  history: CommandOutput[];
  onExecuteCommand: (command: string) => void;
  onNavigateHistory: (direction: "up" | "down") => string | null;
}

const TerminalBody = ({ history, onExecuteCommand, onNavigateHistory }: TerminalBodyProps) => {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    // Update suggestion when input changes
    if (input) {
      const suggestions = getCommandSuggestions(input);
      setSuggestion(suggestions.length > 0 ? suggestions[0] : "");
    } else {
      setSuggestion("");
    }
  }, [input]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onExecuteCommand(input);
      setInput("");
      setSuggestion("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const historyCommand = onNavigateHistory("up");
      if (historyCommand !== null) {
        setInput(historyCommand);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const historyCommand = onNavigateHistory("down");
      if (historyCommand !== null) {
        setInput(historyCommand);
      }
    } else if (e.key === "Tab" && suggestion) {
      e.preventDefault();
      setInput(suggestion);
      setSuggestion("");
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      onExecuteCommand("clear");
      setInput("");
      setSuggestion("");
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      className="p-6 text-sm overflow-y-auto h-full cursor-text"
      onClick={handleTerminalClick}
      style={{ fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif' }}
    >
      <CommandHistory history={history} />
      
      <div className="flex gap-2 mt-6 items-center">
        <span className="terminal-prompt select-none">➜</span>
        <span className="cursor-blink terminal-prompt">▋</span>
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent outline-none text-terminal-text caret-transparent"
            spellCheck={false}
            autoComplete="off"
            autoFocus
          />
          {suggestion && input && suggestion.startsWith(input.toLowerCase()) && (
            <div className="absolute top-0 left-0 pointer-events-none text-muted-foreground/40">
              <span className="invisible">{input}</span>
              {suggestion.slice(input.length)}
            </div>
          )}
        </div>
      </div>
      
      <div ref={terminalEndRef} />
    </div>
  );
};

export default TerminalBody;
