import React from "react";
import Container from "@/components/ui/container/Container";
import EducatioCard from "@/components/ui/cards/EducatioCard";
import { start } from "repl";

type Props = {};

const Edu = (props: Props) => {
  return (
    <Container headingName={"Education"}>
      <div className="p-2 education">
        <EducatioCard
          collegeName={"Techno Inida University"}
          description={
            "I have graduated with Computer Application degree with over 8.89 cgpa."
          }
          start={"01-01-2021"}
        />
        <EducatioCard
          collegeName={"Kanchrapara Harnett High School"}
          description={
            "I have done my higher secondary examination with Computer Application subject and my total marks was 421/500 and Got 90 marks in Computer application out of 100."
          }
          start={"01-01-2021"}
        />
      </div>
    </Container>
  );
};

export default Edu;
