type ProjectProps = {
  title: string;
  image: string;
  deployedLink: string;
  repoLink: string;
};

function Project({ title, image, deployedLink, repoLink }: ProjectProps) {
  return (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank">
        Live App
      </a>
      <a href={repoLink} target="_blank">
        GitHub
      </a>
    </div>
  );
}

export default Project;
