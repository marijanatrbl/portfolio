import { useEffect, useState } from "react";
import api from "../api";
import Project from "../components/Project";
import type { ProjectType } from "../Project";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    api.get("projects/").then((res) => setProjects(res.data));
  }, []);

  return (
    <div className="projects">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
