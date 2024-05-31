import { appContext } from "@/context/ContextProvider";
import Image, { StaticImageData } from "next/image";
import React, { useContext } from "react";

type Props = {
  companyIcon: string | StaticImageData;
  companyName: string;
  designation: string;
  date: string;
};

const JobCard = (props: Props) => {
  const { state }: any = useContext(appContext);
  
  return (
    <div className={`${state.color} p-2 md:p-5 w-full rounded-full`}>
      <div className="flex justify-start gap-x-3 items-center">
        <div className="avatar">
          <Image src={props.companyIcon} alt="avatar" width={100} height={100} />
        </div>
        <div className="justify-self-start flex flex-col w-full ">
          <p className="text-lg">{props.companyName}</p>
          <h1 className="flex text-gray-400 text-[0.7rem] md:text-base justify-between gap-x-3">
            <p>{props.designation}</p>
            <p>{props.date}</p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
