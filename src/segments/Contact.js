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
                Let's get in touch!!! <br/> Send me a friendly message about a project or mathematics.
              </div>
              <div>
                <div className="flex items-center mt-12">
                  <div className="w-[4rem] h-[4rem] rounded-xl mr-5 bg-gradient-to-br from-lightBlue to-blue shadow-[0_0_500px] flex justify-center items-center">
                    <i className="bi-envelope text-white text-3xl"></i>
                  </div>
                  <div className="text-white text-xl">tetteyfioelisha@gmail.com</div>
                </div>
                <div className="flex items-center mt-2">
                  <a href="https://github.com/Elisha-Tetteyfio" target="blank" rel="noreferrer"  className="w-[4rem] h-[4rem] rounded-xl mr-5 bg-gradient-to-br from-lightBlue to-blue shadow-[0_0_500px] flex justify-center items-center">
                    <i className="bi-github text-white text-3xl"></i>
                  </a>
                  <div className="text-white text-xl">@Elisha-Tetteyfio</div>
                </div>
                <div className="flex items-center mt-2">
                  <a href="https://www.linkedin.com/in/elisha-tetteyfio/" target="blank" rel="noreferrer" className="w-[4rem] h-[4rem] rounded-xl mr-5 bg-gradient-to-br from-lightBlue to-blue shadow-[0_0_500px] flex justify-center items-center">
                    <i className="bi-linkedin text-white text-3xl"></i>
                  </a>
                  <div className="text-white text-xl">Elisha-Tetteyfio</div>
                </div>
              </div>
            </div>
            <div className="z-20 bg-lightBlue w-[40%] rounded-xl pt-8 shadow-darkBlue/[.6] shadow-[-5px_-5px_50px] bg-gradient-to-br from-lightBlue to-blue">
              <div className="w-[90%] m-auto">
                <form action="https://formspree.io/f/myyobwbp" method="POST">
                  <input className="w-[100%] bg-darkBlue rounded-xl p-4 my-1 text-xl text-white placeholder:italic" placeholder="Name" name="Name"/>
                  <input className="w-[100%] m-auto bg-darkBlue rounded-xl p-4 my-1 text-xl text-white placeholder:italic" placeholder="E-mail" name="Email" required/>
                  <textarea className="w-[100%] resize-none m-auto bg-darkBlue rounded-xl p-4 my-1 text-xl text-white placeholder:italic" placeholder="Message" name="Message" required/>
                  <button type="submit" className="w-[40%] m-auto bg-darkBlue rounded-xl p-4 mt-1 mb-8 text-white text-xl font-medium">Send</button>
                </form>
              </div>
            </div>
          </div>
          <hr className="text-white/[.2] bg-white/[.2] h-[2px]"/>
          <div className="flex text-center py-8">
            <div className="flex">
              <a href="https://twitter.com/Nii_AlYasa" target="blank" rel="noreferrer" className="w-[4rem] h-[4rem] flex items-center justify-center rounded-xl mr-5 bg-gradient-to-br from-lightBlue to-blue shadow-[0_0_500px]">
                <i className="bi-twitter text-white text-3xl"></i>
              </a>
              <a href="#" className="w-[4rem] h-[4rem] flex items-center justify-center rounded-xl mr-5 bg-gradient-to-br from-lightBlue to-blue shadow-[0_0_500px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                  <g>
                    <path d="M2,2 l15,0 M2,2 l0,21 M2,23 l15,0" />
                    <polygon points="17,2 12,7 5,5 10,12 5,20 12,17 17,23 17,14 23,12 17,9" fill="white"/>
                  </g>
                </svg>
              </a>
            </div>
            <div>
              <div className="h-[4rem] flex items-center justify-center text-white">Logo rights reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;