import Image, { StaticImageData } from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import { appContext } from "@/context/ContextProvider";

type Props = {
  projectName: string;
  projectImage: string | StaticImageData;
  projectDependencies: string;
  projectGithubLink: string;
};

const ProjectCard = (props: Props) => {
  const { state }: any = useContext(appContext);

  return (
    <Link
      href={props.projectGithubLink}
      className={`justify-self-center md:justify-self-center`}
    >
      <div className={`${state.color} card card-image-cover`}>
        <Image src={props.projectImage} alt="" width={400} height={100} />
        <div className={`card-body h-32 ${state.color}`}>
          <h2 className="card-header font-extrabold">{props.projectName}</h2>
          <p className="text-gray-400 w-full">{props.projectDependencies}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
