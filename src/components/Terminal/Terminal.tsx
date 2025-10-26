import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";
import { useTerminal } from "@/hooks/useTerminal";

const Terminal = () => {
  const { history, executeCommand, navigateHistory } = useTerminal();

  return (
    <div className="w-full max-w-5xl mx-auto shadow-2xl rounded-xl overflow-hidden border border-terminal-border glassmorphism">
      <TerminalHeader />
      <div className="terminal-bg">
        <TerminalBody 
          history={history} 
          onExecuteCommand={executeCommand}
          onNavigateHistory={navigateHistory}
        />
      </div>
    </div>
  );
};

export default Terminal;
