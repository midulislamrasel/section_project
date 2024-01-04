import Image from "next/image";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { SiWebflow } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

function Services() {
  return (
    <div className="container mx-auto mt-12 ">
      <h1 className=" text-3xl mx-auto text-center font-semibold my-14  border-b-4 w-32 pb-1 border-primary-orange">
        Servise{" "}
      </h1>
      <div className=" flex gap-12">
        <div className="  py-5 px-8 bg-primary-bg h-auto rounded-md shadow-lg shadow-gray-400/70  text-center">
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
        <div className="  py-5 px-8 bg-primary-bg h-auto rounded-md shadow-lg shadow-gray-400/70  text-center">
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
        <div className="  py-5 px-8 bg-primary-bg h-auto rounded-md shadow-lg shadow-gray-400/70  text-center">
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
      <div className="mt-12">
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default Services;
