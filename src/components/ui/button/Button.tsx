import React from "react";
import Link from "next/link";

type Props = {
  btnName: string;
};

const Button = (props: Props) => {
  return (
    <Link
      href="https://drive.google.com/file/d/1C4EWIHBImWbMzXQ7FG6sz2iRF9UTs3Xa/view?usp=sharing"
      target="_blank"
    >
      <button className="btn btn-secondary">{props.btnName}</button>
    </Link>
  );
};

export default Button;
