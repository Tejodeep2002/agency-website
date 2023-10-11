import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-auto mt-14 bg-black ">
      <div className="relative w-full min-h-[46rem] overflow-hidden ">
        <div className="absolute -bottom-[6rem] right-5 w-[40rem] h-[40rem]  rounded-full  blur-[6rem]  animate-rotate  bg-gradient-to-b from-orange-500   to-red-700 z-0 "></div>
        <div className="absolute -bottom-[6rem] right-5 w-[40rem] h-[40rem]  rounded-full  blur-[6rem]  animate-rotate  bg-gradient-to-b from-orange-500   to-pink-500 z-0 "></div>
        <div className="absolute -bottom-[20rem] right-[30rem] left-[40rem] w-[50rem] h-[40rem] blur-[6rem] animate-rotate rounded-full   bg-gradient-to-b from-violet-700   to-white z-0 "></div>
        <div className="absolute -bottom-[20rem] right-[30rem] left-[40rem] w-[50rem] h-[40rem] blur-[6rem] animate-rotate rounded-full   bg-gradient-to-b from-white   to-violet-700 z-0 "></div>
        <div className="absolute -bottom-[20rem] right-[30rem] left-[10rem] w-[40rem] h-[40rem] blur-[6rem] animate-rotate rounded-full border-3 border-white  bg-gradient-to-b from-red-500  to-green-500 z-0 "></div>
        <div className="relative w-full h-full  max-w-screen-2xl  px-10 mt-6 mx-auto flex flex-col z-10  ">
          <div className="w-full h-[36rem] rounded-3xl p-14 flex text-white border-2 border-white ">
            <section className="w-1/2 flex flex-col gap-10">
              <ul className="text-7xl text-gradient-to-b from-red-500  to-green-500">
                <li>
                  <h1>We can </h1>
                </li>
                <li>
                  <h2>teams easier</h2>
                </li>
                <li>
                  <h2>then even</h2>
                </li>
              </ul>
              <button className="w-40 h-14 rounded-xl bg-purple-600 border-2 border-white">
                See our Works
              </button>
            </section>
            {/* <section className="w-1/2 h-full bg-gray-400 rounded-3xl"></section> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
