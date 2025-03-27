import Project from "../components/Project";

function Portfolio() {
  return (
    <section>
      <Project
        title="My Cool App"
        image="/assets/project1.png"
        deployedLink="https://yourapp.netlify.app"
        repoLink="https://github.com/yourusername/project1"
      />
      {/* Add 5 more */}
    </section>
  );
}

export default Portfolio;
