import React from "react";
import Container from "@/components/ui/container/Container";
import { appContext } from "@/context/ContextProvider";

type Props = {};

const Interest = (props: Props) => {
  const { state }: any = React.useContext(appContext);

  return (
    <Container headingName={"Interests"}>
      <div className={`${state.color} px-5 grid grid-cols-1 gap-y-2 py-3`}>
        <span className="flex items-center gap-2">
          <span className="dot dot-secondary"></span>
          <span>Software Engineering</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="dot dot-secondary"></span>
          <span>Machine Learning</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="dot dot-secondary"></span>
          <span>Blockchain Technology</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="dot dot-secondary"></span>
          <span>Programming Language</span>
        </span>
      </div>
    </Container>
  );
};

export default Interest;
