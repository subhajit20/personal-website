import { appContext } from "@/context/ContextProvider";
import React from "react";

type Props = {
  intro1: string;
  intro2: string;
  intro3: string;
};

const MyIntro = (props: Props) => {
  const { state }: any = React.useContext(appContext);

  return (
    <div className={`flex justify-center pt-4 px-2 md:px-0`}>
      <div className={`w-full md:w-3/6 flex flex-col p-2 ${state.color}`}>
        <h1 className="text-left text-4xl font-bold mb-2">Biography</h1>
        <h1 className="text-base text-justify">{props.intro1}</h1>
        <h1 className="text-base text-justify ">{props.intro2}</h1>
        <h1 className="text-base text-justify ">{props.intro3}</h1>
      </div>
    </div>
  );
};

export default MyIntro;
