import React from "react";

const Header = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class=" block lg:flex lg:items-center lg:w-auto">
        <div class="text-lg lg:flex-grow">
          <a href="#home" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue mx-12">
            HOME
          </a>
          <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue mx-12">
            ABOUT ME
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue mx-12">
            PROJECTS
          </a>
        </div>
        <div>
          <a href="#" class="inline-block text-lg px-5 py-3 leading-none rounded-lg text-white bg-gradient-to-r from-lightBlue to-blue hover:text-darkBlue hover:from-lightBlue hover:to-lightBlue mt-4 lg:mt-0">Let's chat</a>
        </div>
      </div>
    </nav>
  )
}

export default Header;