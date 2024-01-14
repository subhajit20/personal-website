import React from "react";
import { Badge } from "@radix-ui/themes";

type Props = {
  knowledgeName: string;
  subjects: string[];
};

const Knowledge = (props: Props) => {
  const { subjects } = props;
  return (
    <div className="card bg-gray-300 text-black justify-self-center md:justify-self-center">
      <div className="card-body">
        <h2 className="card-header">{props.knowledgeName}</h2>
        <div className="flex gap-4 flex-wrap">
          {subjects.length > 0 &&
            subjects.map((sub, i) => {
              return (
                <span
                  className="badge badge-outline-primary text-black justify-self-start"
                  key={i}
                >
                  {sub}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
