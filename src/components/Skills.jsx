import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Express", icon: "/icons/express.webp" },
  { name: "Tailwind", icon: "/icons/tailwind.webp" },
  { name: "Next.js", icon: "/icons/nextjs.webp" },
  { name: "JavaScript", icon: "/icons/js.webp" },
  { name: "CSS", icon: "/icons/css.webp" },
  { name: "HTML", icon: "/icons/html.webp" },
  { name: "MongoDB", icon: "/icons/mongo.webp" },
  { name: "MYSQL", icon: "/icons/sql.webp" },
  { name: "Git", icon: "/icons/git.webp" },
  { name: "GitHub", icon: "/icons/github.webp" },
  { name: "C", icon: "/icons/c.webp" },
  { name: "C++", icon: "/icons/cpp.webp" },
  { name: "Python", icon: "/icons/python.webp" },
  { name: "DSA", icon: "/icons/dsa.webp" },
  { name: "Java", icon: "/icons/java.webp" },
  { name: "Flutter", icon: "/icons/flutter.svg" },
  { name: "UI/UX Tools", icon: "/icons/ui.webp" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div id="skills">
      <section className="min-h-screen w-full  bg-black py-24 px-6 py-20 flex flex-col items-center text-white relative z-10">
      <h1
  className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] text-center mb-16"
  dangerouslySetInnerHTML={{
    __html: "<b>S</b>k<b>i</b>ll<b>s</b> & <b>a</b>b<b>i</b>li<b>t</b>i<b>e</b>s",
  }}
></h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-6xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_#00f7ff33] hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mx-auto mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <p className="text-center font-medium text-sm text-white/90 group-hover:text-white">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
