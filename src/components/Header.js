import React from "react";

const Header = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap py-6 w-[85%] m-auto">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="lightBlue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <g>
            <path d="M2,2 l15,0 M2,2 l0,21 M2,23 l15,0" />
            <polygon points="17,2 12,7 5,5 10,12 5,20 12,17 17,23 17,14 23,12 17,9" fill="lightBlue"/>
          </g>
        </svg>
      </div>
      <div class=" block lg:flex lg:items-center lg:w-auto">
        <div class="text-lg lg:flex-grow">
          <a href="#home" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue mx-12">
            HOME
          </a>
          <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue mx-12">
            ABOUT ME
          </a>
          <a href="#projects" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue mx-12">
            PROJECTS
          </a>
          <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue mx-12">
            SERVICES
          </a>
        </div>
        <div>
          <a href="#contact" class="inline-block text-lg px-5 py-3 rounded-lg text-white bg-gradient-to-r from-lightBlue to-blue hover:text-darkBlue hover:from-lightBlue hover:to-lightBlue mt-4 lg:mt-0">Let's chat</a>
        </div>
      </div>
    </nav>
  )
}

export default Header;