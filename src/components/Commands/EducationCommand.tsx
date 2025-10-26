import { resumeData } from "@/data/resumeData";

const EducationCommand = () => {
  return (
    <div className="space-y-4 fade-in">
      <div className="terminal-prompt font-bold text-lg mb-4">Education</div>
      
      {resumeData.education.map((edu, index) => (
        <div key={index} className="space-y-2 border-l-2 border-terminal-command pl-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div className="terminal-command font-semibold">{edu.degree}</div>
            <div className="text-sm text-muted-foreground">{edu.period}</div>
          </div>
          <div className="text-terminal-text">{edu.institution}</div>
          {edu.description && (
            <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationCommand;
