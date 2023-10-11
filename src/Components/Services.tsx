import React from "react";
import ServiceOptions from "./misc/Services/ServiceOptions";

const Services = () => {
  return (
    <section className="w-full h-auto rounded-b-3xl ">
      <div className="w-full h-auto py-24 bg-slate-900">
        <div className="w-full h-full max-w-screen-2xl mx-auto flex flex-col items-center ">
          <section className="relative w-full max-w-[44rem]  text-white text-center ">
            <h3>Our Services</h3>
          </section>
          <section className="w-full mt-24 flex flex-wrap justify-center gap-x-10 gap-y-10">
            <ServiceOptions heading="Web Development"/>
            <ServiceOptions heading="Web Development"/>
            <ServiceOptions heading="Web Development"/>
            <ServiceOptions heading="Web Development"/>
            <ServiceOptions heading="Web Development"/>
            


          </section>
        </div>
      </div>
    </section>
  );
};

export default Services;
