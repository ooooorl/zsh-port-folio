import { ResumeData } from "@/types/terminal";

export const resumeData: ResumeData = {
  name: "Orly O. Plaza",
  title: "Software & Backend Developer",
  location: "Davao City, Philippines",
  email: "plaza.orly.omeles@gmail.com",
  github: "github.com/orlyplaza",
  linkedin: "linkedin.com/in/orlyplaza",
  website: "orlyplaza.dev",
  
  about: [
    "A software and backend developer with 2+ years of professional experience in designing and implementing robust RESTful APIs.",
    "Proficient in Python, Django REST Framework, and Docker, with experience using AWS services (S3, Lambda, IAM, EC2, Transcribe).",
    "Skilled in optimizing backend systems, enhancing security, and delivering efficient, scalable solutions.",
    "Actively expanding expertise in cloud computing and AWS architecture, eager to contribute technical skills while growing in a collaborative, impactful environment."
  ],
  
  skills: [
    {
      category: "Programming Languages",
      items: ["Python"]
    },
    {
      category: "Libraries & Frameworks",
      items: ["Django", "Django REST", "FastAPI", "Flask", "Webhook", "Websocket", "Celery", "Redis", "Unittest", "Pytest", "OpenAI API"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS S3", "AWS Transcribe", "AWS DynamoDB", "AWS EC2", "AWS Lambda", "AWS IAM", "Terraform", "Docker", "Nginx", "Linux", "Backblaze", "Heroku"]
    },
    {
      category: "Development Tools",
      items: ["Git", "GitHub", "Bitbucket", "Render", "Vercel", "Jira", "Clockify", "Postman", "pgAdmin"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "DynamoDB", "SQLite 3"]
    }
  ],
  
  experience: [
    {
      title: "Software Developer",
      company: "Ingenuity Software Global Consulting, Inc.",
      period: "Feb 2024 - Present",
      description: [
        "Collaborated with development teams to determine application requirements, improving project clarity and reducing revision cycles by 30%",
        "Developed backend components that optimized application performance, achieving 50% lower latency and 99.9% uptime for high-availability systems",
        "Implemented automated report file transcription using Amazon Transcribe, reducing manual transcription efforts by 90% and improving accuracy by 95%",
        "Enhanced security for a scheduling platform by refining authenticated user permissions, ensuring better data protection",
        "Developed and maintained backend services to handle tournament creation, tee time booking, registration workflows, payment gateways, and score processing",
        "Engineered a file upload endpoint similar to Google Drive, integrating role-based access management and upload limitations",
        "Established a WebSocket connection enabling RFI users to communicate directly with Case Manager in real-time"
      ]
    },
    {
      title: "Software Developer (Part-Time)",
      company: "University of the Philippines Mindanao",
      period: "Sep 2023 - Dec 2024",
      description: [
        "Developed an API for data analytics for the Cacao, Coffee and Cavendish banana value chain using Python 3 and Django REST framework",
        "Developed an automation script that efficiently transferred data from CSV files to a database, reducing manual input time by 80%",
        "Delivered weekly progress reports, ensuring stakeholders were informed of development milestones and any potential challenges",
        "Developed a company website using Google Sites and enhanced existing templates with JavaScript and Bootstrap"
      ]
    },
    {
      title: "Python Developer Intern",
      company: "Valens Research",
      period: "April 2023 - July 2023",
      description: [
        "Developed a testable Python script for data scraping, ensuring 100% data consistency across production and staging environments",
        "Utilized Django ORM to enhance database manipulation efficiency, reducing query execution time by 25%",
        "Collaborated closely with the analyst team to achieve 98% accuracy in aligning gathered data with production datasets",
        "Actively participated in daily Scrum meetings, resulting in a 30% increase in team productivity during Agile development"
      ]
    },
    {
      title: "Research and Development Associate Intern",
      company: "MediaOne Software Solutions",
      period: "June 2022 - Sep 2022",
      description: [
        "Developed a PawTracer solution utilizing Arduino and the Neo-6M module",
        "Designed and implemented a tracking system to meet client specifications using C++"
      ]
    }
  ],
  
  education: [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Holy Cross of Davao College",
      period: "June 2018 - July 2023",
      description: "Graduated with a degree in Computer Engineering. Second placer in the 12th Engineering Congress CODEE for 'Dyscalculia Immediate Mode of Assessment in Learning System (DysIMAL)' in Region 11."
    }
  ],
  
  projects: [
    {
      name: "Chatbot AI (RAG)",
      description: "A PDF-based Question-Answering System built using Streamlit, LangChain, and Ollama LLM with DeepSeek-R1",
      technologies: ["Python", "Streamlit", "LangChain", "Ollama LLM", "Vector Embeddings"],
      github: "github.com/orlyplaza/chatbot-rag"
    }
  ]
};
