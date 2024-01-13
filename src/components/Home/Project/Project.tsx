import React from "react";
import ProjectCard from "@/components/ui/cards/ProjectCard";
import Container from "@/components/ui/container/Container";
import { projects } from "@/constant/data/ProjectData";

type Props = {};

const Project = (props: Props) => {
  return (
    <Container headingName={"Projects"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center items-center py-2">
        {projects.map((p, i) => {
          return (
            <ProjectCard
              key={i}
              projectDependencies={p.projectDependencies}
              projectGithubLink={p.projectGithubLink}
              projectName={p.projectName}
              projectImage={p.projectImage}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Project;
