import React from "react";

const Service = (service) => {
  return (
    <div className="w-[45%] bg-gradient-to-br from-blue to-lightBlue rounded-xl p-2 my-16 shadow-lightBlue/[.4] shadow-[0_0_50px]">
      <div className="m-auto bg-darkBlue rounded-xl h-[100%]">
        <div className="p-5 flex items-center justify-start">
          <div className="rounded-[50%] bg-white w-[18%] aspect-square mr-6 flex justify-center items-center">
            <i className={`text-blue text-4xl font-bold ${service.icon}`}></i>
          </div>
          <div className="text-3xl">{service.name}</div>
        </div>
        <div className="w-[90%] m-auto text-grey pb-8 text-xl">
          {service.desc}
        </div>
      </div>
    </div>
  )
}

export default Service;