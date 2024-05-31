import React from "react";
import Container from "@/components/ui/container/Container";
import Bag from "@/components/ui/Icons/self_made_icon/Bag";
import Gaadibuddy from "@/assets/projectImages/gaadibuddy.jpeg";
import Foodifyy from "@/assets/projectImages/foodifyy.jpeg";
import JobCard from "@/components/ui/cards/JobCard";

type Props = {};

const Exp = (props: Props) => {
  return (
    <Container headingName={"Work History"}>
      <div className="flex flex-col gap-y-3 justify-center items-center">
        <JobCard
          companyIcon={Gaadibuddy}
          companyName={"Gaadibuddy"}
          designation={"Software Engineer"}
          date={"2023 - Present"}
        />
        <JobCard
          companyIcon={Foodifyy}
          companyName={"Foodifyy"}
          designation={"Frontend Engineer Intern"}
          date={"2023 Jan - 2023 April"}
        />
      </div>
    </Container>
  );
};

export default Exp;
