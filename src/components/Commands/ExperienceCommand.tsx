import { resumeData } from "@/data/resumeData";

const ExperienceCommand = () => {
  return (
    <div className="space-y-6 fade-in">
      <div className="terminal-prompt font-bold text-lg mb-4">Work Experience</div>
      
      {resumeData.experience.map((job, index) => (
        <div key={index} className="space-y-2 border-l-2 border-terminal-prompt pl-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div className="terminal-command font-semibold text-base">{job.title}</div>
            <div className="text-sm text-muted-foreground">{job.period}</div>
          </div>
          <div className="text-terminal-text font-medium">{job.company}</div>
          <ul className="space-y-1 mt-2 text-sm">
            {job.description.map((desc, descIndex) => (
              <li key={descIndex} className="flex gap-2 text-muted-foreground">
                <span className="terminal-prompt mt-1">•</span>
                <span className="flex-1">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCommand;
