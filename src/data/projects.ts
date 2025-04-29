const projects = [
    {
      title: "Weaver",
      description:
        "A collaborative storytelling app where users create branching narratives, comment, and vote.",
      tech: ["React", "TypeScript", "GraphQL", "MongoDB", "Apollo", "Cypress"],
      image: "../../images/Weaver_Projects_Page.png", 
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
        demoLink: "https://github-actions-cicd-rwie.onrender.com/",
        githubLink: "https://github.com/cpars/GitHub_Actions_CICD",
        image: "/images/Tech-Quiz-Screenshot.png",
        testLink: "https://youtu.be/VwRN_xHVUUs",
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
        image: "/images/Book-Search-Engine-Screenshot.png"
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
    {
      title: "Vehicle Builder CLI",
      description:
        "A command-line application that allows users to create, manage, and interact with different types of vehicles such as Cars, Trucks, and Motorbikes. Built with Node.js, TypeScript, and Inquirer.js.",
      tech: ["Node.js", "TypeScript", "Inquirer.js"],
      githubLink: "https://github.com/cpars/Vehicle-Builder", 
      demoLink: "https://youtu.be/LWbo99gxOdk", 
      image: "/images/Vehicle-Builder.gif", 
    },
    {
      title: "Professional README Generator",
      description:
        "A command-line application that prompts the user for project information and generates a clean, professional README.md file. Built with Node.js and Inquirer.js.",
      tech: ["Node.js", "Inquirer.js", "JavaScript"],
      githubLink: "https://github.com/cpars/Professional-README-Generator", 
      demoLink: "https://youtu.be/XfhK838d1io", 
      image: "/images/readme-generator.gif", 
    }
, 
    {
      title: "Weather Dashboard",
      description:
        "A web application that allows users to search for current weather conditions and a 5-day forecast for any city. Built with HTML, CSS, JavaScript, and the OpenWeatherMap API.",
      tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      demoLink: "https://your-weather-dashboard-demo-link.com", 
      githubLink: ""
    }
  ];
  
  export default projects;
  