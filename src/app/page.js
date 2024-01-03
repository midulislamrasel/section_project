import Image from "next/image";
import Img from "./Image.webp";

export default function Home() {
  return (
    <main className="">
      <div>
        <div className="block">
          <h2 className="text-3xl font-semibold text-center ">Project </h2>

          <button
            type="button"
            className=" bg-sky-500 px-5 py-3 rounded-xl font-medium block float-right text-white"
          >
            All Project
          </button>
        </div>
        <div className="mt-20">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="row-span-2 md:col-span-3 sm:col-span-2 lg:col-span-1 lg:text-left md:text-center ">
              <button
                type="button"
                className=" md:inline-block block   bg-sky-500 px-5 py-2 rounded-xl text-white font-medium mb-2"
              >
                Web Design
              </button>
              <button
                type="button"
                className="lg:block md:inline-block md:mx-2 lg:mx-0 bg-sky-500 px-5 py-2 rounded-xl text-white font-medium mb-2"
              >
                Figma Design
              </button>
              <button
                type="button"
                className="block md:inline-block bg-sky-500 px-5 py-2 rounded-xl text-white font-medium"
              >
                Web Development
              </button>
            </div>
            <div className=" bg-gray-400 h-auto p-3 text-white  rounded-md shadow-lg shadow-gray-400/70">
              <Image src={Img} className=" rounded-md" />
              <h2 className=" font-medium text-xl">Web Design</h2>
              <p className=" text-sm mb-3">
                Many desktop publishing packages and web page editors now use
                packages and Lorem....
              </p>
              <button
                type="button"
                className=" bg-sky-500 px-4 py-1 rounded-md"
              >
                Details
              </button>
            </div>
            <div className=" bg-gray-400 h-auto p-3 text-white  rounded-md shadow-lg shadow-gray-400/70">
              <Image src={Img} className=" rounded-md" />
              <h2 className=" font-medium text-xl">Web Design</h2>
              <p className=" text-sm mb-3">
                Many desktop publishing packages and web page editors now use
                packages and Lorem....
              </p>
              <button
                type="button"
                className=" bg-sky-500 px-4 py-1 rounded-md"
              >
                Details
              </button>
            </div>
            <div className=" bg-gray-400 h-auto p-3 text-white  rounded-md shadow-lg shadow-gray-400/70">
              <Image src={Img} className=" rounded-md" />
              <h2 className=" font-medium text-xl">Web Design</h2>
              <p className=" text-sm mb-3">
                Many desktop publishing packages and web page editors now use
                packages and Lorem....
              </p>
              <button
                type="button"
                className=" bg-sky-500 px-4 py-1 rounded-md"
              >
                Details
              </button>
            </div>
            <div className=" bg-gray-400 h-auto p-3 text-white  rounded-md shadow-lg shadow-gray-400/70">
              <Image src={Img} className=" rounded-md" />
              <h2 className=" font-medium text-xl">Web Design</h2>
              <p className=" text-sm mb-3">
                Many desktop publishing packages and web page editors now use
                packages and Lorem....
              </p>
              <button
                type="button"
                className=" bg-sky-500 px-4 py-1 rounded-md"
              >
                Details
              </button>
            </div>
            <div className=" bg-gray-400 h-auto p-3 text-white  rounded-md shadow-lg shadow-gray-400/70">
              <Image src={Img} className=" rounded-md" />
              <h2 className=" font-medium text-xl">Web Design</h2>
              <p className=" text-sm mb-3">
                Many desktop publishing packages and web page editors now use
                packages and Lorem....
              </p>
              <button
                type="button"
                className=" bg-sky-500 px-4 py-1 rounded-md"
              >
                Details
              </button>
            </div>
            <div className=" bg-gray-400 h-auto p-3 text-white  rounded-md shadow-lg shadow-gray-400/70">
              <Image src={Img} className=" rounded-md" />
              <h2 className=" font-medium text-xl">Web Design</h2>
              <p className=" text-sm mb-3">
                Many desktop publishing packages and web page editors now use
                packages and Lorem....
              </p>
              <button
                type="button"
                className=" bg-sky-500 px-4 py-1 rounded-md"
              >
                Details
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1>HEllo</h1>
        </div>
      </div>
    </main>
  );
}
