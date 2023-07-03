import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-blue-500 to-white text-zinc-00"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <header className="mb-16 group">
    <h1 className="mb-1 font-mono text-4xl text-gray-700 md:text-6xl">
        Hi ! This is  <br className="block md:hidden" />
        <span
        className="inline-flex h-20 pt-2 overflow-x-hidden  animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
        >
        Devsatyam Ray.
        </span>
        <span
        className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"
        ></span>
    </h1>
    <div className="text-xl font-semibold md:text-3xl">Web developer, Cybersecurity enthusiast, Securing digital realms</div>
    </header>

        <br />

        <p className="text-xl">
          I am currently a CSE Undergrad as a sophomore at Institute of Engineering & Management, Kolkata. I am a hardworking student. In the realm of cybersecurity, I find great joy in exploring the intricate mechanisms that protect digital systems and data. Whether it's analyzing vulnerabilities, implementing robust security measures, or staying updated on the latest threats, my enthusiasm fuels my dedication to safeguarding the digital realm. Simultaneously, my love for web development allows me to weave creativity and functionality into the digital landscape. With expertise in various programming languages and frameworks, I thrive in crafting engaging and user-friendly web experiences. From designing visually appealing interfaces to developing efficient and scalable code, I strive to create seamless online experiences. I have an excellent communication skills and love to meet new people. I am looking for opportunities to learn more.
        </p>
      </div>
    </div>
  );
};

export default About;
