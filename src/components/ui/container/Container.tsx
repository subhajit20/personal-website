import React from "react";

type Props = {
  headingName?: string;
  children?: React.ReactNode;
};

const Container = (props: Props) => {
  return (
    <div className="text-black flex justify-center pt-4 px-2 md:px-0">
      <div className="w-full md:w-3/6">
        <h1 className="text-left text-black text-4xl font-bold py-4">
          {props.headingName}
        </h1>
        {props.children}
      </div>
    </div>
  );
};

export default Container;
