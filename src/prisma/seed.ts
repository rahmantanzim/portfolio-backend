import { db } from "./db";
async function seed() {
  console.log("Seeding database with Prisma 8...");

  // 1. Clear existing records
  await db.orm.public.Project.where({}).deleteAll();
  await db.orm.public.Experience.where({}).deleteAll();

  // 2. Insert Projects
  await db.orm.public.Project.createAll([
    {
      title: "AI-Powered Blogging Platform",
      description:
        "A full-stack blogging platform built with the MERN stack and the Gemini API. Users can generate and refine article drafts using AI, manage posts, and sign in with JWT authentication.",
      image: "/projects/project1.jpeg",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Vercel"],
      link: "https://fullstack-ai-blog-eta.vercel.app",
      github: "https://github.com/rahmantanzim/fullstack-ai-blog",
      isFeatured: true,
      order: 1,
    },
    {
      title: "Swipe-Based Behavioral 2FA System",
      description:
        "A continuous authentication system that verifies mobile users by analyzing their touchscreen swipe dynamics. Built with an Android client, a Python (scikit-learn) inference API, Firebase Realtime Database, and a React monitoring dashboard—backed by 232 automated tests.",
      image: "/projects/project-swipe-2fa.webp",
      tags: ["Python", "React", "Android", "scikit-learn", "Firebase", "Pytest", "Vitest"],
      link: "#",
      github: "https://github.com/rahmantanzim/swipe-based-2fa",
      isFeatured: true,
      order: 2,
    },
    {
      title: "HTML & JSON Parser Fuzzing Tools",
      description:
        "Python security testing tools that generate mutated HTML and JSON inputs using Context-Free Grammars (CFG) and Abstract Syntax Trees (AST) to stress-test parsers—uncovering a Denial of Service (DoS) bug during automated A/B testing.",
      image: "/projects/project7.jpeg",
      tags: ["Python", "AST", "CFG Fuzzing", "Software Verification", "Security Testing"],
      link: "https://github.com/rahmantanzim/cfg-html-fuzzer",
      github: "https://github.com/rahmantanzim/cfg-html-fuzzer",
      isFeatured: true,
      order: 3,
    },
    {
      title: "Secure E2E Encrypted Chat",
      description:
        "A real-time chat application built with Python and Flask-SocketIO. Uses RSA-OAEP public-key encryption so messages are encrypted locally and can only be read by the intended recipient.",
      image: "/projects/project2.webp",
      tags: ["Python", "Flask", "Socket.io", "RSA-OAEP", "Cryptography"],
      link: "https://github.com/rahmantanzim/python-cryptography-chat",
      github: "https://github.com/rahmantanzim/python-cryptography-chat",
      isFeatured: true,
      order: 4,
    },
    {
      title: "Laptop Review Microsite & Moderation System",
      description:
        "A Laravel campaign microsite built for ASUS that reached 600K+ users. Includes a custom keyword filter to flag offensive language and an admin dashboard to review and approve 170+ user submissions.",
      image: "/projects/project5.webp",
      tags: ["Laravel", "PHP", "MySQL", "Content Moderation", "Bootstrap"],
      link: "https://www.behance.net/gallery/129215805/USER-GENERATED-REVIEW-CAMPAIGN-MICROSITE",
      github: "#",
      isFeatured: true,
      order: 5,
    },
    {
      title: "Full-Stack Next.js & TypeORM App",
      description:
        "A web application backend built with Next.js, TypeORM, and PostgreSQL on Supabase, designed to manage complex relational database schemas and run automated data migrations.",
      image: "/projects/project-nextjs.webp",
      tags: ["Next.js", "TypeScript", "TypeORM", "PostgreSQL", "Supabase"],
      link: "#",
      github: "#",
      isFeatured: true,
      order: 6,
    },
  ]);

  // 3. Insert Experiences
  await db.orm.public.Experience.createAll([
    {
      role: "Web Developer",
      company: "HYPE Dhaka",
      location: "Dhaka, Bangladesh",
      period: "Jun 2018 – Jun 2022",
      description:
        "Designed and developed 15+ responsive websites using HTML, CSS, JavaScript, Bootstrap, and WordPress, increasing project delivery speed by 50% within the first year.",
      skills: ["JavaScript", "WordPress", "Bootstrap", "HTML/CSS", "UI/UX"],
      order: 1,
    },
    {
      role: "Claims Customer Representative",
      company: "Intact Insurance",
      location: "St. John's, NL",
      period: "Nov 2022 – Apr 2024",
      description:
        "Handled 5,000+ annual inquiries with 100% documentation accuracy and maintained 95% call adherence in a high-volume environment.",
      skills: ["Problem Solving", "Client Communication", "System Workflows"],
      order: 2,
    },
    {
      role: "Cash Office Supervisor",
      company: "Sobeys Inc.",
      location: "St. John's, NL",
      period: "May 2024 – Dec 2025",
      description:
        "Led a team of 8 members to optimize daily service standards while maintaining 100% financial balancing accuracy and mentoring 3–5 new employees.",
      skills: ["Team Leadership", "Auditing", "Training & Mentoring"],
      order: 3,
    },
  ]);

  console.log("Database seeded successfully!");
  await db.close();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});