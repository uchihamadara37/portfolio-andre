"use client";

import Link from "next/link";
import { Whatsapp } from "./WhatsAppIcon";

export default function Contact() {
  // Ganti dengan nomormu (tanpa +, contoh: 6281234567890)
  const whatsappNumber = "6281234567890";
  const whatsappMessage = encodeURIComponent("Halo Andrea, saya melihat portofolio Anda dan tertarik untuk berdiskusi lebih lanjut!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:email-kamu@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 4l10 8 10-8" />
        </svg>
      ),
      className: "bg-red-600/30",
    },
    {
      name: "Linkedin",
      href: "https://linkedin.com/in/username-kamu",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      className: "bg-blue-600/30",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/username-kamu",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      className: "bg-pink-500/30",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/username-kamu",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
      className: "bg-blue-800/30",
    },
  ];

  return (
    <div id="contact" className="relative w-full mx-auto px-4 py-20 flex flex-col items-center text-center bg-slate-950/30">
      
      <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
        Let's Build Something Together
      </h2>
      
      <p className="text-gray-300/80 text-lg md:text-xl font-light mb-16 max-w-2xl">
        Feel free to reach out for collaborations, opportunities, or just a friendly chat. I'm always open to discussing new projects!
      </p>

      <p className="text-gray-400 text-lg mb-6">Reach me at</p>

      {/* Baris Atas: Email, LinkedIn, Instagram, Facebook */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.className} flex items-center gap-2 px-2.5 py-2 rounded-xl border border-white/40 text-gray-200 hover:text-white hover:border-white transition-all duration-300`}
          >
            {link.icon}
            <span className="text-base font-medium tracking-wide">{link.name}</span>
          </Link>
        ))}
      </div>

      {/* Baris Bawah: Tombol WhatsApp Khusus */}
      <div className="flex justify-center">
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600/80 hover:bg-green-600 flex items-center gap-2 px-3 py-2 rounded-xl border border-white/40 text-gray-200 hover:text-white hover:border-white transition-all duration-300"
        >
          <Whatsapp size={"2em"} className="text-white" fill="#FFFF"/>
          <span className="text-base font-medium tracking-wide">Chat on Whatsapp</span>
        </Link>
      </div>

    </div>
  );
}

