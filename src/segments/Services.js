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
          desc="Creating and maintaining websites and web apps according to customer's need and preference."
        />
        <Service
          name="APIs & DATABASE"
          icon="bi-database"
          desc="Creating and managing databases, including drawing of schema to match a given project.
            Create secure endpoints for applications to access data."
        />
        <Service
          name="USSD APPLICATIONS"
          icon="bi-phone"
          desc="Creating USSD short codes to enable users without smartphones still have access to customer's
            services."
        />
        <Service
          name="DATA ANALYSIS"
          icon="bi-graph-up-arrow"
          desc="Making predictions based on datasets provided using mathematical methods and computational maths."
        />
        <Service
          name="FRONT-END"
          icon="bi-code-slash"
          desc="Create interesting UI based on customer's wants using the latest frameworks and tools."
        />
        <Service
          name="BACK-END"
          icon="bi-gear"
          desc="Managing the backend of an application to preserve data, perform logical operations, architecture
            and server."
        />
      </div>
    </div>
  )
}

export default Services;