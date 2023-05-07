import React from "react";
import Service from "../components/Service";

const Services = () => {
  return (
    <div className="pt-16 font-bold text-white">
      <h2 className="text-4xl text-white text-center mt-16">Services</h2>
      <div className="w-[85%] m-auto flex justify-between flex-wrap">
        <Service
          name="WEB DEVELOPMENT"
        />
        <Service
          name="APIs"
        />
        <Service
          name="FRONT-END"
        />
        <Service
          name="BACK-END"
        />
      </div>
    </div>
  )
}

export default Services;