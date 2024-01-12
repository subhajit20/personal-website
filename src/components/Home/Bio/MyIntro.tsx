import React from "react";

type Props = {
  intro: string;
};

const MyIntro = (props: Props) => {
  return (
    <div className="text-black flex justify-center pt-4 px-2 md:px-0">
      <div className="w-full md:w-3/6">
        <h1 className="text-left text-4xl font-bold">Bio</h1>
        <h1 className="text-base text-justify">{props.intro}</h1>
      </div>
    </div>
  );
};

export default MyIntro;
