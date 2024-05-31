import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
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
import { appContext } from "@/context/ContextProvider";

export default function TabWithContent() {
    const {state}:any = React.useContext(appContext);
  return (
    <div className="flex w-full flex-col flex-wrap justify-center items-center">
      <Tabs aria-label="Options">
        <Tab key="Frontend" title="Frontend">
          <Card>
            <CardBody className="w-full">
              <div className="flex w-full gap-x-5 justify-start items-start">
                <IoLogoJavascript className={`${state.color} w-10 h-10`} />
                <SiTypescript className={`${state.color} w-10 h-10`}  />
                <FaReact className={`${state.color} w-10 h-10`} />
                <RiNextjsFill className={`${state.color} w-10 h-10`}  />
                <RiTailwindCssFill className={`${state.color} w-10 h-10`} />
              </div>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Backend" title="Backend">
          <Card>
            <CardBody className="flex">
              <div className="flex w-full gap-x-5 justify-start items-start">
                <IoLogoNodejs className={`${state.color} w-10 h-10`}  />
                <SiExpress className={`${state.color} w-10 h-10`}  />
                <FaRust className={`${state.color} w-10 h-10`}  />
                <SiMongodb className={`${state.color} w-10 h-10`} />
              </div>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Web3" title="Web3">
          <Card>
            <CardBody>
            <div className="flex w-full gap-x-5 justify-start items-start">
                <SiSolidity className={`${state.color} w-10 h-10`} />
                <FaEthereum className={`${state.color} w-10 h-10`} />
            </div>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  );
}
