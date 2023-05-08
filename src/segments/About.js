import React from "react";
import about from "../images/about.jpg"

const About = () => {
  return (
    <div className="pt-16 h-[85vh] w-[85%] m-auto flex justify-between" id="about">
      <div className="text-5xl text-grey w-[35%] border-[15px] border-lightBlue rounded-lg ml-2">
        <img src={about} className="w-[105%] h-[105%] relative -left-10 -top-14 rounded-lg"/>
      </div>
      <div className="w-[50%]">
        <div className="text-4xl text-white">About me</div>
        <div className="text-grey text-lg font-bold mt-5">
          I am a full-stack developer with expertise in APIs and back-end programming. I primarily work with Ruby on Rails and PostgreSQL, with which I have built a couple of projects. I can also work on the front-end and hence can adapt to any role in any firm.

          I do enjoy teamwork and collaborating with others on projects. I believe teamwork gives developers a chance to learn from each other. But with that being said, I can work solely on projects.

          I also enjoy mathematics especially abstract algebra. I believe life is a learning process and everyone can still learn new things so I make it a point to keep learning.
        </div>
        <div className="mt-5">
          <a href="#contact" class="inline-block text-lg px-5 py-3 leading-none rounded-lg text-white bg-gradient-to-r from-lightBlue to-blue hover:text-darkBlue hover:from-lightBlue hover:to-lightBlue mt-4 lg:mt-0">Let's chat</a>
        </div>
      </div>
    </div>
  )
}

export default About;