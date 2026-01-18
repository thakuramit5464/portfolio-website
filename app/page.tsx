import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import SkillList from "./components/SkillList";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-developer bg-grid-pattern bg-animated-dots text-slate-900 dark:text-slate-100 relative">
      <main className="mx-auto max-w-4xl px-6 py-16 relative z-10">
        {/* Profile / Hero */}
        <section id="hero" className="mb-16 md:mb-20">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            {/* Profile Photo - Add your profile image to /public/profile-photo.jpg */}
            <div className="flex-shrink-0">
              <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden shadow-lg ring-4 ring-slate-100 dark:ring-slate-800 bg-slate-200 dark:bg-slate-700">
                <Image
                  src="/profile-photo.jpg"
                  alt="Amit Kumar Singh - Software Developer"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Profile Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2 md:text-5xl">Amit Kumar Singh</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 md:text-xl">
                Software Developer | Frontend / Full Stack
              </p>
              <p className="text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed md:text-lg">
                Transforming ideas into scalable applications with 3+ years of experience in React, Next.js, and Node.js.
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 mb-6 md:justify-start">
                <a
                  href="https://linkedin.com/in/amitkumarsingh5464"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/thakuramit5464"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href="#projects"
                  className="rounded-md bg-slate-900 px-6 py-3 text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-colors text-center font-medium"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-slate-200 px-6 py-3 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors text-center font-medium"
                >
                  Contact Me
                </a>
              </div>

              {/* Email Contact - Subtle */}
              <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
                <a href="mailto:thakuramit5464@gmail.com" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors underline-offset-2 hover:underline">
                  thakuramit5464@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-10">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
            With over 3 years of hands-on experience in modern web development, I specialize in building scalable, user-focused applications using JavaScript, React, TypeScript, and Node.js. I&apos;m comfortable working across the stack—from crafting responsive frontends with Next.js to architecting robust backend solutions with Firebase and SQL databases.
          </p>
          <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
            I thrive on complex problems and deliver solutions that balance performance, maintainability, and real-world impact. Whether it&apos;s Windows, Linux, or cross-platform projects, I adapt quickly and bring a learning mindset to every challenge. I collaborate using GitHub and modern version control workflows to ship features that matter.
          </p>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="mb-10">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <SkillList />
        </section>

        {/* Experience Highlights */}
        <section id="experience-highlights" className="mb-10">
          <h2 className="text-2xl font-semibold">Experience Highlights</h2>
          <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
            <li className="flex items-start">
              <span className="mr-2 text-slate-400">•</span>
              <span>Built scalable, user-friendly web applications across frontend and backend systems</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-slate-400">•</span>
              <span>Collaborated using GitHub and version control workflows to maintain code quality and team efficiency</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-slate-400">•</span>
              <span>Implemented Firebase-based data solutions for real-time features and seamless user experiences</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-slate-400">•</span>
              <span>Delivered features with performance and usability in mind, focusing on measurable impact</span>
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-10">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-6 space-y-6">
            <ProjectCard
              title="Solar Website"
              description="A modern web application built using Next.js, focusing on performance, clean UI, and scalable frontend architecture. Designed with reusable components and optimized for fast load times and responsiveness."
              tech={["Next.js", "React", "JavaScript", "CSS"]}
              liveUrl="https://solar-nextjs-git-main-amit-kumar-singhs-projects-5215d39d.vercel.app"
              repoUrl="https://github.com/thakuramit5464/solar-nextjs"
              isRecent={true}
            />

            <ProjectCard
              title="Todo List App"
              description="A full-featured Todo List application that allows users to create, edit, and delete tasks. Uses Firebase as a backend for real-time data storage and management. Built with TypeScript for a structured and maintainable codebase and Node.js for server-side execution."
              tech={["TypeScript", "Node.js", "Firebase"]}
              liveUrl="#"
              repoUrl="https://github.com/thakuramit5464/ToDoList"
            />

            <ProjectCard
              title="Automatic Number Plate Recognition (ANPR)"
              description="An image-processing-based system that detects and extracts vehicle license plate numbers from images. Uses OpenCV for image preprocessing and detection and EasyOCR for converting the extracted plate into machine-readable text. Demonstrates practical use of computer vision and OCR techniques."
              tech={["Python", "OpenCV", "EasyOCR"]}
              liveUrl="#"
              repoUrl="https://github.com/thakuramit5464/ANPR"
            />

            <ProjectCard
              title="Responsive Website"
              description="A fully responsive website built to adapt across desktop, tablet, and mobile devices. Implements flexible layouts and interactive elements to ensure accessibility and usability across screen sizes."
              tech={["HTML", "CSS", "JavaScript"]}
              liveUrl="#"
              repoUrl="#"
            />
          </div>
        </section>

        {/* What I Can Help With */}
        <section id="services" className="mb-10">
          <h2 className="text-2xl font-semibold">What I Can Help With</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <h3 className="font-medium mb-2">Frontend Development</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Building responsive, interactive UIs with React and Next.js</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <h3 className="font-medium mb-2">Full-Stack Development</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">End-to-end solutions with Node.js, Firebase, and SQL databases</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <h3 className="font-medium mb-2">Dashboard & Admin Panels</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Custom admin interfaces with data visualization and management tools</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <h3 className="font-medium mb-2">API Integration</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Seamless third-party integrations and RESTful API development</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <h3 className="font-medium mb-2">Performance Optimization</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Improving load times, reducing bundle sizes, and enhancing UX</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <h3 className="font-medium mb-2">Rapid Prototyping & Demos</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Quick MVP development and proof-of-concept implementations</p>
            </div>
          </div>
        </section>

        {/* Currently Exploring */}
        <section id="currently-exploring" className="mb-10">
          <h2 className="text-2xl font-semibold">Currently Exploring</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Advanced Next.js patterns, scalable frontend architecture, performance optimization techniques, and modern tooling best practices.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-20">
          <h2 className="text-2xl font-semibold">Get In Touch</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Ready to collaborate? Let&apos;s discuss your project.</p>
          <p className="mt-1 text-slate-600 dark:text-slate-300">
            <span>Mobibe Number</span> : <span>+917983011471</span>
          </p>
          <p className="mt-1 text-slate-600 dark:text-slate-300">Email: <a href="mailto:thakuramit5464@gmail.com" className="text-sky-600 hover:underline dark:text-sky-400">thakuramit5464@gmail.com</a></p>
          <p className="mt-1 text-slate-600 dark:text-slate-300">
            <a
              href="https://www.linkedin.com/in/amitkumarsingh5464/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <span className="mx-2">•</span>
            <a
              href="https://github.com/thakuramit5464"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
          </p>

          <div className="mt-6 max-w-xl">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}

