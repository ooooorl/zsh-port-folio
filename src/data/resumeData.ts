import { ResumeData } from "@/types/terminal";

export const resumeData: ResumeData = {
  name: "John Doe",
  title: "Full Stack Developer",
  location: "San Francisco, CA",
  email: "john.doe@example.com",
  github: "github.com/johndoe",
  linkedin: "linkedin.com/in/johndoe",
  website: "johndoe.dev",
  
  about: [
    "Passionate full-stack developer with 5+ years of experience building scalable web applications.",
    "Specialized in React, TypeScript, Node.js, and modern cloud technologies.",
    "Love creating beautiful, performant user experiences and solving complex problems.",
    "Open source enthusiast and continuous learner."
  ],
  
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"]
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Redux"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions"]
    },
    {
      category: "Tools",
      items: ["Git", "VS Code", "Figma", "Linear", "Postman"]
    }
  ],
  
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Startup Inc.",
      period: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 100K+ daily users",
        "Improved application performance by 60% through optimization and caching strategies",
        "Mentored junior developers and established best practices for code quality",
        "Designed and implemented RESTful APIs and GraphQL endpoints"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: [
        "Built responsive web applications for Fortune 500 clients",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Integrated third-party APIs and payment systems",
        "Maintained 95%+ test coverage across all projects"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Creative Studio",
      period: "2019 - 2020",
      description: [
        "Developed interactive websites and web applications",
        "Implemented modern JavaScript frameworks and build tools",
        "Optimized websites for SEO and performance",
        "Worked closely with UX team to enhance user experience"
      ]
    }
  ],
  
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California",
      period: "2015 - 2019",
      description: "Graduated with Honors. Focus on Software Engineering and Web Development."
    }
  ],
  
  projects: [
    {
      name: "TaskFlow",
      description: "A modern project management tool with real-time collaboration features",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSocket"],
      link: "taskflow.example.com",
      github: "github.com/johndoe/taskflow"
    },
    {
      name: "DevBlog",
      description: "Personal technical blog with markdown support and syntax highlighting",
      technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
      link: "blog.johndoe.dev",
      github: "github.com/johndoe/devblog"
    },
    {
      name: "API Analytics",
      description: "Real-time analytics dashboard for API monitoring and metrics",
      technologies: ["Vue.js", "D3.js", "Express", "MongoDB", "Redis"],
      github: "github.com/johndoe/api-analytics"
    }
  ]
};
