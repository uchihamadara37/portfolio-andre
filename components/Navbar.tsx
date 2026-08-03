"use client";

import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("main");

  // Fungsi untuk scroll halus ke section yang dituju
  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset bisa ditambahkan jika navbar menutupi konten
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed z-50 top-2 flex py-2 px-2 justify-center gap-1 items-center bg-indigo-900/20 rounded-3xl text-xs border border-white/30 backdrop-blur-sm shadow-lg">
      <button
        onClick={() => scrollToSection("main")}
        className={`px-3 py-1.5 rounded-2xl transition-all duration-300 cursor-pointer font-medium ${
          activeTab === "main" ? "bg-white text-indigo-950" : "hover:bg-indigo-200/10 text-white"
        }`}
      >
        Main
      </button>
      <button
        onClick={() => scrollToSection("portfolio")}
        className={`px-3 py-1.5 rounded-xl transition-all duration-300 cursor-pointer font-medium ${
          activeTab === "portfolio" ? "bg-white text-indigo-950" : "hover:bg-indigo-200/10 text-white"
        }`}
      >
        Portfolio
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className={`px-3 py-1.5 rounded-xl transition-all duration-300 cursor-pointer font-medium ${
          activeTab === "contact" ? "bg-white text-indigo-950" : "hover:bg-indigo-200/10 text-white"
        }`}
      >
        Contact
      </button>
    </div>
  );
}