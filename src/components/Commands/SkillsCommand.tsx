import { resumeData } from "@/data/resumeData";
import { Code, Stack, CloudArrowUp, Wrench, Database } from "phosphor-react";

const getIconForCategory = (category: string) => {
  const iconClass = "w-5 h-5 text-terminal-prompt";
  
  if (category.includes("Programming")) return <Code className={iconClass} weight="duotone" />;
  if (category.includes("Frameworks")) return <Stack className={iconClass} weight="duotone" />;
  if (category.includes("Cloud")) return <CloudArrowUp className={iconClass} weight="duotone" />;
  if (category.includes("Tools")) return <Wrench className={iconClass} weight="duotone" />;
  if (category.includes("Database")) return <Database className={iconClass} weight="duotone" />;
  
  return <Code className={iconClass} weight="duotone" />;
};

const SkillsCommand = () => {
  return (
    <div className="space-y-4 fade-in">
      <div className="terminal-prompt font-bold text-lg mb-4">Skills</div>
      
      {resumeData.skills.map((skillGroup, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center gap-2">
            {getIconForCategory(skillGroup.category)}
            <span className="terminal-command font-semibold">{skillGroup.category}</span>
          </div>
          <div className="flex flex-wrap gap-2 ml-4">
            {skillGroup.items.map((skill, skillIndex) => (
              <span 
                key={skillIndex}
                className="px-3 py-1 bg-muted rounded-md text-sm text-terminal-text border border-terminal-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCommand;
