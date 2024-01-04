import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

function Services() {
  return (
    <div className="container mx-auto mt-12 ">
      <h1 className=" text-3xl mx-auto text-center font-semibold my-14  border-b-4 w-32 pb-1 border-primary-orange">
        Servise{" "}
      </h1>
      {/* sm:flex-wrap md:flex-nowrap ld:basis-1/3 md:basis-1/2  */}
      {/* <div className=" flex sm:flex-wrap md:flex-nowrap justify-between gap-8  "> */}
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        <div className="sm:baisi-full py-5 px-8 bg-primary-bg h-auto rounded-md shadow-lg shadow-gray-400/70  text-center">
          <MdDesignServices className=" text-8xl mx-auto text-pink-500" />
          <div className=" bg-primary-bg  py-4 px-2  rounded-b-lg">
            <h2 className=" my-3 font-primary font-normal text-2xl text-primary-title">
              Figma
            </h2>
            <p className=" py-5 text-base  font-primary font-normal mb-12 text-paragraph ">
              Many desktop publishing packages and web page editors now use
              packages and Lorem editors now.... Many desktop publishing
              packages and web page editors now use packages an
            </p>
            <button
              type="button"
              className=" w-52  py-2 rounded-md   text-base font-primary bg-primary-orange shadow-md shadow-gray-400/70  font-medium   text-primary-bg"
            >
              Details
            </button>
          </div>
        </div>
        <div className="sm:baisi-full py-5 px-8 bg-primary-bg h-auto rounded-md shadow-lg shadow-gray-400/70  text-center ">
          <FaReact className=" text-8xl mx-auto text-sky-400" />

          <div className=" bg-primary-bg  py-4 px-2  rounded-b-lg">
            <h2 className=" my-3 font-primary font-normal text-2xl text-primary-title">
              React
            </h2>
            <p className=" py-5 text-base  font-primary font-normal mb-12 text-paragraph ">
              Many desktop publishing packages and web page editors now use
              packages and Lorem editors now.... Many desktop publishing
              packages and web page editors now use packages an
            </p>
            <button
              type="button"
              className=" w-52  py-2 rounded-md   text-base font-primary bg-primary-orange shadow-md shadow-gray-400/70  font-medium   text-primary-bg"
            >
              Details
            </button>
          </div>
        </div>
        <div className="sm:baisi-full py-5 px-8 bg-primary-bg h-auto rounded-md shadow-lg shadow-gray-400/70  text-center ">
          <div className=" bg-primary-bg  py-4 px-2  rounded-b-lg">
            <TbBrandNextjs className=" text-8xl mx-auto text-trueGray-950" />
            <h2 className=" my-3 font-primary font-normal text-2xl text-primary-title">
              Next.js
            </h2>
            <p className=" py-5 text-base  font-primary font-normal mb-12 text-paragraph ">
              Many desktop publishing packages and web page editors now use
              packages and Lorem editors now.... Many desktop publishing
              packages and web page editors now use packages an
            </p>
            <button
              type="button"
              className=" w-52  py-2 rounded-md   text-base font-primary bg-primary-orange shadow-md shadow-gray-400/70  font-medium   text-primary-bg"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
