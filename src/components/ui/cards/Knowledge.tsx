import React from "react";
import { Badge } from "@radix-ui/themes";

type Props = {
  knowledgeName: string;
  subjects: string[];
};

const Knowledge = (props: Props) => {
  const { subjects } = props;
  return (
    <div className="card bg-gray-300 text-black">
      <div className="card-body">
        <h2 className="card-header">{props.knowledgeName}</h2>
        <div className="card-footer">
          {subjects.length > 0 &&
            subjects.map((sub, i) => {
              return (
                <Badge className="px-2 rounded-md" key={i} color="gold">
                  {sub}
                </Badge>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
