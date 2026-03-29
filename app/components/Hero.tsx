import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    // Main Section
    <section className="w-full min-h-screen flex justify-center items-start">

      {/* Outer rectangle container */}
      <div className="w-full max-w-10xl p-10 rounded-lg shadow-lg flex flex-col gap-8 bg-[#f5f5dc] relative min-h-[1000px] overflow-hidden">

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

        {/* BGDesign */}
        <div className="absolute top-0 right-0 w-[500px] h-[950px] flex flex-col md:flex-row gap-6">
          <Image
              src="/pics/BGDesign-L.png"
              alt="Just a Design"
              fill
              className="object-cover rounded-md shadow-md"
          />
        </div>

        {/* ProfilePic */}
        <div className="absolute top-40 right-40 w-[440px] h-[590px] flex flex-col md:flex-row gap-6">
          <Image
              src="/pics/InformalPic.JPG"
              alt="Adrian Ordonio"
              fill
              className="rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
}