import { appContext } from "@/context/ContextProvider";
import React, { useContext } from "react";
import { FaUserGraduate } from "react-icons/fa";


type Props = {
  collegeName: string;
  description?: string;
  start?: string;
  end?: string;
};

const EducatioCard = (props: Props) => {
  const { collegeName, description, start, end } = props;
  const { state }: any = useContext(appContext);

  return (
    <div className={`${state.color} grid grid-cols-1 justify-center gap-2 w-full rounded-md p-4 h-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
      <div className="flex justify-between">
        <div className="flex justify-start items-center gap-x-3 self-start text-base md:text-xl">
          <FaUserGraduate className="w-11 h-11" />
          <h1 className="text-lg md:text-xl">{collegeName}</h1>
        </div>
        <div className="justify-start gap-x-3 self-start hidden md:flex">
          <span>{start}</span>
          <span>{end}</span>
        </div>
      </div>
      <div className="self-start text-gray-400 text-sm md:text-lg">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EducatioCard;
