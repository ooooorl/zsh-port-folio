const TerminalHeader = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-terminal-header border-b border-terminal-border rounded-t-xl">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer" 
             title="Close" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer" 
             title="Minimize" />
        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer" 
             title="Maximize" />
      </div>
      <div className="text-sm text-muted-foreground font-medium select-none">
        terminal@portfolio
      </div>
      <div className="w-16"></div>
    </div>
  );
};

export default TerminalHeader;
