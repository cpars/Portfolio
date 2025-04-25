const projects = [
    {
      title: "Weaver",
      description:
        "A collaborative storytelling app where users create branching narratives, comment, and vote.",
      tech: ["React", "TypeScript", "GraphQL", "MongoDB", "Apollo", "Cypress"],
      image: "../../images/Weaver_Projects_Page.png", // optional
      demoLink: "https://weaver-9su3.onrender.com/",
      githubLink: "https://github.com/ccasalme/Weaver",
    },
    {
        title: "Tech Quiz App with CI/CD",
        description:
          "A full-stack tech quiz application built to demonstrate automated testing and deployment workflows. It runs Cypress component tests on pull requests to the 'develop' branch and auto-deploys to Render when merged into 'main'.",
        tech: [
          "React",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "MongoDB",
          "Cypress",
          "GitHub Actions",
          "CI/CD",
          "Render"
        ],
        demoLink: "https://techquiz-app.render.com",
        githubLink: "https://github.com/coreyparsons/techquiz",
        image: "/images/quiz-app.png",
      },
      
      {
        title: "Book Search Engine",
        description:
          "A full-stack web application that lets users search for books via the Google Books API, save favorites, and manage them with secure JWT-based authentication. Built with GraphQL, Apollo, React, and TypeScript.",
        tech: [
          "React",
          "Apollo Client",
          "GraphQL",
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose",
          "TypeScript",
          "JWT",
          "bcrypt",
        ],
        demoLink: "https://book-search-engine-lx96.onrender.com/",
        githubLink: "https://github.com/cpars/Book_Search_Engine",
        image: "/images/googlebooks.png"
      }
      ,
    {
      title: "Kanban Board",
      description:
        "A productivity tool with task lanes, drag-and-drop, and JWT authentication.",
      tech: ["React", "Node.js", "Express", "JWT", "PostgreSQL"],
      demoLink: "https://kanban-app-corey.onrender.com",
      githubLink: "https://github.com/coreyparsons/kanban-board",
    },
  ];
  
  export default projects;
  