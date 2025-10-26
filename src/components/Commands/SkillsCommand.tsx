import { resumeData } from "@/data/resumeData";

const SkillsCommand = () => {
  return (
    <div className="space-y-4 fade-in">
      <div className="terminal-prompt font-bold text-lg mb-4">Technical Skills</div>
      
      {resumeData.skills.map((skillGroup, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center gap-2">
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
