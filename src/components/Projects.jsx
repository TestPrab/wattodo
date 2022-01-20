import React, { useState } from 'react';
import { useSelectedProjectsValue, useProjectsValue } from '../context';
import { IndividualProject } from "./IndividualProject.jsx";

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectsValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map((project) => {
      return (
        <li
          key={project.projectId}
          data-doc-id={project.docId}
          data-testid="project-action"
          className={
            active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
            }
            onKeyDown={()=>{
              setActive(project.projectId);
              setSelectedProject(project.projectId);
            }}
            onClick={()=>{
              setActive(project.projectId);
              setSelectedProject(project.projectId);
            }}
          >
            <IndividualProject project={project}/> 
          </li>
      );
    })
  );
}
