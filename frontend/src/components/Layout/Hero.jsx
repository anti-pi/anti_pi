import React from "react";
import { useNavigate } from "react-router-dom"; // Add this import

export default function Hero() {
  const navigate = useNavigate(); // Add this hook

  return (
    <section
      className="relative min-h-[80vh] flex flex-col justify-center items-center px-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e5e7eb 100%)" // lightest grey to light grey
      }}
    >
      {/* Floating Emojis with blurred backgrounds */}
      {/* Top Left */}
      <div className="absolute left-8 top-24">
        <div className="w-24 h-24 bg-gray-200/40 rounded-full blur-2xl absolute -z-10"></div>
        <span className="text-5xl opacity-80 animate-bounce-slow rotate-[15deg]">🔒</span>
      </div>
      {/* Top Right */}
      <div className="absolute right-8 top-20">
        <div className="w-24 h-24 bg-gray-300/40 rounded-full blur-2xl absolute -z-10"></div>
        <span className="text-5xl opacity-80 animate-bounce-slow">🛡️</span>
      </div>
      {/* Bottom Left */}
      <div className="absolute left-1/4 bottom-20">
        <div className="w-16 h-16 bg-gray-100/40 rounded-full blur-2xl absolute -z-10"></div>
        <span className="text-4xl opacity-70 animate-bounce">🔑</span>
      </div>
      {/* Bottom Right */}
      <div className="absolute right-1/4 bottom-16">
        <div className="w-16 h-16 bg-gray-100/40 rounded-full blur-2xl absolute -z-10"></div>
        <span className="text-4xl opacity-70 animate-bounce">🧑‍💻</span>
      </div>

      {/* Badge */}
      {/* <div className="inline-block bg-gray-100 text-gray-700 px-4 py-1 rounded-full font-semibold mb-4 text-sm shadow">
        <span className="mr-2">🏆</span> Best security service
      </div> */}
      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 text-center">
        Your Digital Fortress <br /> Starts Here.
      </h1>
      {/* Subheadline */}
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-center">
        Protect your business from cyber threats with cutting-edge security solutions,
        real-time monitoring, and a team of experienced experts.
      </p>
      {/* Buttons */}
      <div className="flex gap-4 justify-center mb-12">
        <button
          className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition"
          onClick={() => navigate("/register-client")} // Redirect on click
        >
          Book a Demo <span className="ml-1"></span>
        </button>
        
      </div>
      {/* Partner Logos */}
      <div className="flex justify-center gap-10 opacity-40 mt-8">
        <span className="text-3xl">💻</span>
        <span className="text-3xl">📚</span>
        <span className="text-3xl">📝</span>
        <span className="text-3xl">🛒</span>
        <span className="text-3xl">🔧</span>
      </div>
    </section>
  );
}

