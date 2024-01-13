import React from "react";
import BannerImage from "@/components/ui/bannerSection/BannerImage";
import Avatar from "../ui/avatar/Avatar";
import space from "@/assets/space.jpeg";
import subhajit from "@/assets/subhajit.webp";
import IconLine from "../ui/Icons/IconLine";
import MyIntro from "./Bio/MyIntro";
import Button from "../ui/button/Button";
import Project from "./Project/Project";

let intro1 =
  "Meet Subhajit Ghosh, a dynamic individual residing in the vibrant city of Kolkata, India. Subhajit holds a degree in Bachelor of Computer Application, graduating in 2023. During his academic journey, he honed his skills through two impactful internships in the realm of software engineering.";

let intro2 =
  "Venturing to Bangalore, he dedicated six months to a Software Engineering internship at Gaadubuddy, a promising mid-stage startup. Here, Subhajit showcased his versatility by seamlessly transitioning between frontend and backend development. His proficiency spans a tech stack encompassing Javascript, React, Node.js, Express Js, and MongoDB.";

let intro3 =
  "Currently immersed in the world of high school math, Subhajit is fervently preparing for the Google Summer of Code (GSOC) open source program. Passionate about the intersection of Data Science and Machine Learning, he is channeling his enthusiasm towards crafting innovative ML applications and exploring the exciting landscape of blockchain technology.";

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
      <MyIntro intro1={intro1} intro2={intro2} intro3={intro3} />
      <Project />
    </div>
  );
};

export default HomePage;
