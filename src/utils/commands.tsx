import { TerminalCommand } from "@/types/terminal";
import AboutCommand from "@/components/Commands/AboutCommand";
import SkillsCommand from "@/components/Commands/SkillsCommand";
import ExperienceCommand from "@/components/Commands/ExperienceCommand";
import EducationCommand from "@/components/Commands/EducationCommand";
import ProjectsCommand from "@/components/Commands/ProjectsCommand";
import ContactCommand from "@/components/Commands/ContactCommand";
import HelpCommand from "@/components/Commands/HelpCommand";
import NeofetchCommand from "@/components/Commands/NeofetchCommand";
import SshCommand from "@/components/Commands/SshCommand";

export const commands: Record<string, TerminalCommand> = {
  about: {
    name: "about",
    description: "Learn more about me",
    execute: () => <AboutCommand />,
  },
  skills: {
    name: "skills",
    description: "View my technical skills",
    execute: () => <SkillsCommand />,
  },
  experience: {
    name: "experience",
    description: "See my work experience",
    execute: () => <ExperienceCommand />,
  },
  education: {
    name: "education",
    description: "View my educational background",
    execute: () => <EducationCommand />,
  },
  projects: {
    name: "projects",
    description: "Check out my projects",
    execute: () => <ProjectsCommand />,
  },
  contact: {
    name: "contact",
    description: "Get in touch with me",
    execute: () => <ContactCommand />,
  },
  help: {
    name: "help",
    description: "Show available commands",
    execute: () => <HelpCommand />,
  },
  neofetch: {
    name: "neofetch",
    description: "Display system information",
    execute: () => <NeofetchCommand />,
  },
  ssh: {
    name: "ssh",
    description: "Establish SSH connection",
    execute: () => <SshCommand />,
  },
};

export const getCommandSuggestions = (input: string): string[] => {
  if (!input) return [];
  return Object.keys(commands).filter(cmd => cmd.startsWith(input.toLowerCase()));
};
