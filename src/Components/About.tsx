import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-full h-auto  ">
      <div className="w-full h-auto py-40 bg-black">
        <div className="w-full h-full max-w-screen-xl mx-auto flex flex-col items-center ">
          <section className="relative w-full max-w-[44rem]  text-white text-center ">
            <h3>Some our Projects</h3>
          </section>
          <section className="w-full h-full mt-40 flex flex-col gap-40">
            <section
              id="card1"
              className="w-full h-auto flex  justify-between "
            >
              <div className="w-full max-w-xl my-auto text-white text-xl flex flex-col gap-7">
                <span>
                  <p>FEATURE</p>
                </span>
                <div className=" w-full  flex flex-col gap-7 ">
                  <div>
                    <h3>Detailed analysis</h3>
                  </div>
                  <div>
                    <p>
                      See the full picture of all your projects in one place and
                      take action immediately.
                    </p>
                  </div>
                  <div>
                    <p>
                      Our extensive tool will help you maximize the profits and
                      scale your business.
                    </p>
                  </div>
                </div>
                <button className="w-fit h-fit rounded-full mt-3 py-3 px-6 text-lg font-medium border border-white">
                  Learn more
                </button>
              </div>
              <div className="w-full max-w-xl flex justify-start ">
                <Image
                  src={"/about/p1.png"}
                  width={"560"}
                  height={"480"}
                  alt=""
                />
              </div>
            </section>
            <section
              id="card2"
              className="w-full h-auto flex flex-row-reverse justify-between "
            >
              <div className="w-full max-w-xl my-auto text-white text-xl flex flex-col gap-7">
                <span>
                  <p>FEATURE</p>
                </span>
                <div className=" w-full  flex flex-col gap-7 ">
                  <div>
                    <h3>Detailed analysis</h3>
                  </div>
                  <div>
                    <p>
                      See the full picture of all your projects in one place and
                      take action immediately.
                    </p>
                  </div>
                  <div>
                    <p>
                      Our extensive tool will help you maximize the profits and
                      scale your business.
                    </p>
                  </div>
                </div>
                <button className="w-fit h-fit rounded-full mt-3 py-3 px-6 text-lg font-medium border border-white">
                  Learn more
                </button>
              </div>
              <div className="w-full max-w-xl flex justify-start ">
                <Image
                  src={"/about/p1.png"}
                  width={"560"}
                  height={"480"}
                  alt=""
                />
              </div>
            </section>
            <section
              id="card3"
              className="w-full h-auto flex  justify-between "
            >
              <div className="w-full max-w-xl my-auto text-white text-xl flex flex-col gap-7">
                <span>
                  <p>FEATURE</p>
                </span>
                <div className=" w-full  flex flex-col gap-7 ">
                  <div>
                    <h3>Detailed analysis</h3>
                  </div>
                  <div>
                    <p>
                      See the full picture of all your projects in one place and
                      take action immediately.
                    </p>
                  </div>
                  <div>
                    <p>
                      Our extensive tool will help you maximize the profits and
                      scale your business.
                    </p>
                  </div>
                </div>
                <button className="w-fit h-fit rounded-full mt-3 py-3 px-6 text-lg font-medium border border-white">
                  Learn more
                </button>
              </div>
              <div className="w-full max-w-xl flex justify-start ">
                <Image
                  src={"/about/p1.png"}
                  width={"560"}
                  height={"480"}
                  alt=""
                />
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
