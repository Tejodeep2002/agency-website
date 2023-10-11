import React, { FC } from "react";

interface ServiceOptionsProps {
  heading: string;
}
const ServiceOptions: FC<ServiceOptionsProps> = ({ heading }) => {
  return (
    <section className="w-[30rem] h-auto">
      <div className="w-full h-full p-4 rounded-3xl flex flex-col items-center text-white hover:bg-gray-800 transition ease-in-out  duration-500">
        <img src="/images/it.svg" alt="" srcset="" />
        <div className="mt-10">
          <h4>{heading}</h4>
        </div>
        <div className="text-lg text-center mt-3">
          <p>
            Assessing a company&apos;s current technology infrastructure and
            business goals
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;
