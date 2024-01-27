import React from "react";
import Container from "@/components/ui/container/Container";

type Props = {};

const Interest = (props: Props) => {
  return (
    <Container headingName={"Interests"}>
      <div className="px-5 grid grid-cols-1 gap-y-2">
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
