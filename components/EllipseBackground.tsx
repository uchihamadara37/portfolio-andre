"use client";

import { useEffect, useState } from "react";

export default function BackgroundEllipses() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Fungsi untuk mengupdate nilai state setiap kali user melakukan scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Mendaftarkan event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Panggil sekali saat pertama kali dimuat untuk set posisi awal
    handleScroll();

    // Membersihkan event listener saat komponen dilepas
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 
        Elips 1 (Kanan Atas): 
        Bergerak ke Kiri (-x) dan ke Atas (-y) saat di-scroll 
      */}
      <div
        className="absolute -right-[100px] top-[200px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500/60 to-pink-500/80 opacity-30 blur-3xl"
        style={{
          transform: `translate3d(-${scrollY * 0.4}px, -${scrollY * 0.3}px, 0)`,
        }}
      ></div>

      {/* 
        Elips 2 (Kiri Atas): 
        Bergerak ke Kanan (+x) dan ke Bawah (+y) saat di-scroll 
      */}
      <div
        className="absolute -left-[100px] top-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-pink-500/60 to-purple-400/80 opacity-30 blur-3xl"
        style={{
          transform: `translate3d(${scrollY * 0.3}px, ${scrollY * 0.5}px, 0)`,
        }}
      ></div>
    </div>
  );
}