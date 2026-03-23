import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    // Main Section
    <section className="w-full min-h-screen flex justify-center items-start">

      {/* Outer rectangle container */}
      <div className="w-full max-w-7xl p-10 rounded-lg shadow-lg flex flex-col gap-8 bg-[#f5f5dc] relative min-h-[500px] overflow-hidden">

        {/* Name on header */}
        <div>
            <h1 className="text-3xl font-bold mb-4">
                Adrian James Ordonio
            </h1>
        </div>

        {/* Tech Stack */}
        <div>
          <p className="text-lg">
            Full Stack | AI | Data Science
          </p>
        </div>

        {/* BGDesign and ProfilePic container */}
        <div className="flex flex-col md:flex-row gap-6">   

          {/* BGDesign */}
          <div className="absolute top-0 right-0">
            <Image
                src="/BGDesign-L.png"
                alt="Adrian Ordonio"
                width={420}
                height={100} // shorter than original
                className="rounded-md shadow-md"
            />
          </div>

          {/* ProfilePic */}
          <div className="absolute top-20 right-75">
            <Image
                src="/InformalPic.JPG"
                alt="Adrian Ordonio"
                width={300}  // set width in pixels
                height={400} // set height in pixels
                className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}