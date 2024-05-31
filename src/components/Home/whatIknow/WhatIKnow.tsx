import React, { useMemo, useState } from "react";
import Container from "@/components/ui/container/Container";
// import Knowledge from "@/components/ui/cards/Knowledge";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSolidity } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";


import Menu from "@/components/ui/menu/Menu";
import TechnologySection,{ withDynamicName } from "@/components/ui/technology/TechnologySection";
import { appContext } from "@/context/ContextProvider";


const FrontEnd = withDynamicName<any>(TechnologySection,'Frontend',{number: 1,icons:[
  IoLogoJavascript,
  FaReact,
  SiTypescript,
  RiNextjsFill,
  RiTailwindCssFill,
]});
const BackEnd = withDynamicName<any>(TechnologySection,'BackEnd',{number:2,icons:[
  IoLogoNodejs,
  SiTypescript,
  SiExpress,
  FaRust
]});
const Database = withDynamicName<any>(TechnologySection,'Database',{number:3,icons:[
  SiMongodb,
  FaReact,
  SiTypescript
]});
const Web3 = withDynamicName<any>(TechnologySection,'Web3',{number:4,icons:[
  SiSolidity,
  FaEthereum,
  SiTypescript
]});

type Props = {};

const WhatIKnow = (props: Props) => {
  const [currentComponent,setCurrentComponent] = useState<number>(0);

  const technoloyComponents = useMemo<React.JSX.Element[]>(()=> [
    <FrontEnd key={0} />,
    <BackEnd key={1} />,
    <Database key={2} />,
    <Web3 key={3} />
  ],[]);


  return (
    <Container headingName={"Technologies"}>
        <div className={`flex justify-center py-3`}>
          <Menu 
            setCurrentComponent={setCurrentComponent}
            menus={[
              "Frontend","Backend","Database","Web3"
            ]}
          />
        </div>
        {technoloyComponents[currentComponent]}
    </Container>
  );
};

export default WhatIKnow;
