import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="AboutMe"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[114.6px] py-12 md:py-[133.3px] px-4 md:px-[85.3px]"
      >
        <div className="flex items-center justify-center">
          <img
             src=" ./img/about-me.png" 
            alt="About Me"
            className="w-full h-auto max-w-sm md:max-w-none"
          />
        </div>
        <div className="flex flex-col items-start gap-8 md:gap-[32px]">
          <div className="flex flex-col items-start gap-6 md:gap-[21.333px]">
            <p className="text-lg md:text-[21px] text-[#282938] font-semibold leading-[32px]">
              About
            </p>
            <h1 className="text-3xl md:text-[64px] font-bold text-[#282938] leading-tight md:leading-[77px]">
              About Me
            </h1>
            <p className="text-base md:text-[24px] text-[#1c1e53] font-normal leading-relaxed md:leading-[36px]">
              Hi, I’m Vijaylaxmi. I’m just starting out in web development and
              am excited to learn and grow in this field. I’m currently learning
              the basics of HTML, CSS, and JavaScript, and I’m also diving into
              React to build interactive user interfaces. I enjoy creating
              simple web pages and experimenting with new technologies.
            </p>
            <p className="text-base md:text-[24px] text-[#1c1e53] font-normal leading-relaxed md:leading-[36px]">
              My goal is to build a strong foundation in web development and
              work on interesting projects that help me enhance my skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
