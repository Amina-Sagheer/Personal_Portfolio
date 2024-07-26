import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            About Me
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Greetings! I&apos;m Amina, a dedicated software engineering student at the University of Calgary. My passion lies in technology and innovation, where I am currently sharpening my skills in software development with a focus on 3D web development and AI applications. I thrive on tackling challenges that inspire me to innovate and solve intricate problems with creative solutions. My aspiration is to make a meaningful impact in the tech industry by harnessing AI to enhance user experiences and optimize processes. Beyond coding, I find joy in cooking, a hobby that nourishes my creativity and broadens my perspective.
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
              className="w-full h-auto"
              src={`https://skillicons.dev/icons?i=bootstrap,css,firebase,git,github,html,js,python,java,react,flask,mysql,nodejs,npm,postgres,redux,tailwind,threejs,vite,vscode,pycharm,intellij,tkinter`}
              alt="Amina's skill icons"
              loading="lazy"
            />
        </ItemLayout>
        
        <ItemLayout className={"col-span-full"}>
          <section className="w-full p-4 border rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Experience</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Headstarter Fellowship : Ongoing</strong></li>
              <ul className="list-disc pl-10 space-y-1">
                <li>Built 5+ AI apps and APIs using Next.js, OpenAI, Pinecone, Stripe API, with 98% accuracy seen by 1000+ users</li>
                <li>Developed projects from design to deployment</li>
                <li>Led 4+ engineering fellows using MVC design patterns</li>
                <li>Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and microservices patterns</li>
              </ul>
            </ul>
          </section>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;

