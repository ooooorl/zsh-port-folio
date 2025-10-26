import { resumeData } from "@/data/resumeData";

const NeofetchCommand = () => {
  const archLogo = `
                   -\`
                  .o+\`
                 \`ooo/
                \`+oooo:
               \`+oooooo:
               -+oooooo+:
             \`/:-:++oooo+:
            \`/++++/+++++++:
           \`/++++++++++++++:
          \`/+++ooooooooooooo/\`
         ./ooosssso++osssssso+\`
        .oossssso-\`\`\`\`/ossssss+\`
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        +ssssooo/-
   \`/ossssso+/:-        -:/+osssso+-
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 \`/
  `.trim();

  const info = [
    { label: "User", value: resumeData.name },
    { label: "Title", value: resumeData.title },
    { label: "Location", value: resumeData.location },
    { label: "Shell", value: "zsh 5.9" },
    { label: "Terminal", value: "iTerm2" },
    { label: "Email", value: resumeData.email },
    { label: "GitHub", value: resumeData.github },
  ];

  return (
    <div className="fade-in font-mono text-xs sm:text-sm">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Arch Linux Logo */}
        <pre className="terminal-command leading-tight whitespace-pre hidden sm:block">
          {archLogo}
        </pre>

        {/* System Info */}
        <div className="flex-1 space-y-1">
          <div className="terminal-prompt font-bold text-base mb-3">
            {resumeData.name}@portfolio
          </div>
          <div className="h-px bg-terminal-border mb-2"></div>
          
          {info.map((item, index) => (
            <div key={index} className="flex gap-2">
              <span className="terminal-prompt font-semibold min-w-[80px]">
                {item.label}:
              </span>
              <span className="text-terminal-text break-all">{item.value}</span>
            </div>
          ))}

          <div className="h-px bg-terminal-border my-3"></div>

          {/* Color blocks */}
          <div className="flex gap-1 mt-4">
            {[
              "bg-black",
              "bg-red-600",
              "bg-green-600",
              "bg-yellow-600",
              "bg-blue-600",
              "bg-purple-600",
              "bg-cyan-600",
              "bg-white"
            ].map((color, index) => (
              <div key={index} className={`w-8 h-4 ${color} rounded-sm`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeofetchCommand;
