import React from "react";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      {/* Outer rectangle container */}
      <div className="w-full max-w-10xl p-10 rounded-lg shadow-lg flex flex-col gap-8 bg-[#f5f5dc]">
        {/* About Me text */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Adrian James Ordonio</h1>
          <p className="text-lg">
            I'm a Data Science & Frontend Developer passionate about creating clean and
            functional designs.
          </p>
        </div>

        {/* Inner containers: Design and Picture */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Design Image */}
          <div className="flex-1 rounded-md overflow-hidden">
            <img
              src="/my-design.png" // replace with your design image
              alt="My Design Work"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>

          {/* Portrait Image */}
          <div className="w-full md:w-1/3 rounded-md overflow-hidden">
            <img
              src="/my-picture.jpg" // replace with your portrait
              alt="My Portrait"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}