import Image from "next/image";
import React from "react";
import { Img, Img2, Img3, Img4, Img5, Img6 } from "./Image/image";
function Project() {
  return (
    <div>
      <div>
        <div className="container mx-auto">
          <h1 className=" mb-4 text-primary-title text-4xl font-primary font-semibold text-center mx-auto  border-b-4 w-32 pb-1 border-primary-orange  ">
            Project
          </h1>
          <button
            type="button"
            className="px-5 py-2 text-base font-primary bg-primary-orange shadow-md shadow-gray-400/70 font-medium  rounded-xl  text-primary-bg  block float-right"
          >
            All Project
          </button>
        </div>
        <div className="mt-20 container mx-auto">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="row-span-3 lg:col-span-1 md:col-span-3 sm:col-span-2  lg:text-left lg:ml-16 md:text-center ">
              <button
                type="button"
                className=" md:inline-block block px-5 py-2 mb-2 text-base font-primary bg-primary-orange shadow-md shadow-gray-400/70  font-medium  rounded-xl  text-primary-bg"
              >
                Web Design
              </button>
              <button
                type="button"
                className="lg:block md:inline-block md:mx-2 lg:mx-0 mb-2 px-5 py-2 text-base font-primary bg-primary-orange shadow-md shadow-gray-400/70 font-medium  rounded-xl  text-primary-bg"
              >
                Figma Design
              </button>
              <button
                type="button"
                className="block md:inline-block px-5 py-2 text-base font-primary bg-primary-orange shadow-md shadow-gray-400/70  font-medium  rounded-xl  text-primary-bg"
              >
                Web Development
              </button>
            </div>
            <div className=" relative bg-primary-bg h-auto rounded-md shadow-lg shadow-gray-400/70">
              <Image src={Img4} className=" rounded-t-lg" />
              <div className="  bg-primary-bg  py-3 px-2 mb-8 rounded-b-lg">
                <h2 className=" my-3 font-primary font-normal text-2xl text-primary-title ">
                  Firma Side
                </h2>
                <p className=" text-base  font-primary font-normal mb-5 text-paragraph ">
                  Many desktop publishing packages and web page editors now use
                  packages and Lorem editors now....
                </p>
                <button
                  type="button"
                  className="absolute bottom-0 left-2 px-4 py-1 rounded-md  mb-2 text-base font-primary bg-primary-orange shadow-md shadow-gray-400/70  font-medium   text-primary-bg"
                >
                  Details
                </button>
              </div>
            </div>
            <div className=" relative  bg-primary-bg h-auto rounded-md shadow-lg shadow-gray-400/70">
              <Image src={Img2} className=" rounded-t-lg" />
              <div className=" bg-primary-bg  py-3 px-2 mb-8 rounded-b-lg">
                <h2 className=" my-3 font-primary font-normal text-2xl text-primary-title ">
                  Web Design
                </h2>
                <p className=" text-base  font-primary font-normal mb-5 text-paragraph ">
                  Many desktop publishing packages and web page editors now use
                  packages and Lorem editors now....
                </p>
                <button
                  type="button"
                  className="absolute bottom-0 left-2 px-4 py-1 rounded-md  mb-2 text-base font-primary bg-primary-orange shadow-md shadow-gray-400/70  font-medium   text-primary-bg"
                >
                  Details
                </button>
              </div>
            </div>
            <div className="relative  bg-primary-bg h-auto rounded-md shadow-lg shadow-gray-400/70">
              <Image src={Img3} className=" rounded-t-lg" />
              <div className=" bg-primary-bg  py-3 px-2  mb-8 rounded-b-lg">
                <h2 className=" my-3 font-primary font-normal text-2xl text-primary-title ">
                  Web Development
                </h2>
                <p className=" text-base  font-primary font-normal mb-5 text-paragraph ">
                  Many desktop publishing packages and web page editors now use
                  packages and Lorem editors now....
                </p>
                <button
                  type="button"
                  className="absolute bottom-0 left-2 px-4 py-1 rounded-md  mb-2 text-base font-primary bg-primary-orange shadow-md shadow-gray-400/70  font-medium   text-primary-bg"
                >
                  Details
                </button>
              </div>
            </div>
            <div className="relative  bg-primary-bg h-auto rounded-md shadow-lg shadow-gray-400/70">
              <Image src={Img5} className=" rounded-t-lg" />
              <div className=" bg-primary-bg  py-3 px-2 mb-8 rounded-b-lg">
                <h2 className=" my-3 font-primary font-normal text-2xl text-primary-title ">
                  Web Design
                </h2>
                <p className=" text-base  font-primary font-normal mb-5 text-paragraph ">
                  Many desktop publishing packages and web page editors now use
                  packages and Lorem editors now....
                </p>
                <button
                  type="button"
                  className="absolute bottom-0 left-2 px-4 py-1 rounded-md  mb-2 text-base font-primary bg-primary-orange shadow-md shadow-gray-400/70  font-medium   text-primary-bg"
                >
                  Details
                </button>
              </div>
            </div>
            <div className="relative  bg-primary-bg h-auto rounded-md shadow-lg shadow-gray-400/70">
              <Image src={Img6} className=" rounded-t-lg" />
              <div className=" bg-primary-bg  py-3 px-2 mb-8 rounded-b-lg">
                <h2 className=" my-3 font-primary font-normal text-2xl text-primary-title ">
                  Figma Design
                </h2>
                <p className=" text-base  font-primary font-normal mb-5 text-paragraph ">
                  Many desktop publishing packages and web page editors now use
                  packages and Lorem editors now....
                </p>
                <button
                  type="button"
                  className="absolute bottom-0 left-2 px-4 py-1 rounded-md  mb-2 text-base font-primary bg-primary-orange shadow-md shadow-gray-400/70  font-medium   text-primary-bg"
                >
                  Details
                </button>
              </div>
            </div>
            <div className=" relative bg-primary-bg h-auto rounded-md shadow-lg shadow-gray-400/70">
              <Image src={Img} className=" rounded-t-lg" />
              <div className=" bg-primary-bg  py-3 px-2 mb-8 rounded-b-lg">
                <h2 className=" my-3 font-primary font-normal text-2xl text-primary-title ">
                  Web Development
                </h2>
                <p className=" text-base  font-primary font-normal mb-5 text-paragraph ">
                  Many desktop publishing packages and web page editors now use
                  packages and Lorem editors now....
                </p>
                <button
                  type="button"
                  className="absolute bottom-0 left-2 px-4 py-1 rounded-md  mb-2 text-base font-primary bg-primary-orange shadow-md shadow-gray-400/70  font-medium   text-primary-bg"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
