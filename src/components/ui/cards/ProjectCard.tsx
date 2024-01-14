import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

type Props = {
  projectName: string;
  projectImage: string | StaticImageData;
  projectDependencies: string;
  projectGithubLink: string;
};

const ProjectCard = (props: Props) => {
  return (
    <Link
      href={props.projectGithubLink}
      className="justify-self-center md:justify-self-center"
    >
      <div className="card card-image-cover ">
        <Image src={props.projectImage} alt="" width={400} height={100} />
        <div className="card-body h-32">
          <h2 className="card-header font-extrabold">{props.projectName}</h2>
          <p className="text-gray-400 w-full">{props.projectDependencies}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
