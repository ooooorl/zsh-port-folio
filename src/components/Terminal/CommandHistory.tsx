import { CommandOutput } from "@/types/terminal";

interface CommandHistoryProps {
  history: CommandOutput[];
}

const CommandHistory = ({ history }: CommandHistoryProps) => {
  return (
    <div className="space-y-6">
      {history.map((item) => (
        <div key={item.id} className="space-y-2">
          {item.command && (
            <div className="flex gap-2 font-mono text-sm">
              <span className="terminal-prompt select-none">➜</span>
              <span className="text-terminal-text">{item.command}</span>
            </div>
          )}
          <div className="pl-4">{item.output}</div>
        </div>
      ))}
    </div>
  );
};

export default CommandHistory;
