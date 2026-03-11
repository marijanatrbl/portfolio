import "./Project.css";
import type { ProjectType } from "../Project";

type ProjectProps = {
  project: ProjectType;
};

function Project({ project }: ProjectProps) {
  return (
    <>
      <div className="projectInfo">
        <p className="projectDate">{project.date}</p>

        <div className="proj">
          <div className="left">
            <h2 className="projectTitle">{project.title}</h2>
            <p className="projectDesc">{project.description}</p>
          </div>
          <div className="verticalLine"></div>
          <div className="projectImg">
            {project.image && (
              <img
                src={`http://127.0.0.1:8000${project.image}`}
                alt={project.title}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
