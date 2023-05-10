import React from "react";
import Service from "../components/Service";

const Services = () => {
  return (
    <div className="pt-16 font-bold text-white" id="services">
      <h2 className="text-4xl text-white text-center mt-16">Services</h2>
      <div className="w-[75%] m-auto flex justify-between flex-wrap">
        <Service
          name="WEB DEVELOPMENT"
          icon="bi-braces"
        />
        <Service
          name="APIs & DATABASE"
          icon="bi-database"
        />
        <Service
          name="FRONT-END"
          icon="bi-code-slash"
        />
        <Service
          name="BACK-END"
          icon="bi-gear"
        />
      </div>
    </div>
  )
}

export default Services;