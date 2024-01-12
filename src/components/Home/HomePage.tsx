import React from "react";
import BannerImage from "@/components/ui/bannerSection/BannerImage";
import Avatar from "../ui/avatar/Avatar";
import space from "@/assets/space.jpeg";
import subhajit from "@/assets/subhajit.webp";
import IconLine from "../ui/Icons/IconLine";
import MyIntro from "./Bio/MyIntro";
import Button from "../ui/button/Button";

let intro =
  "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corporis maxime eligendi neque explicabo quae est laudantium quo quia numquam provident voluptatibus ea, reiciendis vero amet voluptatem recusandae velit optio? sit amet consectetur adipisicing elit. Suscipit corporis maxime eligendi neque explicabo quae est laudantium quo quia numquam provident voluptatibus ea, reiciendis vero amet voluptatem recusandae velit optio?";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="banner flex justify-center items-start">
        <BannerImage image={space} height={500} width={800} />
      </div>
      <div className="myavatar flex justify-center items-start pt-2">
        <Avatar image={subhajit} width={200} height={200} />
      </div>
      <div className="name pt-2">
        <h4 className="text-center text-black text-3xl font-bold">
          Subhajit Ghosh
        </h4>
      </div>
      <div className="icons">
        <IconLine />
      </div>
      <div className="email flex justify-center py-2 text-black">
        <div>
          My Email -{" "}
          <a href="mailto:subhajitstd07@gmail.com">subhajitstd07@gmai.com</a>
        </div>
      </div>
      <div className="resume flex justify-center py-2">
        <Button btnName="Get My Resume" />
      </div>
      <MyIntro intro={intro} />
    </div>
  );
};

export default HomePage;
