import React from "react";
import Container from "@/components/ui/container/Container";
import Knowledge from "@/components/ui/cards/Knowledge";

type Props = {};

const WhatIKnow = (props: Props) => {
  return (
    <Container headingName={"What I Know"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Knowledge
          knowledgeName={"Frontend"}
          subjects={["Javascript", "Typescript", "React", "Next.js"]}
        />
        <Knowledge
          knowledgeName={"Backend"}
          subjects={["Node.js", "Express.js"]}
        />
        <Knowledge knowledgeName={"Database"} subjects={["MySql", "MongoDB"]} />

        <Knowledge
          knowledgeName={"Web3"}
          subjects={["Solidity", "Rust", "Hardhat"]}
        />

        <Knowledge knowledgeName={"DevOps"} subjects={["Docker", "CI/CD"]} />
      </div>
    </Container>
  );
};

export default WhatIKnow;
