import React from "react";
import about from "../images/about.jpg"

const About = () => {
  return (
    <div className="pt-16 h-[85vh] w-[85%] m-auto flex justify-between" id="about">
      <div className="text-5xl text-grey w-[35%] border-[15px] border-lightBlue rounded-lg relative left-6">
        <img src={about} className="w-[100%] h-[100%] relative -left-10 -top-14 rounded-lg" alt="me"/>
      </div>
      <div className="w-[50%]">
        <div className="text-4xl text-white">About me</div>
        <div className="text-grey text-lg font-bold mt-5">
          Hey there!!! <br/>
          I am a Elisha, a full-stack developer with expertise in APIs and back-end programming. I primarily work with Ruby on Rails and PostgreSQL, and in my free time, I explore other languages. I also work on the front-end and hence can adapt to any role in any company. <br/>
          I do enjoy teamwork and collaborating with others on projects. I believe teamwork gives developers a chance to learn from each other. That being said, I am capable of working solo on a project too! <br/> <br/>
          Fun fact about me, I do enjoy mathematics especially abstract algebra ;)
        </div>
        <div className="mt-5">
          <a href="#contact" class="inline-block text-lg px-5 py-3 leading-none rounded-lg text-white bg-gradient-to-r from-lightBlue to-blue hover:text-darkBlue hover:from-lightBlue hover:to-lightBlue mt-4 lg:mt-0">Let's chat</a>
        </div>
      </div>
    </div>
  )
}

export default About;