export default function Home() {
  return (
    <main className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4" id="hero">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi, I&apos;m Jacob Sinanan</h1>
        <p className="max-w-xl mb-8 text-lg text-gray-500 dark:text-gray-400">
          Welcome to my website! I&apos;m a recent graduate with a passion for software development and learning new technologies. I&apos;m currently looking for a full-time software engineering position.
        </p>
        {/* Scroll Down Prompt */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Scroll to see more</span>
          <svg className="w-7 h-7 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 max-w-3xl mx-auto" id="about">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I was born and raised in Long Island, New York. I recently graduated with a Bachelor&apos;s degree in Computer Science from Stony Brook University.
          When I&apos;m not coding, I enjoy playing basketball, working out, and watching movies. I take pride in being a strong problem solver with a passion for learning and adapting quickly.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900" id="projects">
        <h3 className="text-3xl font-bold mb-8 text-center"> My Projects</h3>
        <div className="flex flex-col gap-12 max-w-2xl mx-auto">
          {/* Project Card Example */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
            <h4 className="text-xl font-semibold mb-2">Stack Overflow Clone</h4>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <img src="/Screenshot 2025-07-08 at 3.19.52 PM.png" alt="FakeStackOverflow Screenshot"/>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">A full-stack Q&A web application modeled after Stack Overflow. Built with React, Express.js, Node.js, and MongoDB.</p>
            <a href="https://github.com/JSS01" className="text-blue-600 dark:text-blue-400 hover:underline mt-auto">View on GitHub</a>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
            <h4 className="text-xl font-semibold mb-2">BookMyFights</h4>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <img src="/Screenshot 2025-07-09 at 1.08.46 PM.png" alt="BookMyFights Screenshot"/>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2"> A full-stack web app that lets users sync upcoming fights of their favorite fighters to Google Calendar. Includes a python microservice that scrapes the web for upcoming fights. Built with React, FastAPI, Express.js, Node.js, and MySQL.</p>
            <a href="https://github.com/JSS01" className="text-blue-600 dark:text-blue-400 hover:underline mt-auto">View on GitHub</a>
          </div>
          {/* Add more project cards as needed */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
            <h4 className="text-xl font-semibold mb-2">SealShare</h4>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <img src="/Screenshot 2025-07-09 at 2.16.03 PM.png" alt="SealShare Screenshot"/>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2"> A decentralized peer-to-peer file-sharing application where users can share files or offer a proxy service directly with others in exchange for Bitcoin payments. Built with React on the frontend, and Go on the backend.</p>
            <a href="https://github.com/JSS01" className="text-blue-600 dark:text-blue-400 hover:underline mt-auto">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 max-w-3xl mx-auto" id="skills">
        <h3 className="text-3xl font-bold mb-4">My Skills</h3>
        <ul className="flex flex-wrap gap-4 text-lg">
          <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">React</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">Python</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">TypeScript</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">Node.js</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">Go</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">MongoDB</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">SQL</li>

          {/* Add more skills as needed */}
        </ul>
      </section>


      {/* Contact Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900" id="contact">
        <h3 className="text-3xl font-bold mb-4 text-center">Contact Info</h3>
        <div className="flex flex-col items-center gap-4">
          <a href="mailto:jssinanan1@gmail.com" className="text-lg text-blue-600 dark:text-blue-400 hover:underline">jssinanan1@gmail.com</a>
          <div className="flex gap-6 mt-2">
            <a href="https://github.com/JSS01" className="hover:opacity-80" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/jacob-sinanan-52a60b238/" className="hover:opacity-80" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
