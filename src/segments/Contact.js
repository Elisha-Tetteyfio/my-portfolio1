import React from "react";

const Contact = (project) => {
  return (
    <div>
    <div className="flex justify-between -mt-32 overflow-x-clip overflow-y-visible">
      <div className="z-10 w-[350px] h-[350px] rounded-full relative -left-[11rem] top-[14rem] bg-gradient-to-t from-lightBlue/[.5] to-blue/[.4]"></div>
      <div className="z-10 w-[350px] h-[350px] rounded-full relative -right-[11rem] top-[14rem] bg-gradient-to-t from-lightBlue/[.5] to-blue/[.4]"></div>
    </div>
      <div className="-z-10 rounded-t-[150px] bg-gradient-to-tl from-lightBlue to-blue" id="contact">
        <div className="w-[85%] m-auto pt-8">
          <div className="text-center text-white text-4xl mb-8">Contact</div>
          <div className="flex justify-between mb-12">
            <div className="w-[55%] z-20">
              <div className="text-white text-3xl font-bold mb-5">Send me a message</div>
              <div className="text-white/[.5] text-lg w-[60%]">
                Let's get in touch!!! Send me a message about a project or let's just have a coffee chat to know each other.
              </div>
              <div>
                <div className="flex items-center mt-12">
                  <div className="w-[4rem] h-[4rem] rounded-xl mr-5 bg-gradient-to-br from-lightBlue to-blue shadow-[0_0_500px]"></div>
                  <div className="text-white text-xl">tetteyfioelisha@gmail.com</div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-[4rem] h-[4rem] rounded-xl mr-5 bg-gradient-to-br from-lightBlue to-blue shadow-[0_0_500px]"></div>
                  <div className="text-white text-xl">@Elisha-Tetteyfio</div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-[4rem] h-[4rem] rounded-xl mr-5 bg-gradient-to-br from-lightBlue to-blue shadow-[0_0_500px]"></div>
                  <div className="text-white text-xl">Elisha-Tetteyfio</div>
                </div>
              </div>
            </div>
            <div className="z-20 bg-lightBlue w-[40%] rounded-xl pt-8 shadow-darkBlue/[.4] shadow-[-5px_-5px_50px] bg-gradient-to-br from-lightBlue to-blue">
              <div className="w-[90%] m-auto">
                <input className="w-[100%] bg-darkBlue rounded-xl p-4 my-1 text-xl" placeholder="Name"/>
                <input className="w-[100%] m-auto bg-darkBlue rounded-xl p-4 my-1 text-xl" placeholder="E-mail"/>
                <textarea className="w-[100%] resize-none m-auto bg-darkBlue rounded-xl p-4 my-1 text-xl" placeholder="Message"/>
                <button type="button" className="w-[40%] m-auto bg-darkBlue rounded-xl p-4 mt-1 mb-8 text-white text-xl font-medium">Send</button>
              </div>
            </div>
          </div>
          <hr className="text-white/[.2] bg-white/[.2] h-[2px]"/>
          <div className="flex justify-between text-center py-8">
            <div>
              <div className="w-[4rem] h-[4rem] rounded-xl mr-5 bg-gradient-to-br from-lightBlue to-blue shadow-[0_0_500px]"></div>
            </div>
            <div className="flex">
              <div className="w-[4rem] h-[4rem] rounded-xl mr-5 bg-gradient-to-br from-lightBlue to-blue shadow-[0_0_500px]"></div>
              <div className="w-[4rem] h-[4rem] rounded-xl mr-5 bg-gradient-to-br from-lightBlue to-blue shadow-[0_0_500px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;